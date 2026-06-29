"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/config";
import Reveal from "./Reveal";
import BrowserFrame from "./mockups/BrowserFrame";
import PhoneFrame from "./mockups/PhoneFrame";
import PricingMockup from "./mockups/PricingMockup";
import DashboardMockup from "./mockups/DashboardMockup";
import MenuMockup from "./mockups/MenuMockup";

const EASE = [0.16, 1, 0.3, 1] as const;

function Mockup({
  kind,
  url,
}: {
  kind: "pricing" | "dashboard" | "menu";
  url: string;
}) {
  if (kind === "menu") {
    return (
      <PhoneFrame>
        <MenuMockup />
      </PhoneFrame>
    );
  }
  return (
    <BrowserFrame url={url}>
      {kind === "pricing" ? <PricingMockup /> : <DashboardMockup />}
    </BrowserFrame>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
              Don&apos;t take my word for it — click it.
            </h2>
          </div>
          <span className="hidden font-display text-5xl font-light text-faint md:block">
            ({siteConfig.projects.length})
          </span>
        </div>
      </Reveal>

      <div className="mt-16 space-y-24 md:space-y-32">
        {siteConfig.projects.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={p.name}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              {/* Mockup */}
              <Reveal
                delay={0.05}
                className={flip ? "md:order-2" : "md:order-1"}
              >
                <Link href={p.href} className="group block">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <Mockup kind={p.mockup} url={p.href} />
                  </motion.div>
                </Link>
              </Reveal>

              {/* Text */}
              <Reveal
                delay={0.12}
                className={flip ? "md:order-1" : "md:order-2"}
              >
                <div className="flex items-center gap-3 eyebrow">
                  <span className="text-accent">{p.index}</span>
                  <span className="h-px w-6 bg-border" />
                  <span>{p.category}</span>
                  <span className="text-faint">· {p.year}</span>
                </div>

                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {p.name}
                </h3>

                <p className="mt-4 max-w-md leading-relaxed text-muted">
                  {p.summary}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={p.href}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
                >
                  View live demo
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
