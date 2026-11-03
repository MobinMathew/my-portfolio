import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import CV from "../assets/MOBIN_MATHEW_CV.pdf";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[6px] text-cyan-400">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let's Connect
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          I'm actively seeking opportunities in Cyber Security,
          Digital Forensics, Penetration Testing, Network Security,
          and Software Development. Feel free to reach out for
          internships, full-time roles, research collaborations,
          or freelance projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 text-left">

            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <span>mobinmathew411@gmail.com</span>
              
            </div>
            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              
              <span>mobin.msdfis25@od.nfsu.edu.in</span>
            </div>
          
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Find Me Online
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href="https://github.com/MobinMathew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaGithub size={28} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mobin-mathew-3b3173270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaLinkedin size={28} />
                LinkedIn
              </a>

              <a
                href={CV}
                download
                className="flex items-center gap-4 hover:text-cyan-400 transition"
              >
                <FaDownload size={28} />
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}