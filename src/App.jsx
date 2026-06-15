import { useEffect } from 'react'
import Lenis from 'lenis'
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import HeroBackground from './components/HeroBackground'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
    })

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[#facc15]/30 overflow-x-hidden">
      <Navbar />
      
      {/* Fixed color-changeable background behind everything */}
      <HeroBackground />

      {/* White scrolling content that slides over the colored background */}
      <div className="relative w-full overflow-hidden bg-white mt-[100vh] z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] border-t border-white/20">
        <Hero />
        <Welcome />
        <About />
        <Achievements />
      </div>

      <Projects />
      <Services />
      <Contact />
      <div className="relative z-30">
        <Footer />
      </div>
    </main>
  )
}

export default App
