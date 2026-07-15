import "./PackageComparison.css";
import { packages } from "./packageData";
import PackageCard from "./PackageCard";

export default function PackageComparison() {
  return (
    <section className="packages-listing">
      <div className="packages-grid">
        {packages.map((pkg) => (
          <PackageCard key={pkg.title} {...pkg} />
        ))}
      </div>
    </section>
  );
}
