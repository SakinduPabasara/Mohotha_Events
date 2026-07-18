import Container from "@/components/ui/Container";

export default function TrustStrip() {
  return (
    <section className="pb-20">
      <Container>
        <div className="rounded-3xl border border-border bg-surface px-8 py-10">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div>
              <p className="heading-font text-2xl text-text">
                Elegant Design
              </p>

              <p className="mt-2 text-sm text-text-muted">
                Carefully crafted invitation experiences.
              </p>
            </div>

            <div>
              <p className="heading-font text-2xl text-text">
                Instant RSVP
              </p>

              <p className="mt-2 text-sm text-text-muted">
                Real-time guest responses with ease.
              </p>
            </div>

            <div>
              <p className="heading-font text-2xl text-text">
                Mobile Friendly
              </p>

              <p className="mt-2 text-sm text-text-muted">
                Beautiful on every screen and device.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}