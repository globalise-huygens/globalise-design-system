import { cn } from "@/lib/utils";
import * as React from "react";

type EntityBadgeType =
  | "ship"
  | "person"
  | "place"
  | "commodity"
  | "dimensions"
  | "organisation"
  | "date"
  | "document";

export function entityBadgeVariants({
  className,
}: { className?: string } = {}) {
  return cn("gds-entity-badge", className);
}

export interface EntityBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: EntityBadgeType;
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
    <span
      className={entityBadgeVariants({ className })}
      data-type={type ?? "ship"}
      {...props}
    >
      {icon && <span className="gds-entity-badge__icon">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

export { EntityBadge };
