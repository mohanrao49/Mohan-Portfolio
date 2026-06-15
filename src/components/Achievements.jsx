export default function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      title: 'Smart India Hackathon',
      subtitle: 'Winner — Internal Round',
      color: '#f4c400',
    },
    {
      icon: '🥈',
      title: 'Miracle Citizen Hackathon',
      subtitle: 'Runner-up',
      color: '#C0C0C0',
    },
    {
      icon: '🥈',
      title: 'Vibe Coding Hackathon',
      subtitle: 'Runner-up',
      color: '#C0C0C0',
    },
  ]

  const certifications = [
    {
      title: 'NxtWave Full Stack Development',
      link: 'https://drive.google.com/drive/folders/1DsYKdPX4X21A8NSoqazNiFiM1C0w4Crg?usp=sharing',
      icon: '📜',
    },
    {
      title: 'Power BI Workshop Certificate',
      link: 'https://drive.google.com/file/d/1Y2kVRQfliA4iUVkLTaaJiLAHwUJugnJ8/view?usp=sharing',
      icon: '📊',
    },
    {
      title: 'Achievement Proofs',
      link: 'https://drive.google.com/drive/folders/1WkT9MiWkrjPPx9zp9iIUSPaU4wZ5zV2E?usp=sharing',
      icon: '🎖️',
    },
  ]

  return (
    <section className="relative w-full bg-zinc-950 text-white py-20 md:py-32 px-6 overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h1 className="text-[20vw] font-black text-white whitespace-nowrap tracking-tighter">
          ACHIEVE
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4 uppercase">
            Achievements & <span className="text-[#f4c400]">Certs</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#f4c400] rounded-full mx-auto" />
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group p-6 rounded-[24px] bg-zinc-900/50 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="text-xl font-bold mb-1">{a.title}</h3>
              <p className="text-zinc-400 text-sm font-medium">{a.subtitle}</p>
              <div className="w-12 h-1 rounded-full mt-4" style={{ backgroundColor: a.color }} />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold uppercase tracking-wider text-zinc-400">
            Certifications
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group p-6 rounded-[24px] bg-zinc-900/50 border border-white/10 hover:border-[#f4c400]/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{c.icon}</span>
                <span className="font-semibold text-sm text-zinc-300 group-hover:text-[#facc15] transition-colors">{c.title}</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-zinc-500 text-xs font-medium">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Certificate
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
