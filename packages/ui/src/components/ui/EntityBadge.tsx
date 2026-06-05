import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export const entityBadgeVariants = cva(
  "inline-flex h-s24 w-fit items-center gap-s4 pl-s8 pr-s8 text-xs font-medium font-sans uppercase leading-(--s12) outline outline-[1.2px] outline-offset-[-1.2px]",
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

export interface EntityBadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof entityBadgeVariants> {
  icon?: React.ReactNode;
}

function EntityBadge({
  className,
  type,
  icon,
  children,
  ...props
}: EntityBadgeProps) {
  return (
    <span className={cn(entityBadgeVariants({ type }), className)} {...props}>
      {icon && (
        <span className="flex h-s16 w-s16 items-center justify-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

export { EntityBadge };
