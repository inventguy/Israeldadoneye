import Link from "next/link";
import type { ReactNode } from "react";

export default function DemoShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <span aria-hidden>←</span> Back to portfolio
          </Link>
          <span className="font-mono text-xs text-accent">live demo</span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h1>
        <p className="mt-2 max-w-xl text-sm text-muted">{subtitle}</p>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
}
