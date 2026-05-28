import { cn } from "@/lib/utils";
import * as React from "react";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Shell grid primitive using the shared responsive contract:
 * 4 columns (mobile) → 8 (tablet) → 16 (desktop).
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid w-full grid-cols-[repeat(var(--shell-cols),minmax(0,1fr))] gap-x-shell-gutter",
        className,
      )}
      {...props}
    />
  ),
);
Grid.displayName = "Grid";

export { Grid };
