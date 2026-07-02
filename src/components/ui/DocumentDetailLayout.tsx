import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { DocumentDetailToolbar } from "./DocumentDetailSurfaces";

export interface DocumentDetailTopBarProps extends React.HTMLAttributes<HTMLElement> {}

function DocumentDetailTopBar({
  className,
  ...props
}: DocumentDetailTopBarProps) {
  return (
    <header
      className={cn(
        "gds-document-detail-full-bleed gds-document-detail-top-bar",
        className,
      )}
      {...props}
    />
  );
}

export interface DocumentDetailBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailBody({ className, ...props }: DocumentDetailBodyProps) {
  return (
    <div
      className={cn(
        "gds-document-detail-full-bleed gds-document-detail-body",
        className,
      )}
      {...props}
    />
  );
}

export interface DocumentDetailIconRailProps extends React.HTMLAttributes<HTMLElement> {}

function DocumentDetailIconRail({
  className,
  ...props
}: DocumentDetailIconRailProps) {
  return (
    <nav
      className={cn("gds-document-detail-icon-rail", className)}
      {...props}
    />
  );
}

export interface DocumentDetailMetadataSidebarProps extends React.HTMLAttributes<HTMLElement> {}

function DocumentDetailMetadataSidebar({
  className,
  ...props
}: DocumentDetailMetadataSidebarProps) {
  return (
    <nav className={cn("gds-document-detail-sidebar", className)} {...props} />
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
      className={cn("gds-document-detail-sidebar-button", className)}
      data-variant={variant}
      {...props}
    >
      <span className="gds-document-detail-sidebar-button__content">
        {icon && <span className="gds-document-detail-icon">{icon}</span>}
        {label && (
          <span className="gds-document-detail-sidebar-button__label">
            {label}
          </span>
        )}
        {count && (
          <span className="gds-document-detail-sidebar-button__count">
            {count}
          </span>
        )}
        {children}
      </span>
      {trailing && <span className="gds-document-detail-icon">{trailing}</span>}
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
      className={cn("gds-document-detail-sidebar-badge", className)}
      {...props}
    />
  );
}

export interface DocumentDetailSidePanelProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailSidePanel({
  className,
  ...props
}: DocumentDetailSidePanelProps) {
  return (
    <div
      className={cn("gds-document-detail-side-panel", className)}
      {...props}
    />
  );
}

export interface DocumentDetailViewerProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailViewer({
  className,
  ...props
}: DocumentDetailViewerProps) {
  return (
    <div className={cn("gds-document-detail-viewer", className)} {...props} />
  );
}

export interface DocumentDetailSplitViewerProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailSplitViewer({
  className,
  ...props
}: DocumentDetailSplitViewerProps) {
  return (
    <div
      className={cn("gds-document-detail-split-viewer", className)}
      {...props}
    />
  );
}

export interface DocumentDetailViewerPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  toolbar?: React.ReactNode;
  toolbarFloating?: boolean;
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
      className={cn("gds-document-detail-viewer-pane", className)}
      data-toolbar-floating={toolbarFloating ? "true" : undefined}
      {...props}
    >
      {toolbar && (
        <DocumentDetailToolbar className={toolbarClassName}>
          {toolbar}
        </DocumentDetailToolbar>
      )}
      <div className="gds-document-detail-viewer-pane__content">{children}</div>
    </div>
  );
}

export interface DocumentDetailBarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailBarGroup({
  className,
  ...props
}: DocumentDetailBarGroupProps) {
  return (
    <div
      className={cn("gds-document-detail-bar-group", className)}
      {...props}
    />
  );
}

export interface DocumentDetailTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailTitle({
  className,
  ...props
}: DocumentDetailTitleProps) {
  return (
    <div className={cn("gds-document-detail-title", className)} {...props} />
  );
}

export interface DocumentDetailPanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function DocumentDetailPanelHeader({
  className,
  ...props
}: DocumentDetailPanelHeaderProps) {
  return (
    <div
      className={cn("gds-document-detail-panel-header", className)}
      {...props}
    />
  );
}

export interface DocumentDetailBottomBarProps extends React.HTMLAttributes<HTMLElement> {}

function DocumentDetailBottomBar({
  className,
  ...props
}: DocumentDetailBottomBarProps) {
  return (
    <footer
      className={cn(
        "gds-document-detail-full-bleed gds-document-detail-bottom-bar",
        className,
      )}
      {...props}
    />
  );
}

export {
  DocumentDetailBarGroup,
  DocumentDetailBody,
  DocumentDetailBottomBar,
  DocumentDetailIconRail,
  DocumentDetailMetadataSidebar,
  DocumentDetailMetadataSidebarBadge,
  DocumentDetailMetadataSidebarButton,
  DocumentDetailPanelHeader,
  DocumentDetailSidePanel,
  DocumentDetailSplitViewer,
  DocumentDetailTitle,
  DocumentDetailTopBar,
  DocumentDetailViewer,
  DocumentDetailViewerPane,
};
