"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/interfaces-progress";

export function RouteProgress() {
  const pathname = usePathname();
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    setValue(18);

    const midpoint = window.setTimeout(() => setValue(68), 120);
    const nearComplete = window.setTimeout(() => setValue(92), 280);
    const finish = window.setTimeout(() => setValue(100), 420);
    const hide = window.setTimeout(() => setVisible(false), 700);

    return () => {
      window.clearTimeout(midpoint);
      window.clearTimeout(nearComplete);
      window.clearTimeout(finish);
      window.clearTimeout(hide);
    };
  }, [pathname]);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-0 z-[70] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <Progress value={value} className="h-1 rounded-none bg-white/10 [&_[data-slot=progress-indicator]]:bg-brand-red" />
    </div>
  );
}
