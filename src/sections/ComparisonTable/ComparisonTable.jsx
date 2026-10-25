import {
  Check, BadgeCheck, Star, Gem, Candy, Sparkles, Palette, Monitor, Building2, UserRound, Truck,
} from "lucide-react";

const rows = [
  { feature: "Candy Wall Display", icon: Candy, sweet: true, signature: true, grand: true },
  { feature: "Candy Selection", icon: Candy, sweet: "Classic Favorites", signature: "Expanded Premium Selection", grand: "Premium & Custom Selection" },
  { feature: "Setup & Styling", icon: Sparkles, sweet: "Standard Setup", signature: "Theme-Coordinated Styling", grand: "Bespoke Styling" },
  { feature: "Colour Coordination", icon: Palette, sweet: "Basic Colour Options", signature: "Coordinated Colour Scheme", grand: "Fully Customized Colour Scheme" },
  { feature: "Signage", icon: Monitor, sweet: "Standard Display", signature: "Decorative Signage", grand: "Custom Signage" },
  { feature: "Corporate Branding", icon: Building2, sweet: "\u2014", signature: "Optional Upgrade", grand: true },
  { feature: "Event-Day Support", icon: UserRound, sweet: true, signature: true, grand: true },
  { feature: "Post-Event Collection", icon: Truck, sweet: true, signature: true, grand: true },
];

const packages = [
  { id: "sweet", title: "Sweet Start", price: "$349.99", icon: BadgeCheck },
  { id: "signature", title: "Signature Celebration", price: "$449.99", icon: Star, featured: true, badge: "MOST POPULAR" },
  { id: "grand", title: "Grand Experience", price: "$569.99", icon: Gem },
];

function Value({ value, highlighted }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
        <span className="inline-flex size-[26px] shrink-0 items-center justify-center rounded-full bg-[#c81046] text-white">
          <Check size={14} strokeWidth={3} aria-hidden="true" />
        </span>
        <span className="text-[#49383d] font-medium">Included</span>
      </span>
    );
  }
  if (value === "\u2014") return <span className="text-[#a08e93]">Not included</span>;
  return <span className={highlighted ? "font-semibold text-[#b80d3e]" : ""}>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section
      aria-labelledby="comparison-title"
      className="flex min-h-page w-full items-center justify-center bg-[#fff9fa] px-[clamp(20px,4vw,64px)] py-[clamp(24px,4vh,48px)] font-dm text-[#24191c] max-[1050px]:px-5 max-[650px]:items-start max-[650px]:px-3 max-[380px]:px-2"
    >
      <div className="mx-auto w-full max-w-[1450px] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#fbedf1_0%,#fff7f9_100%)] pt-[clamp(24px,3vh,40px)] max-[650px]:rounded-2xl">
        {/* Header */}
        <header className="mx-auto w-full max-w-[720px] px-6 pb-[clamp(24px,3vh,40px)] text-center max-[650px]:px-4 max-[650px]:pb-7">
          <h2
            id="comparison-title"
            className="mb-3 font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.15] tracking-tight text-[#24191c]"
          >
            What&apos;s Included
          </h2>
          <p className="text-[clamp(0.9rem,1.2vw,1.1rem)] leading-relaxed text-[#78666b]">
            Compare our packages to find the perfect candy experience for your celebration.
          </p>
        </header>

        {/* Table */}
        <div
          className="w-full rounded-[20px] border border-[#eee0e4]/95 bg-white shadow-[0_16px_45px_rgba(112,42,65,0.06)] max-[650px]:overflow-x-auto max-[650px]:rounded-[15px] max-[650px]:[-webkit-overflow-scrolling:touch]"
          role="region"
          aria-label="Package comparison"
          tabIndex={0}
        >
          <table className="w-full table-fixed border-separate border-spacing-0 text-center max-[650px]:min-w-[820px] max-[650px]:w-[820px]">
            <colgroup>
              <col className="w-[28%] max-[650px]:w-[200px]" />
              <col className="w-[24%] max-[650px]:w-[206px]" />
              <col className="w-[24%] max-[650px]:w-[206px]" />
              <col className="w-[24%] max-[650px]:w-[206px]" />
            </colgroup>

            <thead>
              <tr>
                <th
                  scope="col"
                  className="h-[180px] border-b border-[#eee0e4] bg-[#fffafb] px-4 py-7 pl-8 text-left align-middle text-xs font-bold uppercase tracking-[1.5px] text-[#78666b] max-[1050px]:h-[165px] max-[1050px]:pl-5 max-[650px]:h-[155px] max-[650px]:pl-4 max-[650px]:text-[11px]"
                >
                  Feature
                </th>

                {packages.map((pkg) => {
                  const Icon = pkg.icon;
                  const base = "h-[180px] border-b border-[#eee0e4] bg-white px-4 py-7 text-center align-middle max-[1050px]:h-[165px] max-[650px]:h-[155px]";
                  const highlight = pkg.featured
                    ? "relative rounded-t-[18px] border-x-[1.5px] border-t-[1.5px] border-x-[#c81046] border-t-[#c81046] bg-[#fff0f4] pt-12"
                    : "";

                  return (
                    <th key={pkg.id} scope="col" className={`${base} ${highlight}`}>
                      {pkg.featured && (
                        <span className="absolute inset-x-0 top-0 z-[2] mx-auto flex w-fit min-w-[160px] items-center justify-center rounded-b-xl bg-[linear-gradient(135deg,#d41450,#b90b3d)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                          {pkg.badge}
                        </span>
                      )}

                      <div className="flex h-full flex-col items-center justify-center gap-2">
                        <Icon
                          className="size-9 text-[#c81046] max-[650px]:size-8"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        <span className="font-serif text-[clamp(1.05rem,1.4vw,1.45rem)] font-semibold leading-snug text-[#24191c]">
                          {pkg.title}
                        </span>
                        <span className="text-[clamp(1.1rem,1.4vw,1.45rem)] font-bold tabular-nums text-[#c81046]">
                          {pkg.price}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, ri) => {
                const Icon = row.icon;
                const isLast = ri === rows.length - 1;
                const borderB = isLast ? "" : "border-b border-[#eee0e4]";
                const hlCell = `relative border-x-[1.5px] border-x-[#c81046] bg-[#fff0f4] ${
                  isLast ? "rounded-b-[18px] border-b-[1.5px] border-b-[#c81046]" : ""
                }`;

                return (
                  <tr
                    key={row.feature}
                    className="group transition-colors duration-150"
                  >
                    {/* Feature name */}
                    <th
                      scope="row"
                      className={`h-[66px] ${borderB} bg-white px-4 py-3 pl-8 text-left align-middle text-[clamp(0.82rem,1vw,0.95rem)] font-medium leading-snug text-[#24191c] group-hover:bg-[#fff8fa] max-[1050px]:pl-5 max-[650px]:h-[62px] max-[650px]:pl-4`}
                    >
                      <span className="grid grid-cols-[24px_1fr] items-center gap-3 max-[650px]:gap-2.5">
                        <Icon
                          className="size-[22px] text-[#c81046]"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        <span className="break-words leading-snug">{row.feature}</span>
                      </span>
                    </th>

                    {/* Sweet Start */}
                    <td className={`h-[66px] ${borderB} px-3 py-3 align-middle text-[clamp(0.82rem,1vw,0.95rem)] text-[#78666b] group-hover:bg-[#fff8fa] max-[650px]:h-[62px]`}>
                      <Value value={row.sweet} />
                    </td>

                    {/* Signature (highlighted) */}
                    <td className={`h-[66px] ${borderB} ${hlCell} px-3 py-3 align-middle text-[clamp(0.82rem,1vw,0.95rem)] text-[#78666b] group-hover:bg-[#ffe8ef] max-[650px]:h-[62px]`}>
                      <Value value={row.signature} highlighted />
                    </td>

                    {/* Grand Experience */}
                    <td className={`h-[66px] ${borderB} px-3 py-3 align-middle text-[clamp(0.82rem,1vw,0.95rem)] text-[#78666b] group-hover:bg-[#fff8fa] max-[650px]:h-[62px]`}>
                      <Value value={row.grand} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}