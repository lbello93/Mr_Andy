import "./ComparisonTable.css";
import { Check } from "lucide-react";

const rows = [
  {
    feature: "Candy Wall Display",
    sweet: true,
    signature: true,
    grand: true,
  },
  {
    feature: "Candy Selection",
    sweet: "Premium",
    signature: "Larger Premium",
    grand: "Custom Premium",
  },
  {
    feature: "Setup & Styling",
    sweet: "Basic",
    signature: "Theme Coordinated",
    grand: "Bespoke Design",
  },
  {
    feature: "Custom Signage",
    sweet: "—",
    signature: "✔ Decorative Signage",
    grand: "✔ Custom Signage",
  },
  {
    feature: "Corporate Branding",
    sweet: "—",
    signature: "—",
    grand: "✔ Full Corporate",
  },
  {
    feature: "Event-Day Support",
    sweet: "—",
    signature: "—",
    grand: "✔ On-site Support",
  },
  {
    feature: "Collection After Event",
    sweet: true,
    signature: true,
    grand: true,
  },
];

export default function ComparisonTable() {
  return (
    <section className="comparison-table">
      <div className="comparison-container">
        <h2>What's Included</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Sweet Start</th>
                <th className="highlight">Signature Celebration</th>
                <th>Grand Experience</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className="feature">{row.feature}</td>

                  {[row.sweet, row.signature, row.grand].map((value, index) => (
                    <td
                      key={index}
                      className={
                        typeof value === "string" &&
                        (value.includes("✔") || value.includes("Premium") || value.includes("Bespoke"))
                          ? "accent"
                          : ""
                      }
                    >
                      {value === true ? (
                        <Check size={18} strokeWidth={3} />
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
