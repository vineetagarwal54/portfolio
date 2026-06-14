import { useState, lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImagePreloader from "./components/ImagePreloader";
import Technologies from "./components/Technologies";
import { Toaster } from "react-hot-toast";

// Below the fold sections are code split so they do not weigh down the first paint.
// The vertical timeline library in particular is heavy, so Experience and Education load on demand.
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Project = lazy(() => import("./components/Project"));
const GitHubStats = lazy(() => import("./components/GitHubStats"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Reserves vertical space while a lazy section loads, keeping layout shift minimal.
const SectionFallback = () => (
  <div className="shell py-20" aria-hidden="true">
    <div className="mx-auto h-40 w-full max-w-3xl animate-pulse rounded-2xl bg-card/60" />
  </div>
);

const App = () => {
  const [selectedSection, setSelectedSection] = useState("experience");

  return (
    <>
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

              <Suspense fallback={<SectionFallback />}>
                {selectedSection === "experience" ? <Experience /> : <Education />}
              </Suspense>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="section bg-bg-alt">
            <div className="shell">
              <Suspense fallback={<SectionFallback />}>
                <Project />
              </Suspense>
            </div>
          </section>

          {/* GitHub Activity */}
          <section id="github" className="section">
            <div className="shell">
              <Suspense fallback={<SectionFallback />}>
                <GitHubStats />
              </Suspense>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="section bg-bg-alt">
            <div className="shell">
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            </div>
          </section>
        </main>

        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;
