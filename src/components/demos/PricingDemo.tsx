"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Plan = {
  name: string;
  monthly: number;
  blurb: string;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 19,
    blurb: "For side projects getting off the ground.",
    features: ["1 project", "Basic analytics", "Community support"],
  },
  {
    name: "Pro",
    monthly: 49,
    blurb: "For freelancers and growing teams.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom domain",
    ],
    highlight: true,
  },
  {
    name: "Team",
    monthly: 99,
    blurb: "For companies that need scale.",
    features: [
      "Everything in Pro",
      "5 team seats",
      "SSO & roles",
      "Dedicated manager",
    ],
  },
];

export default function PricingDemo() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={yearly ? "text-muted" : "font-medium"}>Monthly</span>
        <button
          onClick={() => setYearly((v) => !v)}
          aria-label="Toggle billing period"
          className="relative h-7 w-14 rounded-full border border-border bg-card"
        >
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-0.5 h-5 w-5 rounded-full bg-accent"
            style={{ left: yearly ? "calc(100% - 1.375rem)" : "0.125rem" }}
          />
        </button>
        <span className={yearly ? "font-medium" : "text-muted"}>
          Yearly
          <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent">
            2 months free
          </span>
        </span>
      </div>

      {/* Plans */}
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {plans.map((plan) => {
          const price = yearly ? plan.monthly * 10 : plan.monthly;
          const period = yearly ? "/year" : "/month";
          return (
            <motion.div
              key={plan.name}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-accent bg-accent/[0.06]"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.blurb}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-sm text-muted">$</span>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-semibold"
                  >
                    {price}
                  </motion.span>
                </AnimatePresence>
                <span className="mb-1 text-sm text-muted">{period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 flex-shrink-0 text-accent"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105 ${
                  plan.highlight
                    ? "bg-accent text-white"
                    : "border border-border bg-background"
                }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
