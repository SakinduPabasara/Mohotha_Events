const testimonials = [
  {
    quote: "The digital format allowed us to invite our extended family across the globe instantly. The RSVP backend was flawlessly executed.",
    name: "Dilini & Kasun",
    context: "Colombo",
  },
  {
    quote: "Minimalist, sophisticated, and incredibly intuitive. It felt less like a tech platform and more like a bespoke design studio.",
    name: "Tharini & Roshan",
    context: "Kandy",
  },
  {
    quote: "Our guests were taken aback by the sheer elegance of the interface. The integrated registry was handled with the utmost discretion.",
    name: "Priyanka & Suresh",
    context: "Galle",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-36 bg-[#0a0a0a] border-t border-[#111111]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        <div className="mb-20 text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-[#5c5c5c] uppercase">Endorsements</span>
          <h2 className="heading-font mt-6 text-4xl font-normal text-white md:text-5xl lg:text-6xl">
            Words of <span className="text-[#CBA365] italic">Affirmation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <article key={index} className="flex flex-col border-l border-[#222222] pl-8 transition-colors duration-500 hover:border-[#CBA365]">
              <div className="heading-font mb-6 text-6xl leading-none text-[#333333]">
                "
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-[#a3a3a3] font-light italic mb-8">
                {t.quote}
              </blockquote>
              <div>
                <p className="text-sm font-medium text-white tracking-wide">{t.name}</p>
                <p className="mt-1 text-[10px] tracking-widest uppercase text-[#5c5c5c]">{t.context}</p>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}
