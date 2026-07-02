import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Journey from "./components/Journey";
import CurrentLearning from "./components/CurrentLearning";
import AIToolkit from "./components/AIToolkit";
import AIVideo from "./components/AIVideo";
import Stats from "./components/Stats";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-bg min-h-screen">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <AIVideo />
        <Certifications />
        <Skills />
        <AIToolkit />
        <Stats />
        <Experience />
        <Education />
        <Journey />
        <CurrentLearning />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
