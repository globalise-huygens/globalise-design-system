import { cn } from "@/lib/utils";
import * as React from "react";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-5",
        className,
      )}
      {...props}
    />
  ),
);
Grid.displayName = "Grid";

export { Grid };
