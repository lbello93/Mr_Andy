import { useCallback, useState } from "react";
import {
  Check,
  Minus,
  ArrowRight,
  BadgeCheck,
  Star,
  Gem,
  Candy,
  Lollipop,
  Sparkles,
  Palette,
  Signpost,
  Building2,
  UserRound,
  Truck,
} from "lucide-react";
import ContactModal from "../../components/ContactModal/ContactModal";

/* ---------------- Data ---------------- */

const packages = [
  { id: "sweet", title: "Sweet Start", price: "$349.99", icon: BadgeCheck },
  {
    id: "signature",
    title: "Signature Celebration",
    price: "$449.99",
    icon: Star,
    featured: true,
    badge: "Most Popular",
  },
  { id: "grand", title: "Grand Experience", price: "$569.99", icon: Gem },
];

// true = included, null = not included, string = description
const rows = [
  {
    feature: "Candy Wall Display",
    icon: Candy,
    sweet: true,
    signature: true,
    grand: true,
  },
  {
    feature: "Candy Selection",
    icon: Lollipop,
    sweet: "Curated Selection",
    signature: "Enhanced Premium",
    grand: "Extensive Luxury",
  },
  {
    feature: "Setup & Styling",
    icon: Sparkles,
    sweet: "Standard",
    signature: "Professional & Decorative",
    grand: "Premium & Bespoke",
  },
  {
    feature: "Colour Scheme",
    icon: Palette,
    sweet: "Basic Coordination",
    signature: "Coordinated Custom",
    grand: "Fully Customized",
  },
  {
    feature: "Event Signage",
    icon: Signpost,
    sweet: null,
    signature: "Personalized",
    grand: "Custom + Logo",
  },
  {
    feature: "Corporate Branding",
    icon: Building2,
    sweet: null,
    signature: null,
    grand: "Tailored Branding",
  },
  {
    feature: "Event-Day Support",
    icon: UserRound,
    sweet: true,
    signature: true,
    grand: true,
  },
  {
    feature: "Post-Event Collection",
    icon: Truck,
    sweet: true,
    signature: true,
    grand: true,
  },
];

/* ---------------- Shared classes ---------------- */

const LINE = "border-[#eee0e4]";
const TEXT = "text-[clamp(0.82rem,1vw,0.95rem)]";

// Highlighted (Most Popular) column
const HL_SIDES = "border-x-[1.5px] border-x-[#c81046] bg-[#fff0f4]";

// Feature column stays pinned while scrolling sideways on mobile
const STICKY =
  "max-[650px]:sticky max-[650px]:left-0 max-[650px]:z-[1] max-[650px]:shadow-[6px_0_10px_-8px_rgba(112,42,65,0.25)]";

/* ---------------- Cell value ---------------- */

function Value({ value, highlighted }) {
  if (value === true) {
    return (
      <span
        className={`inline-flex size-[26px] items-center justify-center rounded-full ${
          highlighted
            ? "bg-[#c81046] text-white"
            : "bg-[#fde3eb] text-[#c81046]"
        }`}
      >
        <Check size={14} strokeWidth={3} aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    );
  }

  if (value === null || value === undefined) {
    return (
      <span className="inline-flex items-center justify-center text-[#cbb9be]">
        <Minus size={18} strokeWidth={2} aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </span>
    );
  }

  return (
    <span
      className={
        highlighted
          ? "font-semibold text-[#b80d3e]"
          : "font-medium text-[#49383d]"
      }
    >
      {value}
    </span>
  );
}

/* ---------------- Component ---------------- */

export default function ComparisonTable() {
  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleSelect = useCallback((title) => {
    setSelectedPackage(title);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <section
      id="compare"
      aria-labelledby="comparison-title"
      className="w-full scroll-mt-24 bg-[#fff9fa] py-[clamp(56px,9vh,110px)] font-dm text-[#24191c] max-[650px]:py-14"
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 max-[650px]:px-3">
        {/* Section heading */}
        <header className="mx-auto mb-[clamp(28px,5vh,56px)] max-w-[680px] text-center">
          <h2
            id="comparison-title"
            className="mb-3 font-serif text-[clamp(2rem,3.6vw,3.25rem)] font-bold leading-[1.15] tracking-tight"
          >
            What&apos;s Included
          </h2>

          <p className="mt-3 hidden text-[12px] font-semibold uppercase tracking-[0.12em] text-[#c81046] max-[650px]:block">
            Swipe to compare →
          </p>
        </header>

        {/* Table */}
        <div
          className="w-full rounded-[24px] border border-[#eee0e4] bg-white shadow-[0_30px_70px_-35px_rgba(112,42,65,0.28)] max-[650px]:overflow-x-auto max-[650px]:rounded-[16px] max-[650px]:[-webkit-overflow-scrolling:touch]"
          role="region"
          aria-label="Package comparison"
          tabIndex={0}
        >
          <table className="w-full table-fixed border-separate border-spacing-0 text-center max-[650px]:w-[760px] max-[650px]:min-w-[760px]">
            <colgroup>
              <col className="w-[28%] max-[650px]:w-[170px]" />
              {packages.map((pkg) => (
                <col key={pkg.id} className="w-[24%] max-[650px]:w-[196px]" />
              ))}
            </colgroup>

            {/* Package headers */}
            <thead>
              <tr>
                <th
                  scope="col"
                  className={`${STICKY} rounded-tl-[24px] border-b ${LINE} bg-white px-4 pl-8 text-left align-bottom max-[1050px]:pl-5 max-[650px]:rounded-tl-[16px] max-[650px]:pl-4`}
                  style={{
                    height: "clamp(130px, 18vh, 170px)",
                    paddingBottom: "clamp(16px, 2.2vh, 24px)",
                  }}
                >
                  <span className="block font-serif text-[clamp(1.1rem,1.5vw,1.4rem)] font-bold text-[#24191c]">
                    Features
                  </span>
                  <span className="mt-1 block text-[12px] font-normal text-[#78666b]">
                    What each package offers
                  </span>
                </th>

                {packages.map((pkg, i) => {
                  const Icon = pkg.icon;
                  const isLastCol = i === packages.length - 1;

                  return (
                    <th
                      key={pkg.id}
                      scope="col"
                      className={`relative border-b ${LINE} px-4 align-middle ${
                        pkg.featured
                          ? `rounded-t-[18px] border-t-[1.5px] border-t-[#c81046] ${HL_SIDES}`
                          : `bg-white ${isLastCol ? "rounded-tr-[24px] max-[650px]:rounded-tr-[16px]" : ""}`
                      }`}
                      style={{ height: "clamp(130px, 18vh, 170px)" }}
                    >
                      {pkg.featured && (
                        <span className="absolute inset-x-0 top-0 z-[2] mx-auto flex w-fit items-center justify-center gap-1.5 rounded-b-xl bg-[linear-gradient(135deg,#d41450,#b90b3d)] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                          <Sparkles size={11} aria-hidden="true" />
                          {pkg.badge}
                        </span>
                      )}

                      <div
                        className={`flex flex-col items-center justify-center gap-1.5 ${
                          pkg.featured ? "pt-4" : ""
                        }`}
                      >
                        <span className="mb-1 flex size-12 items-center justify-center rounded-full bg-[#fde3eb] max-[650px]:size-10">
                          <Icon
                            className="size-6 text-[#c81046] max-[650px]:size-5"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-serif text-[clamp(1rem,1.35vw,1.3rem)] font-semibold leading-snug">
                          {pkg.title}
                        </span>
                        <span className="text-[clamp(1.1rem,1.4vw,1.4rem)] font-bold tabular-nums text-[#c81046]">
                          {pkg.price}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Feature rows */}
            <tbody>
              {rows.map((row, ri) => {
                const Icon = row.icon;
                const zebra = ri % 2 === 1 ? "bg-[#fffbfc]" : "bg-white";

                return (
                  <tr key={row.feature} className="group">
                    <th
                      scope="row"
                      className={`${STICKY} border-b ${LINE} ${zebra} px-4 pl-8 text-left align-middle ${TEXT} font-medium leading-snug transition-colors group-hover:bg-[#fff3f6] max-[1050px]:pl-5 max-[650px]:pl-4`}
                      style={{ height: "clamp(48px, 6vh, 60px)" }}
                    >
                      <span className="grid grid-cols-[22px_1fr] items-center gap-3 max-[650px]:gap-2">
                        <Icon
                          className="size-[20px] text-[#c81046]"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        <span className="break-words">{row.feature}</span>
                      </span>
                    </th>

                    {packages.map((pkg) => (
                      <td
                        key={pkg.id}
                        className={`border-b ${LINE} px-3 align-middle ${TEXT} transition-colors ${
                          pkg.featured
                            ? `${HL_SIDES} group-hover:bg-[#ffe8ef]`
                            : `${zebra} group-hover:bg-[#fff3f6]`
                        }`}
                      >
                        <Value value={row[pkg.id]} highlighted={pkg.featured} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>

            {/* Book buttons */}
            <tfoot>
              <tr>
                <th
                  scope="row"
                  className={`${STICKY} rounded-bl-[24px] bg-white px-4 pl-8 text-left align-middle text-[13px] font-medium text-[#78666b] max-[1050px]:pl-5 max-[650px]:rounded-bl-[16px] max-[650px]:pl-4`}
                  style={{
                    paddingTop: "clamp(16px, 2.4vh, 26px)",
                    paddingBottom: "clamp(16px, 2.4vh, 26px)",
                  }}
                >
                  Found your perfect fit?
                </th>

                {packages.map((pkg, i) => {
                  const isLastCol = i === packages.length - 1;

                  return (
                    <td
                      key={pkg.id}
                      className={`px-4 align-middle ${
                        pkg.featured
                          ? `rounded-b-[18px] border-b-[1.5px] border-b-[#c81046] ${HL_SIDES}`
                          : `bg-white ${isLastCol ? "rounded-br-[24px] max-[650px]:rounded-br-[16px]" : ""}`
                      }`}
                      style={{
                        paddingTop: "clamp(16px, 2.4vh, 26px)",
                        paddingBottom: "clamp(16px, 2.4vh, 26px)",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleSelect(pkg.title)}
                        aria-label={`Book ${pkg.title}`}
                        className={`inline-flex w-full max-w-[190px] items-center justify-center gap-2 rounded-full text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                          pkg.featured
                            ? "bg-[linear-gradient(180deg,#e0174f,#b90b3d)] text-white shadow-[0_10px_22px_-8px_rgba(185,2,53,0.6)] hover:brightness-110"
                            : "border-2 border-[#c81046] text-[#c81046] hover:bg-[#c81046] hover:text-white"
                        }`}
                        style={{ height: "clamp(40px, 5.2vh, 48px)" }}
                      >
                        Book Now
                        <ArrowRight size={15} aria-hidden="true" />
                      </button>
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <ContactModal
        open={open}
        onClose={handleClose}
        selectedPackage={selectedPackage}
      />
    </section>
  );
}
