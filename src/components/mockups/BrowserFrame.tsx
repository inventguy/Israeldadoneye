import type { ReactNode } from "react";

export default function BrowserFrame({
  url = "example.com",
  children,
}: {
  url?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex-1">
          <div className="mx-auto w-2/3 truncate rounded-md bg-background px-3 py-1 text-center text-[10px] text-faint">
            {url}
          </div>
        </div>
      </div>
      <div className="aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}
