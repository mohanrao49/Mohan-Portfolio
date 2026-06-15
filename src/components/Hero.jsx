import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const roles = ['FREELANCER', 'CREATOR', 'DEVELOPER']

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    if (sectionRef.current) {
      // Parallax: image drifts down, text fades up as you scroll
      gsap.to(imageRef.current, {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
      gsap.to(textRef.current, {
        y: -50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    }
  }, [])

  // Animated role typing cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: 'whatsapp', url: 'https://wa.me/919573112302' },
    { icon: 'instagram', url: 'https://www.instagram.com/_mohxn_49?igsh=d3NyNno2bnNpMDcz&utm_source=qr' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/boddumohanrao' },
    { icon: 'github', url: 'https://github.com/mohanrao49' },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full h-screen min-h-[800px] flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between h-full pt-20">

        {/* LEFT: Text content (50%) */}
        <div
          ref={textRef}
          className="w-full lg:w-[50%] flex flex-col items-start justify-center text-black z-20 h-full pb-12 lg:pb-0 will-change-transform"
        >
          {/* Yellow label */}
          <div className="mb-4">
            <span className="inline-block text-[#facc15] text-sm md:text-base font-bold tracking-[0.3em] uppercase">
              Creative Developer
            </span>
          </div>

          {/* Large text: Hello, I'm / Mohan Rao */}
          <div className="flex flex-col mb-6 w-full">
            <div className="leading-[0.85] pb-1">
              <h1 className="text-[12vw] lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter text-black">
                HELLO, I'M
              </h1>
            </div>
            <div className="leading-[0.85] pb-1">
              <h1 className="text-[12vw] lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter text-black">
                MOHAN RAO
              </h1>
            </div>

            {/* Animated OUTLINE role text */}
            <div className="leading-[0.85] pb-1 overflow-hidden h-[10.2vw] lg:h-[5.1rem] xl:h-[6rem] relative">
              <div
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateY(-${currentRole * 100}%)` }}
              >
                {roles.map((role, i) => (
                  <h1
                    key={i}
                    className="text-[10vw] lg:text-[5rem] xl:text-[6rem] font-black uppercase tracking-tighter h-[10.2vw] lg:h-[5.1rem] xl:h-[6rem] flex items-center text-transparent"
                    style={{ WebkitTextStroke: '2px black' }}
                  >
                    {role}
                  </h1>
                ))}
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-500 text-base md:text-lg font-medium max-w-lg mb-10 leading-relaxed">
            Passionate Web Developer crafting modern, interactive and premium digital experiences with creative UI animations and futuristic design aesthetics.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#facc15] text-black transition-colors duration-300 shadow-sm"
                aria-label={social.icon}
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social.icon}.svg`}
                  alt={social.icon}
                  className="w-5 h-5 invert-[0.2]"
                />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: Hero Image (50%) bleeds to bottom */}
        <div
          ref={imageRef}
          className="w-full lg:w-[50%] h-full flex items-end justify-center lg:justify-end will-change-transform relative z-10"
        >
          {/* 
            Replace this with your full-body photo. 
            Put your image in public/assets/ and change src.
            To bleed to the bottom, we use object-contain/object-cover and align bottom.
          */}
          <img
            src="/assets/Main.png"
            alt="Mohan Rao Boddu"
            className="w-auto h-[70vh] lg:h-[85vh] max-h-full object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
