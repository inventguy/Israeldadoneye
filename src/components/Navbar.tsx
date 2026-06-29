"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/app/config";
import Logo from "./Logo";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 ${
          scrolled
            ? "my-3 rounded-full border border-border bg-background/70 py-2.5 backdrop-blur-xl"
            : "my-0 border-b border-transparent py-5"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-medium"
        >
          <Logo className="h-8 w-8 text-foreground" />
          <span className="font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-accent"
          >
            {siteConfig.available && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
            )}
            Available for work
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
        >
          <div className="space-y-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-foreground"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-5 bg-foreground"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-foreground"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-3 mt-2 overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm text-muted transition-colors hover:bg-card hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-white"
              >
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
