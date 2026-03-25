"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { IconAdd } from "../icons/IconAdd";
import { IconArrowRight } from "../icons/IconArrowRight";

export interface CardFeaturedItem {
  /** Brand color CSS variable (e.g. "var(--brand-turquoise)") */
  color: string;
  /** Short category label (e.g. "Collection") */
  label: string;
  /** Title text — supports newlines via \n */
  title: string;
  /** Call-to-action link text */
  cta: string;
  /** URL the expanded card links to */
  href?: string;
  /** Optional background image for the expanded state */
  image?: React.ReactNode;
  /** When true, text on the expanded card will be white (for image/dark backgrounds) */
  darkBackground?: boolean;
}

export interface CardFeaturedProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of featured items to display */
  items: CardFeaturedItem[];
  /** Which item is expanded by default (index) */
  defaultExpanded?: number;
}

const CardFeatured = React.forwardRef<HTMLDivElement, CardFeaturedProps>(
  ({ className, items, defaultExpanded = 0, ...props }, ref) => {
    const [expandedIndex, setExpandedIndex] = React.useState(defaultExpanded);

    return (
      <div
        ref={ref}
        className={cn("flex flex-col lg:flex-row", className)}
        {...props}
      >
        {items.map((item, index) => {
          const isExpanded = index === expandedIndex;
          const textColor = item.darkBackground ? "text-white" : "text-black";

          if (isExpanded) {
            const ExpandedWrapper = item.href ? "a" : "div";
            const expandedWrapperProps = item.href ? { href: item.href } : {};

            return (
              <ExpandedWrapper
                key={index}
                className="flex-1 relative flex flex-col justify-end p-6 overflow-hidden cursor-pointer transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-black)]"
                {...expandedWrapperProps}
              >
                {/* Background: image or solid color */}
                {item.image ? (
                  <>
                    {item.image}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-black/50" />
                  </>
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: item.color }}
                  />
                )}

                {/* Content */}
                <div className="relative flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <span
                      className={cn(
                        "text-xs leading-[1.35] font-sans opacity-60",
                        textColor,
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        "font-serif font-medium text-[32px] leading-[1.1] tracking-[-0.96px] whitespace-pre-line",
                        textColor,
                      )}
                    >
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "inline-flex items-center gap-2.5 text-sm font-medium",
                      textColor,
                    )}
                  >
                    {item.cta}{" "}
                    <IconArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
              </ExpandedWrapper>
            );
          }

          return (
            <button
              key={index}
              type="button"
              className="w-full lg:w-[120px] p-3 flex flex-col items-start gap-2 cursor-pointer transition-all duration-500 overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-black)]"
              style={{ backgroundColor: item.color }}
              onClick={() => setExpandedIndex(index)}
              aria-label={`Expand ${item.label}: ${item.title.replace(/\n/g, " ")}`}
            >
              <IconAdd className="h-5 w-5 text-black" aria-hidden="true" />
              <span className="font-serif font-medium text-[15px] leading-[1.3] tracking-[-0.3px] text-black">
                {item.title.replace(/\n/g, " ")}
              </span>
            </button>
          );
        })}
      </div>
    );
  },
);
CardFeatured.displayName = "CardFeatured";

export { CardFeatured };
