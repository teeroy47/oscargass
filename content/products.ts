export type Product = {
  slug: string;
  name: string;
  badge?: string;
  price: number | null;
  summary: string;
  description: string;
  useCase: string;
  image: string;
  features: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "burner-gas-cooker-stainless-steel",
    name: "Burner Gas Cooker Stainless Steel",
    price: 650,
    summary: "Durable stainless steel tabletop cooker for everyday kitchen use.",
    description:
      "A durable and efficient cooking solution perfect for any kitchen, built in stainless steel and designed for dependable daily LPG cooking.",
    useCase: "Indoor cooking and compact kitchen setups",
    image: "/images/products/burner-gas-cooker-stainless-steel.jpeg",
    features: ["Stainless steel build", "Double burner", "Kitchen ready"],
    featured: true
  },
  {
    slug: "hose-8mm-lpg-orange",
    name: "Hose 8mm - LPG Orange (per metre)",
    badge: "Per metre",
    price: 35,
    summary: "Flexible LPG hose sold per metre for custom installations.",
    description:
      "LPG hose for gas applications where a flexible, lightweight, and easy-to-handle hose is required.",
    useCase: "Flexible gas line runs and regulator connections",
    image: "/images/products/hose-8mm-lpg-orange.jpeg",
    features: ["8mm hose", "Flexible run", "Custom lengths"]
  },
  {
    slug: "bullnose-regulator",
    name: "Bullnose Regulator",
    price: 200,
    summary: "Pressure regulator suitable for 9kg cylinders and larger.",
    description:
      "Reduces pressure to the gas exiting the cylinder to match the pressure of the required appliance and is suitable for cylinder sizes from 9kg and larger.",
    useCase: "Domestic regulator control for larger cylinders",
    image: "/images/products/bullnose-regulator.jpeg",
    features: ["Pressure control", "9kg and larger", "Domestic use"]
  },
  {
    slug: "extra-long-lighter",
    name: "Extra Long Lighter",
    price: 40,
    summary: "Long-reach lighter for safer everyday ignition.",
    description:
      "The extra-long handle keeps your hands safely away from the flame, making it comfortable to use for extended periods.",
    useCase: "Safe ignition for stoves, braais, and burners",
    image: "/images/products/extra-long-lighter.jpeg",
    features: ["Long reach", "Safer lighting", "Everyday use"]
  },
  {
    slug: "rubber-for-bullnose-regulator",
    name: "Rubber for Bull nose Regulator",
    price: 10,
    summary: "Replacement rubber seal for a secure regulator-to-cylinder fit.",
    description:
      "This rubber seal ensures a tight and secure connection between the regulator and the gas cylinder.",
    useCase: "Seal replacement and maintenance",
    image: "/images/products/rubber-for-bullnose-regulator.jpeg",
    features: ["Secure seal", "Low-cost replacement", "Regulator maintenance"]
  },
  {
    slug: "cadac-swivel-regulator",
    name: "Cadac Swivel regulator",
    price: 150,
    summary: "Compact swivel regulator designed for smaller cylinders.",
    description:
      "Cadac swivel regulator designed to fit 8mm gas hose and suitable for cylinder sizes from 7kg and smaller.",
    useCase: "Portable gas setups and smaller cylinders",
    image: "/images/products/cadac-swivel-regulator.jpeg",
    features: ["Swivel fit", "8mm hose compatible", "Portable setups"]
  },
  {
    slug: "fire-stick",
    name: "Fire Stick",
    price: 400,
    summary: "Cost-effective fire starter ideal for wood and charcoal.",
    description:
      "Easiest and most cost-effective way of starting a fire, especially suited to wood and charcoal use.",
    useCase: "Braai and fire-starting use",
    image: "/images/products/fire-stick.jpeg",
    features: ["Quick ignition", "Braai ready", "Cost-effective"]
  },
  {
    slug: "top-cooker",
    name: "Top Cooker",
    price: 200,
    summary: "Chrome-plated outdoor top cooker for portable use.",
    description:
      "Conic gas cooker top with a chrome-plated finish, ideal for outdoor cooking and lightweight setups.",
    useCase: "Outdoor cooking and camping",
    image: "/images/products/top-cooker.jpeg",
    features: ["Outdoor use", "Chrome plated", "Portable cooking"]
  },
  {
    slug: "portable-infrared-gas-heater",
    name: "Portable Infrared Gas heater",
    price: null,
    summary: "Portable heater that screws directly onto the cylinder.",
    description:
      "Screws directly onto the cylinder and is ideal for camping and domestic heating applications.",
    useCase: "Camping and spot heating",
    image: "/images/products/portable-infrared-gas-heater.jpeg",
    features: ["Portable heating", "Direct cylinder fit", "Domestic or camping"]
  },
  {
    slug: "lighter-fuel",
    name: "Lighter Fuel",
    badge: "300ml",
    price: 30,
    summary: "300ml refill can for lighter and ignition fuel needs.",
    description: "300ml can designed for refilling lighter fuel for fire-lighting devices.",
    useCase: "Refill fuel for lighters and ignition tools",
    image: "/images/products/lighter-fuel.png",
    features: ["300ml can", "Refill use", "Fire-lighting support"]
  },
  {
    slug: "half-inch-hose-tail-washer-female",
    name: "1/2 Hose Tail & Washer Female",
    price: 200,
    summary: "Connector fitting for gas hoses and appliance hookups.",
    description:
      "Connects appliances such as gas hobs and gas geysers to gas hose installations.",
    useCase: "Appliance and gas hose connections",
    image: "/images/products/half-inch-hose-tail-washer-female.jpeg",
    features: ["Appliance connector", "Hose fitment", "Installation hardware"]
  },
  {
    slug: "clamp",
    name: "Clamp",
    price: 10,
    summary: "Clamp for securing gas pipes and related connections.",
    description:
      "Used to secure gas pipes in sanitation applications, fire protection systems, and other installations.",
    useCase: "Pipe securing and installation support",
    image: "/images/products/clamp.jpeg",
    features: ["Secure fit", "Low-cost hardware", "Installation support"]
  },
  {
    slug: "bullnose-to-cadac-adapter",
    name: "Bullnose to Cadac Adapter",
    price: 100,
    summary: "Adapter for using Cadac fittings with larger bullnose cylinders.",
    description:
      "Cylinder adapter to allow the use of a 3/8 Cadac-sized fitting or regulator onto a larger size cylinder with a bullnose connect.",
    useCase: "Adapter fitting between cylinder types",
    image: "/images/products/bullnose-to-cadac-adapter.jpeg",
    features: ["Cadac compatible", "Bullnose adapter", "Cylinder conversion"]
  },
  {
    slug: "cast-iron-c30-gas-burner",
    name: "Cast Iron C30 Gas Burner",
    price: 650,
    summary: "Heavy-duty cast iron burner for high-heat cooking.",
    description:
      "The C30 ring burner is built to handle demanding cooking environments, delivering the high heat necessary for large batches of food.",
    useCase: "Commercial or large-scale cooking",
    image: "/images/products/cast-iron-c30-gas-burner.jpeg",
    features: ["Cast iron body", "High heat output", "Batch cooking"],
    featured: true
  },
  {
    slug: "thermocouple",
    name: "Thermocouple",
    price: 150,
    summary: "Replacement thermocouple for pilot-light-based systems.",
    description:
      "Contains a metal rod that is placed very close to your pilot light's flame and connects to the furnace's gas valve.",
    useCase: "Pilot light safety and replacement parts",
    image: "/images/products/thermocouple.jpeg",
    features: ["Pilot light sensor", "Replacement part", "Safety component"]
  },
  {
    slug: "cadac-valve",
    name: "Cadac Valve",
    price: 250,
    summary: "Cadac valve compatible with 3kg, 5kg, and 7kg cylinders.",
    description:
      "Replacement Cadac valve with broad compatibility across smaller cylinder sizes and common portable setups.",
    useCase: "Valve replacement for smaller cylinders",
    image: "/images/products/cadac-valve.jpeg",
    features: ["3kg-7kg fit", "Replacement valve", "Portable cylinder support"]
  },
  {
    slug: "blowtorch",
    name: "Blowtorch",
    price: 350,
    summary: "Handheld butane blowtorch designed for safe controlled flame use.",
    description:
      "Safe and durable blowtorch with a safety lock that can help prevent accidental ignition.",
    useCase: "Workshop, kitchen, and controlled flame tasks",
    image: "/images/products/blowtorch.png",
    features: ["Safety lock", "Butane powered", "Portable torch"]
  },
  {
    slug: "self-igniting-blowtorch",
    name: "Self Igniting blowtorch",
    price: 200,
    summary: "Push-button self-igniting blowtorch for compact flame work.",
    description:
      "Features a push-button ignition and can heat up to 1300 degrees Celsius, with an automatic ignition device.",
    useCase: "Quick ignition torch work",
    image: "/images/products/self-igniting-blowtorch.jpeg",
    features: ["Self igniting", "High heat", "Compact torch"]
  },
  {
    slug: "pigtail-quarter-pipe",
    name: "Pigtail 1/4 pipe",
    badge: "1/4 pipe",
    price: 400,
    summary: "Hydraulic pigtail pipe with brass-threaded fittings.",
    description:
      "Made from hydraulic piping with a brass threaded fitting on one side to fit the regulator and a crimped bullnose male adapter on the other.",
    useCase: "Regulator to cylinder connection",
    image: "/images/products/pigtail-quarter-pipe.jpeg",
    features: ["Hydraulic pipe", "Brass fitting", "Regulator connection"]
  },
  {
    slug: "two-burner-gas-stove",
    name: "2 Burner gas Stove",
    price: 1200,
    summary: "Two-burner cast stove for cooking multiple dishes efficiently.",
    description:
      "Cook multiple dishes simultaneously with high efficiency using a manual ignition stove that is simple and reliable.",
    useCase: "Home kitchens, catering, and outdoor cooking",
    image: "/images/products/two-burner-gas-stove.jpeg",
    features: ["Two burners", "Manual ignition", "High-efficiency cooking"],
    featured: true
  },
  {
    slug: "48kg-gas-and-cylinder-exchange",
    name: "48kg Gas and Cylinder exchange",
    badge: "48kg",
    price: 1600,
    summary: "Large-scale 48kg cylinder exchange service.",
    description:
      "48kg gas cylinder for large-scale cooking, heating, and production. Exchange empty for full with delivery and pickup.",
    useCase: "Large-scale business and industrial use",
    image: "/images/products/48kg-gas-cylinder-exchange.png",
    features: ["48kg exchange", "Pickup and delivery", "Large-scale supply"],
    featured: true
  },
  {
    slug: "igniter",
    name: "Igniter",
    price: null,
    summary: "Electric spark igniter for gas appliance ignition.",
    description: "Igniter component that uses an electric spark to ignite gas.",
    useCase: "Gas appliance ignition systems",
    image: "/images/products/igniter.jpeg",
    features: ["Electric spark", "Appliance ignition", "Replacement component"]
  },
  {
    slug: "14kg-gas-and-cylinder-exchange",
    name: "14kg Gas and Cylinder exchange",
    badge: "14kg",
    price: 480,
    summary: "14kg exchange cylinder for larger domestic and commercial needs.",
    description:
      "14kg gas cylinder ideal for larger domestic or commercial needs such as heating and cooking, offered as an exchange service.",
    useCase: "Domestic and light commercial gas supply",
    image: "/images/products/14kg-gas-cylinder-exchange.png",
    features: ["14kg exchange", "Domestic and commercial", "Cylinder swap"],
    featured: true
  },
  {
    slug: "9kg-gas-and-cylinder-exchange",
    name: "9kg Gas and Cylinder Exchange",
    badge: "9kg",
    price: 310,
    summary: "9kg exchange cylinder for light household use.",
    description:
      "A 9kg gas cylinder perfect for light household use such as heating and barbecuing, offered as an exchange service.",
    useCase: "Light domestic gas use",
    image: "/images/products/9kg-gas-cylinder-exchange.png",
    features: ["9kg exchange", "Household use", "Compact domestic supply"],
    featured: true
  },
  {
    slug: "19kg-gas-and-cylinder-exchange",
    name: "19kg Gas and Cylinder exchange",
    badge: "19kg",
    price: 650,
    summary: "19kg exchange cylinder for heavier domestic and commercial demand.",
    description:
      "19kg gas cylinder ideal for larger domestic or commercial needs such as heating, cooking, or barbecues, offered as an exchange service.",
    useCase: "Higher-demand domestic and commercial use",
    image: "/images/products/19kg-gas-cylinder-exchange.png",
    features: ["19kg exchange", "Higher-demand use", "Cylinder swap"],
    featured: true
  }
];
