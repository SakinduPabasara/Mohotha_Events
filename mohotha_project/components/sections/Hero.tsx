import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden bg-[#050505] py-20 lg:py-32">
      
      {/* Cinematic Image Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero/wedding-hero.jpg"
          alt="Luxury Sri Lankan Wedding"
          fill
          priority
          className="object-cover opacity-[0.35] grayscale-[20%] mix-blend-luminosity"
        />
        {/* Dark gradients to ensure text remains perfectly legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
        
        {/* Subtle grid texture overlay for the high-fashion tech feel */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-3 border border-[#333333]/80 bg-[#050505]/60 backdrop-blur-md px-5 py-2.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CBA365]" />
          <span className="text-xs font-medium tracking-[0.2em] text-[#e0e0e0] uppercase">
            The New Standard in Sri Lanka
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <h1 className="animate-fade-in-up heading-font text-6xl md:text-8xl lg:text-[7.5rem] font-normal leading-[1.05] text-white tracking-tight drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
          Digital <span className="text-[#CBA365] italic">Invitations,</span><br />
          Elevated.
        </h1>

        {/* Subtext */}
        <p className="animate-fade-in-up mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[#d1d1d1] font-light drop-shadow-md" style={{ animationDelay: '0.2s' }}>
          A deeply considered platform for Sri Lankan couples who demand 
          extraordinary design. Share your joy with a digital experience 
          that feels as premium as heavy cardstock.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up mt-12 flex flex-col sm:flex-row items-center gap-6" style={{ animationDelay: '0.3s' }}>
          <Link 
            href="#templates" 
            className="group relative inline-flex items-center justify-center bg-[#CBA365] px-10 py-4 text-sm font-medium tracking-widest text-[#050505] uppercase transition-all duration-300 hover:bg-[#b89154] overflow-hidden"
          >
            <span className="relative z-10">Discover the Collection</span>
          </Link>
          <Link 
            href="#features" 
            className="group inline-flex items-center justify-center border border-[#e0e0e0]/40 bg-[#050505]/40 backdrop-blur-sm px-10 py-4 text-sm font-medium tracking-widest text-white uppercase transition-all duration-300 hover:border-[#CBA365]/80 hover:bg-[#111111]/80"
          >
            Learn More
          </Link>
        </div>

        {/* Minimal Stats at the bottom */}
        <div className="animate-fade-in-up mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-[#333333]/50 pt-12 w-full max-w-4xl backdrop-blur-[2px]" style={{ animationDelay: '0.4s' }}>
          {[
            { label: "Created For", value: "Sri Lanka" },
            { label: "Premium", value: "Designs" },
            { label: "Instant", value: "Delivery" },
            { label: "Zero", value: "Paper Waste" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="heading-font text-2xl md:text-3xl text-white mb-2">{stat.value}</span>
              <span className="text-[10px] tracking-[0.2em] text-[#a3a3a3] uppercase">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}