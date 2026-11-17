import { MessageSquare, Phone, ClipboardList } from "lucide-react";
import { site } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-white/10 bg-pine p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <a href={site.phoneHref} className="btn-primary !px-2 text-sm"><Phone className="h-4 w-4" aria-hidden="true" />Call Now</a>
      <a href={site.smsHref} className="btn-outline-light !px-2 text-sm"><MessageSquare className="h-4 w-4" aria-hidden="true" />Text Us</a>
      <a href="#contact" className="btn-outline-light !px-2 text-sm"><ClipboardList className="h-4 w-4" aria-hidden="true" />Estimate</a>
    </div>
  );
}
