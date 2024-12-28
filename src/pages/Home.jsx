import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Membership from '../components/sections/Membership'
import Blog from '../components/sections/Blog'
import Contact from '../components/sections/Contact'

function Home() {
  return (
    <>
    <Hero />
    <About/>
    <Services/>
    <Membership/>
    <Blog/>
    <Contact/>
    </>
  )
}

export default Home