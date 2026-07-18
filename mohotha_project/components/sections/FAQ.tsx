"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How is the invitation delivered to guests?",
    a: "Upon completion, you receive a secure, bespoke URL. This link can be seamlessly distributed via WhatsApp, email, or any digital correspondence method.",
  },
  {
    q: "Are the designs compatible with mobile devices?",
    a: "Absolutely. Every template is strictly engineered with a mobile-first philosophy, ensuring flawless rendering on all contemporary smartphones and tablets.",
  },
  {
    q: "Does the platform support native languages?",
    a: "Yes. Our typographic engine fully supports Sinhala, Tamil, and English, allowing for authentic multilingual curation.",
  },
  {
    q: "What is the structure of the investment?",
    a: "The creation process is entirely complimentary. A one-time investment of Rs. 2,500 is required only to unlock permanent hosting and premium features. There are no recurring subscriptions.",
  },
  {
    q: "Can modifications be made post-deployment?",
    a: "Yes. The backend dashboard permits real-time edits to typography, copy, and imagery, which are instantly reflected on the live URL.",
  },
  {
    q: "Is there a restriction on the guest list?",
    a: "No. The architecture is designed to handle unlimited traffic, ensuring flawless performance regardless of your guest count.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-36 bg-[#050505]">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        
        <div className="mb-20 text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-[#5c5c5c] uppercase">Inquiries</span>
          <h2 className="heading-font mt-6 text-4xl font-normal text-white md:text-5xl lg:text-6xl">
            Common <span className="text-[#CBA365] italic">Questions</span>
          </h2>
        </div>

        <div className="border-t border-[#111111]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#111111]">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between py-8 text-left group"
                aria-expanded={openIdx === i}
              >
                <span className="text-sm font-medium tracking-wide text-white group-hover:text-[#CBA365] transition-colors pr-8">
                  {faq.q}
                </span>
                <span className={`text-[#333333] transition-all duration-500 ${openIdx === i ? "rotate-180 text-[#CBA365]" : ""}`}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d={openIdx === i ? "M5 12h14" : "M12 5v14M5 12h14"} />
                  </svg>
                </span>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: openIdx === i ? "200px" : "0px", opacity: openIdx === i ? 1 : 0 }}
              >
                <p className="pb-8 text-sm leading-relaxed text-[#a3a3a3] font-light pr-12">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
