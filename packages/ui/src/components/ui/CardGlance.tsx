import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Link as AriaLink } from "react-aria-components";
import { Button } from "./Button";

const cardGlanceVariants = cva(
  "flex flex-col justify-between p-6 flex-1 min-w-0",
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

interface CardGlanceBaseProps extends VariantProps<typeof cardGlanceVariants> {
  heading: string;
  subtitle: string;
  description: string;
  cta: string;
  className?: string;
}

export type CardGlanceProps =
  | (CardGlanceBaseProps & { href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "color"
      >)
  | (CardGlanceBaseProps & { href?: never } & Omit<
        React.HTMLAttributes<HTMLDivElement>,
        "color"
      >);

const CardGlance = React.forwardRef<HTMLElement, CardGlanceProps>(
  (props, ref) => {
    const { className, color, heading, subtitle, description, cta, ...rest } =
      props;
    const href = "href" in props ? props.href : undefined;
    const content = (
      <>
        <div className="flex flex-col gap-2 min-h-[6rem]">
          <span className="font-serif font-medium text-3xl sm:text-4xl leading-tight">
            {heading}
          </span>
          <span className="text-base sm:text-lg font-medium font-serif leading-6">
            {subtitle}
          </span>
        </div>
        <div className="flex-1 mt-6">
          <span className="text-xs font-medium font-sans leading-4">
            {description}
          </span>
        </div>
        <div className="mt-6">
          <Button
            variant="link"
            as="span"
            className="p-0 h-auto justify-start items-end whitespace-normal text-xs sm:text-sm"
          >
            {cta}
          </Button>
        </div>
      </>
    );

    if (href) {
      return (
        <AriaLink
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(
            "group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-(--brand-black)",
            cardGlanceVariants({ color }),
            className,
          )}
        >
          {content}
        </AriaLink>
      );
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn("group", cardGlanceVariants({ color }), className)}
        {...(rest as React.HTMLAttributes<HTMLDivElement>)}
      >
        {content}
      </div>
    );
  },
);
CardGlance.displayName = "CardGlance";

export { CardGlance, cardGlanceVariants };
