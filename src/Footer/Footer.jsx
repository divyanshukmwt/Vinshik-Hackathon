import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)
  const menuRef = useRef(null)
  const socialsRef = useRef(null)
  const nameRef = useRef(null)

  const list_items_1 = ["Home", "About", "Services", "Experiences", "Testimonials", "Contact"]
  const list_items_2 = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/divyanshu-kmwt/" },
    { label: "Github", url: "https://github.com/divyanshukmwt" }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate menu
      gsap.from(menuRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      })

      // Animate socials
      gsap.from(socialsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      })

      // Animate big name
      gsap.from(nameRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={footerRef}
      className="relative h-[450px] md:h-[650px] lg:h-screen overflow-hidden mt-10 flex flex-col justify-between"
    >
      <div className="flex justify-between items-start px-5 md:px-10 xl:px-30 lg:mt-20">
        <div ref={menuRef} className="flex flex-col text-[16px] sm:text-[3vw] lg:text-[30px] font-noto-serif font-medium tracking-[-5%]">
          <h3 className="border-b w-[150px] sm:w-[40vw] 2xl:w-[550px]">Menu</h3>
          <ul className="mt-3.5">
            {list_items_1.map((list_item, index) => {
              const sectionId = list_item.toLowerCase()
              return (
                <li className="py-[3px]" key={index}>
                  <a
                    href={`#${sectionId}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const target = document.getElementById(sectionId)
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    {list_item}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div ref={socialsRef} className="flex flex-col text-[16px] sm:text-[3vw] lg:text-[30px] font-noto-serif font-medium tracking-[-5%]">
          <h3 className="border-b w-[150px] sm:w-[40vw] 2xl:w-[550px]">Socials</h3>
          <ul className="mt-3.5">
            {list_items_2.map((item, index) => (
              <li className="py-[3px]" key={index}>
                <a
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(item.url, "_blank", "noopener,noreferrer")
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div ref={nameRef} className="flex justify-center font-noto-serif">
        <p className="text-[12vw] 2xl:text-[180px] font-medium">Divyanshu</p>
      </div>
    </section>
  )
}

export default Footer
