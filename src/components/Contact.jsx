import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { RiSendPlaneFill, RiMailFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import toast, { Toaster } from 'react-hot-toast';
import AnimateOnScroll from "./AnimateOnScroll";

// Contact email constant
const CONTACT_EMAIL = "vineetagarwal540@gmail.com";

// Rate limiting constants
const MAX_MESSAGES_PER_WEEK = 3;
const RATE_LIMIT_KEY = 'contact_form_submissions';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Check rate limit
  const checkRateLimit = () => {
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    
    // Get submission history from localStorage
    const submissionsJSON = localStorage.getItem(RATE_LIMIT_KEY);
    let submissions = submissionsJSON ? JSON.parse(submissionsJSON) : [];
    
    // Remove submissions older than 1 week
    submissions = submissions.filter(timestamp => now - timestamp < oneWeek);
    
    // Check if limit exceeded
    if (submissions.length >= MAX_MESSAGES_PER_WEEK) {
      const oldestSubmission = Math.min(...submissions);
      const timeUntilReset = oneWeek - (now - oldestSubmission);
      const daysRemaining = Math.ceil(timeUntilReset / (24 * 60 * 60 * 1000));
      
      return {
        allowed: false,
        daysRemaining,
        messagesUsed: submissions.length
      };
    }
    
    return {
      allowed: true,
      messagesRemaining: MAX_MESSAGES_PER_WEEK - submissions.length
    };
  };

  // Record successful submission
  const recordSubmission = () => {
    const now = Date.now();
    const submissionsJSON = localStorage.getItem(RATE_LIMIT_KEY);
    let submissions = submissionsJSON ? JSON.parse(submissionsJSON) : [];
    
    submissions.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(submissions));
  };

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

    // Check rate limit
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      toast.error(
        `You've reached the limit of ${MAX_MESSAGES_PER_WEEK} messages per week. Please try again in ${rateLimitCheck.daysRemaining} day(s).`,
        { duration: 6000 }
      );
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(formRef.current);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        recordSubmission();
        const remaining = rateLimitCheck.messagesRemaining - 1;
        toast.success(
          `Message sent successfully! I'll get back to you soon. (${remaining} message${remaining !== 1 ? 's' : ''} remaining this week)`,
          { duration: 5000 }
        );
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };


  const contactInfo = [
    {
      icon: <RiMailFill className="text-2xl" />,
      label: "Email",
      value: "Send me a message",
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`
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
        <h2 className="mb-16 text-center text-4xl leading-tight">
          <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent font-bold inline-block py-2">
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
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
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