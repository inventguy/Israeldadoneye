const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Accessibility",
  "Performance",
  "Responsive UI",
  "Animation",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-border py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-6">
          {row.map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="font-display text-xl font-medium tracking-tight text-muted md:text-2xl">
                {item}
              </span>
              <span className="text-accent">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
