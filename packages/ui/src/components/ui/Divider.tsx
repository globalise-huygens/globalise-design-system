import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  Separator as AriaSeparator,
  type SeparatorProps as AriaSeparatorProps,
} from "react-aria-components";

const dividerVariants = cva(
  "border-0 outline outline-1 outline-offset-[-0.50px]",
  {
    variants: {
      orientation: {
        horizontal: "h-0 w-full",
        vertical: "w-0 self-stretch",
      },
      color: {
        light: "outline-brand-white/50",
        dark: "outline-brand-black/50",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      color: "light",
    },
  },
);

export interface DividerProps
  extends
    Omit<AriaSeparatorProps, "className" | "style" | "orientation">,
    VariantProps<typeof dividerVariants> {
  className?: string;
}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", color, ...props }, ref) => (
    <AriaSeparator
      ref={ref}
      orientation={orientation ?? "horizontal"}
      className={cn(dividerVariants({ orientation, color }), className)}
      {...props}
    />
  ),
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };
