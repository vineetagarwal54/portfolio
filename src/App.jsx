import React, { useState, useEffect } from "react";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImagePreloader from "./components/ImagePreloader";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import SEO from "./components/SEO";
import GitHubStats from "./components/GitHubStats";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState("experience");
  const [splashMode, setSplashMode] = useState("full");

  // Decide splash mode on mount
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setSplashMode("logo");
    } else {
      setSplashMode("full");
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  // Simulate loading or wait for animation to complete
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), splashMode === "full" ? 3000 : 1200); // Shorter for logo mode
    return () => clearTimeout(timer); // Cleanup timer
  }, [splashMode]);

  const handleButtonClick = (section) => {
    setSelectedSection(section); // Update section based on button click
  };

  return (
    <div className="min-h-screen overflow-x-hidden text-primary antialiased">
      <SEO />
      <ImagePreloader />
      <Toaster 
        position="top-center"
        containerStyle={{
          top: 100,
          zIndex: 9999,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '14px',
          },
          success: {
            icon: '✅',
            style: {
              background: '#065f46',
            },
          },
          error: {
            icon: '❌',
            style: {
              background: '#991b1b',
            },
          },
        }}
      />
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-primary">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20"></div>
          {/* Radial Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 0%, var(--bg-secondary-alt) 0%, transparent 75%)"
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      {isLoading ? (
        <SplashScreen
          onAnimationComplete={() => setIsLoading(false)}
          mode={splashMode}
        />
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          <div className="space-y-32">
            <section id="home">
              <Hero />
            </section>
            
            <section id="technologies">
              <Technologies />
            </section>

            {/* Section Buttons */}
            <div className="flex justify-center">
              <div className="w-full max-w-[900px] flex border-2 border-border rounded-full overflow-hidden shadow-soft hover:shadow-accent-ring transition-all duration-300">
                <button
                onClick={() => handleButtonClick("experience")}
                className={`${
                  selectedSection === "experience"
                    ? "bg-accent text-accent-foreground"
                    : "bg-transparent text-fg"
                } py-3 px-6 border-r-2 border-border text-xl font-semibold transition duration-300 ease-in-out hover:bg-accent-hover hover:text-accent-foreground w-full focus:outline-none focus:ring-2 focus:ring-accent-ring`} 
              >
                Experience
              </button>
              <button
                onClick={() => handleButtonClick("education")}
                className={`${
                  selectedSection === "education"
                    ? "bg-accent text-accent-foreground"
                    : "bg-transparent text-fg"
                } py-3 px-6 text-xl font-semibold transition duration-300 ease-in-out hover:bg-accent-hover hover:text-accent-foreground w-full focus:outline-none focus:ring-2 focus:ring-accent-ring`} 
              >
                Education
              </button>
            </div>
          </div>

            {/* Conditional Section Rendering */}
            <section id="experience-education">
              <div className="mt-16">
                {selectedSection === "experience" ? (
                  <Experience />
                ) : (
                  <Education />
                )}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
              <div className="mt-24">
                <Project />
              </div>
            </section>

            {/* GitHub Stats Section */}
            <section id="github">
              <div className="mt-24">
                <GitHubStats />
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact">
              <div className="mt-24">
                <Contact />
              </div>
            </section>
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
