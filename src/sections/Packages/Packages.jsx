import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";
import { packages } from "../../data/packageData";

export default function Packages() {
  return (
    <section className="bg-page py-28 max-[1024px]:py-20 max-[700px]:py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
        <h2 className="mb-16 font-playfair text-5xl font-bold text-ink max-[1024px]:text-[40px] max-[700px]:mb-12 max-[700px]:text-[32px]">
          The Sweetest Selection
        </h2>

        <div className="mx-auto grid max-w-[860px] grid-cols-3 items-center gap-5 max-[700px]:max-w-[340px] max-[700px]:grid-cols-1 max-[700px]:gap-8">
          {packages.map((item) => (
            <PackageCard key={item.title} {...item} />
          ))}
        </div>

        <Link
          to="/packages"
          className="mt-14 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-muted no-underline transition hover:text-brand"
        >
          Explore All Packages
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
