import { Bath, Fence, Hammer, PaintRoller, PlugZap, ShieldCheck, Trees, Wrench, Layers } from "lucide-react";
import type { ServiceIcon as T } from "@/lib/site";

const map = { drywall: Layers, wrench: Wrench, hammer: Hammer, paint: PaintRoller, plug: PlugZap, fence: Fence, trees: Trees, bath: Bath, shield: ShieldCheck };

export default function ServiceIcon({ name, className = "h-7 w-7" }: { name: T; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden="true" />;
}
