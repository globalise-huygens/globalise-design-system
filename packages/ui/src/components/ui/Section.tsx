import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const sectionVariants = cva("py-16 sm:py-20", {
  variants: {
    background: {
      dark: "bg-[var(--brand-black)] text-white",
      light: "bg-white text-black",
    },
    spacing: {
      default: "lg:py-28",
      large: "lg:py-[120px]",
    },
  },
  defaultVariants: {
    background: "dark",
    spacing: "default",
  },
});

export interface SectionProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, background, spacing, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ background, spacing }), className)}
      {...props}
    />
  ),
);
Section.displayName = "Section";

export { Section, sectionVariants };
