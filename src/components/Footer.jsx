const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

export default function Footer() {
  const marqueeText = 'FULL STACK DEVELOPER • MOHAN RAO • REACT.JS • NODE.JS • PORTFOLIO • '.repeat(4)

  return (
    <footer className="w-full bg-[#f4c400] text-zinc-950 rounded-t-[50px] md:rounded-t-[100px] pt-16 pb-12 px-8 overflow-hidden relative shadow-[0_-20px_50px_rgba(244,196,0,0.1)]">
      {/* Scrolling background text */}
      <div className="absolute top-8 md:top-12 left-0 w-full pointer-events-none opacity-[0.05] z-0 flex flex-col gap-0 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-slide-left w-max">
          <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
            {marqueeText}
          </h1>
          <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
            {marqueeText}
          </h1>
        </div>
        <div className="flex whitespace-nowrap animate-slide-right w-max">
          <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
            {marqueeText}
          </h1>
          <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
            {marqueeText}
          </h1>
        </div>
        <div className="flex whitespace-nowrap animate-slide-left w-max">
          <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
            {marqueeText}
          </h1>
          <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
            {marqueeText}
          </h1>
        </div>
        <div className="flex whitespace-nowrap animate-slide-right w-max">
          <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
            {'CONNECT ON LINKEDIN • '.repeat(8)}
          </h1>
          <h1 className="text-[14vw] lg:text-[7.5vw] font-black uppercase tracking-tighter text-zinc-950 leading-none pr-8">
            {'CONNECT ON LINKEDIN • '.repeat(8)}
          </h1>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-7xl mx-auto">
        {/* Avatar/Logo area */}
        <div className="flex flex-col items-center justify-center w-full mb-8 z-10">
          {/* Footer portrait — add your PNG here */}
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center mb-6 overflow-hidden">
            {/* 
              Put your PNG image in public/assets/ and change the src below.
              Example: src="/assets/footer-portrait.png"
            */}
            <img
              src="/assets/myPic2.png"
              alt="Mohan Rao Boddu"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/boddumohanrao"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 md:px-12 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 text-sm md:text-base tracking-wide"
            >
              Connect
            </a>
            <a
              href="mailto:boddumohanrao.23.it@anits.edu.in"
              className="bg-zinc-200 hover:bg-white text-zinc-900 font-bold py-3 px-8 md:px-12 rounded-xl transition-all shadow-lg text-sm md:text-base tracking-wide"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center">
          <a href="#home" className="text-4xl md:text-5xl font-black tracking-tight flex items-center gap-1">
            <span className="text-zinc-950">Mohan</span>
            <span className="text-white drop-shadow-md">.dev</span>
          </a>
          <p className="mt-4 text-zinc-800 font-medium text-center max-w-sm">
            Building digital experiences that solve real problems and deliver impact.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-4 md:gap-12 px-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs sm:text-sm md:text-base uppercase tracking-widest font-bold text-zinc-900 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl h-[2px] bg-zinc-950/10 rounded-full mt-2 md:mt-4" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl text-xs sm:text-sm font-bold text-zinc-800 text-center md:text-left gap-4 md:gap-0 mt-2 md:mt-0">
          <p className="px-4 leading-relaxed">
            © {new Date().getFullYear()} Mohan.dev. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
