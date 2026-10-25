import ContactHero from "../../sections/ContactPage/ContactHero/ContactHero";

export default function ContactPage() {
  return (
    <div className="relative isolate min-h-page overflow-x-clip bg-page">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-[1] bg-[url('/Image.webp')] bg-cover bg-center opacity-15"
      />
      <ContactHero />
    </div>
  );
}