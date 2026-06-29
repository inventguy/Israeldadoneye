const plans = [
  { name: "Starter", price: "19", highlight: false },
  { name: "Pro", price: "49", highlight: true },
  { name: "Team", price: "99", highlight: false },
];

export default function PricingMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-background p-5">
      <div className="mx-auto flex items-center gap-2 text-[9px] text-muted">
        <span>Monthly</span>
        <span className="relative h-3.5 w-7 rounded-full bg-card">
          <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <span className="text-foreground">Yearly</span>
      </div>

      <div className="mt-4 grid flex-1 grid-cols-3 gap-2">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col rounded-lg border p-3 ${
              p.highlight
                ? "border-accent bg-accent/[0.07]"
                : "border-border bg-card"
            }`}
          >
            <span className="text-[9px] text-muted">{p.name}</span>
            <div className="mt-1 flex items-end gap-0.5">
              <span className="text-[8px] text-muted">$</span>
              <span className="font-display text-xl leading-none">
                {p.price}
              </span>
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-1 w-full rounded bg-foreground/10" />
              <div className="h-1 w-4/5 rounded bg-foreground/10" />
              <div className="h-1 w-3/5 rounded bg-foreground/10" />
            </div>
            <div
              className={`mt-auto h-4 rounded ${
                p.highlight ? "bg-accent" : "bg-foreground/10"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
