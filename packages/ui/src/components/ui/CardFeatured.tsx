"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import { IconAdd } from "../icons/IconAdd";
import { IconArrowRight } from "../icons/IconArrowRight";

export interface CardFeaturedItem {
  color: string;
  /** Short category label (e.g. "Collection"), will be displayed above the title */
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
          const textColor = item.darkBackground
            ? "text-brand-white"
            : "text-brand-black";

          if (isExpanded) {
            const expandedClassName =
              "relative flex flex-1 cursor-pointer flex-col justify-end overflow-hidden p-panel-pad transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-(--brand-black)";

            const expandedContent = (
              <>
                {/* Background: image or solid color */}
                {item.image ? (
                  <>
                    {item.image}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent from-45% to-brand-black/50" />
                  </>
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: item.color }}
                  />
                )}

                {/* Content */}
                <div className="relative flex flex-col gap-s16">
                  <div className="flex flex-col gap-s8">
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
                      "inline-flex items-center gap-s8 text-sm font-medium",
                      textColor,
                    )}
                  >
                    {item.cta}{" "}
                    <IconArrowRight
                      className="h-s20 w-s20"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </>
            );

            if (item.href) {
              return (
                <AriaLink
                  key={index}
                  href={item.href}
                  className={expandedClassName}
                >
                  {expandedContent}
                </AriaLink>
              );
            }

            return (
              <div key={index} className={expandedClassName}>
                {expandedContent}
              </div>
            );
          }

          return (
            <AriaButton
              key={index}
              className="flex w-full cursor-pointer flex-col items-start gap-s8 overflow-hidden p-s12 text-left transition-all duration-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-(--brand-black) lg:w-s120"
              style={{ backgroundColor: item.color }}
              onPress={() => setExpandedIndex(index)}
              aria-label={`Expand ${item.label}: ${item.title.replace(/\n/g, " ")}`}
            >
              <IconAdd
                className="h-s20 w-s20 text-brand-black"
                aria-hidden="true"
              />
              <span className="font-serif text-base font-medium leading-[1.3] tracking-[-0.3px] text-brand-black">
                {item.title.replace(/\n/g, " ")}
              </span>
            </AriaButton>
          );
        })}
      </div>
    );
  },
);
CardFeatured.displayName = "CardFeatured";

export { CardFeatured };
