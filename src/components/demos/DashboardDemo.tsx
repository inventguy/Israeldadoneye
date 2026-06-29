"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ranges = ["7d", "30d", "90d"] as const;
type Range = (typeof ranges)[number];

const statsByRange: Record<
  Range,
  { label: string; value: string; delta: string; up: boolean }[]
> = {
  "7d": [
    { label: "Revenue", value: "$12.4k", delta: "+8.2%", up: true },
    { label: "Visitors", value: "9,318", delta: "+3.1%", up: true },
    { label: "Signups", value: "412", delta: "-1.4%", up: false },
    { label: "Churn", value: "1.9%", delta: "-0.3%", up: true },
  ],
  "30d": [
    { label: "Revenue", value: "$48.1k", delta: "+12.6%", up: true },
    { label: "Visitors", value: "38,902", delta: "+6.4%", up: true },
    { label: "Signups", value: "1,734", delta: "+4.0%", up: true },
    { label: "Churn", value: "2.2%", delta: "+0.2%", up: false },
  ],
  "90d": [
    { label: "Revenue", value: "$141k", delta: "+21.3%", up: true },
    { label: "Visitors", value: "112,540", delta: "+9.8%", up: true },
    { label: "Signups", value: "5,098", delta: "+7.7%", up: true },
    { label: "Churn", value: "2.5%", delta: "-0.1%", up: true },
  ],
};

const chartByRange: Record<Range, number[]> = {
  "7d": [40, 65, 50, 80, 60, 95, 72],
  "30d": [55, 70, 45, 85, 60, 90, 100],
  "90d": [60, 50, 75, 65, 88, 95, 80],
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const activity = [
  { who: "Acme Inc.", what: "upgraded to Pro", when: "2m ago" },
  { who: "Jane Cooper", what: "signed up", when: "18m ago" },
  { who: "Globex", what: "paid invoice #1043", when: "1h ago" },
  { who: "Soylent", what: "left a review", when: "3h ago" },
];

export default function DashboardDemo() {
  const [range, setRange] = useState<Range>("30d");
  const stats = statsByRange[range];
  const chart = chartByRange[range];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-7">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-medium">Overview</h2>
          <p className="text-sm text-muted">Your store at a glance</p>
        </div>
        <div className="flex rounded-full border border-border bg-background p-1">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`relative rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                range === r
                  ? "text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {range === r && (
                <motion.span
                  layoutId="range-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{r}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-background p-4"
          >
            <p className="text-xs text-muted">{s.label}</p>
            <p className="mt-1 text-xl font-semibold">{s.value}</p>
            <p
              className={`mt-1 text-xs ${
                s.up ? "text-green-400" : "text-red-400"
              }`}
            >
              {s.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Chart + activity */}
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-background p-5 lg:col-span-2">
          <p className="text-sm font-medium">Revenue by day</p>
          <div className="mt-6 flex h-44 items-end justify-between gap-2">
            {chart.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                  className="w-full rounded-t-md bg-gradient-to-t from-accent/50 to-accent"
                />
                <span className="text-[10px] text-muted">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background p-5">
          <p className="text-sm font-medium">Recent activity</p>
          <ul className="mt-4 space-y-4">
            {activity.map((a) => (
              <li key={a.who} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-medium text-accent">
                  {a.who.charAt(0)}
                </span>
                <div className="leading-snug">
                  <span className="font-medium">{a.who}</span>{" "}
                  <span className="text-muted">{a.what}</span>
                  <div className="text-xs text-muted">{a.when}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
