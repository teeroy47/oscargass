import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutPage() {
  return (
    <main className="py-16 md:py-24 xl:py-28">
      <Container>
        <SectionHeading
          eyebrow="About Oscargas"
          title="A more dependable LPG experience for homes and businesses."
          body="Oscargas Helderberg is positioned as a sharper, more trusted delivery partner for domestic and commercial gas requirements."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-4xl border border-brand-line bg-white p-8 shadow-premium">
            <h3 className="text-xl font-bold text-brand-ink">Professional service</h3>
            <p className="mt-4 text-sm leading-7 text-brand-muted">
              The brand experience is designed to feel clear, dependable, and commercially mature from first contact.
            </p>
          </article>
          <article className="rounded-4xl border border-brand-line bg-white p-8 shadow-premium">
            <h3 className="text-xl font-bold text-brand-ink">Local coverage</h3>
            <p className="mt-4 text-sm leading-7 text-brand-muted">
              Helderberg-focused service lets Oscargas stay fast, relevant, and reliable for nearby households and business clients.
            </p>
          </article>
          <article className="rounded-4xl border border-brand-line bg-white p-8 shadow-premium">
            <h3 className="text-xl font-bold text-brand-ink">Future-ready platform</h3>
            <p className="mt-4 text-sm leading-7 text-brand-muted">
              This rebuild is structured to grow naturally into full ecommerce without losing the premium visual direction.
            </p>
          </article>
        </div>
      </Container>
    </main>
  );
}
