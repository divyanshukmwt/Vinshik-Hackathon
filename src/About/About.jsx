import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const phrase1 =
    "I love building web applications that solve real problems. From creating interactive UI/UX with React and Tailwind to adding smooth animations with GSAP, I enjoy turning ideas into live projects that people can actually use."
  const phrase2 =
    "I’m constantly learning new technologies, exploring creative solutions, and refining my skills in the MERN stack. Every project I finish gives me a sense of accomplishment and pushes me to take on even bigger challenges."

  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".text .mask span")

      gsap.fromTo(
        words,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen overflow-x-hidden flex flex-col mt-30"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-[40px] md:text-[60px] xl:text-[150px] font-noto-serif font-bold tracking-[-5%]">
          DIVYANSHU
        </h2>
        <h3 className="text-[40px] font-instrument-serif 2xl:mt-[-20px]">
          Who am I?
        </h3>
      </div>

      {/* About Content */}
      <div className="flex flex-col items-center justify-center mt-25">
        {/* Image + Quote */}
        <div className="flex flex-col items-start mx-auto max-w-[90%] 2xl:max-w-[1288px]">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1288}
            height={889}
            alt="About section"
            className="rounded-xl object-cover"
          />
          <p className="mt-4 text-[40px] lg:text-[55px] 2xl:text-[80px] font-instrument-serif tracking-[-1%] leading-[110%]">
            “I don’t just code; I create experiences that people enjoy.”
          </p>
        </div>

        {/* Description text with GSAP word animation */}
        <div className="flex flex-col lg:flex-row mx-auto max-w-[90%] 2xl:max-w-[1288px] gap-10 mt-35">
          <p className="text">
            {phrase1.split(" ").map((word, index) => (
              <span key={index} className="mask inline-block overflow-hidden">
                <span className="inline-block">{word}&nbsp;</span>
              </span>
            ))}
          </p>

          <p className="text">
            {phrase2.split(" ").map((word, index) => (
              <span key={index} className="mask inline-block overflow-hidden">
                <span className="inline-block">{word}&nbsp;</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
