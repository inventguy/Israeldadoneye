import type { Metadata } from "next";
import DemoShell from "@/components/demos/DemoShell";
import PricingDemo from "@/components/demos/PricingDemo";

export const metadata: Metadata = {
  title: "Pricing section — demo",
};

export default function PricingPage() {
  return (
    <DemoShell
      title="Pricing section"
      subtitle="Toggle between monthly and yearly billing — prices animate and the highlighted plan stands out. Try it on your phone too."
    >
      <PricingDemo />
    </DemoShell>
  );
}
