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
