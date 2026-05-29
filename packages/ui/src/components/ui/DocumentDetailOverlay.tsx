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
      contentClassName,
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
            "flex h-full w-full items-end justify-center overflow-hidden px-overlay-document-viewer-inset-x pb-0 pt-overlay-document-viewer-inset-top",
            modalClassName,
          )}
        >
          <div className="flex h-overlay-document-viewer-frame-height w-overlay-document-viewer-frame-width max-w-overlay-document-viewer-frame-max-width min-h-0 items-stretch justify-center overflow-hidden">
            <div className="grid min-h-0 w-full grid-cols-[repeat(var(--shell-cols),minmax(0,1fr))] items-stretch justify-center">
              <AriaDialog
                className={cn(
                  "slot-full-bleed grid h-full min-h-0 w-full grid-cols-[repeat(var(--shell-cols),minmax(0,1fr))] grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden bg-neutral-800 shadow-[0px_6px_14px_0px_rgba(0,0,0,0.25),0px_25px_25px_0px_rgba(0,0,0,0.22),0px_56px_34px_0px_rgba(0,0,0,0.13),0px_100px_40px_0px_rgba(0,0,0,0.04),0px_156px_44px_0px_rgba(0,0,0,0.00)] outline-none",
                  contentClassName,
                  dialogClassName,
                )}
              >
                {children}
              </AriaDialog>
            </div>
          </div>
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
        <div
          className={cn(
            toolbarFloating
              ? "absolute left-0 top-0 z-10 flex items-center px-viewer-pad py-viewer-pad"
              : "flex h-toolbar shrink-0 items-center border-b border-brand-white/10 px-viewer-pad",
            toolbarClassName,
          )}
        >
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
  DocumentDetailBody,
  DocumentDetailBottomBar,
  DocumentDetailIconRail,
  DocumentDetailOverlay,
  DocumentDetailSidePanel,
  DocumentDetailTopBar,
  DocumentDetailViewer,
  DocumentDetailViewerPane,
};
