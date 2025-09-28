import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const phrase = "“Divyanshu is the absolute best in the business for Personal Branding!”"

  const containerRef = useRef(null)
  const wordRefs = useRef([])
  wordRefs.current = []

  const addToRefs = (el) => {
    if (el && !wordRefs.current.includes(el)) {
      wordRefs.current.push(el)
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordRefs.current,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="testimonials"
      className="relative min-h-screen overflow-x-hidden flex flex-col md:-mt-30 lg:mt-20"
      ref={containerRef}
    >
      <h3 className="text-[40px] font-instrument-serif text-center leading-[110%]">
        What do my clients say about me?
      </h3>

      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between px-5 md:px-10 xl:px-20 mt-20 lg:mt-40 lg:items-end">
        <div className="flex flex-col mt-20 gap-20 md:gap-30 lg:gap-40">
          <p className="text-[40px] md:text-[55px] lg:text-[40px] xl:text-[55px] font-instrument-serif max-w-[90%] 2xl:max-w-[650px] leading-[110%]">
            {phrase.split(" ").map((word, index) => (
              <span key={index} className="mask inline-block overflow-hidden">
                <span
                  ref={addToRefs}
                  className="inline-block"
                  style={{ display: "inline-block" }}
                >
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </p>

          <div className="text-[20px] md:text-[30px] lg:text-[20px] xl:text-[30px] font-noto-serif leading-[110%]">
            <p>Chris Hughes</p>
            <p>Founder at Reco HQ</p>
          </div>

          {/* Pagination / arrows (optional) */}
          <div className="flex justify-between text-[30px]"></div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="testimonials image"
          className="lg:max-w-[50%] 2xl:max-w-[561px]"
        />
      </div>
    </section>
  )
}

export default Testimonials
