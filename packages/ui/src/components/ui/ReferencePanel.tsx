"use client";

import { IconCopy } from "@/components/icons/IconCopy";
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

export interface ReferencePanelItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  isActive?: boolean;
  thumbnail?: React.ReactNode;
  title: React.ReactNode;
  snippet?: React.ReactNode;
  metadata?: React.ReactNode;
  href?: string;
  hrefLabel?: string;
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
      className={cn(
        "group relative border-b border-brand-white/20 px-s12 py-s12 text-brand-white transition-colors duration-75 ease-out before:absolute before:bottom-s12 before:left-0 before:top-s12 before:w-px before:bg-transparent hover:before:bg-brand-white/30 motion-reduce:transition-none",
        isActive && "before:w-[2px] before:bg-brand-white",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "grid min-w-0 items-center gap-s16",
          thumbnail ? "grid-cols-[5rem_minmax(0,1fr)]" : "grid-cols-1",
        )}
      >
        {thumbnail && (
          <div className="relative flex h-s80 w-s80 shrink-0 items-center justify-center overflow-hidden">
            {thumbnail}
          </div>
        )}

        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-s6">
            <div className="min-w-0 flex-1 font-serif text-sm font-medium leading-5 text-brand-white">
              {title}
            </div>
            <div className="flex shrink-0 items-center gap-s4">
              {actions}
              {uri && (
                <AriaButton
                  aria-label={copyLabel}
                  onPress={handleCopyUri}
                  className="inline-flex h-s20 w-s20 items-center justify-center text-brand-white/55 transition-colors data-hovered:text-brand-white data-focus-visible:outline-none data-focus-visible:ring-1 data-focus-visible:ring-ring"
                >
                  <IconCopy className="h-s12 w-s12" />
                </AriaButton>
              )}
              {href && (
                <AriaLink
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={hrefLabel}
                  className="inline-flex h-s20 w-s20 items-center justify-center text-brand-white/55 transition-colors data-hovered:text-brand-white data-focus-visible:outline-none data-focus-visible:ring-1 data-focus-visible:ring-ring"
                >
                  <IconExternalLink className="h-s12 w-s12" />
                </AriaLink>
              )}
            </div>
          </div>

          {snippet && (
            <div className="mt-s4 bg-neutral-700 px-s8 py-s4">
              <div className="line-clamp-2 font-serif text-xs italic leading-4 text-brand-white/80">
                {snippet}
              </div>
            </div>
          )}

          {metadata && (
            <div className="mt-s4 min-w-0 font-sans text-xs leading-4 text-neutral-400">
              {metadata}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export interface ReferencePanelHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
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
    <div
      className={cn(
        "sticky top-0 z-20 -mx-panel-pad -mt-panel-pad bg-neutral-800 px-panel-pad pb-row-gap pt-panel-pad",
        className,
      )}
      {...props}
    >
      {title && (
        <AriaHeading
          id={headingId}
          level={level}
          className="font-serif text-lg font-medium leading-5 text-brand-white"
        >
          {title}
        </AriaHeading>
      )}
      {children}
    </div>
  );
}

export interface ReferencePanelListProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function ReferencePanelList({
  className,
  ...props
}: ReferencePanelListProps) {
  return <div className={cn("min-h-0", className)} {...props} />;
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
  uri?: string;
  copyLabel?: string;
  actions?: React.ReactNode;
}

export interface ReferencePanelProps
  extends Omit<ObjectCardPanelProps, "side" | "children" | "title"> {
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
      <section
        aria-labelledby={headingId}
        className="flex min-h-0 flex-1 flex-col gap-row-gap"
      >
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
