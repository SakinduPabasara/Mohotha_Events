const steps = [
  {
    number: "01",
    title: "Select",
    description: "Browse the curated collection and select a design framework that resonates with your vision.",
  },
  {
    number: "02",
    title: "Refine",
    description: "Incorporate your details, typography preferences, and photography to make the design unmistakably yours.",
  },
  {
    number: "03",
    title: "Publish",
    description: "Instantly deploy your invitation to a secure link, ready to be shared privately with your guest list.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-36 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <span className="text-xs font-medium tracking-[0.3em] text-[#5c5c5c] uppercase">Process</span>
            <h2 className="heading-font mt-6 text-4xl font-normal text-white md:text-5xl lg:text-6xl">
              Effortless <span className="text-[#CBA365] italic">Creation</span>
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-[#a3a3a3] text-sm leading-relaxed font-light">
              We have distilled the complex process of digital invitation design into three intuitive steps. 
              No technical expertise required.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#222222] to-transparent" />
          
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col">
              <div className="mb-10 text-xs font-medium tracking-[0.3em] text-[#CBA365] uppercase">
                {step.number}
              </div>
              <h3 className="heading-font text-3xl text-white mb-6">
                {step.title}.
              </h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
