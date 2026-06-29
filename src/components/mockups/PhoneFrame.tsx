import type { ReactNode } from "react";

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-[248px] overflow-hidden rounded-[2.2rem] border-[7px] border-border bg-surface shadow-2xl shadow-black/40">
      <div className="relative">
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-border" />
        <div className="aspect-[9/17] overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
