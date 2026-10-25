import { lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const PackagePage = lazy(() => import("../pages/PackagePage"));
const EventsPage = lazy(() => import("../pages/EventsPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const ContactSuccess = lazy(() =>
  import("../sections/ContactPage/ContactSuccess/ContactSuccess"),
);

const NotFound = () => (
  <section className="px-6 py-40 text-center">
    <h1 className="text-4xl">Page not found</h1>
    <Link to="/" className="mt-6 inline-block text-brand">Back to home</Link>
  </section>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="packages" element={<PackagePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="contact/success" element={<ContactSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}