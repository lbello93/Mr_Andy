import Navbar from "../components/Navbar/Navbar";
import AboutHero from "../sections/About/AboutHero";
import AboutCTA from "../sections/AboutCTA/AboutCTA";
import OurStory from "../sections/OurStory/OurStory";
import Promise from "../sections/Promise/Promise";
import Standards from "../sections/Standards/Standards";
import WhyWeExist from "../sections/WhyWeExist/WhyWeExist";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <WhyWeExist />
      <Standards />
      <Promise />
      <AboutCTA />
      {/* About Sections Here */}
    </>
  );
}
