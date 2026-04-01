import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";
import { IconArrowRight } from "../icons/IconArrowRight";

export interface LinkCtaProps extends Omit<
  AriaLinkProps,
  "className" | "style"
> {
  className?: string;
}

const LinkCta = React.forwardRef<HTMLAnchorElement, LinkCtaProps>(
  ({ className, children, ...props }, ref) => (
    <AriaLink
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2.5 text-sm font-medium font-sans",
        className,
      )}
      {...props}
    >
      {/* Fragment required: RAC Link children is ChildrenOrFunction<LinkRenderProps> */}
      <>
        {children}
        <IconArrowRight className="h-5 w-5" aria-hidden="true" />
      </>
    </AriaLink>
  ),
);
LinkCta.displayName = "LinkCta";

export { LinkCta };
