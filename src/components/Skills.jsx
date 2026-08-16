
import {
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
  FaNetworkWired,
  FaShieldAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiKotlin,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming & Development",
    skills: [
      { icon: <FaReact />, name: "React.js", level: "60%" },
      { icon: <FaNodeJs />, name: "Node.js", level: "45%" },
      { icon: <SiJavascript />, name: "JavaScript", level: "40%" },
      { icon: <FaPython />, name: "Python", level: "50%" },
      { icon: <SiKotlin />, name: "Kotlin", level: "60%" },
      { icon: <SiMongodb />, name: "MongoDB", level: "45%" },
      { icon: <FaGitAlt />, name: "Git & GitHub", level: "60%" },
    ],
  },

  {
    title: "Cyber Security",
    skills: [
      { icon: "🛡️", name: "Penetration Testing", level: "50%" },
      { icon: "🌐", name: "Nmap", level: "50%" },
      { icon: "🕷️", name: "Burp Suite", level: "60%" },
      { icon: "📡", name: "Wireshark", level: "60%" },
      { icon: "🔍", name: "OSINT", level: "60%" },
      { icon: "🧪", name: "Digital Forensics", level: "50%" },
      
    ],
  },

  {
    title: "Networking & Infrastructure",
    skills: [
      { icon: <FaLinux />, name: "Linux", level: "60%" },
      { icon: <FaNetworkWired />, name: "Network Engineering", level: "50%" },
           
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[5px]">
          Skills
        </p>

        <h2 className="text-5xl font-bold mt-4 mb-16">
          Technical Expertise
        </h2>

        {skillCategories.map((category) => (
          <div key={category.title} className="mb-16">

            <h3 className="text-3xl font-bold text-cyan-300 mb-8">
              {category.title}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-cyan-500/20
                    rounded-2xl
                    p-6
                    hover:border-cyan-400
                    hover:-translate-y-2
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                    transition-all
                    duration-300
                  "
                >
                  <div className="text-5xl text-cyan-400 mb-4">
                    {skill.icon}
                  </div>

                  <h4 className="text-2xl font-semibold">
                    {skill.name}
                  </h4>

                  <div className="mt-5 h-2 rounded-full bg-gray-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: skill.level }}
                    />
                  </div>

                  <p className="mt-3 text-gray-400">
                    {skill.level}
                  </p>
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}