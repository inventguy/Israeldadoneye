const bars = [45, 65, 50, 80, 60, 92, 70];

export default function DashboardMockup() {
  return (
    <div className="flex h-full w-full bg-background text-[8px]">
      {/* sidebar */}
      <aside className="hidden w-1/5 flex-col gap-3 border-r border-border bg-card p-3 sm:flex">
        <div className="h-2 w-2/3 rounded bg-accent" />
        <div className="mt-2 space-y-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-sm bg-foreground/20" />
              <div className="h-1 flex-1 rounded bg-foreground/10" />
            </div>
          ))}
        </div>
      </aside>

      {/* main */}
      <main className="flex-1 p-3">
        <div className="flex items-center justify-between">
          <div className="h-1.5 w-16 rounded bg-foreground/20" />
          <div className="flex gap-1">
            <div className="h-3 w-5 rounded-full bg-accent" />
            <div className="h-3 w-5 rounded-full bg-card" />
            <div className="h-3 w-5 rounded-full bg-card" />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-md border border-border bg-card p-1.5">
              <div className="h-1 w-2/3 rounded bg-foreground/15" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded bg-foreground/30" />
            </div>
          ))}
        </div>

        <div className="mt-1.5 grid grid-cols-3 gap-1.5">
          <div className="col-span-2 rounded-md border border-border bg-card p-2">
            <div className="h-1 w-1/3 rounded bg-foreground/15" />
            <div className="mt-2 flex h-14 items-end justify-between gap-1">
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-full rounded-t bg-gradient-to-t from-accent/60 to-accent"
                />
              ))}
            </div>
          </div>
          <div className="space-y-1.5 rounded-md border border-border bg-card p-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-accent/20" />
                <div className="flex-1 space-y-1">
                  <div className="h-1 w-full rounded bg-foreground/15" />
                  <div className="h-1 w-1/2 rounded bg-foreground/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
