import { cn } from "@/lib/utils";
import * as React from "react";

export interface ContainerProps extends React.ComponentPropsWithRef<"div"> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[calc(100%/12)]",
        className,
      )}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export { Container };
