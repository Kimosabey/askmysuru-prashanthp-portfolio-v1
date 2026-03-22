import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-on-surface overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,111,192,0.1)_0%,rgba(0,0,0,1)_100%)]"></div>
      
      {/* 35mm Perforations */}
      <div className="absolute top-0 bottom-0 left-8 flex flex-col justify-between py-12 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-4 h-6 border border-white rounded-sm"></div>
        ))}
      </div>
      <div className="absolute top-0 bottom-0 right-8 flex flex-col justify-between py-12 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-4 h-6 border border-white rounded-sm"></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <span className="text-primary font-label text-sm tracking-[0.5em] uppercase block mb-4">Error 404</span>
        <h1 className="text-6xl md:text-9xl font-headline italic mb-6">The Lost Path</h1>
        
        <p className="text-xl font-body text-on-surface-variant max-w-md mx-auto mb-2 italic">
          "This frame was left on the cutting room floor."
        </p>
        <p className="text-lg font-kannada text-on-surface-variant/40 max-w-md mx-auto mb-12">
          ಈ ದೃಶ್ಯವನ್ನು ಕತ್ತರಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಹಿಂದಕ್ಕೆ ಹೋಗಿ.
        </p>

        <Link 
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary-container text-on-primary-container hover:scale-105 transition-transform duration-300 font-label tracking-widest text-[11px] font-bold uppercase rounded-sm"
        >
          <span className="material-symbols-outlined text-sm">keyboard_return</span>
          Return to Reel
        </Link>
      </div>
    </main>
  );
}
