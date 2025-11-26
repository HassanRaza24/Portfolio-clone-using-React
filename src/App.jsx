import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import About from './Components/About/about'
import Mywork from './Components/My Work/mywork'
import Contact from './Components/Contact us/contact'
import Footer from './Components/Footer/footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Mywork/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App