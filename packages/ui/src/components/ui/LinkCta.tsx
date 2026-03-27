import { cn } from "@/lib/utils";
import * as React from "react";
import { IconArrowRight } from "../icons/IconArrowRight";

export interface LinkCtaProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkCta = React.forwardRef<HTMLAnchorElement, LinkCtaProps>(
  ({ className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2.5 text-sm font-medium font-sans",
        className,
      )}
      {...props}
    >
      {children}
      <IconArrowRight className="h-5 w-5" aria-hidden="true" />
    </a>
  ),
);
LinkCta.displayName = "LinkCta";

export { LinkCta };
