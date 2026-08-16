import { FaUserShield } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <p className="text-cyan-400 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4 mb-6">
            Passionate about Cyber Security • Digital Forensics • Full Stack Development
          </h2>

          <p className="text-gray-400 leading-8">
            I am currently pursuing my Master's in Digital Forensics and
            Information Security. I specialize in Penetration Testing,
            Malware Analysis, Digital Forensics and Network Security.

            <br /><br />

            My goal is to build secure applications, discover
            vulnerabilities before attackers do, and contribute to making
            the internet a safer place.
          </p>
        </div>

        {/* Right Card */}
        <div className="flex justify-center">

          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-cyan-500/20
              rounded-3xl
              p-10
              w-full
              max-w-md
              hover:border-cyan-400
              transition
            "
          >
            <FaUserShield
              className="text-cyan-400 text-7xl mb-6"
            />

            <h3 className="text-3xl font-bold mb-4">
              Security First
            </h3>

            <p className="text-gray-400">
              Passionate about Ethical Hacking,
              Vulnerability Assessment,
              Digital Investigation,
              Malware Analysis.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}