import React, { useState, useEffect } from "react";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen"; // Import the splash screen

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [selectedSection, setSelectedSection] = useState("experience"); // Default to 'experience'
  const [splashMode, setSplashMode] = useState("full"); // 'full' or 'logo'

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
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div
            style={{
              left: "50%",
              transform: "translateX(-50%)", // Centers the circle horizontally
              top: "-10%", // Keeps the vertical position unchanged
            }}
            className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
          ></div>
        </div>
      </div>

      {/* Conditional Rendering */}
      {isLoading ? (
        <SplashScreen
          onAnimationComplete={() => setIsLoading(false)}
          mode={splashMode}
        />
      ) : (
        <div className="container mx-auto px-8">
          {/* Navbar and Hero Section */}
          <Navbar />
          <Hero />
          <Technologies />

          {/* Section Buttons - Centered on large screens */}
          <div className="flex justify-center mb-6 w-full max-w-[900px] mx-auto"> {/* Centered container with max width */}
            <div className="flex border-2 border-stone-600 rounded-full overflow-hidden w-full"> {/* Button div width increased */}
              <button
                onClick={() => handleButtonClick("experience")}
                className={`${
                  selectedSection === "experience"
                    ? "bg-[#3a2f40] text-white"
                    : "bg-transparent text-stone-300"
                } py-3 px-6 border-r-2 border-stone-600 text-xl font-semibold transition duration-300 ease-in-out hover:bg-[#4b3746] hover:text-white w-full`} 
              >
                Experience
              </button>
              <button
                onClick={() => handleButtonClick("education")}
                className={`${
                  selectedSection === "education"
                    ? "bg-[#3a2f40] text-white"
                    : "bg-transparent text-stone-300"
                } py-3 px-6 text-xl font-semibold transition duration-300 ease-in-out hover:bg-[#4b3746] hover:text-white w-full`} 
              >
                Education
              </button>
            </div>
          </div>

          {/* Conditional Section Rendering */}
          {selectedSection === "experience" ? (
            <Experience />
          ) : (
            <Education />
          )}

          {/* Other Sections */}
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
