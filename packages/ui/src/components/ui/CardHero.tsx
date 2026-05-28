import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";
import { IconArrowRight } from "../icons/IconArrowRight";

const cardHeroVariants = cva("", {
  variants: {
    hoverColor: {
      turquoise: "bg-brand-turquoise",
      vermilion: "bg-brand-vermilion",
      mint: "bg-brand-mint",
      parchment: "bg-brand-parchment",
    },
  },
  defaultVariants: {
    hoverColor: "turquoise",
  },
});

interface CardHeroBaseProps extends VariantProps<typeof cardHeroVariants> {
  label: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export type CardHeroProps =
  | (CardHeroBaseProps & { href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "color"
      >)
  | (CardHeroBaseProps & { href?: never } & Omit<
        React.HTMLAttributes<HTMLDivElement>,
        "color"
      >);

const CardHero = React.forwardRef<HTMLElement, CardHeroProps>((props, ref) => {
  const { className, hoverColor, label, title, children } = props;
  const href = "href" in props ? props.href : undefined;
  const [touched, setTouched] = React.useState(false);
  const sharedClassName = cn(
    "group relative overflow-hidden transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black",
    className,
  );

  const handleTouchStart = () => setTouched(true);
  const handleTouchEnd = () => setTouched(false);

  const content = (
    <>
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0",
          touched && "opacity-0",
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          "absolute inset-0 p-3 flex flex-col justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
          touched && "opacity-100",
          cardHeroVariants({ hoverColor }),
        )}
      >
        <div className="flex flex-col gap-2">
          <span className="text-xs text-brand-black/60 leading-tight font-sans">
            {label}
          </span>
          <span className="font-serif font-medium text-lg leading-tight tracking-tight text-brand-black whitespace-pre-line">
            {title}
          </span>
        </div>
        <IconArrowRight
          className="h-5 w-5 text-brand-black"
          aria-hidden="true"
        />
      </div>
    </>
  );

  if (href) {
    return (
      <AriaLink
        href={href}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={sharedClassName}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {content}
      </AriaLink>
    );
  }

  return (
    <AriaButton
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={cn(sharedClassName, "cursor-pointer text-left")}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {content}
    </AriaButton>
  );
});
CardHero.displayName = "CardHero";

export { CardHero, cardHeroVariants };
