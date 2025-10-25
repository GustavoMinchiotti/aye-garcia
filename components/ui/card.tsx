import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#ECE2D4]/20 border border-[#E69F45]/30 p-4 shadow-sm hover:shadow-md transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
