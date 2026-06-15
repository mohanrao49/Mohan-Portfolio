import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Welcome() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      // Parallax effect on the WELCOME text
      gsap.to(textRef.current, {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Slight parallax on the image
      gsap.to(imageRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[600px] md:min-h-[800px] bg-white flex items-end justify-center overflow-hidden py-0"
    >
      {/* Huge WELCOME text behind the photo */}
      <div
        ref={textRef}
        className="absolute top-[20%] left-0 w-full flex items-center justify-center pointer-events-none z-0"
      >
        <h1 className="text-[20vw] md:text-[22vw] font-black uppercase text-gray-100 leading-none tracking-tighter whitespace-nowrap select-none">
          WELCOME
        </h1>
      </div>

      {/* Large close-up portrait photo */}
      <div className="relative w-full max-w-4xl mx-auto flex items-end justify-center h-[500px] md:h-[700px] z-10">
        <img
          ref={imageRef}
          src="/assets/hero1.png" // User can change this to a close-up portrait
          alt="Welcome Portrait"
          className="w-auto h-full object-cover object-top drop-shadow-2xl"
          style={{
            // Gradient mask to fade the bottom into white
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          }}
        />
      </div>
    </section>
  )
}
