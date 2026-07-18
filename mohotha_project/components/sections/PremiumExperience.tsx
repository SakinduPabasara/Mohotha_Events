import Container from "@/components/ui/Container";

interface Differentiator {
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    title: "Designed with Intention",
    description:
      "Every template, every interaction, every pixel — crafted by designers who obsess over the finest details so your invitation feels handmade, not generated.",
  },
  {
    title: "Enterprise-Grade Reliability",
    description:
      "Built on infrastructure trusted by thousands of events globally. Your invitations deliver beautifully, on every device, every time, without exception.",
  },
  {
    title: "Trusted by the Best",
    description:
      "From intimate celebrations to grand royal-scale weddings, leading planners across South Asia and Europe choose Mohotha for their most discerning clients.",
  },
  {
    title: "Concierge-Level Support",
    description:
      "Your dedicated support team is available whenever you need them. Because your wedding day cannot wait — and neither should you.",
  },
];

export default function PremiumExperience() {
  return (
    <section
      id="premium"
      className="py-32 lg:py-48 bg-[#1F1F1C]"
    >
      <Container>
        {/* Pull quote */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#B08D57]">
            Our Philosophy
          </p>

          <blockquote className="heading-font mt-10 text-4xl font-normal italic leading-snug text-white lg:text-[3.5rem] lg:leading-[1.2]">
            &ldquo;We built Mohotha for couples who believe the beginning of
            forever deserves the finest attention to detail.&rdquo;
          </blockquote>
        </div>

        {/* Divider */}
        <div className="my-24 border-t border-white/10" aria-hidden="true" />

        {/* Differentiators grid */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className={`px-10 py-10 lg:px-14 lg:py-14 ${
                index < differentiators.length - 2 ? "border-b border-white/10" : ""
              } ${index % 2 === 0 ? "sm:border-r sm:border-white/10" : ""}`}
            >
              <h3 className="heading-font text-2xl font-medium text-white lg:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/55">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
