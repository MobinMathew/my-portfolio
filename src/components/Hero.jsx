import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/profile.jpg";
import CV from "../assets/CopyMobinEditedCV.pdf";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef(null);
  const title = useRef(null);
  const subtitle = useRef(null);
  const buttons = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(title.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          subtitle.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          buttons.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="home"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div>

          
          <h1
            ref={title}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
          >
            Mobin Mathew
          </h1>

          <div
            ref={subtitle}
            className="mt-6 text-xl md:text-3xl text-gray-300"
          >
            I'm a{" "}
            <span className="text-cyan-400 font-bold">
              <TypeAnimation
                sequence={[
                  "Digital Forensics Analyst",
                  2000,
                  "Penetration Tester",
                  2000,
                  "Cyber Security Researcher",
                  2000,
                  "Network Security Engineer",
                  2000,
                  "Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
            Passionate about developing websites, Digital Forensics,
            Cyber Security, Penetration Testing, Malware Analysis and
            building secure, real-world applications that solve complex
            security challenges.
          </p>

          <div
            ref={buttons}
            className="mt-10 flex gap-5 flex-wrap"
          >
          <a
            href="#projects"
            className="bg-cyan-500 text-black px-7 py-3 rounded-xl font-bold hover:scale-105 transition duration-300 inline-block">
           View Projects
          </a>
            <a
              href ={CV}
              className="border border-cyan-500 px-7 py-3 rounded-xl
              hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              Download CV
            </a>
          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden md:flex justify-center items-center">

          <div className="hero-photo-container">

            {/* Glow behind photo */}
            <div className="hero-photo-glow"></div>

            {/* Profile photo */}
            <div className="hero-photo-ring">
              <img
                src={profileImage}
                alt="Mobin Mathew"
                className="hero-profile-photo"
              />
            </div>

            {/* Rotating rings */}
            <div className="hero-photo-orbit orbit-one"></div>
            <div className="hero-photo-orbit orbit-two"></div>

          </div>

        </div>

      </div>
    </section>
  );
}