import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPage() {
  return (
    <main className="py-16 md:py-24 xl:py-28">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Request delivery, ask a question, or message the team directly."
              body={siteContent.brand.tagline}
            />
            <div className="mt-8 space-y-3 text-sm text-brand-muted">
              <p>{siteContent.brand.phone}</p>
              <p>{siteContent.brand.email}</p>
              <p>{siteContent.brand.address}</p>
            </div>
            <Link
              href={`https://wa.me/${siteContent.brand.whatsappNumber}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle size={16} />
              WhatsApp the team
            </Link>
            <div className="mt-8 overflow-hidden rounded-4xl border border-brand-line bg-white shadow-premium">
              <iframe
                title="Oscargas full map"
                src={siteContent.map.embedUrl}
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
