import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Container, type ContainerProps } from "./Container";

const sectionVariants = cva("py-s64 sm:py-s80", {
  variants: {
    background: {
      dark: "bg-surface-dark text-text-on-dark",
      light: "bg-surface-light text-text-on-light",
    },
    spacing: {
      default: "lg:py-s112",
      large: "lg:py-s120",
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
    VariantProps<typeof sectionVariants> {
  /** When true, wraps children in a shared Container automatically. */
  withContainer?: boolean;
  /** Container width preset used when withContainer is true. */
  containerSize?: ContainerProps["size"];
  /** Container inset preset used when withContainer is true. */
  containerInset?: ContainerProps["inset"];
  /** Additional classes applied to the internal Container wrapper. */
  containerClassName?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      background,
      spacing,
      withContainer = false,
      containerSize = "shell",
      containerInset = "page",
      containerClassName,
      children,
      ...props
    },
    ref,
  ) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ background, spacing }), className)}
      {...props}
    >
      {withContainer ? (
        <Container
          size={containerSize}
          inset={containerInset}
          className={containerClassName}
        >
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  ),
);
Section.displayName = "Section";

export { Section, sectionVariants };
