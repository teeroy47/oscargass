import { Container } from "@/components/layout/container";
import { CheckoutPanel } from "@/components/checkout/checkout-panel";

export default function CheckoutPage() {
  return (
    <main className="py-16 md:py-24 xl:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">Cart & Checkout</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-ink md:text-6xl">Review your items and complete the order.</h1>
          <p className="mt-4 text-base leading-7 text-brand-muted md:text-lg">
            Add products from the catalog, adjust quantities here, then send a structured order request directly to Oscargas.
          </p>
        </div>
        <div className="mt-12">
          <CheckoutPanel />
        </div>
      </Container>
    </main>
  );
}
