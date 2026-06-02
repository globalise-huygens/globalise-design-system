import { cn } from "@/lib/utils";
import * as React from "react";
import { Link as AriaLink } from "react-aria-components";
import { IconArrowRight } from "../icons/IconArrowRight";

interface CardArticleBaseProps {
  /** Category label (e.g. "Article", "News") */
  label: string;
  /** Card title */
  title: string;
  /** Image element rendered at the top of the card */
  image?: React.ReactNode;
  className?: string;
}

export type CardArticleProps =
  | (CardArticleBaseProps & { href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "color"
      >)
  | (CardArticleBaseProps & {
      href?: never;
    } & React.HTMLAttributes<HTMLDivElement>);

const CardArticle = React.forwardRef<HTMLElement, CardArticleProps>(
  ({ className, label, title, image, ...props }, ref) => {
    const href = "href" in props ? props.href : undefined;

    const content = (
      <>
        {image && (
          <div className="relative w-full h-40 overflow-hidden">{image}</div>
        )}
        <div className="flex flex-col gap-s8">
          <span className="text-xs font-sans uppercase leading-[1.1] opacity-50">
            {label}
          </span>
          <span className="text-lg font-normal font-serif leading-[1.25] tracking-[-0.02em]">
            {title}
          </span>
        </div>
        <IconArrowRight className="h-s16 w-s16" aria-hidden="true" />
      </>
    );

    if (href) {
      return (
        <AriaLink
          href={href}
          ref={ref as React.RefObject<HTMLAnchorElement>}
          className={cn(
            "group flex flex-col gap-s16 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className,
          )}
        >
          {content}
        </AriaLink>
      );
    }

    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn("group flex flex-col gap-s16", className)}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {content}
      </div>
    );
  },
);
CardArticle.displayName = "CardArticle";

export { CardArticle };
