// import React from "react";
// import emailIcon from "../assets/emailIcon.png";
// import terminal from "../assets/terminal.png";
// import { useRef } from "react";
// import { useState } from "react";
// import { FaArrowPointer } from "react-icons/fa6";
// import { RiSendPlane2Fill, RiSendPlaneFill } from "react-icons/ri";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const formRef = useRef(false);
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = ({ target: { name, value } }) => {
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.send(
//         "service_6mqfwwv", // serviceID
//         "template_ib40hhe", // templateID
//         {
//           from_name: form.name,
//           to_name: "Vineet",
//           from_email: form.email,
//           to_email: "vineetagarwal540@gmail.com",
//           message: form.message,
//         },
//         "mQ9OON6EqrVaaw_T0" // options (public key)
//       );
//       setLoading(false);
//       alert("Your message has been sent!");

//       setForm({name:"",email:"",message:""})
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="pb-0">
//       <h2 className="my-12 text-center text-4xl">Contact Me</h2>
//       <div className="relative min-h-screen flex items-center justify-center flex-col">
//         <img
//           src={terminal}
//           alt="terminal background"
//           className="absolute inset-0 min-h-screen"
//         />
//         <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
//           <h2 className="text-white text-2xl "> Let's talk </h2>
//           <p className="text-lg text-gray-400 mt-3">
//             Whether you're looking to build a new website or app, improve your
//             existing platform, or bring a unique project to life, I'm here to
//             help.
//           </p>
//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="mt-12 flex flex-col space-y-7"
//           >
//             <label className="space-y-3  ">
//               <span className="text-lg text-neutral-400">Full Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-neutral-900 px-4 py-2 min-h-14 rounded-lg placeholder:text-neutral-500 text-lg text-neutral-300 shadow-black shadow-2xl focus:outline-none"
//                 placeholder="Vineet"
//               />
//             </label>
//             <label className="space-y-3  ">
//               <span className="text-lg text-neutral-400">Email</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-neutral-900 px-4 py-2 min-h-14 rounded-lg placeholder:text-neutral-500 text-lg text-neutral-300 shadow-black shadow-2xl focus:outline-none"
//                 placeholder="vineet@gmail.com"
//               />
//             </label>
//             <label className="space-y-3  ">
//               <span className="text-lg text-neutral-400">Your message</span>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="w-full bg-neutral-900 px-4 py-2 min-h-14 rounded-lg placeholder:text-neutral-500 text-lg text-neutral-300 shadow-black shadow-2xl focus:outline-none"
//                 placeholder="Hi, I'm interested in ..."
//               />
//             </label>

//             <button
//               className="bg-zinc-800 px-5 py-2 min-h-12 rounded-lg shadow-black shadow-2xl flex justify-center items-center text-lg text-white gap-3"
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? "Sending ... " : "Send Message"}
//               <RiSendPlaneFill width={20} height={20} className="mt-1 ml-1" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import emailIcon from "../assets/emailIcon.png";
import terminal from "../assets/terminal.png";
import { useRef } from "react";
import { useState } from "react";
import { FaArrowPointer } from "react-icons/fa6";
import { RiSendPlane2Fill, RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_6mqfwwv", // serviceID
        "template_ib40hhe", // templateID
        {
          from_name: form.name,
          to_name: "Vineet",
          from_email: form.email,
          to_email: "vineetagarwal540@gmail.com",
          message: form.message,
        },
        "mQ9OON6EqrVaaw_T0" // options (public key)
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="pb-0">
      <h2 className="my-12 text-center text-4xl sm:text-5xl">Contact Me</h2>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* Terminal Background */}
        {/* <img
          src={terminal}
          alt="terminal background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        /> */}

        {/* Content Container */}
        <div className="relative z-10 max-w-lg mx-auto px-5 sm:px-10 py-10 sm:py-16 bg-black bg-opacity-70 rounded-lg shadow-2xl">
          <h2 className="text-white text-2xl sm:text-3xl text-center mb-4 sm:mb-6">
            Let's talk
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 text-center mb-8 sm:mb-10">
            Whether you're looking to build a new website or app, improve your
            existing platform, or bring a unique project to life, I'm here to
            help.
          </p>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6"
          >
            {/* Full Name Field */}
            <label className="space-y-2">
              <span className="text-lg sm:text-xl text-neutral-400 block">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 px-4 py-3 rounded-lg placeholder:text-neutral-500 text-lg sm:text-xl text-neutral-300 focus:outline-none"
                placeholder="Vineet"
              />
            </label>

            {/* Email Field */}
            <label className="space-y-2">
              <span className="text-lg sm:text-xl text-neutral-400 block">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 px-4 py-3 rounded-lg placeholder:text-neutral-500 text-lg sm:text-xl text-neutral-300 focus:outline-none"
                placeholder="vineet@gmail.com"
              />
            </label>

            {/* Message Field */}
            <label className="space-y-2">
              <span className="text-lg sm:text-xl text-neutral-400 block">
                Your message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-neutral-900 px-4 py-3 rounded-lg placeholder:text-neutral-500 text-lg sm:text-xl text-neutral-300 focus:outline-none"
                placeholder="Hi, I'm interested in ..."
              />
            </label>

            {/* Submit Button */}
            <button
              className="bg-zinc-800 px-5 py-3 rounded-lg shadow-black shadow-md flex justify-center items-center text-lg sm:text-xl text-white gap-3 hover:bg-zinc-700 transition-colors"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending ..." : "Send Message"}
              <RiSendPlaneFill className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;