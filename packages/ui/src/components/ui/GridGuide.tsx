"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

export interface GridGuideProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the guide overlay is visible */
  visible?: boolean;
}

/**
 * A fixed 16-column overlay that visualises the page grid.
 * Toggle visibility to check component alignment against the
 * shared 1440 px layout contract.
 *
 * Renders at a fixed position spanning the full viewport height.
 * Each column is tinted so you can see how content aligns.
 */
const GridGuide = React.forwardRef<HTMLDivElement, GridGuideProps>(
  ({ className, visible = false, ...props }, ref) => {
    if (!visible) return null;

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed inset-0 z-[9999] mx-auto grid w-full max-w-layout-page-max-width grid-cols-[repeat(var(--layout-grid-columns),minmax(0,1fr))] gap-x-layout-grid-gutter px-layout-page-margin-mobile lg:px-layout-page-margin",
          className,
        )}
        {...props}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-full border-x border-brand-white/6",
              i === 0 || i === 15 ? "bg-brand-white/2" : "bg-brand-turquoise/4",
            )}
          />
        ))}
      </div>
    );
  },
);
GridGuide.displayName = "GridGuide";

export { GridGuide };
