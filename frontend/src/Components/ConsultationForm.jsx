import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

// Define custom Tailwind colors if not globally available
// We assume 'primary-green', 'primary-brown', and 'earthy-brown' are defined
// If they aren't, the user would need to define them or replace them with standard Tailwind colors.
const customStyles = `
  /* Add responsive scaling for reCAPTCHA on smaller screens */
  @media (max-width: 500px) {
    .recaptcha-wrapper {
      transform: scale(0.85); /* Adjust scale factor as needed */
      transform-origin: 0 0; /* Scale from top-left corner */
      width: 117.6%; /* 1 / 0.85 = 1.176 */
    }
    .recaptcha-container {
        /* Prevents overflow when scaling */
        overflow: hidden; 
    }
  }

  /* Styling for PhoneInput */
  .react-tel-input .form-control {
    width: 100% !important;
    border-radius: 0.375rem;
    border: 1px solid #e5e7eb;
    height: 2.5rem !important;
    font-size: 1rem;
    padding-left: 3.5rem !important;
  }
`;


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  mobile: yup
    .string()
    .required("Mobile is required")
    .test(
      "is-india-phone",
      "Indian number must be exactly 10 digits",
      function (val) {
        const code = this.parent.countryCode;
        const digits = val.replace(/\D/g, "");
        const tenDigits = digits.startsWith("91") ? digits.slice(2) : digits;
        return code === "91" ? tenDigits.length === 10 : true;
      }
    ),
  countryCode: yup.string().required(),
  email: yup.string().email("Invalid email"),   // Made optional
  message: yup.string(),    // Made optional
  recaptcha: yup.string().required("reCAPTCHA is required")
});

export default function ConsultationForm() {
  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      mobile: "",
      countryCode: "91",
      email: "",
      message: "",
      recaptcha: ""
    }
  });

  const onRecaptcha = (token) => setValue("recaptcha", token);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFormMessage("");
    setMessageType("");

    try {
      // NOTE: This API endpoint is hardcoded and may not be accessible/valid in this environment.
      // Assuming the user has a valid backend setup for this fetch call.
      const response = await fetch("https://mind-virksha-suv9.vercel.app/api/consultations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          mobile: data.mobile,
          countryCode: data.countryCode,
          email: data.email,
          message: data.message,
          "g-recaptcha-response": data.recaptcha,
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send');
      }
      
      // Success handling
      setFormMessage("Form submitted successfully! Redirecting...");
      setMessageType("success");
      
      // Navigate is a placeholder as `react-router-dom` is not available in this environment.
      // It is kept for code consistency.
      setTimeout(() => {
        console.log("Redirecting to /confirmation (simulated)");
        navigate("/confirmation"); 
      }, 500);
      
    } catch (err) {
      console.error('Submission error:', err);
      setFormMessage(err.message || 'Could not send. Please try again.');
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{customStyles}</style>
      <form className="max-w-lg p-6 bg-white border rounded-xl shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book Your Appointment</h2>
        {formMessage && (
          <div className={`py-2 px-3 mb-4 rounded text-white font-medium ${messageType === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {formMessage}
          </div>
        )}
        
        {/* Name Field */}
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label className="block md:w-1/3 font-semibold mb-2 md:mb-0 pr-4 text-gray-700">Name</label>
          <div className="md:w-2/3">
            <input
              {...register("name")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              type="text"
              placeholder="Enter your name"
            />
            <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
          </div>
        </div>
        
        {/* Mobile Field */}
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label className="block md:w-1/3 font-semibold mb-2 md:mb-0 pr-4 text-gray-700">Mobile Number</label>
          <div className="md:w-2/3">
            <Controller
              name="mobile"
              control={control}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  country={"in"}
                  value={value}
                  onChange={(phone, country) => {
                    onChange(phone);
                    setValue("countryCode", country.dialCode);
                  }}
                  countryCodeEditable={false}
                  // Apply custom styling via CSS class
                  inputClass="form-control" 
                  containerClass="react-tel-input"
                  enableSearch
                />
              )}
            />
            <input type="hidden" {...register("countryCode")} />
            <p className="text-red-500 text-sm mt-1">{errors.mobile?.message}</p>
          </div>
        </div>
        
        {/* Email Field */}
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label className="block md:w-1/3 font-semibold mb-2 md:mb-0 pr-4 text-gray-700">Email</label>
          <div className="md:w-2/3">
            <input
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              type="email"
              placeholder="Enter your email"
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>
        </div>
        
        {/* Message Field */}
        <div className="flex flex-col md:flex-row md:items-start mb-4">
          <label className="block md:w-1/3 font-semibold mb-2 md:mb-0 pr-4 text-gray-700">Message</label>
          <div className="md:w-2/3">
            <textarea
              {...register("message")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              rows={2}
              placeholder="Your message or query"
            />
            <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>
          </div>
        </div>
        
        {/* reCAPTCHA - Responsive Wrapper for Mobile Fix */}
        <div className="mb-6 recaptcha-container">
          {/* recaptcha-wrapper applies the scaling CSS only on mobile */}
          <div className="recaptcha-wrapper inline-block"> 
            <ReCAPTCHA
              sitekey="6LcEXM4rAAAAACXH_v75PU1BFgitK2_sPMARAt6n"
              onChange={onRecaptcha}
            />
          </div>
          <p className="text-red-500 text-sm mt-1">{errors.recaptcha?.message}</p>
        </div>
        
        {/* Submit Button - Full width */}
        <button
          type="submit"
          className="w-full py-3 font-bold text-white bg-primary-brown rounded-lg hover:bg-earthy-brown disabled:bg-gray-400 transition duration-300 shadow-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useNavigate } from "react-router-dom";

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   mobile: yup
//     .string()
//     .required("Mobile is required")
//     .test(
//       "is-india-phone",
//       "Indian number must be exactly 10 digits",
//       function (val) {
//         const code = this.parent.countryCode;
//         const digits = val.replace(/\D/g, "");
//         const tenDigits = digits.startsWith("91") ? digits.slice(2) : digits;
//         return code === "91" ? tenDigits.length === 10 : true;
//       }
//     ),
//   countryCode: yup.string().required(),
//   email: yup.string().email("Invalid email"),   // Made optional
//   message: yup.string(),    // Made optional
//   recaptcha: yup.string().required("reCAPTCHA is required")
// });

// export default function ConsultationForm() {
//   const [formMessage, setFormMessage] = useState("");
//   const [messageType, setMessageType] = useState(""); // "success" or "error"
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     control,
//     setValue,
//     formState: { errors }
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: "",
//       mobile: "",
//       countryCode: "91",
//       email: "",
//       message: "",
//       recaptcha: ""
//     }
//   });

//   const onRecaptcha = (token) => setValue("recaptcha", token);

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     setFormMessage("");
//     setMessageType("");

//     try {
//       const response = await fetch("https://mind-virksha-suv9.vercel.app/api/consultations", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: JSON.stringify({
//           name: data.name,
//           mobile: data.mobile,
//           countryCode: data.countryCode,
//           email: data.email,
//           message: data.message,
//           "g-recaptcha-response": data.recaptcha,
//         }),
//       });

//       const result = await response.json();
      
//       if (!response.ok) {
//         throw new Error(result.message || 'Failed to send');
//       }
      
//       // Success handling
//       setFormMessage("Form submitted successfully! Redirecting...");
//       setMessageType("success");
      
//       // Redirect after delay
//       setTimeout(() => {
//         navigate("/confirmation");
//       }, 1500);
      
//     } catch (err) {
//       console.error('Submission error:', err);
//       setFormMessage(err.message || 'Could not send. Please try again.');
//       setMessageType("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form className="max-w-lg p-6 bg-white border rounded shadow" onSubmit={handleSubmit(onSubmit)}>
//       {formMessage && (
//         <div className={`py-2 px-3 mb-4 rounded text-white ${messageType === "success" ? "bg-green-600" : "bg-red-600"}`}>
//           {formMessage}
//         </div>
//       )}
      
//       {/* Name Field */}
//       <div className="flex flex-col md:flex-row md:items-center mb-4">
//         <label className="block md:w-1/3 font-semibold mb-2 md:mb-0 pr-4">Name</label>
//         <div className="md:w-2/3">
//           <input
//             {...register("name")}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-green"
//             type="text"
//             placeholder="Enter your name"
//           />
//           <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
//         </div>
//       </div>
      
//       {/* Mobile Field */}
//       <div className="flex flex-col md:flex-row md:items-center mb-4">
//         <label className="block md:w-1/3 font-semibold mb-2 md:mb-0 pr-4">Mobile Number</label>
//         <div className="md:w-2/3">
//           <Controller
//             name="mobile"
//             control={control}
//             render={({ field: { onChange, value } }) => (
//               <PhoneInput
//                 country={"in"}
//                 value={value}
//                 onChange={(phone, country) => {
//                   onChange(phone);
//                   setValue("countryCode", country.dialCode);
//                 }}
//                 countryCodeEditable={false}
//                 inputStyle={{
//                   width: "100%",
//                   borderRadius: "0.375rem",
//                   border: "1px solid #e5e7eb",
//                   height: "2.5rem",
//                   fontSize: "1rem",
//                   paddingLeft: "3.5rem"
//                 }}
//                 enableSearch
//               />
//             )}
//           />
//           <input type="hidden" {...register("countryCode")} />
//           <p className="text-red-500 text-sm mt-1">{errors.mobile?.message}</p>
//         </div>
//       </div>
      
//       {/* Email Field */}
//       <div className="flex flex-col md:flex-row md:items-center mb-4">
//         <label className="block md:w-1/3 font-semibold mb-2 md:mb-0 pr-4">Email</label>
//         <div className="md:w-2/3">
//           <input
//             {...register("email")}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-green"
//             type="email"
//             placeholder="Enter your email"
//           />
//           <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
//         </div>
//       </div>
      
//       {/* Message Field */}
//       <div className="flex flex-col md:flex-row md:items-start mb-4">
//         <label className="block md:w-1/3 font-semibold mb-2 md:mb-0 pr-4">Message</label>
//         <div className="md:w-2/3">
//           <textarea
//             {...register("message")}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-green"
//             rows={2}
//             placeholder="Your message"
//           />
//           <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>
//         </div>
//       </div>
      
//       {/* reCAPTCHA - Full width */}
//       <div className="mb-4">
//         <ReCAPTCHA
//           sitekey="6LcEXM4rAAAAACXH_v75PU1BFgitK2_sPMARAt6n"
//           onChange={onRecaptcha}
//         />
//         <p className="text-red-500 text-sm mt-1">{errors.recaptcha?.message}</p>
//       </div>
      
//       {/* Submit Button - Full width */}
//       <button
//         type="submit"
//         className="w-full py-3 font-bold text-white bg-primary-brown rounded hover:bg-earthy-brown disabled:bg-gray-300 transition duration-300"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? "Submitting..." : "Submit"}
//       </button>
//     </form>
//   );
// }

// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useNavigate } from "react-router-dom";

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   mobile: yup
//     .string()
//     .required("Mobile is required")
//     .test(
//       "is-india-phone",
//       "Indian number must be exactly 10 digits",
//       function (val) {
//         const code = this.parent.countryCode;
//         const digits = val.replace(/\D/g, "");
//         const tenDigits = digits.startsWith("91") ? digits.slice(2) : digits;
//         return code === "91" ? tenDigits.length === 10 : true;
//       }
//     ),
//   countryCode: yup.string().required(),
//   email: yup.string().email("Invalid email"),   // Made optional
//   message: yup.string(),    // Made optional
//   recaptcha: yup.string().required("reCAPTCHA is required")
// });

// export default function ConsultationForm() {
//   const [formMessage, setFormMessage] = useState("");
//   const [messageType, setMessageType] = useState(""); // "success" or "error"
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     control,
//     setValue,
//     formState: { errors }
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: "",
//       mobile: "",
//       countryCode: "91",
//       email: "",
//       message: "",
//       recaptcha: ""
//     }
//   });

//   const onRecaptcha = (token) => setValue("recaptcha", token);

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     setFormMessage("");
//     setMessageType("");

//     try {
//       const response = await fetch("https://mind-virksha-suv9.vercel.app/api/consultations", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: JSON.stringify({
//           name: data.name,
//           mobile: data.mobile,
//           countryCode: data.countryCode,
//           email: data.email,
//           message: data.message,
//           "g-recaptcha-response": data.recaptcha,
//         }),
//       });

//       const result = await response.json();
      
//       if (!response.ok) {
//         throw new Error(result.message || 'Failed to send');
//       }
      
//       // Success handling
//       setFormMessage("Form submitted successfully! Redirecting...");
//       setMessageType("success");
      
//       // Redirect after delay
//       setTimeout(() => {
//         navigate("/confirmation");
//       }, 1500);
      
//     } catch (err) {
//       console.error('Submission error:', err);
//       setFormMessage(err.message || 'Could not send. Please try again.');
//       setMessageType("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form className="max-w-lg p-6 bg-white border rounded shadow space-y-4" onSubmit={handleSubmit(onSubmit)}>
//       {formMessage && (
//         <div className={`py-2 px-3 mb-2 rounded text-white ${messageType === "success" ? "bg-green-600" : "bg-red-600"}`}>
//           {formMessage}
//         </div>
//       )}
      
//       <div>
//         <label className="block mb-1 font-semibold">Name*</label>
//         <input
//           {...register("name")}
//           className="w-full px-2 py-1 border rounded focus:outline-none"
//           type="text"
//           placeholder="Enter your name"
//         />
//         <p className="text-red-500">{errors.name?.message}</p>
//       </div>
      
//       <div>
//         <label className="block mb-1 font-semibold">Mobile Number*</label>
//         <Controller
//           name="mobile"
//           control={control}
//           render={({ field: { onChange, value } }) => (
//             <PhoneInput
//               country={"in"}
//               value={value}
//               onChange={(phone, country) => {
//                 onChange(phone);
//                 setValue("countryCode", country.dialCode);
//               }}
//               countryCodeEditable={false}
//               inputStyle={{
//                 width: "100%",
//                 borderRadius: "0.375rem",
//                 border: "1px solid #e5e7eb",
//                 height: "2.5rem",
//                 fontSize: "1rem",
//                 paddingLeft: "3.5rem"
//               }}
//               enableSearch
//             />
//           )}
//         />
//         <input type="hidden" {...register("countryCode")} />
//         <p className="text-red-500">{errors.mobile?.message}</p>
//       </div>
      
//       <div>
//         <label className="block mb-1 font-semibold">Email</label>
//         <input
//           {...register("email")}
//           className="w-full px-2 py-1 border rounded focus:outline-none"
//           type="email"
//           placeholder="Enter your email"
//         />
//         <p className="text-red-500">{errors.email?.message}</p>
//       </div>
      
//       <div>
//         <label className="block mb-1 font-semibold">Message</label>
//         <textarea
//           {...register("message")}
//           className="w-full px-2 py-1 border rounded focus:outline-none"
//           rows={2}
//           placeholder="Your message"
//         />
//         <p className="text-red-500">{errors.message?.message}</p>
//       </div>
      
//       <div>
//         <ReCAPTCHA
//           sitekey="6LcEXM4rAAAAACXH_v75PU1BFgitK2_sPMARAt6n"
//           onChange={onRecaptcha}
//         />
//         <p className="text-red-500">{errors.recaptcha?.message}</p>
//       </div>
      
//       <button
//         type="submit"
//         className="w-full py-2 mt-2 font-bold text-white bg-primary-brown rounded hover:bg-earthy-brown disabled:bg-gray-300"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? "Submitting..." : "Submit"}
//       </button>
//     </form>
//   );
// }

// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useNavigate } from "react-router-dom";

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   mobile: yup
//     .string()
//     .required("Mobile is required")
//     .test(
//       "is-india-phone",
//       "Indian number must be exactly 10 digits",
//       function (val) {
//         const code = this.parent.countryCode;
//         const digits = val.replace(/\D/g, "");
//         const tenDigits = digits.startsWith("91") ? digits.slice(2) : digits;
//         return code === "91" ? tenDigits.length === 10 : true;
//       }
//     ),
//   countryCode: yup.string().required(),
//   email: yup.string().email("Invalid email"),   //.required("Email is required")
//   message: yup.string(),    //.required("Message is required")
//   recaptcha: yup.string().required("reCAPTCHA is required")
// });

// export default function ConsultationForm() {
//   const [formMessage, setFormMessage] = useState("");
//   const [messageType, setMessageType] = useState(""); // "success" or "error"
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     control,
//     setValue,
//     reset,
//     formState: { errors, isSubmitting }
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: "",
//       mobile: "",
//       countryCode: "91",
//       email: "",
//       message: "",
//       recaptcha: ""
//     }
//   });

//   const onRecaptcha = (token) => setValue("recaptcha", token);

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("/api/consultations", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: JSON.stringify({
//           name: data.name,
//           mobile: data.mobile,
//           countryCode: data.countryCode,
//           email: data.email,
//           message: data.message,
//           "g-recaptcha-response": data.recaptcha,
//         }),
//       });

//     //   setSubmitStatus({
//     //     type: 'success',
//     //     message: 'Form submitted successfully! Redirecting...'
//     //   });

//     //   setTimeout(() => {
//     //     navigate("/confirmation");
//     //   }, 1000); // Show the success message briefly before redirect

//     // } catch (err) {
//     //   console.error('Submission error:', err);
//     //   setSubmitStatus({
//     //     type: 'error',
//     //     message: err.message || 'Could not send. Please try again.'
//     //   });
//     // }
//     const result = await response.json();
    
//     if (!response.ok) {
//       throw new Error(result.message || 'Failed to send');
//     }
    
//     // Success handling
//     console.log('Form submitted successfully:', result);
    
//   } catch (err) {
//     console.error('Submission error:', err);
//   }

//   // In your onSubmit function in ConsultationForm
// const response = await fetch("/api/consultations", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: data.name,
//     mobile: data.mobile,
//     countryCode: data.countryCode,
//     email: data.email,
//     message: data.message,
//     "g-recaptcha-response": data.recaptcha,
//   }),
// });
//   };

//   return (
//     <form className="max-w-lg p-6 bg-white border rounded shadow space-y-4" onSubmit={handleSubmit(onSubmit)}>
//       {formMessage && (
//         <div className={`py-2 px-3 mb-2 rounded text-white ${messageType === "success" ? "bg-green-600" : "bg-red-600"}`}>
//           {formMessage}
//         </div>
//       )}
//       <div>
//         <label className="block mb-1 font-semibold">Name*</label>
//         <input
//           {...register("name")}
//           className="w-full px-2 py-1 border rounded focus:outline-none"
//           type="text"
//           placeholder="Enter your name"
//         />
//         <p className="text-red-500">{errors.name?.message}</p>
//       </div>
//       <div>
//         <label className="block mb-1 font-semibold">Mobile Number*</label>
//         <Controller
//           name="mobile"
//           control={control}
//           render={({ field: { onChange, value } }) => (
//             <PhoneInput
//               country={"in"}
//               value={value}
//               onChange={(phone, country) => {
//                 onChange(phone);
//                 setValue("countryCode", country.dialCode);
//               }}
//               countryCodeEditable={false}
//               inputStyle={{
//                 width: "100%",
//                 borderRadius: "0.375rem",
//                 border: "1px solid #e5e7eb",
//                 height: "2.5rem",
//                 fontSize: "1rem",
//                 paddingLeft: "3.5rem"
//               }}
//               enableSearch
//             />
//           )}
//         />
//         <input type="hidden" {...register("countryCode")} />
//         <p className="text-red-500">{errors.mobile?.message}</p>
//       </div>
//       <div>
//         <label className="block mb-1 font-semibold">Email</label>
//         <input
//           {...register("email")}
//           className="w-full px-2 py-1 border rounded focus:outline-none"
//           type="email"
//           placeholder="Enter your email"
//         />
//         <p className="text-red-500">{errors.email?.message}</p>
//       </div>
//       <div>
//         <label className="block mb-1 font-semibold">Message</label>
//         <textarea
//           {...register("message")}
//           className="w-full px-2 py-1 border rounded focus:outline-none"
//           rows={4}
//           placeholder="Your message"
//         />
//         <p className="text-red-500">{errors.message?.message}</p>
//       </div>
//       <div>
//         <ReCAPTCHA
//           sitekey="6LcFXM4rAAAAAEDoJo9n_xTsvARSSpYlAIUOYNGH"
//           onChange={onRecaptcha}
//         />
//         <p className="text-red-500">{errors.recaptcha?.message}</p>
//       </div>
//       <button
//         type="submit"
//         className="w-full py-2 mt-2 font-bold text-white bg-primary-brown rounded hover:bg-earthy-brown disabled:bg-gray-300"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? "Submitting..." : "Submit"}
//       </button>
//     </form>
//   );
// }