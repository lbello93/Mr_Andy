const ENDPOINT =
  import.meta.env.VITE_INQUIRY_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbx8E08a6o2H7VIJ56DVgmxBh8zJq9kLzgDSU4UUVoxkSZ4heoz56PX47vekDlXbK2kglQ/exec";

const clean = (v) => (typeof v === "string" ? v.trim() : v ?? "");

export async function submitInquiry(data) {
  const payload = {
    source: clean(data.source) || "website",
    package: clean(data.package),
    occasion: clean(data.occasion),
    guests: clean(data.guests),
    date: clean(data.date),
    vision: clean(data.vision),
    name: clean(data.name),
    email: clean(data.email),
    phone: clean(data.phone),
    message: clean(data.message),
    page: typeof window !== "undefined" ? window.location.pathname : "",
  };

  await fetch(ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify(payload),
  });
}