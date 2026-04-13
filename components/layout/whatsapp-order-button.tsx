import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteContent } from "@/content/site";

type Props = {
  className?: string;
};

export function WhatsAppOrderButton({ className = "" }: Props) {
  return (
    <MagneticButton>
      <Link
        href={`tel:${siteContent.brand.phone.replace(/\s+/g, "")}`}
        className={`inline-flex items-center gap-3 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition hover:bg-[#cc141b] ${className}`}
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
          <PhoneCall size={16} />
        </span>
        Call Us
      </Link>
    </MagneticButton>
  );
}
