import * as React from "react";
import { cn } from "@/lib/utils";


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-[#E69F45]/40 bg-[#ECE2D4]/30 px-3 py-2 text-sm text-[#222222] placeholder:text-[#222222]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E69F45] focus-visible:ring-offset-2",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
