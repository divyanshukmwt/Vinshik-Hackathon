import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".edu-card");

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "XYZ University",
      year: "2021 - 2025",
      grade: "CGPA: 9.1/10",
    },
    {
      degree: "Higher Secondary Education",
      institution: "ABC Senior Secondary School",
      year: "2019 - 2021",
      grade: "Percentage: 92%",
    },
    {
      degree: "Secondary Education",
      institution: "ABC Senior Secondary School",
      year: "2017 - 2019",
      grade: "Percentage: 95%",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-gray-50 py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-5xl font-semibold text-gray-900 mb-12">Education</h2>

      <div className="flex flex-col gap-8 w-full max-w-3xl">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="edu-card bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {edu.degree}
            </h3>
            <p className="text-gray-600 font-medium mb-1">{edu.institution}</p>
            <p className="text-gray-500 text-sm mb-1">{edu.year}</p>
            <p className="text-gray-500 text-sm">{edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

