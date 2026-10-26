import { Check, Sparkles, HelpCircle } from "lucide-react";
import { packages } from "../../../../data/packageData";

export const NOT_SURE = "Not sure yet";

export default function StepPackage({ formData, setFormData, onSelect }) {
  const choose = (title) => {
    setFormData((prev) => ({ ...prev, package: title }));
    onSelect({ package: title });
  };

  const cardBase =
    "relative flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-200 max-[480px]:gap-3 max-[480px]:p-3.5";
  const cardState = (active) =>
    active
      ? "border-brand bg-[#fff0f4] shadow-[0_12px_28px_-16px_rgba(185,2,53,0.55)]"
      : "border-[#f0d6dc] bg-white hover:-translate-y-0.5 hover:border-brand";

  const Tick = ({ active }) => (
    <span
      className={`flex size-6 shrink-0 items-center justify-center rounded-full border-2 ${
        active
          ? "border-brand bg-brand text-white"
          : "border-[#e8cdd5] text-transparent"
      }`}
    >
      <Check size={13} strokeWidth={3} aria-hidden="true" />
    </span>
  );

  return (
    <>
      <div className="mb-2">
        <h1 className="font-serif text-[32px] font-bold leading-[42px] text-ink">
          Choose your package
        </h1>
        <p className="mt-2 text-muted">
          Pick the experience that fits your celebration. You can always change
          it later.
        </p>
      </div>

      <div
        role="radiogroup"
        aria-label="Packages"
        className="flex flex-col gap-3"
      >
        {packages.map((pkg) => {
          const active = formData.package === pkg.title;
          return (
            <button
              key={pkg.title}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => choose(pkg.title)}
              className={`${cardBase} ${cardState(active)}`}
            >
              {pkg.icon && (
                <img
                  src={pkg.icon}
                  alt=""
                  aria-hidden="true"
                  className="size-10 shrink-0 object-contain"
                />
              )}

              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-serif text-[18px] font-bold leading-tight text-ink">
                    {pkg.title}
                  </span>
                  {pkg.popular && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white">
                      <Sparkles size={10} aria-hidden="true" />
                      Most Popular
                    </span>
                  )}
                </span>
                <span className="mt-0.5 block text-[13px] leading-[1.45] text-muted">
                  {pkg.subtitle}
                </span>
              </span>

              <span className="shrink-0 text-[17px] font-bold tabular-nums text-brand">
                {pkg.price}
              </span>
              <Tick active={active} />
            </button>
          );
        })}

        <button
          type="button"
          role="radio"
          aria-checked={formData.package === NOT_SURE}
          onClick={() => choose(NOT_SURE)}
          className={`${cardBase} ${cardState(formData.package === NOT_SURE)} border-dashed`}
        >
          <HelpCircle
            size={36}
            strokeWidth={1.5}
            className="shrink-0 text-brand"
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1">
            <span className="block font-serif text-[18px] font-bold leading-tight text-ink">
              Not sure yet
            </span>
            <span className="mt-0.5 block text-[13px] text-muted">
              We&apos;ll help you choose the best fit for your event.
            </span>
          </span>
          <Tick active={formData.package === NOT_SURE} />
        </button>
      </div>
    </>
  );
}
