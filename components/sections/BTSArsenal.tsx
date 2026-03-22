"use client";

import { motion } from "framer-motion";

export default function BTSArsenal() {
  return (
    <>
      <main className="pt-32 pb-20 bg-background overflow-hidden relative border-t border-borderDark/20">
        <div className="absolute inset-0 bg-black z-0" />
        <div className="grid-dots fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay" />
        
        {/* Behind The Lens Header */}
        <header className="px-8 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            <span className="text-tertiary font-label text-[10px] tracking-[0.3em] uppercase mb-4 block">Process & Observation</span>
            <h1 className="text-6xl md:text-8xl font-headline italic leading-[0.9] tracking-tighter text-on-surface">
              Behind <br/>The Lens.
            </h1>
          </div>
          <div className="flex items-center gap-4 text-outline-variant">
            <span className="text-[10px] font-label tracking-widest uppercase">Scroll to explore</span>
            <div className="w-20 h-[1px] bg-outline-variant/30"></div>
          </div>
        </header>

        {/* BTS Horizontal Scroll Gallery */}
        <section className="relative overflow-hidden mb-32 z-10">
          <div className="flex overflow-x-auto hide-scrollbar gap-8 px-8 snap-x snap-mandatory">
            {/* Film Strip Framing - Left */}
            <div className="flex-none w-24 flex-col justify-between py-12 opacity-20 hidden lg:flex">
              <div className="flex flex-col gap-2">
                <div className="w-4 h-6 border border-on-surface"></div>
                <div className="w-4 h-6 border border-on-surface"></div>
              </div>
              <div className="text-[10px] rotate-90 origin-left whitespace-nowrap tracking-[0.5em] font-label">ROLL NO. 042</div>
              <div className="flex flex-col gap-2">
                <div className="w-4 h-6 border border-on-surface"></div>
                <div className="w-4 h-6 border border-on-surface"></div>
              </div>
            </div>

            {/* Gallery Items */}
            <div className="flex-none w-[85vw] md:w-[600px] snap-center">
              <div className="relative group overflow-hidden bg-surface-container-low aspect-[4/5]">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" alt="SHADOW PLAY" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV0u8Ys4LYmIM6bldW0peG5w_7HGh0yZhM4B4ktEI-BrcHUchnUcz2eMS4FQsSrC9FJ4K-O74rzX-5Re1ifhCIrvvGy2z_1YlKuUY13g2BQ7GRFJSCPpBQ2r0JH1yb7I_Z94GrdU9ziEDASOBKLlrYmJakAn0ntD2xDGcWWDWs0ROfMGEE_bdUknzbxI8KyYsypWIhg_VOKa_FideaHlBber42R_oO1Twm5CDIw-_O86G9x5XxJk8BI2yPmMuyI9I264h9NwCjAQ"/>
                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                  <span className="text-[10px] font-label text-on-surface tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 self-start">01 / SHADOW PLAY</span>
                  <span className="text-sm font-headline italic text-on-surface/80">Location: Mumbai, IN</span>
                </div>
              </div>
            </div>

            <div className="flex-none w-[85vw] md:w-[700px] snap-center">
              <div className="relative group overflow-hidden bg-surface-container-low aspect-[16/9]">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" alt="THE ARCHITECTURE OF LIGHT" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCefy_GWpTHHyMy8bDP-Ro0qF6KHhnMrLMedXiBHl_ZWdAE-klkkVUiedZYyIjn0IOn90o5c7TaRyy4tDp9SO6XRFTuO4MikrXd5nFnIvDVYHq7aEur_57IDGcQ3wlsGfOtIKQMngOUkpYh_awSLBfs2VO9pqZTspWTNcCGwRzd7Q6g9_ynoVAETl2uaMdgEVRIMJFVSbBD2WII0lIC-m9KiskPvdig_5KpOiHJLNqHylZk8iwsn8jaZIpprfp3DWXjko7bxWRpvA"/>
                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                  <span className="text-[10px] font-label text-on-surface tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 self-start">02 / THE ARCHITECTURE OF LIGHT</span>
                </div>
              </div>
            </div>

            <div className="flex-none w-[85vw] md:w-[500px] snap-center">
              <div className="relative group overflow-hidden bg-surface-container-low aspect-[3/4]">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" alt="MOMENTS OF STILLNESS" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVoo4uM775UVNmrt65D9qUFi9hks5mb6EQI94Qrq8Z2C54PwIPl2wTGhFkHocj_TK99dtwSRGMafTilradSnRx-wAN27chtLq3XG7UtWUUm2NOjyI7xmb9GjbfLFIyGQKkfTgZ5nrOZFvBHEpc7zwiQh5qmE3zgSh_yvKpV8vM7t5JsdT-04dmTTW95uTyvRzvUnwExaTfVAjNF4JtadXByMKdMMSfn8JzDe0P54yVlMGya19Y8XzEUoaai942eUVj78CrKRvUwg"/>
                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                  <span className="text-[10px] font-label text-on-surface tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 self-start">03 / MOMENTS OF STILLNESS</span>
                </div>
              </div>
            </div>

            <div className="flex-none w-[85vw] md:w-[600px] snap-center">
              <div className="relative group overflow-hidden bg-surface-container-low aspect-square">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" alt="THE FINAL WRAP" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxpT4LCvXGj61elnCRhmbOpCKpYKt8j5LnmoBKtHLVW9ScOSfFCNT6tD_-IEzRZc4xZzg4oMcvxCod8FngJn4Q8A7mG4ZDPLU0qcqtKk2xO2giJVvQTZCWBEmTqiKb9j8bh5F4JCecb4B3qBeG8XNzgChc8mNDV1oEJGLSDV6FNyF85tTAdpHIfyeXI8e1eXzlFwS7DxykLTmBythl6ddXjl_0satsIJ6Xl1l408HqMRSqOgW9wkEoRPdT8i6Q1ZNd_fgriDgeWg"/>
                <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                  <span className="text-[10px] font-label text-on-surface tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 self-start">04 / THE FINAL WRAP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Arsenal Section */}
        <section className="max-w-7xl mx-auto px-8 pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-headline italic mb-6">The <br/>Arsenal.</h2>
              <p className="text-on-surface/60 font-body text-sm leading-relaxed mb-8 max-w-xs">
                  High-fidelity tools chosen for their unique optical signatures and reliability in the most demanding environments.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 border-l border-outline-variant/15 hover:border-tertiary transition-colors group">
                  <span className="text-[10px] font-label opacity-30 group-hover:opacity-100 transition-opacity">01</span>
                  <span className="font-label text-xs tracking-widest uppercase">Cinematography</span>
                </div>
                <div className="flex items-center gap-4 p-4 border-l border-outline-variant/15 hover:border-tertiary transition-colors group">
                  <span className="text-[10px] font-label opacity-30 group-hover:opacity-100 transition-opacity">02</span>
                  <span className="font-label text-xs tracking-widest uppercase">Movement & Grip</span>
                </div>
                <div className="flex items-center gap-4 p-4 border-l border-outline-variant/15 hover:border-tertiary transition-colors group">
                  <span className="text-[10px] font-label opacity-30 group-hover:opacity-100 transition-opacity">03</span>
                  <span className="font-label text-xs tracking-widest uppercase">Post-Processing</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-outline-variant/10">
              <div className="bg-surface p-12 flex flex-col justify-between aspect-square md:aspect-auto border border-outline-variant/5">
                <span className="material-symbols-outlined text-4xl text-primary font-light mb-8">videocam</span>
                <div>
                  <h3 className="text-xl font-body font-semibold mb-2 text-white">RED V-RAPTOR</h3>
                  <p className="text-[10px] font-label tracking-widest text-on-surface/40 uppercase">8K VV 120FPS SENSOR</p>
                </div>
              </div>
              <div className="bg-surface p-12 flex flex-col justify-between aspect-square md:aspect-auto border border-outline-variant/5">
                <span className="material-symbols-outlined text-4xl text-primary font-light mb-8">settings_input_component</span>
                <div>
                  <h3 className="text-xl font-body font-semibold mb-2 text-white">DJI RONIN 2</h3>
                  <p className="text-[10px] font-label tracking-widest text-on-surface/40 uppercase">PROFESSIONAL STABILIZATION</p>
                </div>
              </div>
              <div className="bg-surface p-12 flex flex-col justify-between aspect-square md:aspect-auto border border-outline-variant/5">
                <span className="material-symbols-outlined text-4xl text-primary font-light mb-8">camera</span>
                <div>
                  <h3 className="text-xl font-body font-semibold mb-2 text-white">SONY A7S III</h3>
                  <p className="text-[10px] font-label tracking-widest text-on-surface/40 uppercase">LOW-LIGHT ARCHITECTURE</p>
                </div>
              </div>
              <div className="bg-surface p-12 flex flex-col justify-between aspect-square md:aspect-auto border border-outline-variant/5">
                <span className="material-symbols-outlined text-4xl text-primary font-light mb-8">blur_on</span>
                <div>
                  <h3 className="text-xl font-body font-semibold mb-2 text-white">MASTER ANAMORPHIC</h3>
                  <p className="text-[10px] font-label tracking-widest text-on-surface/40 uppercase">ZEISS T1.9 LENS SERIES</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
