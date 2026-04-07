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

        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
         <section id="home"   className="min-h-[calc(100svh-72px)] flex items-center">
  <Hero />
</section>

          <section id="technologies" className="py-12">
            <Technologies />
          </section>

          <section id="experience-education" className="py-12">
            <div className="mb-8 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Background
              </p>
              <h2 className="text-3xl font-bold text-fg sm:text-4xl">
                Professional experience and education
              </h2>
            </div>

            <div className="mx-auto mb-8 flex max-w-md overflow-hidden rounded-full border border-border">
              <button
                onClick={() => setSelectedSection("experience")}
                className={`w-1/2 px-6 py-3 text-base font-semibold transition-colors duration-200 ${
                  selectedSection === "experience"
                    ? "bg-accent text-accent-foreground"
                    : "bg-transparent text-fg hover:bg-card"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setSelectedSection("education")}
                className={`w-1/2 px-6 py-3 text-base font-semibold transition-colors duration-200 ${
                  selectedSection === "education"
                    ? "bg-accent text-accent-foreground"
                    : "bg-transparent text-fg hover:bg-card"
                }`}
              >
                Education
              </button>
            </div>

            {selectedSection === "experience" ? <Experience /> : <Education />}
          </section>

          <section id="projects" className="py-12">
            <Project />
          </section>

          <section className="py-12">
            <GitHubStats />
          </section>

          <section id="contact" className="py-12">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;