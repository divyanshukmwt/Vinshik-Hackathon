// App.jsx
import React, { useEffect } from "react";
import Home from './Home/Home';
import Header from './Header/Header';
import Introduction from './Introduction/Introduction';
import About from './About/About';
import Services from './Services/Services';
import Experiences from './Experiences/Experiences';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';
import Education from './Education/Education';
import ProjectSection from './Projects/Projects';
import Lenis from '@studio-freight/lenis';

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // animation duration
      easing: (t) => t, // linear easing
      smooth: true,
      direction: 'vertical', // can be 'horizontal' as well
      gestureDirection: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Introduction/>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Experiences/>
      <Education/>
      <ProjectSection/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default App;
