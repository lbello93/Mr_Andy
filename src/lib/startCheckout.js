// "Signature Celebration" -> "signature-celebration"
export const toPackageId = (title = "") =>
  title.trim().toLowerCase().replace(/\s+/g, "-");

export async function startCheckout(details) {
  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...details,
      packageId: toPackageId(details.package),
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.url) {
    throw new Error(data.error || "Checkout failed");
  }

  // Send the customer to Stripe's hosted checkout page
  window.location.assign(data.url);
}
