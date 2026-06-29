import type { Metadata } from "next";
import DemoShell from "@/components/demos/DemoShell";
import DashboardDemo from "@/components/demos/DashboardDemo";

export const metadata: Metadata = {
  title: "Analytics dashboard — demo",
};

export default function DashboardPage() {
  return (
    <DemoShell
      title="Analytics dashboard"
      subtitle="Switch the date range to see the stats, chart, and animated bars update. Fully responsive — resize the window or open it on your phone."
    >
      <DashboardDemo />
    </DemoShell>
  );
}
