import "./ComparisonTable.css";
import {
  Check,
  BadgeCheck,
  Star,
  Gem,
  Candy,
  Sparkles,
  Palette,
  Monitor,
  Building2,
  UserRound,
  Truck,
} from "lucide-react";

const rows = [
  {
    feature: "Candy Wall Display",
    icon: Candy,
    sweet: true,
    signature: true,
    grand: true,
  },
  {
    feature: "Candy Selection",
    icon: Candy,
    sweet: "Classic Favorites",
    signature: "Expanded Premium Selection",
    grand: "Premium & Custom Selection",
  },
  {
    feature: "Setup & Styling",
    icon: Sparkles,
    sweet: "Standard Setup",
    signature: "Theme-Coordinated Styling",
    grand: "Bespoke Styling",
  },
  {
    feature: "Colour Coordination",
    icon: Palette,
    sweet: "Basic Colour Options",
    signature: "Coordinated Colour Scheme",
    grand: "Fully Customized Colour Scheme",
  },
  {
    feature: "Signage",
    icon: Monitor,
    sweet: "Standard Display",
    signature: "Decorative Signage",
    grand: "Custom Signage",
  },
  {
    feature: "Corporate Branding",
    icon: Building2,
    sweet: "—",
    signature: "Optional Upgrade",
    grand: true,
  },
  {
    feature: "Event-Day Support",
    icon: UserRound,
    sweet: true,
    signature: true,
    grand: true,
  },
  {
    feature: "Post-Event Collection",
    icon: Truck,
    sweet: true,
    signature: true,
    grand: true,
  },
];

const packages = [
  {
    id: "sweet",
    title: "Sweet Start",
    price: "$349.99",
    icon: BadgeCheck,
  },
  {
    id: "signature",
    title: "Signature Celebration",
    price: "$449.99",
    icon: Star,
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    id: "grand",
    title: "Grand Experience",
    price: "$569.99",
    icon: Gem,
  },
];

function FeatureValue({ value }) {
  if (value === true) {
    return (
      <span className="comparison-included">
        <span className="comparison-check">
          <Check size={17} strokeWidth={3} />
        </span>
        <span>Included</span>
      </span>
    );
  }

  return (
    <span className={value === "—" ? "comparison-unavailable" : ""}>
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="comparison-table">
      <div className="comparison-container">
        <header className="comparison-heading">
          <h2>What’s Included</h2>
          <p>
            Compare our packages to find the perfect candy experience for your
            celebration.
          </p>
        </header>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th className="feature-heading">FEATURE</th>

                {packages.map((item) => {
                  const Icon = item.icon;

                  return (
                    <th
                      key={item.id}
                      className={
                        item.featured
                          ? "package-heading highlight"
                          : "package-heading"
                      }
                    >
                      {item.featured && (
                        <span className="popular-badge">{item.badge}</span>
                      )}

                      <Icon
                        className="package-icon"
                        size={43}
                        strokeWidth={1.8}
                      />

                      <span className="package-title">{item.title}</span>

                      <span className="package-price">{item.price}</span>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => {
                const Icon = row.icon;

                return (
                  <tr key={row.feature}>
                    <td className="feature">
                      <Icon
                        className="feature-icon"
                        size={29}
                        strokeWidth={1.9}
                      />
                      <span>{row.feature}</span>
                    </td>

                    <td>
                      <FeatureValue value={row.sweet} />
                    </td>

                    <td className="highlight">
                      <FeatureValue value={row.signature} />
                    </td>

                    <td>
                      <FeatureValue value={row.grand} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
