export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Israel Dadoneye"
      fill="none"
    >
      {/* Faceted D — clean 45° machined chamfers; left band reads as I */}
      <path
        d="M9 8 L26 8 L39 21 L39 27 L26 40 L9 40 Z M18 16 L24 16 L31 23 L31 25 L24 32 L18 32 Z"
        fillRule="evenodd"
        fill="currentColor"
      />

      {/* Diamond rivet — the machined signature accent */}
      <path d="M13.5 20 L17.5 24 L13.5 28 L9.5 24 Z" fill="var(--accent)" />
    </svg>
  );
}
