"use client";

import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
  Dialog as AriaDialog,
  Input as AriaInput,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps as AriaModalOverlayProps,
  NumberField as AriaNumberField,
  type NumberFieldProps as AriaNumberFieldProps,
  ToggleButton as AriaToggleButton,
  ToggleButtonGroup as AriaToggleButtonGroup,
  type ToggleButtonGroupProps as AriaToggleButtonGroupProps,
  type ToggleButtonProps as AriaToggleButtonProps,
  Tooltip as AriaTooltip,
  type TooltipProps as AriaTooltipProps,
  TooltipTrigger as AriaTooltipTrigger,
} from "react-aria-components";

/* -------------------------------------------------------------------------- */
/*  DocumentDetailOverlay (root)                                               */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailOverlayProps extends Omit<
  AriaModalOverlayProps,
  "children" | "className" | "style"
> {
  className?: string;
  modalClassName?: string;
  dialogClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

const DocumentDetailOverlay = React.forwardRef<
  HTMLDivElement,
  DocumentDetailOverlayProps
>(
  (
    {
      className,
      modalClassName,
      dialogClassName,
      contentClassName = "slot-full-bleed xl:col-start-2 xl:col-span-14",
      children,
      isDismissable = false,
      isOpen,
      ...props
    },
    ref,
  ) => {
    useBodyScrollLock(Boolean(isOpen));

    return (
      <AriaModalOverlay
        ref={ref}
        isOpen={isOpen}
        isDismissable={isDismissable}
        className={cn(
          "fixed inset-0 z-50 overflow-hidden overscroll-none bg-brand-black/80 backdrop-blur-[2px]",
          className,
        )}
        {...props}
      >
        <AriaModal
          className={cn(
            "mx-auto grid min-h-full w-full max-w-overlay-document-viewer-frame-max-width grid-cols-[repeat(var(--shell-cols),minmax(0,1fr))] items-start gap-x-shell-gutter overflow-y-auto px-overlay-document-viewer-inset-x pb-overlay-document-viewer-inset-bottom pt-overlay-document-viewer-inset-top",
            modalClassName,
          )}
        >
          <AriaDialog
            className={cn(
              contentClassName,
              "grid h-overlay-document-viewer-frame-height w-full grid-cols-[repeat(var(--shell-cols),minmax(0,1fr))] grid-rows-[auto_minmax(0,1fr)_auto] gap-x-shell-gutter overflow-hidden bg-brand-black outline-none",
              dialogClassName,
            )}
          >
            {children}
          </AriaDialog>
        </AriaModal>
      </AriaModalOverlay>
    );
  },
);
DocumentDetailOverlay.displayName = "DocumentDetailOverlay";

/* -------------------------------------------------------------------------- */
/*  DocumentDetailTopBar                                                       */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailTopBarProps extends React.HTMLAttributes<HTMLElement> {}

function DocumentDetailTopBar({
  className,
  ...props
}: DocumentDetailTopBarProps) {
  return (
    <header
      className={cn(
        "slot-full-bleed flex h-overlay-document-viewer-top-bar-height shrink-0 items-center border-b border-brand-white/10 bg-neutral-900",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailBody                                                         */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailBody({ className, ...props }: DocumentDetailBodyProps) {
  return (
    <div
      className={cn(
        "slot-full-bleed flex min-h-0 flex-1 overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailIconRail                                                     */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailIconRailProps extends React.HTMLAttributes<HTMLElement> {}

function DocumentDetailIconRail({
  className,
  ...props
}: DocumentDetailIconRailProps) {
  return (
    <nav
      className={cn(
        "flex w-overlay-document-viewer-rail-width shrink-0 flex-col items-center border-r border-brand-white/10 bg-brand-black",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailMetadataSidebar                                              */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailMetadataSidebarProps extends React.HTMLAttributes<HTMLElement> {}

function DocumentDetailMetadataSidebar({
  className,
  ...props
}: DocumentDetailMetadataSidebarProps) {
  return (
    <nav
      className={cn(
        "flex h-full w-overlay-document-viewer-sidebar-width shrink-0 flex-col overflow-y-auto border-r border-brand-white/10 bg-neutral-900 text-brand-white [scrollbar-width:thin] [scrollbar-color:var(--neutral-600)_transparent]",
        className,
      )}
      {...props}
    />
  );
}

export interface DocumentDetailMetadataSidebarButtonProps extends Omit<
  AriaButtonProps,
  "children" | "className" | "style"
> {
  className?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  count?: React.ReactNode;
  trailing?: React.ReactNode;
  variant?: "default" | "warning";
  children?: React.ReactNode;
}

const DocumentDetailMetadataSidebarButton = React.forwardRef<
  HTMLButtonElement,
  DocumentDetailMetadataSidebarButtonProps
>(
  (
    {
      className,
      icon,
      label,
      count,
      trailing,
      variant = "default",
      children,
      ...props
    },
    ref,
  ) => (
    <AriaButton
      ref={ref}
      className={cn(
        "flex h-s64 w-full items-center justify-between gap-s16 border-b border-brand-white/10 px-s24 font-sans text-brand-white transition-colors data-hovered:bg-brand-white/5 data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-ring data-focus-visible:ring-inset",
        variant === "warning" &&
          "border-brand-black/10 text-vermilion-500 data-hovered:bg-vermilion-500/10",
        className,
      )}
      {...props}
    >
      <span className="flex min-w-0 items-center gap-s8">
        {icon && <span className="shrink-0">{icon}</span>}
        {label && (
          <span className="min-w-0 truncate text-left text-base leading-5 lg:text-lg lg:leading-5">
            {label}
          </span>
        )}
        {count && (
          <span className="shrink-0 text-base font-light leading-5 text-brand-white/45 lg:text-lg lg:leading-5">
            {count}
          </span>
        )}
        {children}
      </span>
      {trailing && <span className="shrink-0">{trailing}</span>}
    </AriaButton>
  ),
);
DocumentDetailMetadataSidebarButton.displayName =
  "DocumentDetailMetadataSidebarButton";

export interface DocumentDetailMetadataSidebarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

function DocumentDetailMetadataSidebarBadge({
  className,
  ...props
}: DocumentDetailMetadataSidebarBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-s20 min-w-s28 items-center justify-center border border-neutral-500 bg-neutral-600 px-s4 font-sans text-[13px] leading-none text-brand-white",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailSidePanel                                                    */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailSidePanelProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailSidePanel({
  className,
  ...props
}: DocumentDetailSidePanelProps) {
  return (
    <div
      className={cn(
        "flex w-overlay-document-viewer-side-panel-width shrink-0 flex-col gap-section-gap overflow-y-auto border-r border-brand-white/10 bg-neutral-900 px-panel-pad py-panel-pad [scrollbar-width:thin] [scrollbar-color:var(--neutral-600)_transparent]",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailViewer                                                       */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailViewerProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailViewer({
  className,
  ...props
}: DocumentDetailViewerProps) {
  return <div className={cn("flex min-w-0 flex-1", className)} {...props} />;
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailSplitViewer                                                  */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailSplitViewerProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailSplitViewer({
  className,
  ...props
}: DocumentDetailSplitViewerProps) {
  return (
    <div
      className={cn(
        "grid min-w-0 flex-1 grid-cols-1 overflow-hidden lg:grid-cols-2",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailViewerPane                                                   */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailViewerPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Toolbar content rendered above the pane's canvas area. */
  toolbar?: React.ReactNode;
  /** Renders the toolbar as an overlay without reserving header height. */
  toolbarFloating?: boolean;
  /** Optional class overrides for the toolbar wrapper. */
  toolbarClassName?: string;
}

function DocumentDetailViewerPane({
  className,
  toolbar,
  toolbarFloating = false,
  toolbarClassName,
  children,
  ...props
}: DocumentDetailViewerPaneProps) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-1 flex-col overflow-hidden border-r border-brand-white/10 last:border-r-0",
        toolbarFloating && "relative",
        className,
      )}
      {...props}
    >
      {toolbar && (
        <DocumentDetailToolbar className={toolbarClassName}>
          {toolbar}
        </DocumentDetailToolbar>
      )}
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailFloatingToolbar                                              */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailFloatingToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailFloatingToolbar({
  className,
  ...props
}: DocumentDetailFloatingToolbarProps) {
  return (
    <div
      className={cn(
        "absolute left-s16 top-s20 z-20 flex h-s40 w-fit items-center gap-s4 bg-brand-black px-s4 text-brand-white shadow-[0_4px_16px_rgba(0,0,0,0.28)]",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailPopoverSurface                                              */
/* -------------------------------------------------------------------------- */

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
      className={cn(
        "border bg-neutral-900 p-s16 font-sans shadow-[0_16px_32px_rgba(0,0,0,0.36)]",
        size === "compact" && "w-[min(260px,calc(100vw-var(--s32)))]",
        size === "default" && "w-[min(380px,calc(100vw-var(--s32)))]",
        size === "wide" && "w-[min(520px,calc(100vw-var(--s32)))]",
        variant === "default" && "border-brand-white/20 text-brand-white",
        variant === "warning" && "border-vermilion-500/35 text-vermilion-500",
        variant === "accent" && "border-brand-turquoise/35 text-brand-white",
        className,
      )}
      {...props}
    >
      {(heading || icon) && (
        <div className="mb-s8 flex items-center gap-s8">
          {icon && <span className="shrink-0">{icon}</span>}
          {heading && (
            <h2 id={titleId} className="text-sm leading-5">
              {heading}
            </h2>
          )}
        </div>
      )}
      <div
        className={cn(
          "text-xs leading-5",
          variant === "default" && "text-neutral-200",
          variant === "warning" && "text-vermilion-500",
          variant === "accent" && "text-neutral-200",
        )}
      >
        {children}
      </div>
      {footer && <div className="mt-s12">{footer}</div>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailTooltip                                                      */
/* -------------------------------------------------------------------------- */

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
        className={cn(
          "z-50 max-w-[240px] overflow-hidden border border-brand-white/10 bg-neutral-700 p-s12 font-sans text-[10px] leading-3 text-brand-white shadow-[0_6px_14px_0_rgba(0,0,0,0.25),0_25px_25px_0_rgba(0,0,0,0.22),0_56px_34px_0_rgba(0,0,0,0.13),0_100px_40px_0_rgba(0,0,0,0.04),0_156px_44px_0_rgba(0,0,0,0)]",
          className,
        )}
        {...props}
      >
        {label}
      </AriaTooltip>
    </AriaTooltipTrigger>
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailCanvas                                                       */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailCanvasProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailCanvas({
  className,
  ...props
}: DocumentDetailCanvasProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center bg-neutral-900 px-panel-pad py-panel-pad",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailTranscriptCanvas                                             */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailTranscriptCanvasProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailTranscriptCanvas({
  className,
  ...props
}: DocumentDetailTranscriptCanvasProps) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-neutral-600 px-panel-pad py-s96 text-neutral-300",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailTranscriptLine                                               */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailTranscriptLineProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  width?: React.CSSProperties["width"];
}

function DocumentDetailTranscriptLine({
  className,
  index,
  width = "70%",
  ...props
}: DocumentDetailTranscriptLineProps) {
  return (
    <div className={cn("flex h-s16 items-center gap-s8", className)} {...props}>
      <span className="w-s16 shrink-0 text-right font-sans text-[10px] leading-none text-neutral-300">
        {index}
      </span>
      <span
        className="h-s4 max-w-full shrink-0 bg-neutral-300/70"
        style={{ width }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailBarGroup                                                     */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailBarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailBarGroup({
  className,
  ...props
}: DocumentDetailBarGroupProps) {
  return (
    <div
      className={cn("flex min-w-0 items-center gap-s12", className)}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailTitle                                                        */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailTitle({
  className,
  ...props
}: DocumentDetailTitleProps) {
  return (
    <div
      className={cn(
        "min-w-0 px-s16 text-center font-sans text-xs text-brand-white lg:text-sm",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailControl                                                      */
/* -------------------------------------------------------------------------- */

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
      className={cn(
        "inline-flex h-control items-center justify-center border border-brand-white/20 font-sans text-xs font-medium text-brand-white transition-colors data-hovered:border-brand-white/40 pressed:bg-brand-white/10 data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-ring",
        isIconOnly ? "w-control px-0" : "gap-s8 px-s12",
        isActive && "border-vermilion-500 bg-vermilion-500 text-brand-black",
        className,
      )}
      {...props}
    >
      {icon}
      {children && <span>{children}</span>}
    </AriaButton>
  ),
);
DocumentDetailControl.displayName = "DocumentDetailControl";

/* -------------------------------------------------------------------------- */
/*  DocumentDetailToolButton                                                   */
/* -------------------------------------------------------------------------- */

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
    className={cn(
      "inline-flex h-s36 min-w-s32 items-center justify-center gap-s4 rounded-[4px] px-s8 font-sans text-xs text-brand-white transition-colors data-hovered:bg-brand-white/10 pressed:bg-brand-white/15 data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-ring",
      isActive &&
        "bg-brand-white text-brand-black shadow-[0_1px_1px_rgba(0,0,0,0.12)] data-hovered:bg-brand-white pressed:bg-brand-white",
      className,
    )}
    {...props}
  >
    {icon}
    {children && <span>{children}</span>}
  </AriaButton>
));
DocumentDetailToolButton.displayName = "DocumentDetailToolButton";

/* -------------------------------------------------------------------------- */
/*  DocumentDetailSegmentedControl                                             */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailSegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailSegmentedControl({
  className,
  ...props
}: DocumentDetailSegmentedControlProps) {
  return (
    <div
      className={cn(
        "inline-flex h-s36 shrink-0 items-center gap-s4 rounded-[4px] bg-brand-white/10 p-s4 text-brand-white",
        className,
      )}
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
    className={cn(
      "inline-flex h-s28 shrink-0 items-center justify-center gap-s4 whitespace-nowrap rounded-[4px] px-s8 font-sans text-xs text-brand-black transition-colors data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-brand-black",
      !isActive &&
        "bg-transparent text-brand-white data-hovered:bg-brand-white/10",
      isActive &&
        "bg-brand-white text-brand-black shadow-[0_1px_1px_rgba(0,0,0,0.12)]",
      className,
    )}
    {...props}
  >
    {icon}
    {children && <span>{children}</span>}
  </AriaButton>
));
DocumentDetailSegment.displayName = "DocumentDetailSegment";

/* -------------------------------------------------------------------------- */
/*  DocumentDetailSegmentedToggleGroup                                         */
/* -------------------------------------------------------------------------- */

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
      className={cn(
        "inline-flex shrink-0 items-center gap-0 overflow-hidden bg-brand-white/10 p-0 text-brand-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",
        size === "compact" && "h-s28 rounded-[4px]",
        size === "regular" && "h-s36 rounded-[6px]",
        className,
      )}
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
    className={({ isSelected }) =>
      cn(
        "inline-flex shrink-0 items-center justify-center whitespace-nowrap border-r border-brand-black/70 font-sans transition-colors duration-100 ease-out data-focus-visible:outline-none data-focus-visible:ring-1 data-focus-visible:ring-inset data-focus-visible:ring-brand-white/60 motion-reduce:transition-none last:border-r-0",
        size === "compact" && "h-s28 min-w-s36 gap-s4 px-s8 text-xs leading-4",
        size === "regular" && "h-s36 gap-s4 px-s12 text-sm leading-5",
        isSelected
          ? "bg-brand-white text-brand-black"
          : "text-brand-white/65 data-hovered:bg-brand-white/10 data-hovered:text-brand-white",
        className,
      )
    }
    {...props}
  >
    {icon}
    {children && <span>{children}</span>}
  </AriaToggleButton>
));
DocumentDetailSegmentedToggleItem.displayName =
  "DocumentDetailSegmentedToggleItem";

/* -------------------------------------------------------------------------- */
/*  DocumentDetailCheckbox                                                     */
/* -------------------------------------------------------------------------- */

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
    className={({ isDisabled }) =>
      cn(
        "inline-flex h-s28 min-w-0 cursor-pointer items-center gap-s8 px-s2 font-sans text-[10px] leading-3 text-brand-white transition-colors duration-75 ease-out data-hovered:text-brand-white/75 data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-ring motion-reduce:transition-none",
        isDisabled && "cursor-not-allowed text-brand-white/30",
        className,
      )
    }
    {...props}
  >
    {({ isSelected, isIndeterminate }) => (
      <>
        <span
          className={cn(
            "flex h-s12 w-s12 shrink-0 items-center justify-center bg-neutral-700",
            (isSelected || isIndeterminate) &&
              "bg-brand-white shadow-[inset_0_0_0_2px_var(--neutral-800)]",
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

/* -------------------------------------------------------------------------- */
/*  DocumentDetailNumberField                                                  */
/* -------------------------------------------------------------------------- */

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
        className={cn(
          "inline-flex h-s16 items-baseline justify-center font-sans text-xs leading-4 text-parchment-500",
          className,
        )}
        minValue={minValue}
        step={step}
        value={value}
        {...props}
      >
        <AriaInput
          className={cn(
            "mx-[2px] inline-block h-s16 rounded-[2px] border-0 bg-transparent px-[2px] pb-0 pt-0 text-center font-sans text-xs leading-4 text-parchment-500 outline-none transition-colors duration-75 ease-out [appearance:textfield] data-hovered:bg-brand-white/5 data-focused:bg-brand-white/10 data-focus-visible:ring-1 data-focus-visible:ring-parchment-500/50 motion-reduce:transition-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            inputClassName,
          )}
          style={{ width: `${widthDigits + 0.5}ch` }}
        />
        {suffix && (
          <span className="ml-px text-xs leading-4 text-parchment-500">
            {suffix}
          </span>
        )}
      </AriaNumberField>
    );
  },
);
DocumentDetailNumberField.displayName = "DocumentDetailNumberField";

/* -------------------------------------------------------------------------- */
/*  DocumentDetailReferenceCard                                                */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailReferenceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean;
  thumbnail?: React.ReactNode;
  heading: React.ReactNode;
  meta?: React.ReactNode;
  snippet?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
}

const DocumentDetailReferenceCard = React.forwardRef<
  HTMLDivElement,
  DocumentDetailReferenceCardProps
>(
  (
    {
      className,
      isSelected = false,
      thumbnail,
      heading,
      meta,
      snippet,
      actions,
      footer,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      aria-current={isSelected ? "true" : undefined}
      className={cn(
        "group relative border-b border-brand-white/20 px-s12 py-s12 transition-colors duration-75 ease-out before:absolute before:bottom-s12 before:left-0 before:top-s12 before:w-px before:bg-transparent hover:before:bg-brand-white/30 motion-reduce:transition-none",
        isSelected && "before:w-[2px] before:bg-brand-white",
        className,
      )}
      {...props}
    >
      <div className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-s16">
        {thumbnail && (
          <div className="relative flex h-s80 w-s96 shrink-0 items-center justify-center overflow-hidden">
            {thumbnail}
          </div>
        )}

        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-s6 whitespace-nowrap">
            <div className="min-w-0 flex-1">{heading}</div>
            {actions}
          </div>

          {snippet && (
            <div className="mt-s4 bg-neutral-700 px-s8 py-s4">{snippet}</div>
          )}

          {meta && <div className="mt-s4 min-w-0">{meta}</div>}
          {footer && <div className="mt-s4 min-w-0">{footer}</div>}
        </div>
      </div>
    </div>
  ),
);
DocumentDetailReferenceCard.displayName = "DocumentDetailReferenceCard";

/* -------------------------------------------------------------------------- */
/*  DocumentDetailToolbar                                                      */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailToolbar({
  className,
  ...props
}: DocumentDetailToolbarProps) {
  return (
    <div
      className={cn(
        "flex h-toolbar shrink-0 items-center gap-s8 border-b border-brand-white/10 px-viewer-pad text-brand-white",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailRailButton                                                   */
/* -------------------------------------------------------------------------- */

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
      className={cn(
        "flex h-s64 w-full flex-col items-center justify-center gap-s4 border-b border-brand-white/10 font-sans text-[10px] text-brand-white transition-colors data-hovered:bg-neutral-800 data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-ring",
        isActive && "bg-neutral-800",
        variant === "accent" &&
          "bg-vermilion-500 text-brand-black data-hovered:bg-vermilion-500",
        className,
      )}
      {...props}
    >
      {icon}
      {label && <span className="leading-none">{label}</span>}
      {children}
    </AriaButton>
  ),
);
DocumentDetailRailButton.displayName = "DocumentDetailRailButton";

/* -------------------------------------------------------------------------- */
/*  DocumentDetailPanelHeader                                                  */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailPanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailPanelHeader({
  className,
  ...props
}: DocumentDetailPanelHeaderProps) {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 -mx-panel-pad -mt-panel-pad border-b border-brand-white/10 bg-inherit px-panel-pad py-s16",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  DocumentDetailBottomBar                                                    */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailBottomBarProps extends React.HTMLAttributes<HTMLElement> {}

function DocumentDetailBottomBar({
  className,
  ...props
}: DocumentDetailBottomBarProps) {
  return (
    <footer
      className={cn(
        "slot-full-bleed flex h-overlay-document-viewer-bottom-bar-height shrink-0 items-center border-t border-brand-white/10 bg-neutral-900",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  Exports                                                                    */
/* -------------------------------------------------------------------------- */

export {
  DocumentDetailBarGroup,
  DocumentDetailBody,
  DocumentDetailBottomBar,
  DocumentDetailCanvas,
  DocumentDetailCheckbox,
  DocumentDetailControl,
  DocumentDetailFloatingToolbar,
  DocumentDetailIconRail,
  DocumentDetailMetadataSidebar,
  DocumentDetailMetadataSidebarBadge,
  DocumentDetailMetadataSidebarButton,
  DocumentDetailNumberField,
  DocumentDetailOverlay,
  DocumentDetailPanelHeader,
  DocumentDetailPopoverSurface,
  DocumentDetailRailButton,
  DocumentDetailReferenceCard,
  DocumentDetailSegment,
  DocumentDetailSegmentedControl,
  DocumentDetailSegmentedToggleGroup,
  DocumentDetailSegmentedToggleItem,
  DocumentDetailSidePanel,
  DocumentDetailSplitViewer,
  DocumentDetailTitle,
  DocumentDetailToolbar,
  DocumentDetailToolButton,
  DocumentDetailTooltip,
  DocumentDetailTopBar,
  DocumentDetailTranscriptCanvas,
  DocumentDetailTranscriptLine,
  DocumentDetailViewer,
  DocumentDetailViewerPane,
};
