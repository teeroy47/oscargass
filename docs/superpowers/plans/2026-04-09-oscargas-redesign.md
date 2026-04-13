# Oscargas Premium Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, fully responsive greenfield Next.js + Tailwind marketing and catalog site for Oscargas that is visually aligned to the brand, includes Google Maps integration, and is structured for future ecommerce expansion.

**Architecture:** Use a Next.js App Router application with a centralized content/data layer, a reusable section-based component system, and a consistent design-token-driven Tailwind theme. The site ships as a marketing-first experience with product catalog, contact, delivery areas, and enquiry-oriented CTAs while preserving component seams for future cart and checkout functionality.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Node.js, Next Image, local content modules

---

### Task 1: Scaffold The App

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.js`
- Create: `tailwind.config.ts`
- Create: `.gitignore`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `public/`
- Test: `npm run lint`

- [ ] **Step 1: Create the project manifest**

```json
{
  "name": "oscargas-premium-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.511.0"
  },
  "devDependencies": {
    "@types/node": "^22.13.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.20.0",
    "eslint-config-next": "^15.2.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3"
  }
}
```

- [ ] **Step 2: Create the TypeScript config**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create base Next and styling config**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: []
  }
};

export default nextConfig;
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
```

- [ ] **Step 4: Create the initial app shell**

```tsx
// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oscargas Helderberg",
  description: "Premium LPG gas delivery and supply in Helderberg."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx
export default function HomePage() {
  return <main>Oscargas rebuild in progress.</main>;
}
```

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}
```

- [ ] **Step 5: Add ignore rules**

```gitignore
.next
node_modules
out
.env*
dist
coverage
```

- [ ] **Step 6: Install dependencies and verify the scaffold**

Run: `npm install`

Expected: installation completes without dependency resolution errors

- [ ] **Step 7: Run lint to verify the empty scaffold**

Run: `npm run lint`

Expected: lint passes or reports only resolvable config/setup issues

- [ ] **Step 8: Commit**

```bash
git add .
git commit -m "chore: scaffold nextjs tailwind project for oscargas redesign"
```

### Task 2: Establish Brand Tokens And Global Theme

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Create: `lib/theme.ts`
- Test: `npm run lint`

- [ ] **Step 1: Define reusable theme tokens**

```ts
// lib/theme.ts
export const brandTheme = {
  colors: {
    primary: "#2B2E9B",
    primaryDark: "#181B5C",
    accent: "#ED1C24",
    surface: "#F5F7FB",
    ink: "#10131A",
    muted: "#667085",
    line: "#D7DCEA"
  }
} as const;
```

- [ ] **Step 2: Extend Tailwind with brand colors and shadows**

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2B2E9B",
          "blue-dark": "#181B5C",
          red: "#ED1C24",
          surface: "#F5F7FB",
          ink: "#10131A",
          muted: "#667085",
          line: "#D7DCEA"
        }
      },
      boxShadow: {
        premium: "0 24px 60px rgba(16, 19, 26, 0.14)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
```

- [ ] **Step 3: Create the global brand CSS variables and base styles**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand-blue: #2b2e9b;
  --brand-blue-dark: #181b5c;
  --brand-red: #ed1c24;
  --brand-surface: #f5f7fb;
  --brand-ink: #10131a;
  --brand-muted: #667085;
  --brand-line: #d7dcea;
  --page-max: 1280px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--brand-ink);
  background:
    radial-gradient(circle at top right, rgba(43, 46, 155, 0.08), transparent 28%),
    linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
```

- [ ] **Step 4: Run lint after theme setup**

Run: `npm run lint`

Expected: no new lint errors

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css lib/theme.ts
git commit -m "feat: establish oscargas brand theme tokens"
```

### Task 3: Add Content Model And Site Configuration

**Files:**
- Create: `content/site.ts`
- Create: `content/products.ts`
- Create: `content/areas.ts`
- Test: `npm run lint`

- [ ] **Step 1: Create the site content config**

```ts
// content/site.ts
export const siteContent = {
  brand: {
    name: "Oscargas Helderberg",
    shortName: "Oscargas",
    tagline: "Premium LPG delivery with dependable local service.",
    phone: "+27 81 387 0497",
    whatsappNumber: "27813870497",
    email: "info@oscargas.co.za",
    address: "Helderberg, Western Cape, South Africa"
  },
  hero: {
    eyebrow: "Luxury Industrial Gas Delivery",
    title: "Reliable LPG supply, delivered with premium service.",
    body:
      "Oscargas Helderberg delivers household and business LPG solutions with a sharper, more professional experience from first click to final delivery."
  },
  map: {
    embedUrl:
      "https://www.google.com/maps?q=Helderberg%20Western%20Cape%20South%20Africa&output=embed"
  }
} as const;
```

- [ ] **Step 2: Create the product content model**

```ts
// content/products.ts
export type Product = {
  slug: string;
  name: string;
  sizeKg: number;
  summary: string;
  useCase: string;
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "9kg-cylinder",
    name: "9kg Cylinder",
    sizeKg: 9,
    summary: "Compact cylinder ideal for smaller home usage.",
    useCase: "Apartment kitchens and light domestic use",
    image: "/images/products/cylinder-9kg.jpg",
    featured: true
  },
  {
    slug: "14kg-cylinder",
    name: "14kg Cylinder",
    sizeKg: 14,
    summary: "Balanced option for regular household cooking demands.",
    useCase: "Everyday household supply",
    image: "/images/products/cylinder-14kg.jpg",
    featured: true
  },
  {
    slug: "19kg-cylinder",
    name: "19kg Cylinder",
    sizeKg: 19,
    summary: "Larger domestic and light commercial delivery option.",
    useCase: "Large homes and small food businesses",
    image: "/images/products/cylinder-19kg.jpg",
    featured: true
  }
];
```

- [ ] **Step 3: Create delivery area content**

```ts
// content/areas.ts
export const deliveryAreas = [
  "Somerset West",
  "Strand",
  "Gordon's Bay",
  "Stellenbosch",
  "Sir Lowry's Pass"
] as const;
```

- [ ] **Step 4: Run lint to verify content modules**

Run: `npm run lint`

Expected: lint passes

- [ ] **Step 5: Commit**

```bash
git add content/site.ts content/products.ts content/areas.ts
git commit -m "feat: add structured oscargas content modules"
```

### Task 4: Build The Shared Layout And Navigation System

**Files:**
- Create: `components/layout/container.tsx`
- Create: `components/layout/header.tsx`
- Create: `components/layout/mobile-menu.tsx`
- Create: `components/layout/footer.tsx`
- Modify: `app/layout.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Create a reusable container**

```tsx
// components/layout/container.tsx
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}
```

- [ ] **Step 2: Create the site header**

```tsx
// components/layout/header.tsx
import Link from "next/link";
import { siteContent } from "@/content/site";
import { MobileMenu } from "./mobile-menu";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/70 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wide text-brand-blue">
            {siteContent.brand.shortName}
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/delivery-areas">Delivery Areas</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="hidden md:block">
            <Link
              href={`https://wa.me/${siteContent.brand.whatsappNumber}`}
              className="rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
            >
              Order on WhatsApp
            </Link>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
```

- [ ] **Step 3: Create the mobile menu**

```tsx
// components/layout/mobile-menu.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-brand-line p-3 text-brand-blue"
        aria-label="Toggle navigation"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open ? (
        <div className="absolute inset-x-0 top-20 border-b border-brand-line bg-white px-4 py-6 shadow-premium">
          <div className="flex flex-col gap-4">
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/products" onClick={() => setOpen(false)}>
              Products
            </Link>
            <Link href="/delivery-areas" onClick={() => setOpen(false)}>
              Delivery Areas
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link
              href={`https://wa.me/${siteContent.brand.whatsappNumber}`}
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-red px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Order on WhatsApp
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
```

- [ ] **Step 4: Create the footer**

```tsx
// components/layout/footer.tsx
import Link from "next/link";
import { Container } from "./container";
import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-blue-dark text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">{siteContent.brand.name}</p>
            <p className="mt-3 max-w-sm text-sm text-white/75">{siteContent.brand.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>{siteContent.brand.phone}</p>
              <p>{siteContent.brand.email}</p>
              <p>{siteContent.brand.address}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Explore</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              <Link href="/products">Products</Link>
              <Link href="/delivery-areas">Delivery Areas</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 5: Wire the layout shell**

```tsx
// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Oscargas Helderberg",
  description: "Premium LPG gas delivery and supply in Helderberg."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-brand-ink antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Run lint**

Run: `npm run lint`

Expected: layout components pass lint

- [ ] **Step 7: Commit**

```bash
git add components/layout app/layout.tsx
git commit -m "feat: add responsive oscargas layout shell"
```

### Task 5: Build Core Reusable Marketing Components

**Files:**
- Create: `components/sections/hero.tsx`
- Create: `components/sections/trust-strip.tsx`
- Create: `components/sections/featured-products.tsx`
- Create: `components/sections/service-areas.tsx`
- Create: `components/sections/map-preview.tsx`
- Create: `components/ui/section-heading.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Create a reusable section heading**

```tsx
// components/ui/section-heading.tsx
export function SectionHeading({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-ink md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-brand-muted md:text-lg">{body}</p> : null}
    </div>
  );
}
```

- [ ] **Step 2: Create the homepage hero**

```tsx
// components/sections/hero.tsx
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_32%)]" />
      <Container>
        <div className="grid min-h-[78svh] items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              {siteContent.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-none tracking-tight md:text-7xl">
              {siteContent.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{siteContent.hero.body}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="rounded-full bg-brand-red px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue-dark"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue-dark"
              >
                Request Delivery
              </Link>
            </div>
          </div>
          <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-premium backdrop-blur">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.2),_rgba(255,255,255,0.04))]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 3: Create the trust strip**

```tsx
// components/sections/trust-strip.tsx
import { Container } from "@/components/layout/container";

const points = [
  "Reliable local LPG delivery",
  "Professional household and business supply",
  "Clear ordering paths via web and WhatsApp"
];

export function TrustStrip() {
  return (
    <section className="border-y border-brand-line bg-white">
      <Container>
        <div className="grid gap-4 py-6 md:grid-cols-3">
          {points.map((point) => (
            <p key={point} className="text-sm font-medium text-brand-ink">
              {point}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Create featured products, service areas, and map preview**

```tsx
// components/sections/featured-products.tsx
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/content/products";

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Cylinder sizes structured for home and commercial demand."
          body="A premium presentation today, with a component model ready for deeper ecommerce tomorrow."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.filter((product) => product.featured).map((product) => (
            <article key={product.slug} className="rounded-4xl border border-brand-line bg-white p-6 shadow-premium">
              <div className="aspect-[4/3] rounded-3xl bg-brand-surface" />
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-red">
                  {product.sizeKg}kg
                </p>
                <h3 className="mt-3 text-2xl font-bold text-brand-ink">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{product.summary}</p>
                <p className="mt-4 text-sm font-medium text-brand-blue">{product.useCase}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-red"
                >
                  Request This Size
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

```tsx
// components/sections/service-areas.tsx
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { deliveryAreas } from "@/content/areas";

export function ServiceAreas() {
  return (
    <section className="bg-brand-surface py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Delivery Areas"
          title="Service coverage designed around the Helderberg region."
          body="A simple, clear coverage experience now with room for richer delivery logic later."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {deliveryAreas.map((area) => (
            <div key={area} className="rounded-3xl border border-brand-line bg-white px-5 py-6 text-center font-semibold text-brand-ink">
              {area}
            </div>
          ))}
        </div>
        <Link href="/delivery-areas" className="mt-8 inline-flex text-sm font-semibold text-brand-blue">
          View full delivery coverage
        </Link>
      </Container>
    </section>
  );
}
```

```tsx
// components/sections/map-preview.tsx
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/content/site";

export function MapPreview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Location"
            title="Find Oscargas quickly and contact the team directly."
            body={siteContent.brand.address}
          />
          <div className="overflow-hidden rounded-4xl border border-brand-line bg-white shadow-premium">
            <iframe
              title="Oscargas location map"
              src={siteContent.map.embedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <Link href="/contact" className="mt-8 inline-flex text-sm font-semibold text-brand-red">
          Open the full contact page
        </Link>
      </Container>
    </section>
  );
}
```

- [ ] **Step 5: Run lint**

Run: `npm run lint`

Expected: reusable section components pass lint

- [ ] **Step 6: Commit**

```bash
git add components/sections components/ui
git commit -m "feat: add core oscargas marketing sections"
```

### Task 6: Build The Five Primary Pages

**Files:**
- Modify: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/products/page.tsx`
- Create: `app/delivery-areas/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `components/sections/contact-form.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Assemble the homepage**

```tsx
// app/page.tsx
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { ServiceAreas } from "@/components/sections/service-areas";
import { MapPreview } from "@/components/sections/map-preview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <FeaturedProducts />
      <ServiceAreas />
      <MapPreview />
    </main>
  );
}
```

- [ ] **Step 2: Create About, Products, and Delivery Areas pages**

```tsx
// app/about/page.tsx
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutPage() {
  return (
    <main className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="About Oscargas"
          title="A more dependable LPG experience for homes and businesses."
          body="Oscargas Helderberg is positioned as a sharper, more trusted delivery partner for domestic and commercial gas requirements."
        />
      </Container>
    </main>
  );
}
```

```tsx
// app/products/page.tsx
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/content/products";

export default function ProductsPage() {
  return (
    <main className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Browse the current Oscargas cylinder range."
          body="This catalog is structured to evolve naturally into a deeper ecommerce product experience later."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="rounded-4xl border border-brand-line bg-white p-6 shadow-premium">
              <div className="aspect-[4/3] rounded-3xl bg-brand-surface" />
              <h3 className="mt-6 text-2xl font-bold text-brand-ink">{product.name}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">{product.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
```

```tsx
// app/delivery-areas/page.tsx
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { deliveryAreas } from "@/content/areas";

export default function DeliveryAreasPage() {
  return (
    <main className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Delivery Areas"
          title="Coverage focused on fast, reliable Helderberg service."
          body="Oscargas serves core local areas first, with enquiry pathways for additional requests."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliveryAreas.map((area) => (
            <div key={area} className="rounded-3xl border border-brand-line bg-white px-6 py-8 shadow-premium">
              <p className="text-xl font-semibold text-brand-ink">{area}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
```

- [ ] **Step 3: Create a premium contact form section**

```tsx
// components/sections/contact-form.tsx
export function ContactForm() {
  return (
    <form className="rounded-4xl border border-brand-line bg-white p-8 shadow-premium">
      <div className="grid gap-5 md:grid-cols-2">
        <input className="rounded-2xl border border-brand-line px-4 py-3" type="text" placeholder="Full name" />
        <input className="rounded-2xl border border-brand-line px-4 py-3" type="email" placeholder="Email address" />
      </div>
      <input className="mt-5 w-full rounded-2xl border border-brand-line px-4 py-3" type="tel" placeholder="Phone number" />
      <textarea className="mt-5 min-h-40 w-full rounded-2xl border border-brand-line px-4 py-3" placeholder="Tell us what you need" />
      <button type="submit" className="mt-6 rounded-full bg-brand-red px-6 py-4 text-sm font-semibold text-white">
        Submit Request
      </button>
    </form>
  );
}
```

- [ ] **Step 4: Build the contact page with map integration**

```tsx
// app/contact/page.tsx
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/content/site";

export default function ContactPage() {
  return (
    <main className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
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
```

- [ ] **Step 5: Run lint across the page set**

Run: `npm run lint`

Expected: all route files and contact form pass lint

- [ ] **Step 6: Commit**

```bash
git add app components/sections/contact-form.tsx
git commit -m "feat: build oscargas primary page set"
```

### Task 7: Add High-Resolution Brand And Product Assets

**Files:**
- Create: `public/images/logo/`
- Create: `public/images/products/`
- Create: `public/images/hero/`
- Modify: `components/layout/header.tsx`
- Modify: `components/sections/hero.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Add the provided Oscargas logo asset**

Expected files:
- `public/images/logo/oscargas-logo.jpg`

If the source file is available locally, copy it into the project and keep the filename lowercase and URL-safe.

- [ ] **Step 2: Update the header to use the real logo**

```tsx
// components/layout/header.tsx
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { MobileMenu } from "./mobile-menu";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/70 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/oscargas-logo.jpg"
              alt={`${siteContent.brand.name} logo`}
              width={180}
              height={72}
              className="h-auto w-[132px] sm:w-[156px]"
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/delivery-areas">Delivery Areas</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="hidden md:block">
            <Link
              href={`https://wa.me/${siteContent.brand.whatsappNumber}`}
              className="rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
            >
              Order on WhatsApp
            </Link>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
```

- [ ] **Step 3: Upgrade the hero media block to use a real image**

```tsx
// components/sections/hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_32%)]" />
      <Container>
        <div className="grid min-h-[78svh] items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              {siteContent.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-none tracking-tight md:text-7xl">
              {siteContent.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{siteContent.hero.body}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="rounded-full bg-brand-red px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue-dark"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-brand-blue-dark"
              >
                Request Delivery
              </Link>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-premium backdrop-blur">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/hero/oscargas-hero.jpg"
                alt="Oscargas premium gas delivery"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Run lint after image wiring**

Run: `npm run lint`

Expected: image component changes pass lint

- [ ] **Step 5: Commit**

```bash
git add public/images components/layout/header.tsx components/sections/hero.tsx
git commit -m "feat: add oscargas brand imagery and hero assets"
```

### Task 8: Polish Responsive UX And Metadata

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/products/page.tsx`
- Modify: `app/delivery-areas/page.tsx`
- Modify: `app/contact/page.tsx`
- Test: `npm run build`

- [ ] **Step 1: Upgrade metadata for launch quality**

```tsx
// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Oscargas Helderberg",
    template: "%s | Oscargas Helderberg"
  },
  description: "Premium LPG gas delivery and supply in Helderberg.",
  openGraph: {
    title: "Oscargas Helderberg",
    description: "Premium LPG gas delivery and supply in Helderberg.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-brand-ink antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Do a responsive spacing polish pass**

Apply these style corrections where needed:

```tsx
className="py-16 md:py-24 xl:py-28"
className="text-4xl md:text-6xl xl:text-7xl"
className="grid gap-6 md:gap-8 xl:gap-10"
className="rounded-3xl md:rounded-4xl"
```

Use them on page-level sections and hero/content containers so spacing and scale are consistent across devices.

- [ ] **Step 3: Build the production bundle**

Run: `npm run build`

Expected: Next.js production build succeeds

- [ ] **Step 4: Commit**

```bash
git add app
git commit -m "feat: polish responsive experience and metadata"
```

### Task 9: Final Verification

**Files:**
- Modify: none
- Test: project-wide verification only

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: PASS

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: PASS

- [ ] **Step 3: Manually verify the key routes in dev mode**

Run: `npm run dev`

Expected routes to check:
- `/`
- `/about`
- `/products`
- `/delivery-areas`
- `/contact`

Expected:
- header and footer render consistently
- mobile menu opens/closes
- hero scales cleanly
- cards stack correctly on smaller screens
- Google Maps iframe renders on contact page

- [ ] **Step 4: Final commit**

```bash
git add .
git commit -m "feat: launch premium oscargas marketing and catalog rebuild"
```
