"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { IconArrowRight } from "../icons/IconArrowRight";

const cardHeroVariants = cva("", {
  variants: {
    hoverColor: {
      turquoise: "bg-[var(--brand-turquoise)]",
      vermilion: "bg-[var(--brand-vermilion)]",
      mint: "bg-[var(--brand-mint)]",
      parchment: "bg-[var(--brand-parchment)]",
    },
  },
  defaultVariants: {
    hoverColor: "turquoise",
  },
});

export interface CardHeroProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeroVariants> {
  /** Label shown on hover (e.g. "Archive", "Video") */
  label: string;
  /** Title text shown on hover — supports newlines via \n */
  title: string;
  /** URL the card links to */
  href?: string;
}

const CardHero = React.forwardRef<HTMLElement, CardHeroProps>(
  ({ className, hoverColor, label, title, href, children, ...props }, ref) => {
    const sharedClassName = cn(
      "group relative overflow-hidden transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-black)]",
      className,
    );

    const content = (
      <>
        {/* Default state: children (typically an image) */}
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
          {children}
        </div>

        {/* Hover state: brand color panel */}
        <div
          className={cn(
            "absolute inset-0 p-3 flex flex-col justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
            cardHeroVariants({ hoverColor }),
          )}
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs text-black/60 leading-tight font-sans">
              {label}
            </span>
            <span className="font-serif font-medium text-lg leading-tight tracking-tight text-black whitespace-pre-line">
              {title}
            </span>
          </div>
          <IconArrowRight className="h-5 w-5 text-black" aria-hidden="true" />
        </div>
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={sharedClassName}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type="button"
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(sharedClassName, "cursor-pointer text-left")}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  },
);
CardHero.displayName = "CardHero";

export { CardHero, cardHeroVariants };
