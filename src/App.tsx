import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import CursorEffect from "./components/layout/CursorEffect";
import CommandBar from "./components/ui/CommandBar";
import { ActiveSectionProvider } from "./hooks/active-section-provider";
import SoundToggle from "./components/ui/SoundToggle";

function App() {
  const [isCommandBarOpen, setIsCommandBarOpen] = useState(false);

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandBarOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <ActiveSectionProvider>
        <div className="min-h-screen font-sans text-gray-900 dark:text-white bg-white dark:bg-dark-300 transition-colors duration-300">
          <CursorEffect />
          <Header/>
          <main>
            <Hero />
            <About />
            <Projects />
            <Services />
            <Certificates />
            <Contact />
          </main>
          <Footer />
          <CommandBar
            isOpen={isCommandBarOpen}
            onClose={() => setIsCommandBarOpen(false)}
          />
          <SoundToggle />
        </div>
      </ActiveSectionProvider>
    </ThemeProvider>
  );
}

export default App;
