export default function GalleryPage() {
  const visuals = [
    { src: "https://img.youtube.com/vi/clga7SPzx2Q/hqdefault.jpg", tag: "JAYAMARTHANDA GATE", aspect: "aspect-[4/5]", url: "https://www.youtube.com/watch?v=clga7SPzx2Q" },
    { src: "https://img.youtube.com/vi/WWmaDl_l76Q/hqdefault.jpg", tag: "GB HOLE", aspect: "aspect-[3/4]", url: "https://www.youtube.com/watch?v=WWmaDl_l76Q" },
    { src: "https://img.youtube.com/vi/YAIzMGyWB2E/hqdefault.jpg", tag: "SECRET ROUTE", aspect: "aspect-square", url: "https://www.youtube.com/watch?v=YAIzMGyWB2E" },
    { src: "https://img.youtube.com/vi/TvZAU1pEoGU/hqdefault.jpg", tag: "COL. BAILLIE'S DUNGEON", aspect: "aspect-[4/5]", url: "https://www.youtube.com/watch?v=TvZAU1pEoGU" },
    { src: "/Prashanth_Bike.jpg", tag: "DIRECTOR BTS", aspect: "aspect-[3/4]", url: "/about" },
    { src: "https://img.youtube.com/vi/UCx2-sIvdlY/hqdefault.jpg", tag: "DELHI GATE LEGACY", aspect: "aspect-[4/5]", url: "https://www.youtube.com/watch?v=UCx2-sIvdlY" },
  ];

  return (
    <main className="pt-48 pb-20 bg-background min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <h1 className="font-headline text-5xl md:text-7xl italic text-primary mb-6">Visual Gallery</h1>
        <div className="w-32 h-[1px] bg-accent mb-12"></div>
        
        <p className="text-primary-dim max-w-2xl font-body text-xl mb-24 leading-relaxed">
          Stills from the legendary Srirangapatna and Surapura productions. Each frame a calculated exposure by Prashanth P., documenting the soul of Karunadu.
        </p>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {visuals.map((img, idx) => (
            <a key={idx} href={img.url} target={img.url.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className={`block w-full ${img.aspect} bg-surface border border-border flex items-end justify-center relative overflow-hidden group shadow-cinematic break-inside-avoid shadow-sm rounded-2xl`}>
              <img 
                src={img.src} 
                alt={img.tag} 
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-background bg-accent px-4 py-2 mb-8 relative z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-bold">{img.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
