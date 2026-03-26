import { cn } from "@/lib/utils";
import * as React from "react";

export interface ContainerProps extends React.ComponentPropsWithRef<"div"> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto max-w-360 px-4 sm:px-8 lg:px-14 xl:px-30",
        className,
      )}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export { Container };
