import Image from "next/image";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteContent } from "@/content/site";

type Props = {
  className?: string;
};

export function WhatsAppOrderButton({ className = "" }: Props) {
  return (
    <MagneticButton>
      <Link
        href={`https://wa.me/${siteContent.brand.whatsappNumber}`}
        className={`inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#1fb558] ${className}`}
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
          <Image
            src="/images/icons/whatsapp-logo.png"
            alt="WhatsApp logo"
            width={22}
            height={22}
            className="h-[18px] w-[18px] object-contain"
          />
        </span>
        Place an Order
      </Link>
    </MagneticButton>
  );
}
