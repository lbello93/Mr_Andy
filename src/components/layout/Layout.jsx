import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import useScrollToHash from "../../hooks/useScrollToHash";

export default function Layout() {
  useScrollToHash();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}