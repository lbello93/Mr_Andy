import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function BookingSuccess() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-page px-6 py-20">
      <div className="w-full max-w-[560px] rounded-[32px] border border-[#f3dce3] bg-white px-8 py-12 text-center shadow-card">
        <CheckCircle2 size={56} className="mx-auto mb-5 text-brand" aria-hidden="true" />
        <h1 className="mb-3 font-serif text-[36px] font-bold leading-tight text-ink">
          Your Booking Is <span className="text-brand">Confirmed!</span>
        </h1>
        <p className="mb-8 text-[16px] leading-[1.7] text-muted">
          Thank you! Your payment was received and a receipt is on its way to your email.
          Our team will contact you shortly to finalise the details of your candy wall.
        </p>
        <Link
          to="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-[15px] font-semibold text-white no-underline transition hover:brightness-110"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}