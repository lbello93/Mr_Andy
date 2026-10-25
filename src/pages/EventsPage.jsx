import EventCategories from "../sections/EventCategories/EventCategories";
import Gallery from "../sections/EventGallery/Gallery";
import EventHero from "../sections/EventsHero/EventHero";
import PackageCTA from "../sections/PackageCTA/PackageCTA";

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
