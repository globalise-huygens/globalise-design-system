import { cn } from "@/lib/utils";
import * as React from "react";

export interface DividerProps extends React.ComponentPropsWithRef<"hr"> {}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn(
        "h-0 border-0 outline outline-1 outline-offset-[-0.50px] outline-[var(--brand-white)]/50",
        className,
      )}
      {...props}
    />
  ),
);
Divider.displayName = "Divider";

export { Divider };
