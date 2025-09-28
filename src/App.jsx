import React from 'react'
import Home from './Home/Home'
import Header from './Header/Header'
import Introduction from './Introduction/Introduction'
import About from './About/About'
import Services from './Services/Services'
import Experiences from './Experiences/Experiences'
import Testimonials from './Testimonials/Testimonials'
import Footer from './Footer/Footer'
import Education from './Education/Education'
import ProjectSection from './Projects/Projects'

const App = () => {
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
  )
}

export default App