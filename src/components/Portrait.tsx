"use client";

import { useState } from "react";

export default function Portrait({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
      {/* Fallback shown only if the photo is missing/fails to load */}
      <span className="absolute inset-0 grid place-items-center font-display text-6xl font-semibold text-faint">
        {initials}
      </span>

      {!error && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="relative h-full w-full object-cover"
        />
      )}
    </div>
  );
}
