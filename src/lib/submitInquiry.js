const ENDPOINT =
  import.meta.env.VITE_INQUIRY_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbx8E08a6o2H7VIJ56DVgmxBh8zJq9kLzgDSU4UUVoxkSZ4heoz56PX47vekDlXbK2kglQ/exec";

export async function submitInquiry(payload) {
  await fetch(ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify(payload),
  });
  // no-cors makes the response opaque, so we cannot check res.ok.
  // If fetch() itself did not throw, treat it as success.
}