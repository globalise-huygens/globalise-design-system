import { cn } from "@/lib/utils";
import * as React from "react";

export interface ContainerProps extends React.ComponentPropsWithRef<"div"> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-layout-page-max-width px-layout-page-margin-mobile lg:px-layout-page-margin",
        className,
      )}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export { Container };
