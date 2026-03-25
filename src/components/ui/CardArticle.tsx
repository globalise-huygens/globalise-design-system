"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Button } from "./Button";
import { IconArrowRight } from "../icons/IconArrowRight";

export interface CardArticleProps extends React.HTMLAttributes<HTMLElement> {
  /** Category label (e.g. "Article", "News") */
  label: string;
  /** Card title */
  title: string;
  /** URL the card links to */
  href?: string;
  /** Image element (typically Next.js Image) */
  image?: React.ReactNode;
}

const CardArticle = React.forwardRef<HTMLElement, CardArticleProps>(
  ({ className, label, title, href, image, ...props }, ref) => {
    const content = (
      <>
        {image && (
          <div className="relative w-full h-40 overflow-hidden">{image}</div>
        )}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-sans leading-[1.35] opacity-60">
            {label}
          </span>
          <span className="text-lg font-normal font-serif leading-[1.25] tracking-[-0.36px]">
            {title}
          </span>
        </div>
        <Button variant="link" asChild className="p-0 h-auto self-start">
          <span>
            Read more
            <IconArrowRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </Button>
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(
            "group flex flex-col gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-black)]",
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
        className={cn("group flex flex-col gap-4", className)}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {content}
      </div>
    );
  },
);
CardArticle.displayName = "CardArticle";

export { CardArticle };
