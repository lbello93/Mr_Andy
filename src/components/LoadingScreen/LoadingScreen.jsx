import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Minimum display time so the animation completes
    const timer = setTimeout(() => setFadeOut(true), 1800);
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
      <img
        src="/svg/logo.svg"
        alt=""
        className="h-20 animate-[logoPulse_1.6s_ease-in-out_infinite]"
      />

      {/* Animated dots */}
      <div className="mt-8 flex gap-2">
        <span className="size-2.5 animate-[dotBounce_1.4s_ease-in-out_infinite] rounded-full bg-brand" />
        <span className="size-2.5 animate-[dotBounce_1.4s_ease-in-out_0.2s_infinite] rounded-full bg-brand" />
        <span className="size-2.5 animate-[dotBounce_1.4s_ease-in-out_0.4s_infinite] rounded-full bg-brand" />
      </div>
    </div>
  );
}