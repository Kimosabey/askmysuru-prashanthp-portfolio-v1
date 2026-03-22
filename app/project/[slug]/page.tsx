import { MOCK_PROJECTS } from "@/lib/mockData";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = MOCK_PROJECTS.find(p => p.id === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="relative pt-20 bg-background text-on-surface">
      {/* Hero Header */}
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-end px-8 pb-24 md:px-20 md:pb-32">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full object-cover grayscale brightness-50 bg-cover bg-center" 
            style={{ backgroundImage: `url(${project.featuredImg})` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          {/* Marine Overlay */}
          <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay"></div>
        </div>

        {/* Viewfinder Accents */}
        <div className="absolute inset-10 pointer-events-none z-10 hidden md:block border border-white/5">
          <div className="absolute top-0 left-0 viewfinder-corner border-t-2 border-l-2"></div>
          <div className="absolute top-0 right-0 viewfinder-corner border-t-2 border-r-2"></div>
          <div className="absolute bottom-0 left-0 viewfinder-corner border-b-2 border-l-2"></div>
          <div className="absolute bottom-0 right-0 viewfinder-corner border-b-2 border-r-2"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-primary/40"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-[1px] bg-primary/40"></div>
        </div>

        <div className="relative z-20 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary-container/20 text-primary px-3 py-1 text-[10px] font-label tracking-[0.2em] uppercase border border-primary/20">
              {project.category}
            </span>
            <span className="text-on-surface-variant font-label text-[10px] tracking-[0.2em]">02 // 04</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-headline italic mb-4 leading-tight tracking-tighter text-on-surface">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl font-headline text-on-surface-variant opacity-80 max-w-2xl italic">
            A journey through the whispers of the Western Ghats.
          </p>
        </div>
      </section>

      {/* Sprocket Divider */}
      <div className="flex justify-center gap-4 py-8 overflow-hidden bg-surface-container-lowest">
        {[...Array(12)].map((_, i) => <div key={i} className="sprocket-hole"></div>)}
      </div>

      {/* Narrative Section */}
      <section className="py-32 px-8 md:px-20 grid md:grid-cols-12 gap-16 bg-surface">
        <div className="md:col-span-5 md:sticky md:top-32 h-fit">
          <h2 className="text-sm font-label uppercase tracking-[0.3em] text-primary mb-8">The Narrative</h2>
          <div className="space-y-12">
            <div className="group">
              <p className="text-2xl md:text-3xl font-headline italic text-on-surface leading-snug mb-4">
                "The mountains do not speak, they echo. In the stillness of the dawn, we find what we lost in the city noise."
              </p>
              <p className="text-lg md:text-xl font-kannada text-zinc-500">
                "{project.kannadaTitle}... ಬೆಟ್ಟಗಳು ಮಾತನಾಡುವುದಿಲ್ಲ, ಅವು ಪ್ರತಿಧ್ವನಿಸುತ್ತವೆ. ಮುಂಜಾನೆಯ ನಿಶ್ಯಬ್ದದಲ್ಲಿ, ನಗರದ ಗದ್ದಲದಲ್ಲಿ ನಾವು ಕಳೆದುಕೊಂಡಿದ್ದನ್ನು ಕಂಡುಕೊಳ್ಳುತ್ತೇವೆ."
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-start-7 md:col-span-6 space-y-16">
          <div className="aspect-[4/3] bg-surface-container-low relative overflow-hidden group">
            <img 
              alt="Narrative still" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Yb_Z9j7hEunM9d9ypIFEk1-o368d7wY5SycAcGdvZcbS_1xSpYCcn2xffX7VJmDgi8cS-SLwf5j_oOyk5hUp_ZyRRlDSB8IPW__bSWhdsqI6WihuYKJZMVSg-u1MkyxHrxHpc3x4ir7BddJ1Crso8ZKpFUM4HfbKf_E12HAYFVA2NXlMCS_aZZq6k6hla_1iL624J6R4XS9jkiQnohVWRmfEb2mPueqXpp6sUdCliwZmKAAkXlmoyKK1s6LjQt5P7UxJTDf3pQ" 
            />
            <div className="absolute bottom-6 right-6 font-label text-[10px] tracking-widest text-white/40">SC_012 // EXT</div>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              {project.description} This visual poem explores the symbiotic relationship between the tribal communities of the Malnad region and the encroaching modern world. Filmed over 40 days during the peak monsoon, the short captures the raw, unfiltered essence of survival and spirituality.
            </p>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed mt-8">
              The decision to shoot in largely monochromatic contrast was intentional—to strip away the romanticism of the green landscape and focus on the textures of skin, stone, and mist.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-8 md:px-20 bg-surface-container-lowest border-t border-borderDark/20">
        <h2 className="text-sm font-label uppercase tracking-[0.3em] text-primary mb-12">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          <div className="bg-surface p-8 border border-outline-variant/10">
            <span className="text-[10px] font-label text-zinc-500 uppercase tracking-widest block mb-4">Camera System</span>
            <h3 className="text-xl font-headline italic">Arri Alexa Mini LF</h3>
          </div>
          <div className="bg-surface p-8 border border-outline-variant/10">
            <span className="text-[10px] font-label text-zinc-500 uppercase tracking-widest block mb-4">Glass</span>
            <h3 className="text-xl font-headline italic">Cooke S4/i Primes</h3>
          </div>
          <div className="bg-surface p-8 border border-outline-variant/10">
            <span className="text-[10px] font-label text-zinc-500 uppercase tracking-widest block mb-4">Aspect Ratio</span>
            <h3 className="text-xl font-headline italic">2.39:1 Anamorphic</h3>
          </div>
          <div className="bg-surface p-8 border border-outline-variant/10">
            <span className="text-[10px] font-label text-zinc-500 uppercase tracking-widest block mb-4">Format</span>
            <h3 className="text-xl font-headline italic">ARRIRAW 4.5K</h3>
          </div>
        </div>
      </section>

      {/* Behind the Lens Gallery */}
      <section className="py-32 px-8 md:px-20 border-t border-borderDark/20 bg-black">
        <h2 className="text-sm font-label uppercase tracking-[0.3em] text-primary mb-12">Behind the Lens</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 aspect-video bg-surface-container-low overflow-hidden relative">
            <img alt="BTS 1" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIxLsuMA1964Z5GbHvARax_N6_ODVQR03_3EIAn_5vCb9ZofEtmXOBnbHUI9NGHS0Vi-2P-WTJ9Q_UG9UKi_oY1gb8mULGZO5lN4kbrT6Hz5DgSyCJKAsLc-O7XTg2LGqytzWg4BzUrszLs6iVGwZDQ9Ix8Q2OFXSVLjAqyQ9IZ7VofR1c58EB-fgCENAyYzvH46yg63gTJvJTeCBKdW67b29-xOd858ycCIfZbZxS1eCcqdEGHqsuXJ7dMgpHoGGOqux0T56eAA" />
            <div className="absolute inset-0 bg-primary-container/5"></div>
          </div>
          <div className="md:col-span-4 aspect-square md:aspect-auto bg-surface-container-low overflow-hidden">
            <img alt="BTS 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeAVrs0wkdMoTzh7QbT2r4AqM0G5V69eJOJchtyxRnt3wfkvx3JGdSWK4Vb_0gIVbZszxKP9fglNtspWvEECeZRQ8Enz_GOizVSNjUIfeQ-01j8VVIAKTPmKww82pBkCRSdXjvgesxO3sexY9LTXW6GiWANlQ39bralK0IkUahzAJ6ZvFU35RydhMyRXYYlgXz0-MAWAHYTlUIAtxiJVQC3Ch7TO2589cKdQh8uXdZtLQRIMNUQQ0q0hJkbICK0t2BaZlxQ5HM8A" />
          </div>
          <div className="md:col-span-4 aspect-square bg-surface-container-low overflow-hidden">
            <img alt="BTS 3" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQBo5TEr0_zY_CGby_mg-xkfs6Ky-d08cKlesXf5ttDknrT2ew9nXALpA8JVMSxnsc1RYGmurITq9E12TQ10ahFzncFWki9WrMKNRUMsIyBh4MhbD8Zri4WlZTHtvGvQ3bmPrCIuMRpoHL3BWV41VJFXkUXTwI1-MeXJkRqCyFz8kBc2aJqSIjd0s93c0gBi3gbAp4Z8hKv6R0zzsIWxLUVVtaZ6ax1UzUb4YcxWoOTFPf4bDWO9AENLgQCTtEnF4FqL6EWqLiEQ" />
          </div>
          <div className="md:col-span-8 aspect-[21/9] bg-surface-container-low overflow-hidden relative">
            <img alt="BTS 4" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkU-jpAvaavHLYx6dzMFXGUXA16j4NVK-5NgqhW98zM4siLiyHscCpMBssVEU35bs6s7GQHNf87DZ1kEJ4nBLSrznOiBGJTKlZVurSVw-yjiYXopt1uqg8pL6JEc93sCZLFT0FtEAiiO4EVVS3wmumSeqvLhodtuinjfhOAcrNMgpzEVLLoaUu7MJ8cxidG56bXsdcAdRStA2OZc0qwO7CP6ejIfdx3U2vM3bbpuy8qEhKwNu4ckRY0HXR1VlUZS5ma5M2TKsLLQ" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-sm flex items-center gap-4 hover:scale-105 transition-all">
                <span className="text-[10px] font-label uppercase tracking-widest">Watch the reel</span>
                <span className="material-symbols-outlined">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
