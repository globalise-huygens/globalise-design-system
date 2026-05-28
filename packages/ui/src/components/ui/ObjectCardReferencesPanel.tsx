"use client";

import { IconArrowRight } from "@/components/icons/IconArrowRight";
import { cn } from "@/lib/utils";
import * as React from "react";
import {
  Heading as AriaHeading,
  Link as AriaLink,
} from "react-aria-components";
import { ObjectCardPanel, type ObjectCardPanelProps } from "./ObjectCard";

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
    <div className={cn("border-b border-brand-white/20 py-s12", className)}>
      <div className="flex items-center gap-s12">
        <div className="flex flex-1 items-center gap-s12">
          {image && (
            <div className="h-s80 w-s80 shrink-0 overflow-hidden">{image}</div>
          )}
          <div className="flex flex-1 flex-col gap-s4">
            <span className="font-serif text-sm font-medium leading-4 text-brand-white">
              {title}
            </span>
            <div className="flex flex-col gap-s4">
              {snippet && (
                <div className="bg-neutral-700 px-s8 py-s4">
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
  const headingId = React.useId();

  return (
    <ObjectCardPanel side="right" className={className} {...props}>
      <section
        aria-labelledby={headingId}
        className="flex min-h-0 flex-1 flex-col gap-row-gap"
      >
        <AriaHeading
          id={headingId}
          level={3}
          className="sticky top-0 z-20 -mx-panel-pad -mt-panel-pad bg-neutral-800 px-panel-pad pb-row-gap pt-panel-pad font-serif text-lg font-medium leading-5 text-brand-white"
        >
          {title}
        </AriaHeading>
        {children}
        {hasReferences
          ? references.map((reference, index) => (
              <ObjectCardReferenceItem key={index} {...reference} />
            ))
          : !children && emptyState}
      </section>
    </ObjectCardPanel>
  );
}

export { ObjectCardReferenceItem, ObjectCardReferencesPanel };
