import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    bgColor: '#648c11',
    title: 'Frontend Development',
    desc: 'Beautiful, responsive user interfaces built with React.js, modern CSS, and seamless UX patterns.',
    tag: 'React.js',
    icon: '🎨',
    img: '/assets/front.png',
  },
  {
    bgColor: '#ff4500',
    title: 'Backend Development',
    desc: 'Robust server-side applications with Node.js, Express.js, REST APIs, and secure authentication.',
    tag: 'Node.js',
    icon: '⚙️',
    img: '/assets/back.jpg',
  },
  {
    bgColor: '#000080',
    title: 'Database Design',
    desc: 'Efficient database architecture with SQL, optimized for performance and scalability.',
    tag: 'Database',
    icon: '🗄️',
    img: '/assets/data.png',
  },
  {
    bgColor: '#ff0000',
    title: 'Full Stack Web Apps',
    desc: 'End-to-end web applications with complete SDLC — from design to deployment and maintenance.',
    tag: 'Full Stack',
    icon: '🚀',
    img: '/assets/full.jpg',
  },
  {
    bgColor: '#fff000',
    title: 'API Development',
    desc: 'RESTful API design and implementation with JWT authentication, validation, and error handling.',
    tag: 'REST APIs',
    icon: '🔗',
    img: '/assets/api.png',
  },
  {
    bgColor: '#f5f5f5',
    title: 'Deployment',
    desc: 'Deploying applications on Vercel, Netlify, and Render with CI/CD and version control.',
    tag: 'Deploy',
    icon: '☁️',
    img: '/assets/deploy.jpg',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const bgRefs = useRef([])
  const textRefs = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const updateCards = (progress) => {
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          const offset = i - progress
          const radius = window.innerWidth < 768 ? 800 : 1800
          const angle = offset * (window.innerWidth < 768 ? 25 : 18)
          const angleRad = (angle * Math.PI) / 180
          const x = Math.sin(angleRad) * radius
          const y = radius - Math.cos(angleRad) * radius
          const z = -Math.abs(offset) * 50
          const scale = Math.max(0.4, 1 - Math.abs(offset) * 0.15)
          const rotation = angle
          const opacity = Math.max(0.1, 1 - Math.abs(offset) * 0.3)
          const zIndex = Math.round(100 - Math.abs(offset) * 10)

          gsap.set(card, { x, y, z, scale, rotationZ: rotation, rotationY: 0, opacity, zIndex })
        })

        bgRefs.current.forEach((bg, i) => {
          if (!bg) return
          const opacity = Math.max(0, 1 - Math.abs(i - progress))
          gsap.set(bg, { opacity })
          if (textRefs.current[i]) {
            gsap.set(textRefs.current[i], { opacity })
          }
        })
      }

      updateCards(0)

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=500%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          updateCards(self.progress * (services.length - 1))
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full h-screen bg-white text-black overflow-hidden flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      {/* Background color layers */}
      {services.map((s, i) => (
        <div
          key={i}
          ref={(el) => (bgRefs.current[i] = el)}
          className="absolute inset-0 z-0 pointer-events-none opacity-0"
          style={{ backgroundColor: s.bgColor }}
        />
      ))}

      {/* Background SERVICES text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {services.map((s, i) => (
          <h1
            key={`text-${i}`}
            ref={(el) => (textRefs.current[i] = el)}
            className="absolute text-[22vw] md:text-[18vw] font-black uppercase text-transparent leading-none tracking-tighter mix-blend-overlay"
            style={{
              WebkitTextStroke: `2px ${i === 5 ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.4)'}`,
              opacity: 0,
            }}
          >
            SERVICES
          </h1>
        ))}
      </div>

      {/* Cards */}
      <div className="relative w-full h-full flex items-center justify-center z-10" style={{ transformStyle: 'preserve-3d' }}>
        {services.map((s, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="absolute w-[80vw] sm:w-[350px] md:w-[420px] h-[450px] md:h-[550px] rounded-[30px] border border-white/20 flex flex-col justify-between overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={s.img} 
                alt={s.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark overlay so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
            </div>

            {/* Hover overlay extra darken */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Card text content */}
            <div className="relative z-20 flex flex-col flex-1 justify-between p-6 md:p-8">
              {/* Icon and tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl md:text-5xl drop-shadow-md">{s.icon}</span>
                <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/30 shadow-sm">
                  {s.tag}
                </span>
              </div>

              {/* Title and description */}
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3 drop-shadow-lg">
                  {s.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base line-clamp-3 drop-shadow-md">
                  {s.desc}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="mt-6">
                <div className="w-full h-1.5 rounded-full opacity-60" style={{ backgroundColor: s.bgColor }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
