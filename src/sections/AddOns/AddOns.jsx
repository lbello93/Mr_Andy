import "./AddOns.css";

import {
  Palette,
  Sparkles,
  Badge,
  Building2,
  Candy,
  RefreshCcw,
  Image,
  PartyPopper,
  Flower2,
  Wand2,
} from "lucide-react";

const addons = [
  {
    icon: Palette,
    title: "Custom Candy Colours",
  },
  {
    icon: Sparkles,
    title: "Neon Signs",
  },
  {
    icon: Badge,
    title: "Personalised Event Name",
  },
  {
    icon: Building2,
    title: "Corporate Logo Branding",
  },
  {
    icon: Candy,
    title: "Premium Imported Candy",
  },
  {
    icon: RefreshCcw,
    title: "Additional Candy Refills",
  },
  {
    icon: Image,
    title: "Event Backdrop Styling",
  },
  {
    icon: PartyPopper,
    title: "Balloon Styling",
  },
  {
    icon: Flower2,
    title: "Fresh Floral Styling",
  },
  {
    icon: Wand2,
    title: "Custom Theme Design",
  },
];

export default function AddOns() {
  return (
    <section className="addons">
      <div className="addons-container">
        <div className="addons-header">
          <h2>Elevate Your Experience</h2>

          <p>
            Small details make the biggest impact. Customise your package with
            our luxury add-ons.
          </p>
        </div>

        <div className="addons-grid">
          {addons.map(({ icon: Icon, title }) => (
            <div className="addon-card" key={title}>
              <div className="addon-icon">
                <Icon size={28} strokeWidth={2} />
              </div>

              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
