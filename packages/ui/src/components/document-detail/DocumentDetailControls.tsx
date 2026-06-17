"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
  Input as AriaInput,
  NumberField as AriaNumberField,
  type NumberFieldProps as AriaNumberFieldProps,
  ToggleButton as AriaToggleButton,
  ToggleButtonGroup as AriaToggleButtonGroup,
  type ToggleButtonGroupProps as AriaToggleButtonGroupProps,
  type ToggleButtonProps as AriaToggleButtonProps,
} from "react-aria-components";

export interface DocumentDetailControlProps extends Omit<
  AriaButtonProps,
  "children" | "className" | "style"
> {
  className?: string;
  icon?: React.ReactNode;
  isIconOnly?: boolean;
  isActive?: boolean;
  children?: React.ReactNode;
}

const DocumentDetailControl = React.forwardRef<
  HTMLButtonElement,
  DocumentDetailControlProps
>(
  (
    {
      className,
      icon,
      isIconOnly = false,
      isActive = false,
      children,
      ...props
    },
    ref,
  ) => (
    <AriaButton
      ref={ref}
      className={cn("gds-document-detail-control", className)}
      data-active={isActive ? "true" : "false"}
      data-icon-only={isIconOnly ? "true" : "false"}
      {...props}
    >
      {icon}
      {children && <span>{children}</span>}
    </AriaButton>
  ),
);
DocumentDetailControl.displayName = "DocumentDetailControl";

export interface DocumentDetailToolButtonProps extends Omit<
  AriaButtonProps,
  "children" | "className" | "style"
> {
  className?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  children?: React.ReactNode;
}

const DocumentDetailToolButton = React.forwardRef<
  HTMLButtonElement,
  DocumentDetailToolButtonProps
>(({ className, icon, isActive = false, children, ...props }, ref) => (
  <AriaButton
    ref={ref}
    className={cn("gds-document-detail-tool-button", className)}
    data-active={isActive ? "true" : "false"}
    {...props}
  >
    {icon}
    {children && <span>{children}</span>}
  </AriaButton>
));
DocumentDetailToolButton.displayName = "DocumentDetailToolButton";

export interface DocumentDetailSegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailSegmentedControl({
  className,
  ...props
}: DocumentDetailSegmentedControlProps) {
  return (
    <div
      className={cn("gds-document-detail-segmented-control", className)}
      {...props}
    />
  );
}

export interface DocumentDetailSegmentProps extends Omit<
  AriaButtonProps,
  "children" | "className" | "style"
> {
  className?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  children?: React.ReactNode;
}

const DocumentDetailSegment = React.forwardRef<
  HTMLButtonElement,
  DocumentDetailSegmentProps
>(({ className, icon, isActive = false, children, ...props }, ref) => (
  <AriaButton
    ref={ref}
    className={cn("gds-document-detail-segment", className)}
    data-active={isActive ? "true" : "false"}
    {...props}
  >
    {icon}
    {children && <span>{children}</span>}
  </AriaButton>
));
DocumentDetailSegment.displayName = "DocumentDetailSegment";

export interface DocumentDetailSegmentedToggleGroupProps extends Omit<
  AriaToggleButtonGroupProps,
  "className" | "style"
> {
  className?: string;
  size?: "compact" | "regular";
  children?: React.ReactNode;
}

function DocumentDetailSegmentedToggleGroup({
  className,
  size = "regular",
  children,
  ...props
}: DocumentDetailSegmentedToggleGroupProps) {
  return (
    <AriaToggleButtonGroup
      className={cn("gds-document-detail-segmented-toggle-group", className)}
      data-size={size}
      {...props}
    >
      {children}
    </AriaToggleButtonGroup>
  );
}

export interface DocumentDetailSegmentedToggleItemProps extends Omit<
  AriaToggleButtonProps,
  "children" | "className" | "style"
> {
  className?: string;
  icon?: React.ReactNode;
  size?: "compact" | "regular";
  children?: React.ReactNode;
}

const DocumentDetailSegmentedToggleItem = React.forwardRef<
  HTMLButtonElement,
  DocumentDetailSegmentedToggleItemProps
>(({ className, icon, size = "regular", children, ...props }, ref) => (
  <AriaToggleButton
    ref={ref}
    className={cn("gds-document-detail-segmented-toggle-item", className)}
    data-size={size}
    {...props}
  >
    {icon}
    {children && <span>{children}</span>}
  </AriaToggleButton>
));
DocumentDetailSegmentedToggleItem.displayName =
  "DocumentDetailSegmentedToggleItem";

export interface DocumentDetailCheckboxProps extends Omit<
  AriaCheckboxProps,
  "children" | "className" | "style"
> {
  className?: string;
  indicatorClassName?: string;
  children?: React.ReactNode;
}

const DocumentDetailCheckbox = React.forwardRef<
  HTMLLabelElement,
  DocumentDetailCheckboxProps
>(({ className, indicatorClassName, children, ...props }, ref) => (
  <AriaCheckbox
    ref={ref}
    className={cn("gds-document-detail-checkbox", className)}
    {...props}
  >
    {() => (
      <>
        <span
          className={cn(
            "gds-document-detail-checkbox__indicator",
            indicatorClassName,
          )}
          aria-hidden="true"
        />
        {children && <span>{children}</span>}
      </>
    )}
  </AriaCheckbox>
));
DocumentDetailCheckbox.displayName = "DocumentDetailCheckbox";

export interface DocumentDetailNumberFieldProps extends Omit<
  AriaNumberFieldProps,
  "children" | "className" | "style" | "formatOptions"
> {
  className?: string;
  inputClassName?: string;
  suffix?: React.ReactNode;
  digits?: number;
}

const DocumentDetailNumberField = React.forwardRef<
  HTMLDivElement,
  DocumentDetailNumberFieldProps
>(
  (
    {
      className,
      inputClassName,
      suffix,
      digits,
      minValue = 1,
      step = 1,
      value,
      ...props
    },
    ref,
  ) => {
    const widthDigits =
      digits ??
      Math.max(
        String(props.maxValue ?? value ?? minValue).length,
        String(value ?? minValue).length,
      );

    return (
      <AriaNumberField
        ref={ref}
        className={cn("gds-document-detail-number-field", className)}
        minValue={minValue}
        step={step}
        value={value}
        {...props}
      >
        <AriaInput
          className={cn(
            "gds-document-detail-number-field__input",
            inputClassName,
          )}
          style={{ width: `${widthDigits + 0.5}ch` }}
        />
        {suffix && (
          <span className="gds-document-detail-number-field__suffix">
            {suffix}
          </span>
        )}
      </AriaNumberField>
    );
  },
);
DocumentDetailNumberField.displayName = "DocumentDetailNumberField";

export interface DocumentDetailRailButtonProps extends Omit<
  AriaButtonProps,
  "children" | "className" | "style"
> {
  className?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  isActive?: boolean;
  variant?: "default" | "accent";
  children?: React.ReactNode;
}

const DocumentDetailRailButton = React.forwardRef<
  HTMLButtonElement,
  DocumentDetailRailButtonProps
>(
  (
    {
      className,
      icon,
      label,
      isActive = false,
      variant = "default",
      children,
      ...props
    },
    ref,
  ) => (
    <AriaButton
      ref={ref}
      className={cn("gds-document-detail-rail-button", className)}
      data-active={isActive ? "true" : "false"}
      data-variant={variant}
      {...props}
    >
      {icon}
      {label && (
        <span className="gds-document-detail-rail-button__label">{label}</span>
      )}
      {children}
    </AriaButton>
  ),
);
DocumentDetailRailButton.displayName = "DocumentDetailRailButton";

export {
  DocumentDetailCheckbox,
  DocumentDetailControl,
  DocumentDetailNumberField,
  DocumentDetailRailButton,
  DocumentDetailSegment,
  DocumentDetailSegmentedControl,
  DocumentDetailSegmentedToggleGroup,
  DocumentDetailSegmentedToggleItem,
  DocumentDetailToolButton,
};
