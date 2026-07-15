import "./ComparisonTable.css";
import { Check } from "lucide-react";

const rows = [
  {
    feature: "Candy Wall",
    sweet: true,
    signature: true,
    grand: true,
  },
  {
    feature: "Premium Candy",
    sweet: "Standard",
    signature: "Premium + Custom",
    grand: "Ultra-Premium",
  },
  {
    feature: "Styling",
    sweet: "Basic",
    signature: "Themed",
    grand: "Bespoke Artistry",
  },
  {
    feature: "Branding",
    sweet: "—",
    signature: "Personalized",
    grand: "✔ Full Corporate",
  },
  {
    feature: "Refills",
    sweet: "—",
    signature: "Optional Add-on",
    grand: "Included",
  },
  {
    feature: "Event Support",
    sweet: "—",
    signature: "—",
    grand: "✔ On-site Staff",
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
                <th className="highlight">Signature</th>
                <th>Grand</th>
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
                        (value.includes("✔") || value.includes("Premium"))
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
