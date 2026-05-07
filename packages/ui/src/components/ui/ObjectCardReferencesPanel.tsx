"use client";

import { IconArrowRight } from "@/components/icons/IconArrowRight";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Link as AriaLink } from "react-aria-components";
import {
  ObjectCardPanel,
  type ObjectCardPanelProps,
  ObjectCardSection,
} from "./ObjectCard";

export interface ObjectCardReferenceItemProps {
  image?: React.ReactNode;
  title: string;
  snippet?: React.ReactNode;
  archiveId?: string;
  href?: string;
  className?: string;
}

function ObjectCardReferenceItem({
  className,
  image,
  title,
  snippet,
  archiveId,
  href,
}: ObjectCardReferenceItemProps) {
  return (
    <div className={cn("border-b border-brand-white/20 py-3", className)}>
      <div className="flex items-center gap-3">
        <div className="flex flex-1 items-center gap-3">
          {image && (
            <div className="h-20 w-20 shrink-0 overflow-hidden">{image}</div>
          )}
          <div className="flex flex-1 flex-col gap-1">
            <span className="font-serif text-sm font-medium leading-4 text-brand-white">
              {title}
            </span>
            <div className="flex flex-col gap-1">
              {snippet && (
                <div className="bg-white/[0.06] px-2 py-1">
                  <div className="line-clamp-2 font-serif text-xs italic leading-4 text-neutral-200">
                    {snippet}
                  </div>
                </div>
              )}
              {archiveId && (
                <span className="font-sans text-[11px] leading-4 text-neutral-400">
                  {archiveId}
                </span>
              )}
            </div>
          </div>
        </div>
        {href && (
          <AriaLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="shrink-0 text-brand-white transition-opacity data-hovered:opacity-80 data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-ring"
          >
            <IconArrowRight className="h-2.5 w-2.5" />
          </AriaLink>
        )}
      </div>
    </div>
  );
}

export interface ObjectCardReference {
  image?: React.ReactNode;
  title: string;
  snippet?: React.ReactNode;
  archiveId?: string;
  href?: string;
}

export interface ObjectCardReferencesPanelProps extends Omit<
  ObjectCardPanelProps,
  "side" | "children"
> {
  title?: string;
  references?: ObjectCardReference[];
  children?: React.ReactNode;
  emptyState?: React.ReactNode;
}

function ObjectCardReferencesPanel({
  className,
  title = "References",
  references,
  children,
  emptyState,
  ...props
}: ObjectCardReferencesPanelProps) {
  const hasReferences = references && references.length > 0;

  return (
    <ObjectCardPanel side="right" className={className} {...props}>
      <ObjectCardSection title={title}>
        {children}
        {hasReferences
          ? references.map((reference, index) => (
              <ObjectCardReferenceItem key={index} {...reference} />
            ))
          : !children && emptyState}
      </ObjectCardSection>
    </ObjectCardPanel>
  );
}

export { ObjectCardReferenceItem, ObjectCardReferencesPanel };
