import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import PackagePage from "../pages/PackagePage";
import EventsPage from "../pages/EventsPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import ContactSuccess from "../sections/ContactPage/ContactSuccess/ContactSuccess";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/packages" element={<PackagePage />} />

      <Route path="/events" element={<EventsPage />} />

      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact/success" element={<ContactSuccess />} />
    </Routes>
  );
}
