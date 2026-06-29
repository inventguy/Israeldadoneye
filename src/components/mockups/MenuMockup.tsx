export default function MenuMockup() {
  return (
    <div className="relative h-full w-full bg-background">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-border bg-card px-4 pb-2 pt-6">
        <div className="h-2 w-10 rounded bg-foreground/30" />
        <div className="space-y-1">
          <div className="h-0.5 w-4 bg-foreground" />
          <div className="h-0.5 w-4 bg-foreground" />
          <div className="h-0.5 w-4 bg-foreground" />
        </div>
      </div>

      {/* content */}
      <div className="space-y-2 p-4">
        <div className="h-20 rounded-lg bg-gradient-to-br from-accent/30 to-accent/5" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-12 rounded-lg bg-card" />
          <div className="h-12 rounded-lg bg-card" />
          <div className="h-12 rounded-lg bg-card" />
          <div className="h-12 rounded-lg bg-card" />
        </div>
      </div>

      {/* dim overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* slide-in menu */}
      <nav className="absolute right-0 top-0 flex h-full w-2/3 flex-col gap-2.5 border-l border-border bg-card px-4 pt-10">
        {["Home", "Shop", "New in", "Sale", "About"].map((item, i) => (
          <div
            key={item}
            className={`text-[11px] ${
              i === 0 ? "font-medium text-accent" : "text-muted"
            }`}
          >
            {item}
          </div>
        ))}
        <div className="mt-2 h-6 w-full rounded-full bg-accent" />
      </nav>
    </div>
  );
}
