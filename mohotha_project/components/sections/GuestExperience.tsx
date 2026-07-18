import { ReactNode } from "react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface JourneyStep {
  label: string;
  description: string;
  icon: ReactNode;
}

const journeySteps: JourneyStep[] = [
  {
    label: "Invitation",
    description: "Receives a beautifully animated digital invitation on any device",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "RSVP",
    description: "Responds in one tap — attendance, dietary needs, and more",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    label: "Location",
    description: "Views an interactive map with turn-by-turn directions to the venue",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Countdown",
    description: "Anticipates the big day with a live personalised countdown timer",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Gallery",
    description: "Explores a curated gallery of the couple's love story",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    label: "Gift Registry",
    description: "Selects a gift directly through the couple's curated registry",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
];

export default function GuestExperience() {
  return (
    <Section id="guest-experience" className="py-24 lg:py-40">
      <Container>
        {/* Section header */}
        <div className="mb-24 text-center">
          <Badge>Guest Journey</Badge>
          <h2 className="heading-font mx-auto mt-5 max-w-2xl text-5xl leading-tight text-text lg:text-6xl">
            A Journey Worth<br />Remembering
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            From the moment your guests open their invitation to the moment they
            arrive at your celebration — every step is thoughtfully designed.
          </p>
        </div>

        {/* Journey steps */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div
            className="absolute left-[8.33%] right-[8.33%] top-10 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
            {journeySteps.map((step) => (
              <div
                key={step.label}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background text-text-muted">
                  {step.icon}
                </div>

                <h3 className="heading-font mt-5 text-xl font-medium text-text">
                  {step.label}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
