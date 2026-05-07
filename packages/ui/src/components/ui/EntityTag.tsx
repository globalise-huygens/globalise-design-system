import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export const entityTagVariants = cva(
  "inline-flex h-6 w-fit items-center gap-1 pl-2 pr-2.5 text-xs font-medium font-sans uppercase leading-3 outline outline-[1.2px] outline-offset-[-1.2px]",
  {
    variants: {
      type: {
        ship: "bg-turquoise-900 text-turquoise-200 outline-turquoise-700",
        concept: "bg-mint-900 text-mint-200 outline-mint-700",
        voyage: "bg-vermilion-900 text-vermilion-200 outline-vermilion-700",
        letter: "bg-parchment-900 text-parchment-200 outline-parchment-700",
        person: "bg-vermilion-900 text-vermilion-200 outline-vermilion-700",
        place: "bg-mint-900 text-mint-200 outline-mint-700",
        commodity: "bg-parchment-900 text-parchment-200 outline-parchment-700",
        dimensions: "bg-neutral-800 text-neutral-200 outline-neutral-600",
        organisation:
          "bg-turquoise-900 text-turquoise-200 outline-turquoise-700",
        date: "bg-parchment-900 text-parchment-200 outline-parchment-700",
        document: "bg-neutral-800 text-neutral-200 outline-neutral-600",
      },
    },
    defaultVariants: {
      type: "ship",
    },
  },
);

export interface EntityTagProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof entityTagVariants> {
  icon?: React.ReactNode;
}

function EntityTag({
  className,
  type,
  icon,
  children,
  ...props
}: EntityTagProps) {
  return (
    <span className={cn(entityTagVariants({ type }), className)} {...props}>
      {icon && (
        <span className="flex h-3.5 w-3.5 items-center justify-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

export { EntityTag };
