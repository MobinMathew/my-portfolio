import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          Mobin<span className="text-white">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a
              href="#certificates"
              className="hover:text-cyan-400 transition"
            >
              Certificates
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cyan-400 text-3xl focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-cyan-500/20 bg-black/90 backdrop-blur-xl">
          <ul className="flex flex-col items-center py-5 gap-5 text-gray-300">

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#certificates"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition"
              >
                Certificates
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}