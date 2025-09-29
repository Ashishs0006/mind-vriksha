import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

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
      
      // Redirect after delay
      setTimeout(() => {
        navigate("/confirmation");
      }, 1500);
      
    } catch (err) {
      console.error('Submission error:', err);
      setFormMessage(err.message || 'Could not send. Please try again.');
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-lg p-6 bg-white border rounded shadow space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {formMessage && (
        <div className={`py-2 px-3 mb-2 rounded text-white ${messageType === "success" ? "bg-green-600" : "bg-red-600"}`}>
          {formMessage}
        </div>
      )}
      
      <div>
        <label className="block mb-1 font-semibold">Name*</label>
        <input
          {...register("name")}
          className="w-full px-2 py-1 border rounded focus:outline-none"
          type="text"
          placeholder="Enter your name"
        />
        <p className="text-red-500">{errors.name?.message}</p>
      </div>
      
      <div>
        <label className="block mb-1 font-semibold">Mobile Number*</label>
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
              inputStyle={{
                width: "100%",
                borderRadius: "0.375rem",
                border: "1px solid #e5e7eb",
                height: "2.5rem",
                fontSize: "1rem",
                paddingLeft: "3.5rem"
              }}
              enableSearch
            />
          )}
        />
        <input type="hidden" {...register("countryCode")} />
        <p className="text-red-500">{errors.mobile?.message}</p>
      </div>
      
      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          {...register("email")}
          className="w-full px-2 py-1 border rounded focus:outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>
      
      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea
          {...register("message")}
          className="w-full px-2 py-1 border rounded focus:outline-none"
          rows={4}
          placeholder="Your message"
        />
        <p className="text-red-500">{errors.message?.message}</p>
      </div>
      
      <div>
        <ReCAPTCHA
          sitekey="6LcEXM4rAAAAACXH_v75PU1BFgitK2_sPMARAt6n"
          onChange={onRecaptcha}
        />
        <p className="text-red-500">{errors.recaptcha?.message}</p>
      </div>
      
      <button
        type="submit"
        className="w-full py-2 mt-2 font-bold text-white bg-primary-brown rounded hover:bg-earthy-brown disabled:bg-gray-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
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