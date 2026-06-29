import type { Metadata } from "next";
import DemoShell from "@/components/demos/DemoShell";
import MenuDemo from "@/components/demos/MenuDemo";

export const metadata: Metadata = {
  title: "Animated mobile menu — demo",
};

export default function MenuPage() {
  return (
    <DemoShell
      title="Animated mobile menu"
      subtitle="A smooth slide-in navigation with staggered links and a dim overlay — the kind of detail that makes a site feel polished on phones."
    >
      <MenuDemo />
    </DemoShell>
  );
}
