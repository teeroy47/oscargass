export type Product = {
  slug: string;
  name: string;
  sizeKg: number;
  price: number;
  summary: string;
  description: string;
  useCase: string;
  image: string;
  features: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "9kg-cylinder",
    name: "9kg Cylinder",
    sizeKg: 9,
    price: 349,
    summary: "Compact cylinder ideal for smaller home usage and quick refill cycles.",
    description:
      "A nimble domestic LPG option for apartments, smaller homes, and light cooking demand with straightforward handling.",
    useCase: "Apartment kitchens and light domestic use",
    image: "/images/hero/oscargas-hero.jpg",
    features: ["Fast refill ready", "Easy to store", "Best for light usage"],
    featured: true
  },
  {
    slug: "14kg-cylinder",
    name: "14kg Cylinder",
    sizeKg: 14,
    price: 499,
    summary: "Balanced option for steady household cooking demand and dependable weekly use.",
    description:
      "A practical home cylinder size designed for consistent kitchen use with enough capacity for households that rely on LPG daily.",
    useCase: "Everyday household supply",
    image: "/images/hero/oscargas-hero.jpg",
    features: ["Home-use sweet spot", "Reliable runtime", "Popular family choice"],
    featured: true
  },
  {
    slug: "19kg-cylinder",
    name: "19kg Cylinder",
    sizeKg: 19,
    price: 699,
    summary: "Larger domestic and light commercial delivery option for heavier consumption.",
    description:
      "A higher-capacity cylinder suited to larger homes, guesthouses, and smaller commercial kitchens that need fewer refill interruptions.",
    useCase: "Large homes and small food businesses",
    image: "/images/hero/oscargas-hero.jpg",
    features: ["Extended runtime", "Commercial-friendly", "Fewer replacement cycles"],
    featured: true
  }
];
