"use client";
import { useEffect, useState } from "react";

/**
 * Click-to-enlarge image wrapper.
 * Renders a thumbnail. On click, opens a fullscreen overlay with the same src.
 * Close via backdrop click, X button, or ESC key.
 */
export default function Lightbox({
  src,
  alt,
  className,
  thumbClassName = "w-full h-full object-cover rounded-lg border border-slate-200 hover:opacity-90 transition",
}: {
  src: string;
  alt: string;
  className?: string;
  thumbClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    // prevent body scroll while open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`block cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg ${className ?? ""}`}
        aria-label={`View ${alt} enlarged`}
      >
        <img src={src} alt={alt} className={thumbClassName} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} enlarged`}
        >
          <button
            type="button"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close enlarged image"
          >
            ×
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
