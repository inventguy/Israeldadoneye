"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = ["Home", "Features", "Pricing", "About", "Contact"];

export default function MenuDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Phone frame */}
      <div className="relative h-[560px] w-[300px] overflow-hidden rounded-[2.5rem] border-[6px] border-border bg-background shadow-2xl">
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-30 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-border" />

        {/* top bar */}
        <div className="relative z-20 flex items-center justify-between border-b border-border bg-card px-5 pb-3 pt-8">
          <span className="font-mono text-sm font-semibold">
            brand<span className="text-accent">.</span>
          </span>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center"
          >
            <div className="space-y-1.5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 bg-foreground"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-5 bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-5 bg-foreground"
              />
            </div>
          </button>
        </div>

        {/* page content */}
        <div className="space-y-3 p-5">
          <div className="h-32 rounded-xl bg-gradient-to-br from-accent/30 to-accent/5" />
          <div className="h-3 w-3/4 rounded bg-card" />
          <div className="h-3 w-full rounded bg-card" />
          <div className="h-3 w-5/6 rounded bg-card" />
          <div className="mt-4 h-20 rounded-xl bg-card" />
        </div>

        {/* dim overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 z-20 bg-black/50"
            />
          )}
        </AnimatePresence>

        {/* slide-in menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="absolute right-0 top-0 z-30 flex h-full w-2/3 flex-col gap-2 border-l border-border bg-card px-5 pb-5 pt-20"
            >
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
                >
                  {item}
                </motion.a>
              ))}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
                className="mt-3 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Get started
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-6 text-sm text-muted">
        Tap the{" "}
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-medium text-accent underline-offset-2 hover:underline"
        >
          menu icon
        </button>{" "}
        to open and close it.
      </p>
    </div>
  );
}
