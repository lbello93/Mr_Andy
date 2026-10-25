import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!fadeOut) return;
    const timer = setTimeout(() => setVisible(false), 600);
    return () => clearTimeout(timer);
  }, [fadeOut]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo with left-to-right reveal */}
      <div className="logo-reveal">
        <img
          src="/svg/logo.svg"
          alt=""
          className="h-[80px] w-auto max-w-[85vw] max-[480px]:h-[56px]"
        />
      </div>

      {/* Decorative line expanding outward */}
      <div className="logo-line" />

      {/* Loading dots */}
      <div className="mt-6 flex gap-2.5">
        <span className="loading-dot" style={{ "--dot-delay": "1.4s" }} />
        <span className="loading-dot" style={{ "--dot-delay": "1.6s" }} />
        <span className="loading-dot" style={{ "--dot-delay": "1.8s" }} />
      </div>
    </div>
  );
}