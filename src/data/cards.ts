export type CardKey =
  | "facilities"
  | "productions"
  | "services"
  | "post"
  | "studio"
  | "contact";

export interface CardContent {
  key: CardKey;
  number: string;
  entity: string;       // which NV entity this belongs to
  label: string;
  title: string;
  tagline: string;
  image: string;
  accent?: "amber" | "bone";
  size?: "lg" | "md" | "sm";
}

export const cards: CardContent[] = [
  {
    key: "facilities",
    number: "01",
    entity: "NV Film Studios Africa",
    label: "The Studio · NVFSA",
    title: "The Studios.",
    tagline: "Five sound stages · 4,000-hectare estate · Lourensford",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400&auto=format&fit=crop",
    accent: "amber",
    size: "lg",
  },
  {
    key: "services",
    number: "02",
    entity: "NV Film Services",
    label: "Production Services · NV Films",
    title: "Film Services.",
    tagline: "Line producing · Budgeting · Payroll · Logistics",
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1400&auto=format&fit=crop",
    accent: "amber",
    size: "lg",
  },
  {
    key: "productions",
    number: "03",
    entity: "Combined",
    label: "Selected Work",
    title: "Productions.",
    tagline: "Raised By Wolves · Warrior · Black Sails",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&auto=format&fit=crop",
    size: "md",
  },
  {
    key: "post",
    number: "04",
    entity: "NV Film Studios Africa",
    label: "In-House Post",
    title: "Post.",
    tagline: "Edit · Color · Sound · VFX",
    image:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1400&auto=format&fit=crop",
    size: "md",
  },
  {
    key: "studio",
    number: "05",
    entity: "NV Film Studios Africa",
    label: "Cape Town · South Africa",
    title: "The Estate.",
    tagline: "Lourensford · 12 biomes · 4,000 hectares",
    image:
      "https://images.unsplash.com/photo-1506501139174-099022df5260?w=1400&auto=format&fit=crop",
    size: "md",
  },
  {
    key: "contact",
    number: "06",
    entity: "Combined",
    label: "Work With Us",
    title: "Contact.",
    tagline: "NVFSA · NV Film Services · One inquiry",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&auto=format&fit=crop",
    size: "md",
  },
];
