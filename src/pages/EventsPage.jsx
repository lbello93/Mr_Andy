import EventCategories from "../sections/EventCategories/EventCategories";
import EventHero from "../sections/EventsHero/EventHero";
import PackageCTA from "../sections/PackageCTA/PackageCTA";
import Gallery from "../sections/Gallery/Gallery";

export default function EventsPage() {
  return (
    <>
      <EventHero />
      <EventCategories />
      <Gallery />
      <PackageCTA />
    </>
  );
}
