import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Civic Connect',
    img: 'assets/civic.png',
    link: 'https://issue-reporting-pi.vercel.app/'
  },
  {
    title: 'Skill Bartering',
    img: 'assets/skill.png',
    link: 'https://skillbarteringswap.netlify.app/'
  },
  {
    title: 'Araku Valley',
    img: 'assets/araku.png',
    link: 'https://aruku-valley-zcr9.vercel.app'
  }
]

// Image paths from reference site — these are the project screenshots
const projectImages = projects.map(p => p.img)

export default function Projects() {
  const sectionRef = useRef(null)
  const boxBackRef = useRef(null)
  const boxLidRef = useRef(null)
  const cardsRef = useRef([])
  const mobileContainerRef = useRef(null)
  const mobileCardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Position box in center
      gsap.set([boxBackRef.current, boxLidRef.current], { xPercent: -50, yPercent: -50 })
      gsap.set(boxLidRef.current, { transformOrigin: 'bottom center' })

      // Stack all cards in center initially
      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          rotation: gsap.utils.random(-8, 8),
          scale: 0.8,
          x: 0,
          y: 0,
        })
      })

      const mm = gsap.matchMedia()

      mm.add({
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      }, (context) => {
        const { isDesktop, isMobile } = context.conditions

        if (isDesktop) {
          // Scatter positions for 3 cards: left, center-top, right
          const getScatterPos = (index) => {
            const cardW = 340
            const cardH = 200
            const gap = 60
            if (index === 0) return { x: -(cardW + gap), y: -cardH * 0.3 }     // left
            if (index === 1) return { x: 0, y: -(cardH + gap * 0.5) }           // center top
            if (index === 2) return { x: (cardW + gap), y: -cardH * 0.3 }       // right
            return { x: 0, y: 0 }
          }

          let floatTween
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 50%',
              end: 'bottom 50%',
              toggleActions: 'play reverse play reverse',
              onEnter: () => floatTween?.kill(),
              onEnterBack: () => floatTween?.kill(),
            },
            onComplete: () => {
              floatTween = gsap.to(cardsRef.current, {
                y: '+=15',
                rotation: '+=1.5',
                duration: 3.5,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                stagger: { amount: 1, from: 'random' },
              })
            },
          })

          // Open box lid
          tl.to(boxLidRef.current, { rotationX: -130, duration: 1.2, ease: 'power3.inOut' })

          // Cards fly up
          tl.to(cardsRef.current, {
            y: -150,
            scale: 0.9,
            zIndex: 70,
            duration: 0.6,
            stagger: 0.06,
            ease: 'back.out(1.2)',
          }, '-=0.6')

          // Cards scatter to positions
          tl.to(cardsRef.current, {
            x: (i) => getScatterPos(i).x,
            y: (i) => getScatterPos(i).y,
            rotation: () => gsap.utils.random(-5, 5),
            scale: 1,
            duration: 1.2,
            stagger: { amount: 0.3, from: 'center' },
            ease: 'expo.out',
          }, '-=0.2')
        }

        if (isMobile) {
          const cardWidth = window.innerWidth * 0.75

          mobileCardsRef.current.forEach((card, index) => {
            if (!card) return
            gsap.set(card, {
              scale: 0.4,
              opacity: 0,
              rotation: gsap.utils.random(-15, 15),
            })
          })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
            },
          })

          tl.to(boxLidRef.current, { rotationX: -130, duration: 0.8, ease: 'power3.inOut' })

          tl.to(mobileCardsRef.current, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            onComplete: () => {
              if (mobileContainerRef.current) {
                mobileContainerRef.current.style.overflowX = 'auto'
                mobileContainerRef.current.style.pointerEvents = 'auto'
              }
            },
          }, '-=0.4')
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#f7f6f2] min-h-[120vh] md:min-h-[150vh] relative font-sans overflow-x-clip text-zinc-900 w-full flex items-center justify-center py-20 md:py-40"
    >
      {/* Background "My Work" text */}
      <div className="absolute top-0 left-0 w-full flex items-start justify-center pointer-events-none z-0 pt-1 md:pt-0">
        <h1 className="text-[15vw] sm:text-[18vw] md:text-[22vw] font-black text-zinc-950 tracking-tighter leading-none whitespace-nowrap uppercase">
          My Work
        </h1>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#f4c400]/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Desktop: Archive box + scattered image cards */}
      <div className="mt-12 relative w-full max-w-7xl h-full flex items-center justify-center perspective-[2000px] z-10">
        <div className="relative w-0 h-0 transform-style-3d">

          {/* Back of the archive box */}
          <div
            ref={boxBackRef}
            className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video bg-[#f4c400] rounded-[24px] shadow-[0_20px_50px_rgba(217,163,0,0.3)] flex items-center justify-center"
            style={{ zIndex: 5 }}
          >
            <div className="absolute -top-6 left-6 w-32 h-8 bg-[#d9a300] rounded-t-xl" />
            <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_20px_40px_rgba(0,0,0,0.08)] opacity-60 pointer-events-none" />
            <div className="relative z-10 text-[#d9a300] font-black text-2xl tracking-widest uppercase opacity-40">
              Archive
            </div>
          </div>

          {/* Desktop project image cards */}
          {projects.map((project, index) => (
            <a
              key={`desktop-${index}`}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              ref={(el) => (cardsRef.current[index] = el)}
              className="hidden md:block absolute w-[75vw] md:w-[28vw] max-w-[340px] aspect-video will-change-transform cursor-pointer group"
              style={{ zIndex: 10 + index }}
            >
              <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/60 bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] group-hover:scale-[1.03]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </a>
          ))}

          {/* Front lid of archive box */}
          <div
            ref={boxLidRef}
            className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video pointer-events-none will-change-transform"
            style={{ zIndex: 60 }}
          >
            <div className="absolute bottom-0 w-full h-[85%] bg-[#f4c400] rounded-b-[24px] rounded-t-md shadow-[0_-5px_20px_rgba(0,0,0,0.15)] flex flex-col justify-end p-6 border-t border-white/30">
              <div className="absolute inset-0 rounded-b-[24px] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.05)] pointer-events-none" />
              <div className="w-20 h-1.5 bg-black/10 rounded-full mx-auto mb-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll gallery */}
      <div
        ref={mobileContainerRef}
        className="md:hidden absolute top-1/2 left-0 -translate-y-1/2 w-full py-12 flex items-center gap-6 px-[12.5vw] pointer-events-none z-[100] snap-x snap-mandatory overflow-x-hidden hide-scrollbar"
      >
        {projects.map((project, index) => (
          <a
            key={`mobile-${index}`}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            ref={(el) => (mobileCardsRef.current[index] = el)}
            className="shrink-0 w-[75vw] aspect-video snap-center will-change-transform"
          >
            <div className="w-full h-full rounded-[24px] overflow-hidden border border-white/60 bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] transition-all duration-500">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
