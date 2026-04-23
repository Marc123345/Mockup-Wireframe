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
  label: string;
  title: string;
  tagline: string;
  image: string;
  accent?: "amber" | "bone";
  size?: "lg" | "md" | "sm";
}

export const cards: CardContent[] = [
  {
    key: "productions",
    number: "01",
    label: "Selected Work",
    title: "Productions",
    tagline: "Raised By Wolves · Warrior · Black Sails",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&auto=format&fit=crop",
    accent: "amber",
    size: "lg",
  },
  {
    key: "facilities",
    number: "02",
    label: "The Studio",
    title: "Facilities",
    tagline: "Five sound stages · 4,000 hectares",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400&auto=format&fit=crop",
    size: "md",
  },
  {
    key: "services",
    number: "03",
    label: "End-to-End",
    title: "Services",
    tagline: "Production · Locations · Hospitality",
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1400&auto=format&fit=crop",
    size: "md",
  },
  {
    key: "post",
    number: "04",
    label: "In-House Post",
    title: "Post",
    tagline: "Edit · Color · Sound · VFX",
    image:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1400&auto=format&fit=crop",
    size: "md",
  },
  {
    key: "studio",
    number: "05",
    label: "Cape Town · South Africa",
    title: "The Estate",
    tagline: "Lourensford · 4,000 hectares",
    image:
      "https://images.unsplash.com/photo-1506501139174-099022df5260?w=1400&auto=format&fit=crop",
    accent: "amber",
    size: "lg",
  },
  {
    key: "contact",
    number: "06",
    label: "Work With Us",
    title: "Contact",
    tagline: "Start a production",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&auto=format&fit=crop",
    size: "md",
  },
];
