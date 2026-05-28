import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const cardBaseVariants = cva(
  "flex flex-col overflow-hidden text-card-foreground",
  {
    variants: {
      variant: {
        default: "bg-card",
        turquoise: "bg-brand-turquoise text-brand-black",
        vermilion: "bg-brand-vermilion text-brand-black",
        mint: "bg-brand-mint text-brand-black",
        parchment: "bg-brand-parchment text-brand-black",
        overlay:
          "relative bg-gradient-to-b from-brand-black/0 to-brand-black/50 text-brand-white",
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
    className={cn("flex flex-col gap-s8 p-panel-pad", className)}
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
  <div ref={ref} className={cn("p-panel-pad pt-0", className)} {...props} />
));
CardBaseContent.displayName = "CardBaseContent";

const CardBaseFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-panel-pad pt-0", className)}
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
