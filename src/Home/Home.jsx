import React from "react";
import headerimg from "../Home/img-hero.png";

const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-x-hidden flex flex-col md:flex-row gap-[8%]"
        >
            {/* Hero Image */}
            <div className="relative w-full sm:w-auto h-screen md:h-auto">
                <img
                    src={headerimg}
                    alt="hero"
                    className="w-full h-full object-cover md:max-w-[720px] md:h-[917px]"
                />

                {/* Mobile Overlay Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 md:hidden">
                    <h2 className="text-[18px] font-noto-serif mb-2 text-white text-center">
                        FULL-STACK DEVELOPER
                    </h2>
                    <h1 className="text-[24px] leading-[110%] font-instrument-serif text-center max-w-[65%] sm:max-w-[45%] text-white">
                        Divyanshu Kumawat – Web & UI Developer
                    </h1>
                </div>
            </div>

            {/* Desktop Text */}
            <div className="hidden md:flex flex-col justify-center items-center pr-10 2xl:pr-0">
                <h2 className="text-[18px] lg:text-[20px] font-noto-serif mb-2">
                    FULL-STACK DEVELOPER
                </h2>
                <h1 className="text-[30px] lg:text-[50px] xl:text-[60px] leading-[110%] font-instrument-serif text-center max-w-[500px] xl:max-w-[550px]">
                    Divyanshu Kumawat – Web & UI Developer
                </h1>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-15 right-2 hidden md:flex flex-col items-center gap-7">
                <p className="text-[16px] font-cutive-mono transform rotate-[-270deg]">
                    SCROLL
                </p>
                <i className="ri-arrow-down-s-line w-3 h-4"></i>
            </div>
        </section>
    );
};

export default Home;
