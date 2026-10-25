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

/* =========================================
   COMPARISON FEATURES
========================================= */

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

/* =========================================
   PACKAGES
========================================= */

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

/* =========================================
   FEATURE VALUE
========================================= */

function FeatureValue({ value }) {
  if (value === true) {
    return (
      <span className="comparison-included">
        <span className="comparison-check">
          <Check size={16} strokeWidth={3} aria-hidden="true" />
        </span>

        <span>Included</span>
      </span>
    );
  }

  if (value === "—") {
    return <span className="comparison-unavailable">Not included</span>;
  }

  return <span>{value}</span>;
}

/* =========================================
   PACKAGE HEADER
========================================= */

function PackageHeader({ item }) {
  const Icon = item.icon;

  return (
    <th
      scope="col"
      className={
        item.featured ? "package-heading highlight" : "package-heading"
      }
    >
      {item.featured && <span className="popular-badge">{item.badge}</span>}

      <div className="package-header-content">
        <Icon
          className="package-icon"
          size={38}
          strokeWidth={1.8}
          aria-hidden="true"
        />

        <span className="package-title">{item.title}</span>

        <span className="package-price">{item.price}</span>
      </div>
    </th>
  );
}

/* =========================================
   FEATURE ROW
========================================= */

function FeatureRow({ row }) {
  const Icon = row.icon;

  return (
    <tr>
      <th scope="row" className="feature">
        <span className="feature-content">
          <Icon
            className="feature-icon"
            size={25}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <span className="feature-label">{row.feature}</span>
        </span>
      </th>

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
}

/* =========================================
   COMPARISON TABLE
========================================= */

export default function ComparisonTable() {
  return (
    <section className="comparison-table" aria-labelledby="comparison-title">
      <div className="comparison-container">
        {/* Section heading */}

        <header className="comparison-heading">
          <h2 id="comparison-title">What’s Included</h2>

          <p>
            Compare our packages to find the perfect candy experience for your
            celebration.
          </p>
        </header>

        {/* Comparison table */}

        <div
          className="table-wrapper"
          role="region"
          aria-label="Candy wall package comparison"
          tabIndex={0}
        >
          <table>
            <thead>
              <tr>
                <th scope="col" className="feature-heading">
                  FEATURE
                </th>

                {packages.map((item) => (
                  <PackageHeader key={item.id} item={item} />
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <FeatureRow key={row.feature} row={row} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
