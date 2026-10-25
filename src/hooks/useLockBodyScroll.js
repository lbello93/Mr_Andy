import { useEffect } from "react";

export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const { documentElement: html, body } = document;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [locked]);
}