import { cn } from "@/lib/utils";
import * as React from "react";

type ContainerSize = "shell" | "content" | "narrow" | "full";
type ContainerInset = "page" | "none";

function containerVariants({ className }: { className?: string } = {}) {
  return cn("gds-container", className);
}

export interface ContainerProps extends React.ComponentPropsWithRef<"div"> {
  size?: ContainerSize;
  inset?: ContainerInset;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, inset, ...props }, ref) => (
    <div
      ref={ref}
      className={containerVariants({ className })}
      data-inset={inset ?? "page"}
      data-size={size ?? "shell"}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export { Container, containerVariants };
