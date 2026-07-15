import { Gem, Star, BadgeCheck } from "lucide-react";

export const packages = [
  {
    icon: BadgeCheck,
    title: "Classic",
    description: "Perfect for intimate celebrations and small gatherings.",
    button: "Select Classic",
    featured: false,
  },
  {
    icon: Star,
    title: "Signature",
    description: "Our most popular experience, curated for standard events.",
    button: "Select Signature",
    featured: true,
    badge: "Most Popular",
  },
  {
    icon: Gem,
    title: "Grand",
    description:
      "Designed for large-scale events and high-traffic experiences.",
    button: "Select Grand",
    featured: false,
  },
];
