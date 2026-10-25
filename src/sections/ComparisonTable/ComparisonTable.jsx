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

const hl = "relative border-x-[1.5px] border-x-[#c81046] bg-[#fff0f4]";
const cell = "h-[66px] border-b border-[#eee0e4] px-3.5 py-3 text-center align-middle text-[clamp(0.82rem,1vw,0.98rem)] leading-[1.45] text-[#78666b] break-words max-[1050px]:px-2 max-[1050px]:py-2.5 max-[1050px]:text-[0.85rem] max-[650px]:h-[62px] max-[650px]:px-2.5 max-[650px]:text-[0.88rem]";

function Value({ value, highlighted }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-[9px] whitespace-nowrap align-middle max-[1050px]:gap-1.5">
        <span className="inline-flex size-[26px] flex-none items-center justify-center rounded-full bg-[#c81046] text-white max-[1050px]:size-[23px] max-[650px]:size-[23px]">
          <Check size={16} strokeWidth={3} aria-hidden="true" />
        </span>
        <span className="text-[#49383d]">Included</span>
      </span>
    );
  }
  if (value === "\u2014") return <span className="text-[#a08e93]">Not included</span>;
  return <span className={highlighted ? "font-[550] text-[#b80d3e]" : ""}>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section
      aria-labelledby="comparison-title"
      className="flex min-h-screen min-h-[100svh] w-full items-center justify-center bg-[#fff9fa] px-[clamp(20px,4vw,64px)] py-[clamp(24px,4vh,48px)] font-dm text-[#24191c] max-[1050px]:px-[18px] max-[1050px]:py-9 max-[650px]:items-start max-[650px]:px-3 max-[650px]:py-9 max-[380px]:px-2 max-[380px]:py-7"
    >
      <div className="mx-auto w-full max-w-[1450px] rounded-3xl bg-[linear-gradient(135deg,#fbedf1_0%,#fff7f9_100%)] pt-[clamp(24px,3vh,36px)] max-[650px]:rounded-2xl">
        <header className="w-full px-6 pb-[clamp(24px,3vh,36px)] text-center max-[650px]:px-3.5 max-[650px]:pb-7">
          <h2
            id="comparison-title"
            className="mb-3 font-[Georgia,'Times_New_Roman',serif] text-[clamp(2.2rem,3.5vw,3.5rem)] font-bold leading-[1.15] tracking-[-1.2px] text-[#24191c] max-[650px]:text-[clamp(2rem,8vw,2.6rem)] max-[650px]:tracking-[-0.6px] max-[380px]:text-[1.9rem]"
          >
            What&apos;s Included
          </h2>
          <p className="mx-auto max-w-[720px] text-[clamp(0.95rem,1.2vw,1.1rem)] leading-[1.65] text-[#78666b] max-[650px]:text-[0.9rem] max-[650px]:leading-[1.6] max-[380px]:text-[0.85rem]">
            Compare our packages to find the perfect candy experience for your celebration.
          </p>
        </header>

        <div
          className="w-full overflow-visible rounded-[20px] border border-[rgba(238,224,228,0.95)] bg-white shadow-[0_16px_45px_rgba(112,42,65,0.06)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[rgba(200,16,70,0.35)] focus-visible:outline-offset-[4px] max-[650px]:overflow-x-auto max-[650px]:overflow-y-hidden max-[650px]:rounded-[15px] max-[650px]:[&::-webkit-scrollbar]:hidden max-[650px]:[-webkit-overflow-scrolling:touch]"
          role="region"
          aria-label="Candy wall package comparison"
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
                  className="h-[180px] border-b border-[#eee0e4] bg-[#fffafb] px-4 py-[26px] pl-8 text-left align-middle text-[0.8rem] font-bold uppercase tracking-[1.5px] text-[#78666b] max-[1050px]:h-[165px] max-[1050px]:px-2.5 max-[1050px]:pl-5 max-[650px]:h-[155px] max-[650px]:pl-4 max-[650px]:text-[0.72rem]"
                >
                  FEATURE
                </th>
                {packages.map((pkg) => {
                  const Icon = pkg.icon;
                  return (
                    <th
                      key={pkg.id}
                      scope="col"
                      className={`h-[180px] border-b border-[#eee0e4] bg-white px-4 py-[26px] text-center align-middle max-[1050px]:h-[165px] max-[1050px]:px-2.5 max-[650px]:h-[155px] max-[650px]:px-2.5 max-[650px]:pb-4 max-[650px]:pt-[22px] ${
                        pkg.featured ? `${hl} rounded-t-[18px] border-t-[1.5px] border-t-[#c81046] pt-10 max-[650px]:pt-10` : ""
                      }`}
                    >
                      {pkg.featured && (
                        <span className="absolute left-1/2 top-0 z-[2] flex min-h-8 min-w-[165px] -translate-x-1/2 items-center justify-center rounded-[0_0_14px_14px] bg-[linear-gradient(135deg,#d41450,#b90b3d)] px-3.5 py-2 text-[0.72rem] font-[750] uppercase leading-[1.2] tracking-[0.8px] text-white max-[1050px]:min-w-[145px] max-[1050px]:text-[0.68rem] max-[650px]:min-w-[140px] max-[650px]:min-h-[30px] max-[650px]:text-[0.66rem]">
                          {pkg.badge}
                        </span>
                      )}
                      <div className="flex h-full w-full flex-col items-center justify-center text-center">
                        <Icon className="mb-3 block size-[38px] text-[#c81046] max-[1050px]:size-[33px] max-[650px]:mb-2.5 max-[650px]:size-[33px]" strokeWidth={1.8} aria-hidden="true" />
                        <span className="mx-auto mb-[9px] block w-full max-w-[250px] text-center font-[Georgia,'Times_New_Roman',serif] text-[clamp(1.1rem,1.5vw,1.55rem)] font-semibold leading-[1.3] text-[#24191c] [overflow-wrap:anywhere] [word-break:break-word] max-[1050px]:text-[1.15rem] max-[650px]:text-[1.2rem]">
                          {pkg.title}
                        </span>
                        <span className="block whitespace-nowrap text-center text-[clamp(1.15rem,1.5vw,1.55rem)] font-[750] leading-[1.3] text-[#c81046] [font-variant-numeric:tabular-nums] max-[1050px]:text-[1.15rem] max-[650px]:text-[1.2rem]">
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
                return (
                  <tr key={row.feature} className="transition-colors duration-200 hover:[&>td:not(.hl)]:bg-[#fff8fa] hover:[&>th]:bg-[#fff8fa] hover:[&>.hl]:bg-[#ffe8ef]">
                    <th
                      scope="row"
                      className={`${cell} bg-white pl-8 text-left font-medium text-[#24191c] max-[1050px]:pl-5 max-[650px]:pl-4 ${isLast ? "border-b-0" : ""}`}
                    >
                      <span className="grid w-full min-w-0 grid-cols-[25px_minmax(0,1fr)] items-center gap-x-[13px] max-[1050px]:grid-cols-[22px_minmax(0,1fr)] max-[1050px]:gap-x-[9px] max-[650px]:grid-cols-[23px_minmax(0,1fr)] max-[650px]:gap-x-2.5">
                        <Icon className="block size-[25px] text-[#c81046] max-[1050px]:size-[22px] max-[650px]:size-[23px]" strokeWidth={1.8} aria-hidden="true" />
                        <span className="block min-w-0 text-left leading-[1.4] [overflow-wrap:break-word]">{row.feature}</span>
                      </span>
                    </th>
                    <td className={`${cell} ${isLast ? "border-b-0" : ""}`}>
                      <Value value={row.sweet} />
                    </td>
                    <td className={`hl ${cell} ${hl} ${isLast ? "rounded-b-[18px] border-b-[1.5px] border-b-[#c81046]" : ""}`}>
                      <Value value={row.signature} highlighted />
                    </td>
                    <td className={`${cell} ${isLast ? "border-b-0" : ""}`}>
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