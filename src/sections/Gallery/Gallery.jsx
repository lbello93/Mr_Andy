import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Pause,
  Play,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ---------------- Config ---------------- */

const EVENT_PHOTO_COUNT = 17;
const SPEED = 35; // px per second, lower = slower

// Edit these captions freely, or give each photo its own (see notes below)
const CAPTIONS = [
  "The Candy Wall",
  "Guest Moments",
  "Sweet Details",
  "Event Setup",
];

// Card shapes repeat in this pattern for a natural, editorial look
const SHAPES = ["wide", "tall", "square", "tall", "wide", "square"];

const SHAPE_CLASSES = {
  wide: "w-[440px] max-[1024px]:w-[360px] max-[700px]:w-[280px]",
  tall: "w-[260px] max-[1024px]:w-[220px] max-[700px]:w-[170px]",
  square: "w-[340px] max-[1024px]:w-[290px] max-[700px]:w-[230px]",
};

const galleryImages = Array.from({ length: EVENT_PHOTO_COUNT }, (_, i) => ({
  index: i,
  src: `/gallery/event-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `MR. ANDY candy wall at an event, photo ${i + 1}`,
  caption: CAPTIONS[i % CAPTIONS.length],
  shape: SHAPES[i % SHAPES.length],
}));

const half = Math.ceil(galleryImages.length / 2);
const rowA = galleryImages.slice(0, half);
const rowB = galleryImages.slice(half);

/* ---------------- Marquee row ---------------- */

function MarqueeRow({ items, direction = 1, paused, onOpen }) {
  const trackRef = useRef(null);
  const pos = useRef(0);
  const loopWidth = useRef(0);
  const hovered = useRef(false);
  const dragging = useRef(false);
  const moved = useRef(0);
  const dragStart = useRef({ x: 0, pos: 0 });
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const loop = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const first = track.children[0];
      const clone = track.children[items.length];
      if (first && clone)
        loopWidth.current = clone.offsetLeft - first.offsetLeft;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let raf;
    let last = performance.now();

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (
        !dragging.current &&
        !hovered.current &&
        !pausedRef.current &&
        !document.hidden
      ) {
        pos.current += direction * SPEED * dt;
      }

      const L = loopWidth.current;
      if (L) pos.current = ((pos.current % L) + L) % L;

      track.style.transform = `translate3d(${-pos.current}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [items.length, direction]);

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragging.current = true;
    moved.current = 0;
    dragStart.current = { x: e.clientX, pos: pos.current };
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    moved.current = Math.abs(dx);
    pos.current = dragStart.current.pos - dx;
  };

  const endDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      className="w-full cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") hovered.current = true;
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") hovered.current = false;
        endDrag();
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-4 will-change-transform max-[700px]:gap-3"
      >
        {loop.map((image, i) => {
          const isClone = i >= items.length;
          return (
            <button
              key={`${image.src}-${isClone ? "b" : "a"}`}
              type="button"
              tabIndex={isClone ? -1 : 0}
              aria-hidden={isClone || undefined}
              aria-label={`Open photo: ${image.caption}`}
              onClick={() => {
                if (moved.current < 6) onOpen(image.index);
              }}
              className={`group relative isolate h-[340px] shrink-0 overflow-hidden rounded-[28px] bg-[#e8e0e2] text-left shadow-[0_20px_25px_-5px_rgba(185,2,53,0.08),0_8px_10px_-6px_rgba(185,2,53,0.08)] outline-none focus-visible:ring-4 focus-visible:ring-brand/40 max-[1024px]:h-[290px] max-[1024px]:rounded-3xl max-[700px]:h-[230px] max-[700px]:rounded-[18px] ${SHAPE_CLASSES[image.shape]}`}
            >
              <img
                src={image.src}
                alt={isClone ? "" : image.alt}
                loading={i < 4 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className="pointer-events-none block h-full w-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-[1.06] motion-reduce:transition-none"
              />

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/65 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 max-[700px]:p-3">
                <span className="text-[15px] font-semibold text-white max-[700px]:text-[12px]">
                  {image.caption}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink max-[700px]:h-7 max-[700px]:w-7">
                  <Expand size={15} aria-hidden="true" />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Lightbox ---------------- */

function Lightbox({ images, index, onClose, onNav }) {
  const touchX = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNav]);

  const image = images[index];
  const ctrl =
    "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25 max-[700px]:h-10 max-[700px]:w-10";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) onNav(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-5 text-white max-[700px]:px-4 max-[700px]:py-3">
        <span className="text-[14px] font-medium tabular-nums text-white/70">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label="Close"
          className={ctrl}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Image */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-20 max-[700px]:px-3">
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl [animation:fadeIn_.35s_ease]"
        />

        <button
          type="button"
          aria-label="Previous photo"
          className={`${ctrl} absolute left-5 top-1/2 -translate-y-1/2 max-[700px]:hidden`}
          onClick={(e) => {
            e.stopPropagation();
            onNav(-1);
          }}
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next photo"
          className={`${ctrl} absolute right-5 top-1/2 -translate-y-1/2 max-[700px]:hidden`}
          onClick={(e) => {
            e.stopPropagation();
            onNav(1);
          }}
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>

      {/* Caption */}
      <p className="px-6 py-6 text-center text-[15px] font-medium text-white/85 max-[700px]:py-4 max-[700px]:text-[13px]">
        {image.caption}
        <span className="ml-2 hidden text-white/40 max-[700px]:inline">
          · swipe to browse
        </span>
      </p>

      <style>{`@keyframes fadeIn{from{opacity:0;transform:scale(.98)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}

/* ---------------- Section ---------------- */

export default function Gallery() {
  const [paused, setPaused] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const nav = useCallback(
    (dir) =>
      setActive((i) =>
        i === null
          ? i
          : (i + dir + galleryImages.length) % galleryImages.length,
      ),
    [],
  );

  const isStopped = paused || active !== null;

  const pillBtn =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e2d7d9] bg-white text-ink transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white max-[700px]:h-9 max-[700px]:w-9";

  return (
    <section
      id="gallery"
      className="flex w-full flex-col gap-14 overflow-hidden bg-[#f0eded] py-24 max-[1024px]:gap-11 max-[1024px]:py-[76px] max-[700px]:gap-8 max-[700px]:py-14 max-[520px]:py-12"
    >
      {/* Header */}
      <div className="mx-auto flex w-full max-w-[1280px] items-end justify-between gap-6 px-16 max-[1024px]:px-9 max-[700px]:items-start max-[700px]:px-5 max-[520px]:flex-col max-[520px]:gap-4">
        <div className="min-w-0">
          <h2 className="mb-0.5 text-[48px] font-bold leading-[58px] tracking-[-1.2px] text-ink max-[1024px]:text-[40px] max-[1024px]:leading-[1.2] max-[700px]:text-[32px] max-[700px]:tracking-[-0.7px]">
            The Visual Heart
          </h2>
          <p className="text-[16px] leading-6 text-muted max-[1024px]:text-[14px] max-[700px]:max-w-[360px] max-[700px]:text-[12px] max-[700px]:leading-[1.7] max-[520px]:mt-2 max-[520px]:max-w-[320px]">
            Experience the scale and setup quality of MR. ANDY. Tap any photo to
            view it full size.
          </p>
        </div>

        <div className="mb-0.5 flex shrink-0 items-center gap-3 max-[700px]:gap-2">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play gallery motion" : "Pause gallery motion"}
            className={pillBtn}
          >
            {paused ? (
              <Play size={16} aria-hidden="true" />
            ) : (
              <Pause size={16} aria-hidden="true" />
            )}
          </button>

          {/* <Link
            to="/packages"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e2d7d9] bg-white px-[18px] py-3 text-[13px] font-semibold text-ink no-underline transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white max-[700px]:gap-[5px] max-[700px]:px-3 max-[700px]:py-2.5 max-[700px]:text-[11px] max-[520px]:px-3.5 max-[520px]:text-[12px]"
          >
            Explore All
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link> */}
        </div>
      </div>

      {/* Two rows moving in opposite directions */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="MR. ANDY event photo gallery"
        className="flex flex-col gap-4 pb-6 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] max-[700px]:gap-3"
      >
        <MarqueeRow
          items={rowA}
          direction={1}
          paused={isStopped}
          onOpen={setActive}
        />
        <MarqueeRow
          items={rowB}
          direction={-1}
          paused={isStopped}
          onOpen={setActive}
        />
      </div>

      {active !== null && (
        <Lightbox
          images={galleryImages}
          index={active}
          onClose={close}
          onNav={nav}
        />
      )}
    </section>
  );
}
