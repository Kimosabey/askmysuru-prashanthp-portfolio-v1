import { MOCK_PROJECTS } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";

import { ArrowLeft, Play } from "lucide-react";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = MOCK_PROJECTS.find(p => p.id === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="relative pt-20 bg-background text-primary">
      {/* Hero Header */}
      <section className="relative h-screen min-h-[400px] md:min-h-[700px] overflow-hidden flex items-end px-6 pb-24 md:px-12 md:pb-32 max-w-[1600px] mx-auto">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full object-cover grayscale brightness-50 bg-cover bg-center transition-all" 
            style={{ backgroundImage: `url(${project.featuredImg})` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          {/* Marine Overlay */}
          <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
        </div>

        {/* Viewfinder Accents */}
        <div className="absolute inset-6 md:inset-10 pointer-events-none z-10 hidden sm:block border border-border">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/60"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/60"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/60"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/60"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-primary-dim/40"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-[1px] bg-primary-dim/40"></div>
        </div>

        <div className="relative z-20 max-w-4xl">
          <Link href="/#archive" className="md:hidden text-accent text-xs font-label uppercase tracking-widest flex items-center gap-2 mb-8">
            <ArrowLeft size={16} />
            Back to Archive
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-background/40 backdrop-blur-sm text-primary px-3 py-1 text-[10px] font-label tracking-[0.2em] uppercase border border-border font-bold">
              {project.category}
            </span>
            <span className="text-primary-dim font-label text-[10px] tracking-[0.2em]">02 // 04</span>
          </div>
          <h1 className="fluid-h1 font-headline italic mb-4 leading-[0.9] tracking-tighter text-primary drop-shadow-cinematic">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl font-headline text-primary-dim opacity-80 max-w-2xl italic leading-relaxed">
            "{project.description}"
          </p>
        </div>
      </section>

      {/* Sprocket Divider */}
      <div className="flex justify-center flex-wrap gap-4 py-8 overflow-hidden bg-surface border-y border-border px-6 hidden sm:flex">
        {[...Array(12)].map((_, i) => <div key={i} className="sprocket-hole"></div>)}
      </div>

      {/* Narrative Section */}
      <section className="py-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 bg-background max-w-[1600px] mx-auto">
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
          <h2 className="text-[10px] font-label uppercase tracking-[0.4em] text-accent mb-8">The Narrative</h2>
          <div className="space-y-12">
            <div className="group">
              <p className="fluid-h2 font-headline italic text-primary leading-tight mb-6">
                "{project.narrative || "Capturing the essence of Karnataka's unseen heritage through a cinematic lens."}"
              </p>
              <p className="text-base md:text-xl font-kannada text-primary-dim tracking-wide leading-relaxed pl-4 md:pl-6 border-l-2 border-accent/40 break-words">
                "{project.kannadaTitle}... ದಾಸ್ತಾನು ಮತ್ತು ದೃಶ್ಯ ಕಥೆಗಳು."
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-start-7 lg:col-span-6 space-y-16">
          <div className="aspect-[4/3] bg-surface relative overflow-hidden group shadow-cinematic border border-border">
            <img 
              alt="Narrative still" 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
              src={project.featuredImg} 
            />
            <div className="absolute bottom-6 right-6 font-label text-[10px] tracking-widest text-primary-dim uppercase bg-background/80 px-3 py-1 rounded-sm border border-border">SC_012 // EXT</div>
          </div>
          <div className="space-y-8">
            <p className="fluid-body text-primary-dim">
              Explore the intricate details of {project.title}. This visual portfolio documents the structural and cultural significance of the {project.category} vertical, shot over several months of dedicated field work.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-6 md:px-12 bg-surface-elevated border-y border-border">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-[10px] font-label uppercase tracking-[0.4em] text-accent mb-12 text-center md:text-left">Technical Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 group">
              <span className="text-[10px] font-label text-primary-dim uppercase tracking-widest block mb-4 group-hover:text-primary transition-colors">Camera System</span>
              <h3 className="text-xl font-headline italic text-primary">{project.specs?.camera || "ARRI Alexa Mini LF"}</h3>
            </div>
            <div className="glass-card p-8 group">
              <span className="text-[10px] font-label text-primary-dim uppercase tracking-widest block mb-4 group-hover:text-primary transition-colors">Glass</span>
              <h3 className="text-xl font-headline italic text-primary">{project.specs?.lens || "Cooke S4/i Primes"}</h3>
            </div>
            <div className="glass-card p-8 group">
              <span className="text-[10px] font-label text-primary-dim uppercase tracking-widest block mb-4 group-hover:text-primary transition-colors">Aspect Ratio</span>
              <h3 className="text-xl font-headline italic text-primary">{project.specs?.ratio || "2.39:1 Anamorphic"}</h3>
            </div>
            <div className="glass-card p-8 group">
              <span className="text-[10px] font-label text-primary-dim uppercase tracking-widest block mb-4 group-hover:text-primary transition-colors">Format</span>
              <h3 className="text-xl font-headline italic text-primary">ARRIRAW 4.5K</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Lens Gallery */}
      <section className="py-32 px-6 md:px-12 bg-background max-w-[1600px] mx-auto">
        <h2 className="text-[10px] font-label uppercase tracking-[0.4em] text-accent mb-12">Behind the Lens</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 aspect-[16/10] md:aspect-auto bg-surface overflow-hidden relative border border-border group">
            <img alt="BTS 1" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-[1.5s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIxLsuMA1964Z5GbHvARax_N6_ODVQR03_3EIAn_5vCb9ZofEtmXOBnbHUI9NGHS0Vi-2P-WTJ9Q_UG9UKi_oY1gb8mULGZO5lN4kbrT6Hz5DgSyCJKAsLc-O7XTg2LGqytzWg4BzUrszLs6iVGwZDQ9Ix8Q2OFXSVLjAqyQ9IZ7VofR1c58EB-fgCENAyYzvH46yg63gTJvJTeCBKdW67b29-xOd858ycCIfZbZxS1eCcqdEGHqsuXJ7dMgpHoGGOqux0T56eAA" />
          </div>
          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            <div className="h-[50%] aspect-square md:aspect-auto bg-surface overflow-hidden border border-border group">
              <img alt="BTS 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeAVrs0wkdMoTzh7QbT2r4AqM0G5V69eJOJchtyxRnt3wfkvx3JGdSWK4Vb_0gIVbZszxKP9fglNtspWvEECeZRQ8Enz_GOizVSNjUIfeQ-01j8VVIAKTPmKww82pBkCRSdXjvgesxO3sexY9LTXW6GiWANlQ39bralK0IkUahzAJ6ZvFU35RydhMyRXYYlgXz0-MAWAHYTlUIAtxiJVQC3Ch7TO2589cKdQh8uXdZtLQRIMNUQQ0q0hJkbICK0t2BaZlxQ5HM8A" />
            </div>
            <div className="h-[50%] aspect-square md:aspect-auto bg-surface overflow-hidden border border-border group">
              <img alt="BTS 3" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQBo5TEr0_zY_CGby_mg-xkfs6Ky-d08cKlesXf5ttDknrT2ew9nXALpA8JVMSxnsc1RYGmurITq9E12TQ10ahFzncFWki9WrMKNRUMsIyBh4MhbD8Zri4WlZTHtvGvQ3bmPrCIuMRpoHL3BWV41VJFXkUXTwI1-MeXJkRqCyFz8kBc2aJqSIjd0s93c0gBi3gbAp4Z8hKv6R0zzsIWxLUVVtaZ6ax1UzUb4YcxWoOTFPf4bDWO9AENLgQCTtEnF4FqL6EWqLiEQ" />
            </div>
          </div>
          <div className="md:col-span-12 aspect-[21/9] bg-surface overflow-hidden relative border border-border mt-2 group">
            <img alt="BTS 4" className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-1000 scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkU-jpAvaavHLYx6dzMFXGUXA16j4NVK-5NgqhW98zM4siLiyHscCpMBssVEU35bs6s7GQHNf87DZ1kEJ4nBLSrznOiBGJTKlZVurSVw-yjiYXopt1uqg8pL6JEc93sCZLFT0FtEAiiO4EVVS3wmumSeqvLhodtuinjfhOAcrNMgpzEVLLoaUu7MJ8cxidG56bXsdcAdRStA2OZc0qwO7CP6ejIfdx3U2vM3bbpuy8qEhKwNu4ckRY0HXR1VlUZS5ma5M2TKsLLQ" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8 md:p-16">
              <button className="bg-primary text-background px-8 py-4 rounded-sm flex items-center gap-4 hover:scale-105 hover:bg-accent transition-all">
                <span className="text-[11px] font-label font-bold uppercase tracking-widest">Watch the reel</span>
                <Play size={20} className="fill-current" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
