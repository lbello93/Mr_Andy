import Navbar from "../../components/Navbar/Navbar";
import ContactHero from "../../sections/ContactPage/ContactHero/ContactHero";

import "./ContactPage.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Navbar />
      <ContactHero />
      <div className="contact-bg" />
    </main>
  );
}
