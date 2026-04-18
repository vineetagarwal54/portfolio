import { useRef, useState } from "react";
import {
  RiSendPlaneFill,
  RiMailFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";
import toast from "react-hot-toast";
import {
  trackContactFormSubmit,
  trackEmailClick,
  trackSocialClick,
} from "../services/analytics";

const CONTACT_EMAIL = "vineetagarwal540@gmail.com";
const MAX_MESSAGES_PER_WEEK = 3;
const RATE_LIMIT_KEY = "contact_form_submissions";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRateLimit = () => {
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;

    const submissionsJSON = localStorage.getItem(RATE_LIMIT_KEY);
    let submissions = submissionsJSON ? JSON.parse(submissionsJSON) : [];

    submissions = submissions.filter((timestamp) => now - timestamp < oneWeek);

    if (submissions.length >= MAX_MESSAGES_PER_WEEK) {
      const oldestSubmission = Math.min(...submissions);
      const timeUntilReset = oneWeek - (now - oldestSubmission);
      const daysRemaining = Math.ceil(
        timeUntilReset / (24 * 60 * 60 * 1000)
      );

      return {
        allowed: false,
        daysRemaining,
        messagesUsed: submissions.length,
      };
    }

    return {
      allowed: true,
      messagesRemaining: MAX_MESSAGES_PER_WEEK - submissions.length,
    };
  };

  const recordSubmission = () => {
    const now = Date.now();
    const submissionsJSON = localStorage.getItem(RATE_LIMIT_KEY);
    const submissions = submissionsJSON ? JSON.parse(submissionsJSON) : [];
    submissions.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(submissions));
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

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
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        recordSubmission();
        trackContactFormSubmit(true);

        const remaining = rateLimitCheck.messagesRemaining - 1;
        toast.success(
          `Message sent successfully! (${remaining} message${
            remaining !== 1 ? "s" : ""
          } remaining this week)`,
          { duration: 5000 }
        );

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        trackContactFormSubmit(false);
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      trackContactFormSubmit(false);
      toast.error("Failed to send message. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <RiMailFill className="text-xl" />,
      label: "Email",
      value: "Reach me directly",
      link: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: <RiLinkedinFill className="text-xl" />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/vineet-agarwal-540abc/",
    },
    {
      icon: <RiGithubFill className="text-xl" />,
      label: "GitHub",
      value: "Explore my repositories",
      link: "https://github.com/vineetagarwal54",
    },
  ];

  return (
    <>
      <div className="section-header">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">
          Open to full-stack, backend, frontend, mobile, and AI roles
        </h2>
        <p className="section-lede">
          I'm actively looking for software engineering opportunities where I
          can contribute across product development, backend systems, AI
          workflows, or cloud-backed applications.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-3 text-2xl font-semibold text-fg">Let’s connect</h3>
          <p className="mb-6 text-fg/75">
            Whether it’s a full-time role, internship, technical discussion, or
            collaboration, feel free to reach out.
          </p>

          <div className="space-y-4">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.link}
                target={contact.label === "Email" ? "_self" : "_blank"}
                rel="noreferrer"
                onClick={() => {
                  if (contact.label === "Email") {
                    trackEmailClick();
                  } else {
                    trackSocialClick(contact.label);
                  }
                }}
                className="flex items-center gap-4 rounded-xl border border-border px-4 py-4 transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
              >
                <div>{contact.icon}</div>
                <div>
                  <p className="font-semibold">{contact.label}</p>
                  <p className="text-sm opacity-80">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border p-5">
            <h4 className="mb-2 text-lg font-semibold text-fg">
              Best fit for this portfolio
            </h4>
            <p className="text-sm leading-7 text-fg/75">
              Full-stack engineering, backend APIs, frontend product work,
              cloud-native systems, applied AI, agent workflows, and
              real-time/mobile-adjacent product roles.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-5 text-2xl font-semibold text-fg">Send a message</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-fg">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-fg outline-none transition-colors focus:border-accent"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-fg">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-fg outline-none transition-colors focus:border-accent"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-fg">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell me about the role, project, or opportunity."
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-fg outline-none transition-colors focus:border-accent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
            >
              <RiSendPlaneFill />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;