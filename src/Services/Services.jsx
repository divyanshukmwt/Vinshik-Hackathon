import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const skillItems = containerRef.current.querySelectorAll(".skill-item");

    gsap.from(skillItems, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, []);

  const skillsData = [
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "GSAP",
    "MongoDB",
    "HTML & CSS",
    "Express.js",
    "Git & GitHub",
    "TypeScript",
  ];

  return (
    <section
      ref={containerRef}
      className="h-full bg-gray-50 py-4 px-4 flex flex-col items-center mt-10  mb-20"
    >
      <h2 className="text-3xl font-semibold text-gray-900 mb-12">Skills</h2>

      <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-item bg-white rounded-lg shadow-md text-2xl py-3 px-4 text-center text-gray-800 font-medium transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
