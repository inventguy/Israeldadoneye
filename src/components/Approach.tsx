import { siteConfig } from "@/app/config";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section id="approach" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <p className="eyebrow">How I work</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-light leading-tight tracking-tight text-balance md:text-5xl">
            Simple process. No surprises.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {siteConfig.approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col bg-background p-8">
                <span className="font-display text-5xl font-light text-faint">
                  {a.step}
                </span>
                <h3 className="mt-8 text-xl">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
