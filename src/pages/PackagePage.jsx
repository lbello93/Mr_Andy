import Navbar from "../components/Navbar/Navbar";
import AddOns from "../sections/AddOns/AddOns";
import PackageComparison from "../sections/Comparison/PackageComparison";
import ComparisonTable from "../sections/ComparisonTable/ComparisonTable";
import PackageCTA from "../sections/PackageCTA/PackageCTA";
import PackagesHero from "../sections/PackagesHero/PackagesHero";

export default function PackagePage() {
  return (
    <>
      <Navbar />
      <PackagesHero />
      <PackageComparison />
      <ComparisonTable />
      <AddOns />
      <PackageCTA />
      {/* About Sections Here */}
    </>
  );
}
