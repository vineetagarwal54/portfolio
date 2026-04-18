import { useState } from "react";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImagePreloader from "./components/ImagePreloader";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import GitHubStats from "./components/GitHubStats";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("experience");

  return (
    <>
      <SEO />
      <ImagePreloader />
      <Toaster position="top-center" />

      <div className="min-h-screen bg-bg text-fg">
        <Navbar />

        <main className="pt-[72px]">
          {/* Hero */}
          <section
            id="home"
            className="shell flex min-h-[calc(100svh-72px)] items-center py-16 sm:py-20"
          >
            <Hero />
          </section>

          {/* Skills / Technologies */}
          <section id="technologies" className="section bg-bg-alt">
            <div className="shell">
              <Technologies />
            </div>
          </section>

          {/* Experience & Education */}
          <section id="experience-education" className="section">
            <div className="shell">
              <div className="section-header">
                <p className="section-kicker">Background</p>
                <h2 className="section-title">
                  Professional experience and education
                </h2>
              </div>

              <div
                role="tablist"
                aria-label="Background sections"
                className="mx-auto mb-10 flex max-w-md overflow-hidden rounded-full border border-border bg-card/60 p-1"
              >
                <button
                  role="tab"
                  aria-selected={selectedSection === "experience"}
                  onClick={() => setSelectedSection("experience")}
                  className={`w-1/2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200 sm:text-base ${
                    selectedSection === "experience"
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "bg-transparent text-fg/80 hover:text-fg"
                  }`}
                >
                  Experience
                </button>
                <button
                  role="tab"
                  aria-selected={selectedSection === "education"}
                  onClick={() => setSelectedSection("education")}
                  className={`w-1/2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200 sm:text-base ${
                    selectedSection === "education"
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "bg-transparent text-fg/80 hover:text-fg"
                  }`}
                >
                  Education
                </button>
              </div>

              {selectedSection === "experience" ? <Experience /> : <Education />}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="section bg-bg-alt">
            <div className="shell">
              <Project />
            </div>
          </section>

          {/* GitHub Activity */}
          <section id="github" className="section">
            <div className="shell">
              <GitHubStats />
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="section bg-bg-alt">
            <div className="shell">
              <Contact />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
