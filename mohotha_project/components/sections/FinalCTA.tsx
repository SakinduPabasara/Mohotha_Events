import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-48 bg-[#050505] border-t border-[#111111]">
      
      {/* Abstract dark luxury background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border border-[#222222] opacity-50" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-[#222222] opacity-30" />
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(203,163,101,0.03)_0%,rgba(5,5,5,0)_70%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-[#CBA365]">
          The Beginning
        </p>
        
        <h2 className="heading-font text-5xl md:text-6xl font-normal leading-tight text-white lg:text-7xl">
          Curate Your <span className="text-[#CBA365] italic">Legacy</span>
        </h2>
        
        <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-[#a3a3a3] font-light">
          Join an exclusive group of couples who chose to elevate their wedding announcements. 
          Begin the curation process today without any initial investment.
        </p>
        
        <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="#"
            className="group relative inline-flex items-center justify-center bg-[#CBA365] px-12 py-5 text-xs font-medium tracking-[0.2em] text-[#050505] uppercase transition-all duration-300 hover:bg-[#b89154]"
          >
            Commence Design
          </Link>
          <Link
            href="#templates"
            className="inline-flex items-center justify-center px-10 py-5 text-xs font-medium tracking-[0.2em] text-[#a3a3a3] uppercase transition-colors hover:text-[#CBA365]"
          >
            View Archives
          </Link>
        </div>
        
      </div>
    </section>
  );
}
