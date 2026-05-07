import { IconArrowRight } from "@/components/icons/IconArrowRight";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium transition-colors data-focus-visible:outline-none data-focus-visible:ring-1 data-focus-visible:ring-(--ring) data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-(--brand-white) text-(--brand-black) leading-4 data-hovered:bg-zinc-200 data-pressed:bg-zinc-300",
        outline:
          "outline outline-2 outline-offset-[-2px] outline-(--brand-white)/50 text-(--brand-white) leading-4 data-hovered:outline-(--brand-white)/80 data-pressed:outline-(--brand-white) data-pressed:bg-(--brand-white)/5",
        link: "font-normal leading-5 text-current gap-2.5 [&_svg]:size-5 data-hovered:opacity-80 data-pressed:opacity-60",
        nav: "text-(--brand-white) leading-5 data-hovered:opacity-80 data-pressed:opacity-60",
      },
      size: {
        default: "h-12 px-14",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-16 text-base",
        icon: "h-12 w-12 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    Omit<AriaButtonProps, "className" | "style">,
    VariantProps<typeof buttonVariants> {
  className?: string;
  as?: React.ElementType;
}

export interface ButtonLinkProps
  extends
    Omit<AriaLinkProps, "className" | "style">,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, as, children, ...props }, ref) => {
    const content =
      variant === "link" ? (
        <>
          {children}
          <IconArrowRight aria-hidden="true" />
        </>
      ) : (
        children
      );

    if (as) {
      const Comp = as;
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {content}
        </Comp>
      );
    }
    return (
      <AriaButton
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {content}
      </AriaButton>
    );
  },
);
Button.displayName = "Button";

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const content =
      variant === "link" ? (
        <>
          {children}
          <IconArrowRight aria-hidden="true" />
        </>
      ) : (
        children
      );

    return (
      <AriaLink
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {content}
      </AriaLink>
    );
  },
);
ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink, buttonVariants };
