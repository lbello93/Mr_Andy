import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { packages } from "./packageData";
import PackageCard from "./PackageCard";

// Height of your sticky navbar. Adjust if it's taller or shorter.
const HEADER_HEIGHT = "72px";

// Route of your booking page. Change this if yours is different (e.g. "/book").
const BOOK_ROUTE = "/contact";

export default function PackageComparison() {
  const navigate = useNavigate();

  const common = useMemo(
    () =>
      (packages[0]?.features || []).filter((f) =>
        packages.every((p) => (p.features || []).includes(f)),
      ),
    [],
  );

  const handleSelect = useCallback(
    (title) => {
      navigate(`${BOOK_ROUTE}?package=${encodeURIComponent(title)}`);
    },
    [navigate],
  );

  return (
    <section
      style={{ "--header-h": HEADER_HEIGHT }}
      className="flex flex-col justify-center bg-page py-16 min-[1025px]:min-h-[calc(100svh-var(--header-h))] min-[1025px]:py-[clamp(20px,4vh,48px)]"
    >
      {/* Included in every package */}
      {common.length > 0 && (
        <div className="mx-auto mb-10 flex max-w-[1152px] flex-wrap items-center justify-center gap-x-4 gap-y-2.5 px-6 min-[1025px]:mb-[clamp(16px,3.5vh,40px)]">
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
            Every package includes
          </span>
          {common.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-[clamp(5px,0.9vh,8px)] text-[14px] font-medium text-ink shadow-[0_4px_14px_-6px_rgba(185,2,53,0.2)]"
            >
              <Check
                size={14}
                strokeWidth={3}
                className="text-brand"
                aria-hidden="true"
              />
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Cards */}
      <div className="mx-auto grid w-full max-w-[1152px] grid-cols-3 items-stretch gap-6 px-6 max-[1024px]:max-w-[480px] max-[1024px]:grid-cols-1 max-[1024px]:gap-10">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.title}
            {...pkg}
            features={(pkg.features || []).filter((f) => !common.includes(f))}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-[620px] px-6 text-center text-[14px] leading-[1.6] text-muted min-[1025px]:mt-[clamp(14px,3vh,36px)]">
        Need something different? Every package can be tailored to your event.
        Pick the closest one and tell us what you&apos;re imagining.
      </p>
    </section>
  );
}
