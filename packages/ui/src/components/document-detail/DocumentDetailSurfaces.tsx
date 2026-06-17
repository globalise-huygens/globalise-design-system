"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Tooltip as AriaTooltip,
  type TooltipProps as AriaTooltipProps,
  TooltipTrigger as AriaTooltipTrigger,
} from "react-aria-components";

export interface DocumentDetailFloatingToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "end";
}

function DocumentDetailFloatingToolbar({
  align = "start",
  className,
  ...props
}: DocumentDetailFloatingToolbarProps) {
  return (
    <div
      className={cn("gds-document-detail-floating-toolbar", className)}
      data-align={align}
      {...props}
    />
  );
}

export interface DocumentDetailPopoverSurfaceProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> {
  variant?: "default" | "warning" | "accent";
  size?: "compact" | "default" | "wide";
  icon?: React.ReactNode;
  heading?: React.ReactNode;
  titleId?: string;
  footer?: React.ReactNode;
}

function DocumentDetailPopoverSurface({
  className,
  variant = "default",
  size = "default",
  icon,
  heading,
  titleId,
  footer,
  children,
  ...props
}: DocumentDetailPopoverSurfaceProps) {
  return (
    <div
      className={cn("gds-document-detail-popover-surface", className)}
      data-size={size}
      data-variant={variant}
      {...props}
    >
      {(heading || icon) && (
        <div className="gds-document-detail-popover-surface__header">
          {icon && <span className="gds-document-detail-icon">{icon}</span>}
          {heading && (
            <h2
              id={titleId}
              className="gds-document-detail-popover-surface__heading"
            >
              {heading}
            </h2>
          )}
        </div>
      )}
      <div className="gds-document-detail-popover-surface__body">
        {children}
      </div>
      {footer && (
        <div className="gds-document-detail-popover-surface__footer">
          {footer}
        </div>
      )}
    </div>
  );
}

export interface DocumentDetailTooltipProps extends Omit<
  AriaTooltipProps,
  "children" | "className"
> {
  children: React.ReactNode;
  label: React.ReactNode;
  className?: string;
  delay?: number;
  closeDelay?: number;
}

function DocumentDetailTooltip({
  children,
  label,
  className,
  delay = 350,
  closeDelay = 80,
  placement = "bottom",
  offset = 8,
  ...props
}: DocumentDetailTooltipProps) {
  return (
    <AriaTooltipTrigger delay={delay} closeDelay={closeDelay}>
      {children}
      <AriaTooltip
        placement={placement}
        offset={offset}
        className={cn("gds-document-detail-tooltip", className)}
        {...props}
      >
        {label}
      </AriaTooltip>
    </AriaTooltipTrigger>
  );
}

export interface DocumentDetailToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailToolbar({
  className,
  ...props
}: DocumentDetailToolbarProps) {
  return (
    <div className={cn("gds-document-detail-toolbar", className)} {...props} />
  );
}

export {
  DocumentDetailFloatingToolbar,
  DocumentDetailPopoverSurface,
  DocumentDetailToolbar,
  DocumentDetailTooltip,
};
