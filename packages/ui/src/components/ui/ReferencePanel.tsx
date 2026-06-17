"use client";

import { IconCopy } from "@/components/icons/IconCopy";
import { IconArrowTopRight } from "@/components/icons/IconArrowTopRight";
import { IconExternalLink } from "@/components/icons/IconExternalLink";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  Heading as AriaHeading,
  Link as AriaLink,
} from "react-aria-components";
import { ObjectCardPanel, type ObjectCardPanelProps } from "./ObjectCard";

export interface ReferencePanelItemProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> {
  isActive?: boolean;
  thumbnail?: React.ReactNode;
  title: React.ReactNode;
  snippet?: React.ReactNode;
  metadata?: React.ReactNode;
  href?: string;
  hrefLabel?: string;
  hrefType?: "internal" | "external";
  uri?: string;
  copyLabel?: string;
  onCopyUri?: (uri: string) => void;
  actions?: React.ReactNode;
}

function ReferencePanelItem({
  className,
  isActive = false,
  thumbnail,
  title,
  snippet,
  metadata,
  href,
  hrefLabel = "Open reference",
  hrefType = "internal",
  uri,
  copyLabel = "Copy URI",
  onCopyUri,
  actions,
  ...props
}: ReferencePanelItemProps) {
  const handleCopyUri: AriaButtonProps["onPress"] = () => {
    if (!uri) {
      return;
    }

    if (onCopyUri) {
      onCopyUri(uri);
      return;
    }

    void navigator.clipboard?.writeText(uri);
  };

  return (
    <div
      aria-current={isActive ? "true" : undefined}
      className={cn("gds-reference-panel-item", className)}
      {...props}
    >
      <div
        className="gds-reference-panel-item__layout"
        data-has-thumbnail={thumbnail ? "true" : "false"}
      >
        {thumbnail && (
          <div className="gds-reference-panel-item__thumbnail">{thumbnail}</div>
        )}

        <div className="gds-reference-panel-item__body">
          <div className="gds-reference-panel-item__header">
            <div className="gds-reference-panel-item__title">{title}</div>
            <div className="gds-reference-panel-item__actions">
              {actions}
              {uri && (
                <AriaButton
                  aria-label={copyLabel}
                  onPress={handleCopyUri}
                  className="gds-reference-panel-item__action"
                >
                  <IconCopy className="gds-reference-panel-item__action-icon" />
                </AriaButton>
              )}
              {href && hrefType === "external" && (
                <AriaLink
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={hrefLabel}
                  className="gds-reference-panel-item__action"
                >
                  <IconExternalLink className="gds-reference-panel-item__action-icon" />
                </AriaLink>
              )}
              {href && hrefType === "internal" && (
                <AriaLink
                  href={href}
                  aria-label={hrefLabel}
                  className="gds-reference-panel-item__action"
                >
                  <IconArrowTopRight className="gds-reference-panel-item__action-icon" />
                </AriaLink>
              )}
            </div>
          </div>

          {snippet && (
            <div className="gds-reference-panel-item__snippet">
              <div className="gds-reference-panel-item__snippet-text">
                {snippet}
              </div>
            </div>
          )}

          {metadata && (
            <div className="gds-reference-panel-item__metadata">{metadata}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export interface ReferencePanelHeaderProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  headingId?: string;
}

function ReferencePanelHeader({
  className,
  title,
  children,
  level = 3,
  headingId,
  ...props
}: ReferencePanelHeaderProps) {
  return (
    <div className={cn("gds-reference-panel-header", className)} {...props}>
      {title && (
        <AriaHeading
          id={headingId}
          level={level}
          className="gds-reference-panel-header__heading"
        >
          {title}
        </AriaHeading>
      )}
      {children}
    </div>
  );
}

export interface ReferencePanelListProps extends React.HTMLAttributes<HTMLDivElement> {}

function ReferencePanelList({ className, ...props }: ReferencePanelListProps) {
  return (
    <div className={cn("gds-reference-panel-list", className)} {...props} />
  );
}

export interface ReferencePanelItemData {
  id?: string;
  isActive?: boolean;
  thumbnail?: React.ReactNode;
  title: React.ReactNode;
  snippet?: React.ReactNode;
  metadata?: React.ReactNode;
  href?: string;
  hrefLabel?: string;
  hrefType?: "internal" | "external";
  uri?: string;
  copyLabel?: string;
  actions?: React.ReactNode;
}

export interface ReferencePanelProps extends Omit<
  ObjectCardPanelProps,
  "side" | "children" | "title"
> {
  title?: React.ReactNode;
  items?: ReferencePanelItemData[];
  children?: React.ReactNode;
  emptyState?: React.ReactNode;
  onCopyUri?: (uri: string) => void;
}

function ReferencePanel({
  className,
  title = "References",
  items,
  children,
  emptyState,
  onCopyUri,
  ...props
}: ReferencePanelProps) {
  const headingId = React.useId();
  const hasItems = items && items.length > 0;

  return (
    <ObjectCardPanel side="right" className={className} {...props}>
      <section aria-labelledby={headingId} className="gds-reference-panel">
        <ReferencePanelHeader title={title} headingId={headingId} />
        {children}
        {hasItems ? (
          <ReferencePanelList>
            {items.map((item, index) => (
              <ReferencePanelItem
                key={item.id ?? `${String(item.title)}-${index}`}
                onCopyUri={onCopyUri}
                {...item}
              />
            ))}
          </ReferencePanelList>
        ) : (
          !children && emptyState
        )}
      </section>
    </ObjectCardPanel>
  );
}

export {
  ReferencePanel,
  ReferencePanelHeader,
  ReferencePanelItem,
  ReferencePanelList,
};
