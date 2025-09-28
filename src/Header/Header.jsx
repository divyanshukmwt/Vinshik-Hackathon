import { useEffect, useState } from "react";
import gsap from "gsap";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        gsap.set(".header", { y: -200 });
        gsap.to(".header", {
            y: 0,
            duration: 1,
            ease: "circ.out",
            delay: 3,
        });
    }, []);

    const smoothScroll = (id) => {
        const el = document.querySelector(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMobileOpen(false); // close mobile menu after clicking
        }
    };

    const navItems = ["about", "services", "experiences", "testimonials", "contact"];

    return (
        <div className="header absolute top-0 left-0 z-10 w-full flex justify-between items-center p-6 font-medium text-lg bg-white shadow-md">
            {/* Logo */}
            <div className="logo text-2xl font-serif">DIVYANSHU</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6">
                {navItems.map((section) => (
                    <a
                        key={section}
                        href={`#${section}`}
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScroll(`#${section}`);
                        }}
                        className="text-black font-bold hover:underline cursor-pointer"
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
                <button
                    className="flex flex-col justify-between w-6 h-5 focus:outline-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <span
                        className={`block h-0.5 bg-black transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`block h-0.5 bg-black transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block h-0.5 bg-black transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-6 md:hidden z-20">
                    {navItems.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            onClick={(e) => {
                                e.preventDefault();
                                smoothScroll(`#${section}`);
                            }}
                            className="text-black font-bold hover:underline cursor-pointer"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>
            )}

            {/* Social Icons */}
            <div className="hidden md:flex gap-4 cursor-pointer">
                <i
                    className="ri-linkedin-box-fill text-blue-600 text-2xl hover:text-blue-800 transition-colors duration-200"
                    onClick={() =>
                        window.open("https://www.linkedin.com/in/divyanshu-kmwt/", "_blank")
                    }
                ></i>
                <i
                    className="ri-github-fill text-gray-800 text-2xl hover:text-gray-600 transition-colors duration-200"
                    onClick={() => window.open("https://github.com/divyanshukmwt", "_blank")}
                ></i>
                <i
                    className="ri-mail-fill text-red-500 text-2xl hover:text-red-700 transition-colors duration-200"
                    onClick={() =>
                        (window.location = "mailto:officialdivyanshu18@gmail.com")
                    }
                ></i>
                <i
                    className="ri-phone-fill text-green-500 text-2xl hover:text-green-700 transition-colors duration-200"
                    onClick={() => (window.location = "tel:+916376320136")}
                ></i>
            </div>
        </div>
    );
};

export default Header;
