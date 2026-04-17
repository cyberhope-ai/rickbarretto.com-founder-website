"use client";
import { useEffect, useState } from "react";

/**
 * YouTube video card with click-to-play popup.
 * Uses the auto-generated thumbnail from YouTube; on click, replaces
 * with an embedded iframe in a fullscreen overlay.
 */
export default function VideoLightbox({
  videoId,
  title,
  subtitle,
}: {
  videoId: string;
  title: string;
  subtitle?: string;
}) {
  const [open, setOpen] = useState(false);
  // YouTube high-quality thumbnail; falls back to hqdefault if maxres unavailable.
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

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
        className="group block text-left w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl overflow-hidden"
        aria-label={`Play video: ${title}`}
      >
        <div className="relative aspect-video bg-slate-900 overflow-hidden rounded-xl border border-slate-200">
          <img
            src={thumb}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition duration-300"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600/90 group-hover:bg-red-600 shadow-xl flex items-center justify-center transition">
              <div className="w-0 h-0 ml-1 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-white" />
            </div>
          </div>
        </div>
        <div className="mt-2 px-1">
          <p className="font-sans font-semibold text-slate-900 text-sm md:text-base leading-snug">
            {title}
          </p>
          {subtitle && (
            <p className="font-sans text-xs text-slate-500 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition z-10"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close video"
          >
            ×
          </button>
          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              className="w-full h-full rounded-xl shadow-2xl"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
