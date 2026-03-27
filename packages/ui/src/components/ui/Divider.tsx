import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const dividerVariants = cva(
  "border-0 outline outline-1 outline-offset-[-0.50px]",
  {
    variants: {
      orientation: {
        horizontal: "h-0 w-full",
        vertical: "w-0 self-stretch",
      },
      color: {
        light: "outline-[var(--brand-white)]/50",
        dark: "outline-black/40",
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
    Omit<React.ComponentPropsWithRef<"hr">, "color">,
    VariantProps<typeof dividerVariants> {}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation, color, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn(dividerVariants({ orientation, color }), className)}
      {...props}
    />
  ),
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };
