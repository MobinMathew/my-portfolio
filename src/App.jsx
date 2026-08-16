import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Aurora from "./effects/Aurora";
import CursorGlow from "./effects/CursorGlow";
import MouseTrail from "./effects/MouseTrail";
import NetworkBackground from "./effects/NetworkBackground";
import Particles from "./effects/Particles";

export default function App() {
  return (
    <div id="root">

      {/* BACKGROUND EFFECTS */}
      <NetworkBackground />
      <Particles />
      <Aurora />

      {/* INTERACTIVE EFFECTS */}
      <CursorGlow />
      <MouseTrail />

      {/* WEBSITE */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}