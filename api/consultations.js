const mongoose = require('mongoose');
const axios = require('axios');

// MongoDB connection with connection pooling
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });
    
    isConnected = mongoose.connections[0].readyState === 1;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Consultation schema
const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  countryCode: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  recaptchaToken: String,
  submissionId: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

// Prevent duplicate submissions based on email + mobile
consultationSchema.index({ email: 1, mobile: 1 }, { unique: false });

const Consultation = mongoose.models.Consultation || mongoose.model('Consultation', consultationSchema);

// Verify reCAPTCHA token
const verifyRecaptcha = async (token) => {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token
        }
      }
    );
    
    return response.data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
};

// Generate unique submission ID
const generateSubmissionId = () => {
  return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      console.log('Received consultation request');
      
      await connectDB();
      
      const { 
        name, 
        mobile, 
        countryCode, 
        email, 
        message, 
        'g-recaptcha-response': recaptchaToken 
      } = req.body;

      // Validate required fields
      if (!name || !email || !message || !mobile) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required'
        });
      }

      // Verify reCAPTCHA (only in production or if token provided)
      if (process.env.NODE_ENV === 'production' && recaptchaToken) {
        const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
        if (!isRecaptchaValid) {
          return res.status(400).json({
            success: false,
            message: 'reCAPTCHA verification failed'
          });
        }
      }

      // Generate unique submission ID to prevent duplicates
      const submissionId = generateSubmissionId();

      // Check for recent duplicate submissions (same email + mobile within 5 minutes)
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      const existingSubmission = await Consultation.findOne({
        email,
        mobile,
        createdAt: { $gte: fiveMinutesAgo }
      });

      if (existingSubmission) {
        return res.status(409).json({
          success: false,
          message: 'Duplicate submission detected. Please wait a few minutes before submitting again.'
        });
      }

      // Create and save consultation
      const newConsultation = new Consultation({
        name,
        mobile,
        countryCode,
        email,
        message,
        recaptchaToken,
        submissionId
      });

      await newConsultation.save();
      console.log('Consultation saved successfully:', submissionId);

      res.status(201).json({
        success: true,
        message: 'Consultation request submitted successfully',
        submissionId: submissionId
      });

    } catch (error) {
      console.error('Error saving consultation:', error);
      
      // Handle duplicate key errors
      if (error.code === 11000) {
        return res.status(409).json({
          success: false,
          message: 'Duplicate submission detected'
        });
      }

      // Handle validation errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({
          success: false,
          message: 'Validation error: ' + Object.values(error.errors).map(e => e.message).join(', ')
        });
      }

      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`
    });
  }
};