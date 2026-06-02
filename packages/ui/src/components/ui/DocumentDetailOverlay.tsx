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
          "fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-brand-black/80 backdrop-blur-[2px]",
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
        "slot-full-bleed flex h-overlay-document-viewer-top-bar-height shrink-0 items-center border-b border-brand-white/10 bg-brand-black",
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
        <div className="flex h-toolbar shrink-0 items-center border-b border-brand-white/10 px-viewer-pad">
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
        "slot-full-bleed flex h-overlay-document-viewer-bottom-bar-height shrink-0 items-center border-t border-brand-white/10 bg-brand-black",
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
