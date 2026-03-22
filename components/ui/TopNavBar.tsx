import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(226,226,226,0.04)]">
      <div className="flex justify-between items-center px-8 md:px-12 py-6 max-w-full mx-auto">
        <Link href="/" className="text-2xl font-headline italic uppercase tracking-[0.2em] text-[#E2E2E2] cursor-pointer hover:animate-pulse">
            PRASHANTH P.
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <Link href="/" className="text-primary font-bold border-b border-primary/30 pb-1 font-label uppercase tracking-[0.1em] text-[10px] hover:scale-105 transition-transform duration-300">
            REEL
          </Link>
          <Link href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-label uppercase tracking-[0.1em] text-[10px] hover:scale-105 duration-300">
            WORK
          </Link>
          <Link href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-label uppercase tracking-[0.1em] text-[10px] hover:scale-105 duration-300">
            ABOUT
          </Link>
          <Link href="#" className="text-on-surface/60 hover:text-on-surface transition-colors font-label uppercase tracking-[0.1em] text-[10px] hover:scale-105 duration-300">
            CONTACT
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2 rounded-sm text-[10px] font-bold tracking-[0.2em] hover:scale-105 transition-all">
              INQUIRE
          </button>
          <button className="md:hidden text-zinc-100 hover:scale-105 transition-transform duration-300">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      <div className="bg-[#1B1B1B] h-[2px] w-full mt-auto"></div>
    </nav>
  );
}
