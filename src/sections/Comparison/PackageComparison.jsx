import { packages } from "./packageData";
import PackageCard from "./PackageCard";

export default function PackageComparison() {
  return (
    <section className="bg-page pb-24">
      <div className="mx-auto grid max-w-[1152px] grid-cols-3 gap-6 px-6 max-[1024px]:max-w-[520px] max-[1024px]:grid-cols-1 max-[992px]:max-w-[500px] max-[992px]:grid-cols-1">
        {packages.map((pkg) => (
          <PackageCard key={pkg.title} {...pkg} />
        ))}
      </div>
    </section>
  );
}