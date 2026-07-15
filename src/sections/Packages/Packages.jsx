import "./Packages.css";
import { ArrowUpRight } from "lucide-react";
import PackageCard from "./PackageCard";
import { packages } from "../../data/packageData";

export default function Packages() {
  return (
    <section className="packages-section">
      <div className="packages-container">
        <h2>The Sweetest Selection</h2>

        <div className="packages-grid">
          {packages.map((item) => (
            <PackageCard key={item.title} {...item} />
          ))}
        </div>

        <a href="/" className="packages-link">
          Explore All Packages
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
