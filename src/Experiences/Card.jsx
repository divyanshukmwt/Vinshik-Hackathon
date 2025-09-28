import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ i, title, description, company_name, image_src, Logo, color, targetScale }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card scale on scroll
      gsap.fromTo(cardRef.current, { scale: 1 }, {
        scale: targetScale,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Image scale effect
      gsap.fromTo(imageRef.current, { scale: 2 }, {
        scale: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <div
        ref={cardRef}
        className="flex flex-col bg-white rounded-2xl p-12 md:p-12 w-full max-w-[1000px] transform-origin-top
                   sm:max-w-[80%] sm:p-6 xs:max-w-[400px] xs:p-4 xs:h-[300px]"
        style={{ backgroundColor: color, top: `calc(-10% + ${i * 25}px)` }}
      >
        <h2 className="text-center text-3xl md:text-4xl font-instrument-serif tracking-wide mb-6">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 h-full">
          {/* Description */}
          <div className="flex flex-col w-full md:w-1/2 overflow-hidden">
            <p className="text-base md:text-lg font-noto-serif leading-relaxed break-words overflow-wrap">
              {description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-14 h-14 flex-shrink-0">
                {Logo && <Logo className="w-full h-full" />}
              </div>
              <p className="text-base font-semibold">{company_name}</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 h-64 md:h-auto rounded-2xl overflow-hidden">
            <div ref={imageRef} className="w-full h-full">
              <img
                src={image_src}
                alt="experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
