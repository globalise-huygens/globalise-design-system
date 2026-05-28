import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      shell: "max-w-shell-max",
      content: "max-w-card-max",
      narrow: "max-w-sidebar-width",
      full: "max-w-none",
    },
    inset: {
      page: "px-shell-margin",
      none: "px-0",
    },
  },
  defaultVariants: {
    size: "shell",
    inset: "page",
  },
});

export interface ContainerProps
  extends
    React.ComponentPropsWithRef<"div">,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, inset, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerVariants({ size, inset }), className)}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export { Container, containerVariants };
