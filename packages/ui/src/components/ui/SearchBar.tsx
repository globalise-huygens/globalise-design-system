import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  Input as AriaInput,
  Label as AriaLabel,
  SearchField as AriaSearchField,
  type SearchFieldProps as AriaSearchFieldProps,
} from "react-aria-components";
import { IconSearch } from "../icons/IconSearch";

const searchBarVariants = cva(
  "flex items-center gap-2.5 px-4 backdrop-blur-[20px]",
  {
    variants: {
      variant: {
        default: "bg-(--brand-white)/10",
        subtle: "bg-(--brand-white)/5",
        solid: "bg-(--brand-white)/20",
      },
      size: {
        default: "h-12",
        sm: "h-9",
        lg: "h-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface SearchBarProps
  extends
    Omit<AriaSearchFieldProps, "className" | "style">,
    VariantProps<typeof searchBarVariants> {
  className?: string;
  placeholder?: string;
}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ className, variant, size, placeholder = "Search…", ...props }, ref) => {
    const ariaLabel = props["aria-label"] ?? placeholder;

    return (
      <AriaSearchField
        ref={ref}
        aria-label={ariaLabel}
        className={cn(searchBarVariants({ variant, size }), className)}
        {...props}
      >
        <AriaLabel className="sr-only">{ariaLabel}</AriaLabel>
        <IconSearch
          className="h-5 w-5 shrink-0 text-(--brand-white)"
          aria-hidden="true"
        />
        <AriaInput
          placeholder={placeholder}
          className="w-full bg-transparent text-sm font-medium text-(--brand-white) font-serif leading-3 opacity-50 placeholder:text-(--brand-white) placeholder:opacity-50 focus:opacity-100 focus:outline-none"
        />
      </AriaSearchField>
    );
  },
);
SearchBar.displayName = "SearchBar";

export { SearchBar, searchBarVariants };
