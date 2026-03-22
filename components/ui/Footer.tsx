export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 mt-20 border-t border-[#414751]/15 bg-[#131313] z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 md:text-left text-center">
          <p className="text-[#E2E2E2] font-semibold font-label uppercase tracking-[0.2em] text-[10px]">© 2024 PRASHANTH P. — DIRECTED BY VISION</p>
          <p className="text-[#E2E2E2]/30 font-headline italic text-sm">Crafting narratives through the cinematic lens.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-[#E2E2E2]/40 hover:text-[#206FC0] transition-colors duration-500 font-label uppercase tracking-[0.2em] text-[10px]" href="#">INSTAGRAM</a>
          <a className="text-[#E2E2E2]/40 hover:text-[#206FC0] transition-colors duration-500 font-label uppercase tracking-[0.2em] text-[10px]" href="#">VIMEO</a>
          <a className="text-[#E2E2E2]/40 hover:text-[#206FC0] transition-colors duration-500 font-label uppercase tracking-[0.2em] text-[10px]" href="#">LINKEDIN</a>
          <a className="text-[#E2E2E2]/40 hover:text-[#206FC0] transition-colors duration-500 font-label uppercase tracking-[0.2em] text-[10px]" href="#">EMAIL</a>
        </div>
      </div>
      
      {/* Technical Badge */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-center items-center gap-4 opacity-20">
        <div className="h-px bg-outline-variant flex-grow"></div>
        <span className="material-symbols-outlined text-xs">filter_frames</span>
        <span className="font-label text-[8px] tracking-[0.4em] uppercase text-[#E2E2E2]">35MM DIGITAL PROCESS</span>
        <span className="material-symbols-outlined text-xs">filter_frames</span>
        <div className="h-px bg-outline-variant flex-grow"></div>
      </div>
    </footer>
  );
}
