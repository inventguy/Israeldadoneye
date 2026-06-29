import { siteConfig } from "@/app/config";
import Reveal from "./Reveal";
import Portrait from "./Portrait";

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          {/* Portrait */}
          <Reveal>
            <Portrait
              src={siteConfig.photo}
              alt={siteConfig.name}
              initials={siteConfig.initials}
            />
            <div className="mt-5">
              <p className="font-display text-lg font-semibold tracking-tight">
                {siteConfig.name}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                {siteConfig.available && (
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                )}
                {siteConfig.role} · {siteConfig.location}
              </p>
            </div>
          </Reveal>

          {/* Statement + services */}
          <Reveal delay={0.1}>
            <p className="font-display text-3xl font-semibold leading-snug tracking-tight text-balance md:text-4xl">
              I&apos;m {siteConfig.name}. I&apos;m early in my career — and for
              you, that&apos;s the edge.
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              No bloated agency rates. No junior quietly handed your project.
              Just one developer who&apos;s hungry, obsessive about the details,
              and building a reputation on your work — senior-level care at a
              starting-out price, and code I&apos;ll stand behind long after it
              ships.
            </p>

            <ul className="mt-10 divide-y divide-border border-y border-border">
              {siteConfig.services.map((s, i) => (
                <li key={s.title} className="group flex gap-5 py-6">
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg transition-colors group-hover:text-muted">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
