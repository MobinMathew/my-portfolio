import {
  FaGithub,
  FaAndroid,
  FaPython,
  FaNetworkWired,
  FaShieldAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Multi-Layer Android Spyware Detection",
    status: "🚧 Master's Research Project (In Progress)",
    icon: <FaAndroid />,
    tech: [
      "Kotlin",
      "Android Studio",
      "Room Database",
      "Accessibility Service",
      "Behavior Analysis",
      "Digital Forensics",
      
    ],
    description:
      "A multi-layer Android spyware detection system developed as part of my Master's research. The application combines permission analysis, behavioral monitoring, heuristic detection, static analysis, and AI-assisted threat scoring to identify malicious applications.",
    github: "#",
  },

  {
    title: "Phishing Detection Tool",
    status: "✅ Completed",
    icon: <FaPython />,
    tech: [
      "Python",
      "Machine Learning",
      "Tkinter",
      "Scikit-learn",
    ],
    description:
      "Machine learning application that analyzes URL features to determine whether a website is legitimate or a phishing attempt.",
    github:
      "https://github.com/MobinMathew/Tamizhan_Skills_Projects/tree/main/1.Phisihing_Detection_Tool",
  },

  {
    title: "Password Strength Checker",
    status: "✅ Completed",
    icon: <FaShieldAlt />,
    tech: [
      "Python",
      "Tkinter",
      "Cyber Security",
    ],
    description:
      "Desktop application that evaluates password strength using security rules and provides recommendations for creating stronger passwords.",
    github:
      "https://github.com/MobinMathew/Tamizhan_Skills_Projects/tree/main/2.Passwod_Strength_Checker",
  },

  {
    title: "Keylogger Implementation",
    status: "🎓 Educational Project",
    icon: "⌨️",
    tech: [
      "Python",
      "System Programming",
      "Cyber Security",
    ],
    description:
      "Educational implementation demonstrating keyboard event monitoring to understand endpoint security, malware behavior, and defensive detection techniques.",

    disclaimer:
      "⚠️ Educational Use Only. This project was developed solely for educational, research, and authorized security testing purposes. Do not use it on systems without explicit permission.",

    github:
      "https://github.com/MobinMathew/Tamizhan_Skills_Projects/tree/main/3.Keylogger_Implementation",
  },

  {
    title: "Port Scanner",
    status: "✅ Completed",
    icon: <FaNetworkWired />,
    tech: [
      "Python",
      "Socket Programming",
      "Networking",
    ], disclaimer:
      "⚠️ Educational Use Only. This project was developed solely for educational, research, and authorized security testing purposes. Do not use it on systems without explicit permission.",
    description:
      "Python-based network scanner capable of discovering active hosts and open TCP ports for network analysis and authorized security assessments.",
    github:
      "https://github.com/MobinMathew/Tamizhan_Skills_Projects/tree/main/4.Port_Scanner",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[6px] text-cyan-400">
          Projects
        </p>

        <h2 className="text-5xl font-bold mt-4 mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-cyan-500/20
                rounded-3xl
                p-8
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                transition-all
                duration-300
              "
            >
              <div className="text-5xl text-cyan-400 mb-5">
                {project.icon}
              </div>

              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>

              <p className="text-cyan-400 mt-2 font-medium">
                {project.status}
              </p>

              <p className="text-gray-300 mt-6 leading-7">
                {project.description}
              </p>

              {project.disclaimer && (
                <div className="mt-5 rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4">
                  <p className="text-sm text-yellow-300 leading-6">
                    {project.disclaimer}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-3 mt-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-cyan-500
                    text-black
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-cyan-400
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}