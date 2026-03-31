import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  Button as AriaButton,
  Link as AriaLink,
  type ButtonProps as AriaButtonProps,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "h-12 px-14 bg-[var(--brand-white)] rounded-[999px] text-[var(--brand-black)] leading-4 hover:bg-zinc-100",
        outline:
          "h-12 px-14 rounded-[999px] outline outline-2 outline-offset-[-2px] outline-(--brand-white)/50 text-(--brand-white) leading-4 hover:outline-(--brand-white)/70",
        link: "font-normal leading-5 text-current hover:opacity-80",
        ghost: "rounded hover:bg-[var(--brand-white)]/10",
        nav: "text-[var(--brand-white)] leading-5 hover:opacity-80",
      },
      size: {
        default: "",
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
  /** Render as a different element or component (e.g. `"span"`) */
  as?: React.ElementType;
}

export interface ButtonLinkProps
  extends
    Omit<AriaLinkProps, "className" | "style">,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, as, ...props }, ref) => {
    if (as) {
      const Comp = as;
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    }
    return (
      <AriaButton
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, ...props }, ref) => (
    <AriaLink
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
);
ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink, buttonVariants };
