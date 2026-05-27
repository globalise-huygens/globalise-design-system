"use client";

import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
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
          "fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-brand-black/80 backdrop-blur-[2px]",
          className,
        )}
        {...props}
      >
        <AriaModal
          className={cn("h-full w-full overflow-hidden", modalClassName)}
        >
          <AriaDialog
            className={cn(
              "flex h-dvh flex-col bg-brand-black outline-none",
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
        "flex h-layout-ddp-top-bar-height shrink-0 items-center border-b border-brand-white/10 bg-brand-black",
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
      className={cn("flex min-h-0 flex-1 overflow-hidden", className)}
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
        "flex w-layout-ddp-rail-width shrink-0 flex-col items-center border-r border-brand-white/10 bg-brand-black",
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
        "flex w-layout-ddp-sidebar-width shrink-0 flex-col gap-layout-section overflow-y-auto border-r border-brand-white/10 bg-neutral-900 px-layout-ddp-sidebar-padding py-layout-ddp-sidebar-padding [scrollbar-width:thin] [scrollbar-color:var(--neutral-600)_transparent]",
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
/*  DocumentDetailViewerPane                                                   */
/* -------------------------------------------------------------------------- */

export interface DocumentDetailViewerPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Toolbar content rendered above the pane's canvas area. */
  toolbar?: React.ReactNode;
}

function DocumentDetailViewerPane({
  className,
  toolbar,
  children,
  ...props
}: DocumentDetailViewerPaneProps) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-1 flex-col overflow-hidden border-r border-brand-white/10 last:border-r-0",
        className,
      )}
      {...props}
    >
      {toolbar && (
        <div className="flex h-layout-ddp-toolbar-height shrink-0 items-center border-b border-brand-white/10 px-layout-ddp-viewer-padding">
          {toolbar}
        </div>
      )}
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
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
        "flex h-layout-ddp-bottom-bar-height shrink-0 items-center border-t border-brand-white/10 bg-brand-black",
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
  DocumentDetailBody,
  DocumentDetailBottomBar,
  DocumentDetailIconRail,
  DocumentDetailOverlay,
  DocumentDetailSidePanel,
  DocumentDetailTopBar,
  DocumentDetailViewer,
  DocumentDetailViewerPane,
};
