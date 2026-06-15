"use client";

import {
  DocumentDetailCheckbox,
  DocumentDetailNumberField,
  DocumentDetailReferenceCard,
  DocumentDetailSegmentedToggleGroup,
  DocumentDetailSegmentedToggleItem,
  DocumentDetailTooltip,
  IconCopy,
  IconExternalLink,
  IconScan,
  IconTranscription,
} from "@globalise/design-system";
import * as React from "react";
import { DemoScanPage } from "@/components/document-detail-overlay-demo/DemoScanPage";

export function DocumentDetailControlsDemo() {
  const [visibleViewers, setVisibleViewers] = React.useState(
    () => new Set(["scan", "text"]),
  );
  const [transcriptionMode, setTranscriptionMode] = React.useState(
    () => new Set(["n"]),
  );
  const [searchHitsOnly, setSearchHitsOnly] = React.useState(false);
  const [scan, setScan] = React.useState(23);

  return (
    <div className="flex w-full flex-col gap-s24 bg-neutral-800 p-s24 text-brand-white">
      <div className="flex flex-wrap items-center gap-s24">
        <DocumentDetailSegmentedToggleGroup
          aria-label="Viewer visibility"
          selectionMode="multiple"
          selectedKeys={visibleViewers}
          onSelectionChange={(keys) =>
            setVisibleViewers(new Set(Array.from(keys).map(String)))
          }
        >
          <DocumentDetailSegmentedToggleItem
            id="scan"
            icon={<IconScan className="h-s16 w-s16" />}
          >
            Scan
          </DocumentDetailSegmentedToggleItem>
          <DocumentDetailSegmentedToggleItem
            id="text"
            icon={<IconTranscription className="h-s16 w-s16" />}
          >
            Text
          </DocumentDetailSegmentedToggleItem>
        </DocumentDetailSegmentedToggleGroup>

        <DocumentDetailSegmentedToggleGroup
          size="compact"
          aria-label="Transcription mode"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={transcriptionMode}
          onSelectionChange={(keys) =>
            setTranscriptionMode(new Set(Array.from(keys).map(String)))
          }
        >
          <DocumentDetailSegmentedToggleItem id="n" size="compact">
            N
          </DocumentDetailSegmentedToggleItem>
          <DocumentDetailSegmentedToggleItem id="d" size="compact">
            D
          </DocumentDetailSegmentedToggleItem>
        </DocumentDetailSegmentedToggleGroup>

        <DocumentDetailCheckbox
          isSelected={searchHitsOnly}
          onChange={setSearchHitsOnly}
        >
          Search hits
        </DocumentDetailCheckbox>

        <span className="inline-flex items-baseline gap-s6 text-xs leading-4 text-neutral-300">
          Scan
          <DocumentDetailNumberField
            aria-label="Go to scan"
            value={scan}
            minValue={1}
            maxValue={156}
            digits={3}
            onChange={(nextScan) => setScan(Math.round(nextScan))}
          />
          of 156
        </span>
      </div>

      <div className="max-w-128">
        <DocumentDetailReferenceCard
          isSelected
          thumbnail={<DemoScanPage label="Scan thumbnail placeholder" />}
          heading={
            <span className="inline-flex min-w-0 items-center gap-s6">
              <span className="font-sans text-sm leading-5 text-brand-white">
                Scan 1361
              </span>
              <span className="text-xs leading-4 text-brand-white/45">|</span>
              <span className="text-xs leading-4 text-brand-white/60">
                Scan 23
              </span>
            </span>
          }
          actions={
            <DocumentDetailTooltip label="Copy scan URI">
              <button
                type="button"
                className="inline-flex h-s20 w-s20 items-center justify-center text-brand-white/55 hover:text-brand-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="Copy scan URI"
              >
                <IconCopy className="h-s12 w-s12" />
              </button>
            </DocumentDetailTooltip>
          }
          snippet={
            <p className="line-clamp-2 font-serif text-xs italic leading-4 text-brand-white/80 [&_strong]:font-semibold [&_strong]:text-parchment-500">
              overgesonden de scheepen D&apos; <strong>prins Eugenius</strong>{" "}
              en Gansenhoef,
            </p>
          }
          meta={
            <a
              href="#"
              className="inline-flex max-w-full items-center gap-s4 font-sans text-xs leading-4 text-brand-white/55 underline-offset-2 hover:text-brand-white hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <span className="truncate">NA Identifier: 1361</span>
              <IconExternalLink className="h-s12 w-s12 shrink-0" />
            </a>
          }
        />
      </div>
    </div>
  );
}
