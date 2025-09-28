import React, { useRef } from "react";
import Card from "./Card";
const Experiences = () => {
  const containerRef = useRef(null);

  const projects = [
    {
      title: "Founder & Director",
      description:
        "Spark builds purpose-led reputations for social impact founders through engaging, authentic content that amplifies customer trust and loyalty by providing personal branding services.",
      company_name: "Spark Social Media",
      image_src:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#FFC6AC",
    },
    {
      title: "Fractional CMO",
      description:
        "The Lifelong Health Companion For Every Woman’s Unique Journey. An intelligent platform designed to help women understand their body and feel their best all month long.",
      company_name: "Nexus",
      image_src:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#CDFAD5",
    },
    {
      title: "Advisor",
      description:
        "Working as an Advisor for GoFounder from May 2024 till now. for almost one year and 4 months.",
      company_name: "GoFounder",
      image_src:
        "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#F6FDC3",
    },
    {
      title: "Founding Member",
      description:
        "This company unites young changemakers and multipotentialites who see themselves as more than their job titles, fostering creativity and collective empowerment.",
      company_name: "Undefinable Community",
      image_src:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#FFCF96",
    },
  ];

  return (
    <section
      id="experiences"
      className="relative min-h-screen flex flex-col"
    >
      <h3 className="text-[40px] font-instrument-serif text-center">
        What are my experiences?
      </h3>

      <div ref={containerRef} className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              title={project.title}
              description={project.description}
              company_name={project.company_name}
              image_src={project.image_src}
              Logo={project.Logo}
              color={project.color}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
