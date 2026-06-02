import { cn } from "@/lib/utils";
import * as React from "react";
import { Input as AriaInput, Label as AriaLabel } from "react-aria-components";
import { IconSearch } from "../icons/IconSearch";

export interface SearchFieldContentProps {
  ariaLabel: string;
  placeholder: string;
  inputClassName?: string;
}

function SearchFieldContent({
  ariaLabel,
  placeholder,
  inputClassName,
}: SearchFieldContentProps) {
  return (
    <>
      <AriaLabel className="sr-only">{ariaLabel}</AriaLabel>
      <IconSearch
        className="h-s20 w-s20 shrink-0 text-brand-white"
        aria-hidden="true"
      />
      <AriaInput
        placeholder={placeholder}
        className={cn(
          "w-full bg-transparent font-serif text-sm leading-3 text-brand-white opacity-50 placeholder:text-brand-white placeholder:opacity-50 focus:opacity-100 focus:outline-none",
          inputClassName,
        )}
      />
    </>
  );
}

export { SearchFieldContent };
