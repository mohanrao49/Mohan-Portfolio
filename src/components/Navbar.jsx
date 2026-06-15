import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navItems = ['Home', 'About', 'Portfolio', 'Service', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])
  const [lastScroll, setLastScroll] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Logo entrance animation
    gsap.fromTo(logoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
    // Nav links stagger entrance
    gsap.fromTo(linksRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.4 })
  }, [])

  // Hide/show navbar on scroll (like reference)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setVisible(!(currentScroll > lastScroll && currentScroll > 100))
      setLastScroll(currentScroll)
      setScrolled(currentScroll > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-transparent transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between w-full">
        {/* Logo */}
        <a href="#" ref={logoRef} className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight group shrink-0">
          <span className="text-white transition-colors duration-300 group-hover:text-gray-200">Mohan Rao</span>
          <span className="text-[#facc15] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">.web</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              ref={(el) => (linksRef.current[i] = el)}
              className="relative text-sm uppercase tracking-widest font-semibold text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#facc15] rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black text-sm uppercase tracking-widest font-bold rounded-full hover:bg-[#facc15] transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
          >
            FEEDBACK
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-[110]"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-zinc-950/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 transition-all duration-500 z-[100] ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-2xl uppercase tracking-widest font-bold text-white hover:text-[#f4c400] transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-[#f4c400] text-zinc-950 font-bold py-3 px-10 rounded-xl text-lg tracking-wider mt-4"
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}
