export default function AuthorityImpact() {
  return (
    <section className="bg-surface-container-lowest py-32 px-8 border-t border-borderDark/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-headline italic tracking-tighter mb-6 text-on-surface">Authority & Impact.</h2>
          <div className="h-[1px] w-24 bg-tertiary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          <div className="flex flex-col items-center text-center">
            <span className="text-7xl font-headline tracking-tighter text-on-surface mb-2">160K+</span>
            <span className="text-[10px] font-label tracking-[0.4em] uppercase text-on-surface/40">Global Community</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-7xl font-headline tracking-tighter text-on-surface mb-2">12M+</span>
            <span className="text-[10px] font-label tracking-[0.4em] uppercase text-on-surface/40">Collective Impressions</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-7xl font-headline tracking-tighter text-on-surface mb-2">08</span>
            <span className="text-[10px] font-label tracking-[0.4em] uppercase text-on-surface/40">International Awards</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-bold tracking-tighter font-headline flex items-center gap-2 text-white">
            <span className="material-symbols-outlined">movie</span> CANNES FILM FESTIVAL
          </div>
          <div className="text-xl font-bold tracking-tighter font-headline flex items-center gap-2 text-white">
            <span className="material-symbols-outlined">stars</span> BERLINALE
          </div>
          <div className="text-xl font-bold tracking-tighter font-headline flex items-center gap-2 text-white">
            <span className="material-symbols-outlined">lens</span> VOGUE
          </div>
          <div className="text-xl font-bold tracking-tighter font-headline flex items-center gap-2 text-white">
            <span className="material-symbols-outlined">camera_roll</span> NATIONAL GEOGRAPHIC
          </div>
          <div className="text-xl font-bold tracking-tighter font-headline flex items-center gap-2 text-white">
            <span className="material-symbols-outlined">video_library</span> VIMEO STAFF PICK
          </div>
        </div>
      </div>
    </section>
  );
}
