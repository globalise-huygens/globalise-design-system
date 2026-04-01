import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      /** Display heading — extra-large hero text */
      display:
        "scroll-m-20 font-serif font-medium text-5xl lg:text-[80px] leading-[0.95] tracking-[-0.03em]",
      h1: "scroll-m-20 font-serif font-medium text-7xl leading-[76px] tracking-[-0.03em]",
      h2: "scroll-m-20 font-serif font-medium text-6xl leading-[60.80px] tracking-[-0.03em] first:mt-0",
      h3: "scroll-m-20 font-serif font-medium text-5xl leading-[52.80px] tracking-[-0.03em]",
      h4: "scroll-m-20 font-serif font-medium text-4xl leading-10 tracking-[-0.03em]",
      /** Hero intro heading — larger than h4, responsive */
      hero: "scroll-m-20 font-serif font-medium text-[28px] lg:text-[40px] leading-[1.1] tracking-[-0.03em]",
      p: "font-sans text-base font-normal leading-6 tracking-[-0.02em] [&:not(:first-child)]:mt-6",
      /** Intro/subtitle text */
      lead: "font-sans text-lg font-normal leading-6 tracking-[-0.02em]",
      /** Emphasized body text */
      large: "font-sans text-lg font-semibold leading-6 tracking-[-0.02em]",
      small: "font-sans text-sm font-medium leading-5 tracking-[-0.02em]",
      /** De-emphasized text */
      muted:
        "font-sans text-sm text-[var(--muted-foreground)] leading-5 tracking-[-0.02em]",
      blockquote:
        "font-serif font-light text-4xl leading-10 tracking-[-0.02em]",
      code: "relative rounded bg-[var(--muted)] px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      /** Uppercased caption */
      label:
        "font-sans text-xs font-normal uppercase opacity-60 leading-4 tracking-[-0.02em]",
      subtitle: "font-serif font-medium text-xl leading-6 tracking-[-0.03em]",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantElement = {
  display: "h1";
  h1: "h1";
  h2: "h2";
  h3: "h3";
  h4: "h4";
  hero: "h2";
  p: "p";
  lead: "p";
  large: "div";
  small: "small";
  muted: "p";
  blockquote: "blockquote";
  code: "code";
  label: "span";
  subtitle: "p";
};

const variantElementMap: VariantElement = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  hero: "h2",
  p: "p",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
  blockquote: "blockquote",
  code: "code",
  label: "span",
  subtitle: "p",
};

export interface TypographyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  /** Render as a different element or component, overriding the variant default */
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", as, ...props }, ref) => {
    const Comp =
      as || variantElementMap[variant as keyof VariantElement] || "p";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref as React.Ref<never>}
        {...props}
      />
    );
  },
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
