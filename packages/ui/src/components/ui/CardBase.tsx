import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const cardBaseVariants = cva(
  "flex flex-col overflow-hidden text-[var(--card-foreground)]",
  {
    variants: {
      variant: {
        default: "bg-[var(--card)]",
        turquoise: "bg-[var(--brand-turquoise)] text-black",
        vermilion: "bg-[var(--brand-vermilion)] text-black",
        mint: "bg-[var(--brand-mint)] text-black",
        parchment: "bg-[var(--brand-parchment)] text-black",
        overlay:
          "relative bg-gradient-to-b from-[var(--brand-black)]/0 to-[var(--brand-black)]/50 text-[var(--brand-white)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface CardBaseProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardBaseVariants> {}

const CardBase = React.forwardRef<HTMLDivElement, CardBaseProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardBaseVariants({ variant }), className)}
      {...props}
    />
  ),
);
CardBase.displayName = "CardBase";

const CardBaseHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-2 p-6", className)}
    {...props}
  />
));
CardBaseHeader.displayName = "CardBaseHeader";

const CardBaseTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-serif font-medium text-3xl leading-8 tracking-[-0.03em]",
      className,
    )}
    {...props}
  />
));
CardBaseTitle.displayName = "CardBaseTitle";

const CardBaseDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardBaseDescription.displayName = "CardBaseDescription";

const CardBaseContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardBaseContent.displayName = "CardBaseContent";

const CardBaseFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardBaseFooter.displayName = "CardBaseFooter";

export {
  CardBase,
  CardBaseContent,
  CardBaseDescription,
  CardBaseFooter,
  CardBaseHeader,
  CardBaseTitle,
  cardBaseVariants,
};
