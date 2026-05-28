"use client";

import { getShellGridModel, useShellColumnCount } from "@/lib/shellGrid";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface GridGuideProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the guide overlay is visible */
  visible?: boolean;
  /** Whether column overlays are visible */
  showGrid?: boolean;
  /** Whether horizontal 8px rhythm lines are visible */
  showRhythm?: boolean;
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
  (
    {
      className,
      visible = false,
      showGrid = true,
      showRhythm = false,
      ...props
    },
    ref,
  ) => {
    const columnCount = useShellColumnCount({ enabled: visible });
    const contentBand = React.useMemo(
      () => getShellGridModel(columnCount),
      [columnCount],
    );

    if (!visible) return null;

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed inset-0 z-9999 mx-auto grid w-full max-w-shell-max grid-cols-[repeat(var(--shell-cols),minmax(0,1fr))] gap-x-shell-gutter px-shell-margin",
          className,
        )}
        {...props}
      >
        {showRhythm && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 1px, transparent 8px)",
            }}
          />
        )}

        {showGrid &&
          Array.from({ length: columnCount }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-full border-x border-brand-white/6",
                i + 1 < contentBand.start || i + 1 > contentBand.end
                  ? "bg-brand-white/2"
                  : "bg-brand-turquoise/4",
              )}
            />
          ))}
      </div>
    );
  },
);
GridGuide.displayName = "GridGuide";

export { GridGuide };
