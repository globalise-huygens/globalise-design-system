"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Button } from "./Button";
import { IconArrowRight } from "../icons/IconArrowRight";

const cardGlanceVariants = cva(
  "flex flex-col justify-between p-6 overflow-hidden",
  {
    variants: {
      color: {
        turquoise: "bg-[var(--brand-turquoise)] text-black",
        vermilion: "bg-[var(--brand-vermilion)] text-black",
        mint: "bg-[var(--brand-mint)] text-black",
        parchment: "bg-[var(--brand-parchment)] text-black",
      },
    },
    defaultVariants: {
      color: "turquoise",
    },
  },
);

export interface CardGlanceProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof cardGlanceVariants> {
  /** Large heading (e.g. "2020", "Archives") */
  heading: string;
  /** Subtitle below heading */
  subtitle: string;
  /** Description text */
  description: string;
  /** Call-to-action text */
  cta: string;
  /** URL the card links to */
  href?: string;
}

const CardGlance = React.forwardRef<HTMLElement, CardGlanceProps>(
  (
    { className, color, heading, subtitle, description, cta, href, ...props },
    ref,
  ) => {
    const content = (
      <>
        <div className="flex flex-col gap-2">
          <span className="font-serif font-medium text-3xl leading-8 tracking-[-0.03em]">
            {heading}
          </span>
          <span className="text-sm font-sans opacity-80">{subtitle}</span>
        </div>
        <div className="mt-6 lg:mt-0">
          <span className="text-sm font-sans leading-5">{description}</span>
        </div>
        <div className="mt-6">
          <Button variant="link" asChild className="p-0 h-auto">
            <span>
              {cta} <IconArrowRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </Button>
        </div>
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(
            "group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-black)]",
            cardGlanceVariants({ color }),
            className,
          )}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn("group", cardGlanceVariants({ color }), className)}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {content}
      </div>
    );
  },
);
CardGlance.displayName = "CardGlance";

export { CardGlance, cardGlanceVariants };
