import { ArrowUpRight } from "lucide-react";
import PackageCard from "./PackageCard";
import { packages } from "../../data/packageData";

export default function Packages() {
  return (
    <section className="bg-[#FCF9F8] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <h2 className="mb-16 font-playfair text-5xl font-bold text-[#1C1B1B]">
          The Sweetest Selection
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {packages.map((item) => (
            <PackageCard key={item.title} {...item} />
          ))}
        </div>

        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 uppercase tracking-[0.18em] text-[#5B4041] transition hover:text-[#B90235]"
        >
          Explore All Packages
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
