import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const words = ["Hello", "Bonjour", "Ciao", "Привет", "Hola"];

const Introduction = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  // Cycle through words
  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), index === 0 ? 1000 : 150);
      return () => clearTimeout(timer);
    }
  }, [index]);

  // GSAP animation
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.2,
      onComplete: () => (document.body.style.overflow = "auto"), // restore scroll
    });

    document.body.style.overflow = "hidden"; // disable scroll during intro

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 0.9, y: 0, duration: 1, ease: "power3.out" }
    );

    if (pathRef.current) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const initialPath = `M0 0 L${vw} 0 L${vw} ${vh} Q${vw / 2} ${vh + 300} 0 ${vh} L0 0`;
      const targetPath = `M0 0 L${vw} 0 L${vw} ${vh} Q${vw / 2} ${vh} 0 ${vh} L0 0`;

      gsap.set(pathRef.current, { attr: { d: initialPath } });
      tl.to(
        pathRef.current,
        { attr: { d: targetPath }, duration: 0.7, ease: "power3.inOut" },
        "-=0.3"
      );
    }

    tl.to(
      containerRef.current,
      { y: "-100%", duration: 1, ease: "power3.inOut", delay: 0.5 }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[9999] bg-[#141516] overflow-hidden"
    >
      <p
        ref={textRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center text-white text-[42px] font-serif z-10"
      >
        <span className="block w-2.5 h-2.5 bg-white rounded-full mr-2.5"></span>
        {words[index]}
      </p>
      <svg className="absolute top-0 left-0 w-full h-full">
        <path ref={pathRef} className="fill-[#141516]"></path>
      </svg>
    </div>
  );
};

export default Introduction;
