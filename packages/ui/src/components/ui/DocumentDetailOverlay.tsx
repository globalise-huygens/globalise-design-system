"use client";

import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  Dialog as AriaDialog,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps as AriaModalOverlayProps,
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
        "inline-flex h-s36 items-center gap-s4 rounded-[4px] bg-brand-white/10 p-s4 text-brand-white",
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
      "inline-flex h-s28 items-center justify-center gap-s4 rounded-[4px] px-s8 font-sans text-xs text-brand-black transition-colors data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-brand-black",
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
  DocumentDetailControl,
  DocumentDetailFloatingToolbar,
  DocumentDetailIconRail,
  DocumentDetailMetadataSidebar,
  DocumentDetailMetadataSidebarBadge,
  DocumentDetailMetadataSidebarButton,
  DocumentDetailOverlay,
  DocumentDetailPanelHeader,
  DocumentDetailRailButton,
  DocumentDetailSegment,
  DocumentDetailSegmentedControl,
  DocumentDetailSidePanel,
  DocumentDetailSplitViewer,
  DocumentDetailTitle,
  DocumentDetailToolbar,
  DocumentDetailToolButton,
  DocumentDetailTopBar,
  DocumentDetailTranscriptCanvas,
  DocumentDetailTranscriptLine,
  DocumentDetailViewer,
  DocumentDetailViewerPane,
};
