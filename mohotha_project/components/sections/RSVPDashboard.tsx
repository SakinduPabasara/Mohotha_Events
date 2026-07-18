import Image from "next/image";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface FloatingChip {
  value: string;
  label: string;
  position: string;
  valueColor: string;
  bg: string;
}

const chips: FloatingChip[] = [
  {
    value: "142",
    label: "Attending",
    position: "absolute -left-6 top-16 hidden xl:flex",
    valueColor: "text-emerald-700",
    bg: "bg-white border-emerald-100",
  },
  {
    value: "34",
    label: "Pending",
    position: "absolute -right-6 top-28 hidden xl:flex",
    valueColor: "text-amber-600",
    bg: "bg-white border-amber-100",
  },
  {
    value: "18",
    label: "Declined",
    position: "absolute -right-6 bottom-24 hidden xl:flex",
    valueColor: "text-[#6B6863]",
    bg: "bg-white border-border",
  },
];

export default function RSVPDashboard() {
  return (
    <Section id="dashboard" className="py-24 lg:py-40 bg-surface">
      <Container>
        {/* Section header */}
        <div className="mb-20 text-center">
          <Badge>Guest Management</Badge>
          <h2 className="heading-font mx-auto mt-5 max-w-2xl text-5xl leading-tight text-text lg:text-6xl">
            Your Guests,<br />Perfectly Managed
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            A beautiful, real-time dashboard that keeps you effortlessly
            informed — from the first RSVP to the final headcount.
          </p>
        </div>

        {/* Dashboard with floating chips */}
        <div className="relative mx-auto max-w-5xl">
          {/* Floating stat chips */}
          {chips.map((chip) => (
            <div
              key={chip.label}
              className={`${chip.position} z-10 items-center gap-3 rounded-2xl border ${chip.bg} px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)]`}
              aria-label={`${chip.value} guests ${chip.label.toLowerCase()}`}
            >
              <span className={`text-xl font-bold ${chip.valueColor}`}>
                {chip.value}
              </span>
              <span className="text-xs font-medium text-text-muted">
                {chip.label}
              </span>
            </div>
          ))}

          {/* Dashboard screenshot */}
          <div className="overflow-hidden rounded-3xl border border-border shadow-[0_40px_100px_rgba(0,0,0,0.09)]">
            <Image
              src="/images/dashboard/rsvp-dashboard.jpg"
              alt="Mohotha RSVP dashboard showing a guest management interface with attendance tracking, dietary preferences, and a real-time response feed"
              width={1200}
              height={750}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
