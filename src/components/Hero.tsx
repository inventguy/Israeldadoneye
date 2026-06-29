"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/app/config";
import Magnetic from "./Magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const line = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 pb-20 pt-36 md:pt-44"
      >
        <motion.div variants={line} className="flex items-center gap-3 eyebrow">
          <span>{siteConfig.role}</span>
          <span className="h-px w-8 bg-border" />
          <span>{siteConfig.location}</span>
        </motion.div>

        <h1 className="mt-8 font-display text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.92] tracking-tight">
          <motion.span variants={line} className="block">
            Look bigger.
          </motion.span>
          <motion.span variants={line} className="block text-accent">
            Sell harder.
          </motion.span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-[1.4fr_1fr]">
          <motion.div variants={line}>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              {siteConfig.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  View my work
                  <span aria-hidden>→</span>
                </a>
              </Magnetic>
              <a
                href="#contact"
                className="link-underline text-sm text-muted transition-colors hover:text-foreground"
              >
                Start a project
              </a>
            </div>
          </motion.div>

          <motion.dl
            variants={line}
            className="grid grid-cols-3 gap-4 md:grid-cols-1 md:justify-items-end md:text-right"
          >
            {siteConfig.stats.map((s) => (
              <div key={s.label} className="md:flex md:items-baseline md:gap-3">
                <dt className="order-2 text-xs leading-snug text-muted md:max-w-[11rem]">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-semibold md:text-2xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>
    </section>
  );
}
