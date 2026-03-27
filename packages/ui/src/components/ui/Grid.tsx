import { cn } from "@/lib/utils";
import * as React from "react";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * 12-column layout grid matching the Figma grid system:
 * 12 columns · stretch · auto width · 0 margin · 0 gutter
 *
 * At max-width 1440px each column is 120px.
 * Most content is placed in columns 2–11 (use `Container` for that).
 * Full-bleed content spans all 12 columns.
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("grid grid-cols-12", className)} {...props} />
  ),
);
Grid.displayName = "Grid";

export { Grid };
