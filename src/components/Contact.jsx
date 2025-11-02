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
import { useRef } from "react";
import { useState } from "react";
import { RiSendPlaneFill, RiMailFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import AnimateOnScroll from "./AnimateOnScroll";

// Contact email constant
const CONTACT_EMAIL = "vineetagarwal540@gmail.com";

const Contact = () => {
  const formRef = useRef();
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
    
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    
    // For now, let's disable EmailJS and use mailto as fallback
    // until you set up a new EmailJS service without Gmail API issues
    
    try {
      // Create Gmail compose link instead of mailto
      const subject = `Portfolio Contact from ${form.name}`;
      const body = `Hi Vineet,

${form.message}

Best regards,
${form.name}
${form.email}`;
      
      // Use Gmail compose URL instead of mailto
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open Gmail compose in new tab
      window.open(gmailUrl, '_blank');
      
      setLoading(false);
      toast.success("Opening Gmail... Please send the pre-filled email.");
      setForm({ name: "", email: "", message: "" });
      
      // Uncomment below when you fix EmailJS setup:
      /*
      const result = await emailjs.send(
        "YOUR_NEW_SERVICE_ID", // Replace with new non-Gmail service
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
          to_name: "Vineet",
          reply_to: form.email,
        },
        "mQ9OON6EqrVaaw_T0" // Your public key
      );
      
      console.log("EmailJS Success:", result);
      setLoading(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      */
      
    } catch (error) {
      setLoading(false);
      console.error("Fallback Error:", error);
      toast.error("Please copy your message and email me directly using the email link below.");
    }
  };

  const contactInfo = [
    {
      icon: <RiMailFill className="text-2xl" />,
      label: "Email",
      value: "Send me a message",
      link: `mailto:${CONTACT_EMAIL}`
    },
    {
      icon: <RiLinkedinFill className="text-2xl" />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/vineet-agarwal-540abc/"
    },
    {
      icon: <RiGithubFill className="text-2xl" />,
      label: "GitHub",
      value: "View my projects",
      link: "https://github.com/vineetagarwal54"
    }
  ];

  return (
    <div className="pb-16">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
          },
        }}
      />
      
      <AnimateOnScroll>
        <h2 className="mb-16 text-center text-4xl text-primary">
          <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent font-bold">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-fg mb-4">Let's Connect</h3>
                <p className="text-lg muted mb-8">
                  I'm always interested in new opportunities and projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-4 card hover:shadow-accent-ring transition-all duration-300 group"
                  >
                    <div className="text-accent group-hover:text-accent-secondary transition-colors">
                      {contact.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-fg font-semibold">{contact.label}</h4>
                      <p className="muted text-sm">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Call to Action */}
              <div className="p-6 card bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-accent/20">
                <h4 className="text-lg font-semibold text-fg mb-2">Ready to start a project?</h4>
                <p className="muted text-sm mb-4">
                  I'm available for freelance work and full-time opportunities.
                </p>
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center text-accent hover:text-accent-secondary transition-colors"
                >
                  <RiMailFill className="mr-2" />
                  Send me an email
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-fg mb-6">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-lg muted mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg px-4 py-3 rounded-lg placeholder:text-muted text-lg text-fg focus:outline-none focus:ring-2 focus:ring-accent-ring border border-border transition-all"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-lg muted mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg px-4 py-3 rounded-lg placeholder:text-muted text-lg text-fg focus:outline-none focus:ring-2 focus:ring-accent-ring border border-border transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-lg muted mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-bg px-4 py-3 rounded-lg placeholder:text-muted text-lg text-fg focus:outline-none focus:ring-2 focus:ring-accent-ring border border-border transition-all resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary px-6 py-3 rounded-lg shadow-md flex justify-center items-center text-lg gap-3 hover:bg-accent-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-ring disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <RiSendPlaneFill className="text-xl" />
                    </>
                  )}
                </button>

                <p className="text-sm muted text-center">
                  * Required fields. I'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Contact;