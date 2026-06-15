import { useEffect, useRef } from 'react'

const skills = [
  { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'Express.js', icon: '⚡', color: '#000000' },
  { name: 'SQL', icon: '🗄️', color: '#336791' },
  { name: 'JavaScript', icon: '🟨', color: '#F7DF1E' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'REST APIs', icon: '🔗', color: '#FF6C37' },
  { name: 'JWT Auth', icon: '🔐', color: '#D63AFF' },
  { name: 'Git & GitHub', icon: '🔀', color: '#F05032' },
  { name: 'HTML/CSS', icon: '🎨', color: '#E34F26' },
  { name: 'Bootstrap', icon: '🅱️', color: '#7952B3' },
  { name: 'Vercel', icon: '▲', color: '#000000' },
  { name: 'Netlify', icon: '🌐', color: '#00C7B7' },
  { name: 'VS Code', icon: '💻', color: '#007ACC' },
  { name: 'Render', icon: '🚀', color: '#46E3B7' },
]

function SkillCard({ card }) {
  return (
    <div className="shrink-0 mx-3 group">
      <div className="flex items-center gap-3 px-5 py-3 rounded-[20px] bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
        <span className="text-xl">{card.icon}</span>
        <span className="text-sm font-semibold text-zinc-800 whitespace-nowrap">{card.name}</span>
        <div className="w-3 h-3 rounded-full opacity-60" style={{ backgroundColor: card.color }} />
      </div>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef(null)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-white text-zinc-900 py-20 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      {/* Background text */}
      <div className="absolute top-0 left-0 w-full flex items-start justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <h1 className="text-[18vw] font-black text-zinc-950 tracking-tighter leading-none whitespace-nowrap uppercase">
          ABOUT ME
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4 uppercase">
            About <span className="text-[#f4c400]">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#f4c400] rounded-full mx-auto" />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Photo placeholder */}
          <div className="lg:w-[45%] flex justify-center" data-aos="fade-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[32px] bg-gradient-to-tr from-[#f4c400] to-[#facc15] shadow-[0_20px_50px_rgba(217,163,0,0.3)] flex items-center justify-center overflow-hidden border-4 border-white relative">
                {/* 
                  TODO: Add your profile image here!
                  1. Place your image in the `public/assets` folder (e.g. `profile.jpg`)
                  2. Uncomment the img tag below and update the src to `/assets/profile.jpg`
                */}
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(240,240,240,1)_100%)] flex items-center justify-center absolute inset-0">
                  <span className="text-6xl md:text-8xl font-black text-[#d9a300]/30">MR</span>
                </div>
                {<img src="/assets/about1.png" alt="Mohan Rao" className="w-full h-full object-cover relative z-10" />}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#f4c400]/15 rounded-full blur-[40px]" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px]" />
            </div>
          </div>

          {/* Text content */}
          <div className="lg:w-[55%]" data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900">
              Full Stack Developer
            </h3>
            <p className="text-zinc-600 leading-relaxed text-base md:text-lg mb-6">
              I am a Full Stack Developer with hands-on experience building and deploying production-ready web applications using React.js, Node.js, Express.js, SQL, REST APIs, and JWT Authentication. I have worked on complete software development lifecycles including frontend development, backend architecture, database design, authentication systems, API development, deployment, and team collaboration.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { num: '8+', label: 'REST APIs Built' },
                { num: '10+', label: 'Users Supported' },
                { num: '100+', label: 'Issues Managed' },
                { num: '8.85', label: 'CGPA' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-zinc-100 border border-zinc-200">
                  <div className="text-2xl md:text-3xl font-black text-[#d9a300]">{stat.num}</div>
                  <div className="text-xs font-semibold text-zinc-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="p-4 rounded-xl bg-[#f4c400]/5 border border-[#f4c400]/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#d9a300] font-bold text-sm">🎓 Education</span>
              </div>
              <p className="font-semibold text-zinc-800 text-sm">B.Tech in Information Technology</p>
              <p className="text-zinc-500 text-xs">Anil Neerukonda Institute of Technology and Sciences • 2023–2027</p>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-12" data-aos="fade-up">
          <h3 className="text-center text-lg font-bold uppercase tracking-widest text-zinc-400 mb-8">
            Tech Stack
          </h3>

          {/* Row 1 */}
          <div className="marquee-row w-full mx-auto max-w-[100vw] overflow-hidden relative mb-4">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div className="marquee-inner flex transform-gpu min-w-[200%]">
              {[...skills, ...skills, ...skills, ...skills].map((card, i) => (
                <SkillCard card={card} key={i} />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
          </div>

          {/* Row 2 - Reverse */}
          <div className="marquee-row w-full mx-auto max-w-[100vw] overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%]">
              {[...skills, ...skills, ...skills, ...skills].map((card, i) => (
                <SkillCard card={card} key={i} />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
