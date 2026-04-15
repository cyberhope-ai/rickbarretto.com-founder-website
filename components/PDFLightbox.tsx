"use client";
import { useEffect, useState, ReactNode } from "react";

/**
 * Click-to-open PDF viewer modal.
 * Renders a trigger (custom children) and, on click, opens a fullscreen
 * overlay with an iframe loading the PDF.
 */
export default function PDFLightbox({
  url,
  label,
  children,
}: {
  url: string;
  label: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        aria-label={`Open ${label}`}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col p-4 md:p-8"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${label} PDF viewer`}
        >
          <div className="flex items-center justify-between mb-3 text-white max-w-6xl w-full mx-auto">
            <p className="font-sans text-sm md:text-base font-semibold truncate pr-4">
              {label}
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-sans transition"
              >
                Open in new tab ↗
              </a>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-xl flex items-center justify-center transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
          <div
            className="flex-1 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={url}
              title={label}
              className="w-full h-full rounded-lg bg-white shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
