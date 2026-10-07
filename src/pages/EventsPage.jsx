import Navbar from "../components/Navbar/Navbar";
import EventCategories from "../sections/EventCategories/EventCategories";
import Gallery from "../sections/EventGallery/Gallery";
import EventHero from "../sections/EventsHero/EventHero";
import Footer from "../sections/Footer/Footer";
import PackageCTA from "../sections/PackageCTA/PackageCTA";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <EventHero />
      <EventCategories />
      <Gallery />
      <PackageCTA />
      <Footer />
    </>
  );
}
