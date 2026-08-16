import {
  FaCertificate,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaYoutube,
} from "react-icons/fa";

const certificates = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/R1QPRYFVR49Z?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    title: "Cyber Security Internship",
    issuer: "Tamizhan Skills",
    year: "2025",
    link: "https://www.linkedin.com/in/mobin-mathew-3b3173270/details/experience/",
  },
  {
    title: "Tata - Cybersecurity Analyst Job Simulation",
    issuer: "Tata • Forage",
    year: "2026",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_D6oAH3u6H4vwuWxYR_1786788827472_completion_certificate.pdf",
  },
  {
    title: "Deloitte Australia - Cyber Job Simulation",
    issuer: "Deloitte Australia • Forage",
    year: "2026",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_D6oAH3u6H4vwuWxYR_1772346989327_completion_certificate.pdf",
  },
];

const learning = [
  {
    title: "PortSwigger Web Security Academy",
    description:
      "SQL Injection • XSS • Authentication • SSRF • Access Control • NoSQL Injection",
  },
  {
    title: "PicoCTF",
    description:
      "Web Exploitation • Cryptography • Reverse Engineering • Forensics",
    link: "https://learn.cylabacademy.org/users/Mobin123",
  },
  {
    title: "GitHub Projects",
    description:
      "Cyber Security Tools • Python Projects • Android Security Research",
    link: "https://github.com/MobinMathew",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="min-h-screen py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[6px] text-cyan-400">
          Certifications
        </p>

        <h2 className="text-5xl font-bold mt-4 mb-16 text-white">
          Cyber Security Journey
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-8 text-white">
              📜 Certifications
            </h3>

            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="mb-8 border-b border-cyan-500/20 pb-6 last:border-b-0 last:mb-0"
              >
                <div className="flex items-start gap-4">
                  <FaCertificate className="text-cyan-400 text-3xl mt-1 shrink-0" />

                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {cert.title}
                    </h4>

                    <p className="text-gray-400 mt-1">
                      {cert.issuer}
                    </p>

                    <p className="text-cyan-400 mt-1">
                      {cert.year}
                    </p>
                  </div>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-white transition"
                  >
                    <FaExternalLinkAlt />
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-8 text-white">
              📚 Continuous Learning
            </h3>

            {learning.map((item) => (
              <div
                key={item.title}
                className="mb-8 border-b border-cyan-500/20 pb-6 last:border-b-0 last:mb-0"
              >
                <div className="flex items-start gap-4">
                  <FaGraduationCap className="text-cyan-400 text-3xl mt-1 shrink-0" />

                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 leading-7 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-white transition"
                  >
                    <FaExternalLinkAlt />
                    View Profile
                  </a>
                )}
              </div>
            ))}

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaYoutube className="text-red-500 text-3xl" />

                <h3 className="text-2xl font-bold text-white">
                  Learning Resources
                </h3>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li>✔ YouTube Cyber Security Tutorials</li>
                <li>✔ OWASP Top 10</li>
                <li>✔ Nmap Documentation</li>
                <li>✔ Digital Forensics Research</li>
                <li>✔ Network Engineering Labs</li>
                <li>✔ Burp Suite Practice Labs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}