import { cn } from "@/lib/utils";
import * as React from "react";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Page grid matching the shared layout contract:
 * 16 columns · stretch · 1440px max width · 32px margins · 16px gutters
 *
 * Consumers are expected to add the page max-width and margins that fit the
 * surface they are composing. The grid primitive itself owns column count and
 * gutter behavior so shells and docs pages use the same track math.
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid w-full grid-cols-[repeat(var(--layout-grid-columns),minmax(0,1fr))] gap-x-layout-grid-gutter",
        className,
      )}
      {...props}
    />
  ),
);
Grid.displayName = "Grid";

export { Grid };
