import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  SearchField as AriaSearchField,
  type SearchFieldProps as AriaSearchFieldProps,
} from "react-aria-components";
import { SearchFieldContent } from "./SearchFieldContent";

const searchBarVariants = cva(
  "flex items-center gap-s8 px-s16 backdrop-blur-[20px]",
  {
    variants: {
      variant: {
        default: "bg-brand-white/10",
        subtle: "bg-brand-white/5",
        solid: "bg-brand-white/20",
      },
      size: {
        default: "h-rail",
        sm: "h-control",
        lg: "h-nav",
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
        <SearchFieldContent
          ariaLabel={ariaLabel}
          placeholder={placeholder}
          inputClassName="font-medium"
        />
      </AriaSearchField>
    );
  },
);
SearchBar.displayName = "SearchBar";

export { SearchBar, searchBarVariants };
