const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: '*',        // sab domains allow
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// ===== MongoDB Connect =====

mongoose.connect(process.env.MONGODB_RMOTE_URL)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connect error:', err));


// ===== Mongoose Schema + Model =====
const submissionSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  countryCode: String,
  email: String,
  message: String,
  dateTime: { type: Date, default: Date.now },
  pageUrl: String,
  ipAddress: String,
});
const Submission = mongoose.model('Submission', submissionSchema);

// ===== API: Submit new consultation =====
app.post('/api/consultations', async (req, res) => {
  try {
    const {
      name, mobile, countryCode, email, message, 'g-recaptcha-response': recaptcha
    } = req.body;
    const submission = new Submission({
      name,
      mobile,
      countryCode,
      email,
      message,
      dateTime: new Date(),
      pageUrl: req.headers.referer || 'unknown',
      ipAddress: req.ip || req.connection.remoteAddress || 'unknown',
    });
   const data = await submission.save();
   console.log('New submission saved:', data);
    res.status(201).json({ message: 'Submission saved', submission });
  } catch (err) {
    res.status(500).json({ message: 'Error saving submission', error: err.toString() });
  }
});

// ===== API: Get all consultations =====
app.get('/api/consultations', async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ dateTime: -1 });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching submissions', error: err.toString() });
  }
});

app.delete('/api/consultations/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Submission.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Entry not found" });
    res.json({ message: "Entry deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting entry", error: err.toString() });
  }
});
app.get('/testing', (req, res) => {  
  res.send('API is running...');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
