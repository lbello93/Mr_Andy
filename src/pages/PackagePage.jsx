import PackageComparison from "../sections/Comparison/PackageComparison";
import ComparisonTable from "../sections/ComparisonTable/ComparisonTable";
import PackageCTA from "../sections/PackageCTA/PackageCTA";
import PackagesHero from "../sections/PackagesHero/PackagesHero";

export default function PackagePage() {
  return (
    <>
      <PackagesHero />

      <PackageComparison />

      <ComparisonTable />
      <PackageCTA />
      {/* About Sections Here */}
    </>
  );
}
