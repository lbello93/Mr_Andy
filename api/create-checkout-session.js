import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Prices in cents. The server is the only source of truth for prices.
const PACKAGES = {
  "sweet-start": { name: "Sweet Start", amount: 34999 },
  "signature-celebration": { name: "Signature Celebration", amount: 44999 },
  "grand-experience": { name: "Grand Experience", amount: 56999 },
};

// "deposit" or "full"
const PAYMENT_MODE = process.env.PAYMENT_MODE || "deposit";
const DEPOSIT_PERCENT = Number(process.env.DEPOSIT_PERCENT || 30);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Stripe metadata values must be strings of 500 characters or fewer
const meta = (v) =>
  String(v ?? "")
    .trim()
    .slice(0, 500);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const pkg = PACKAGES[body.packageId];

    if (!pkg) {
      return res.status(400).json({ error: "Unknown package." });
    }

    const isDeposit = PAYMENT_MODE === "deposit";
    const amount = isDeposit
      ? Math.round((pkg.amount * DEPOSIT_PERCENT) / 100)
      : pkg.amount;

    // Use a fixed site URL so redirects can't be pointed elsewhere
    const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amount,
            product_data: {
              name: isDeposit
                ? `${pkg.name} (${DEPOSIT_PERCENT}% deposit)`
                : pkg.name,
              description: isDeposit
                ? `Deposit to reserve your date. Remaining balance due before the event.`
                : `Mr. Andy's Candy Wall: ${pkg.name} package`,
            },
          },
        },
      ],
      customer_email: EMAIL_RE.test(body.email || "")
        ? body.email.trim()
        : undefined,
      metadata: {
        packageId: meta(body.packageId),
        paymentType: isDeposit ? "deposit" : "full",
        name: meta(body.name),
        phone: meta(body.phone),
        occasion: meta(body.occasion),
        guests: meta(body.guests),
        eventDate: meta(body.date),
      },
      success_url: `${siteUrl}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/contact?package=${encodeURIComponent(pkg.name)}&canceled=1`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return res
      .status(500)
      .json({ error: "Could not start checkout. Please try again." });
  }
}
