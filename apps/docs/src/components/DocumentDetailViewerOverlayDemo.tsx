"use client";

import {
  Button,
  cn,
  DocumentDetailBody,
  DocumentDetailBottomBar,
  DocumentDetailIconRail,
  DocumentDetailOverlay,
  DocumentDetailSidePanel,
  DocumentDetailTopBar,
  DocumentDetailViewer,
  DocumentDetailViewerPane,
  IconArrowRight,
  IconClose,
  IconCopy,
  IconDownload,
  IconMenu,
  IconSearch,
} from "@globalise/design-system";
import Image from "next/image";
import * as React from "react";

const TRANSCRIPT_LINE_WIDTHS = [
  "w-16",
  "w-44",
  "w-56",
  "w-52",
  "w-36",
  "w-64",
  "w-48",
  "w-40",
  "w-60",
  "w-14",
  "w-64",
  "w-52",
  "w-44",
  "w-56",
  "w-36",
  "w-64",
  "w-48",
  "w-52",
  "w-60",
  "w-44",
  "w-56",
  "w-64",
  "w-32",
  "w-48",
  "w-56",
  "w-44",
  "w-64",
  "w-52",
  "w-60",
  "w-14",
];

function ToolPill({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-control items-center gap-s8 border border-brand-white/20 px-s12",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ManuscriptCanvas() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-neutral-900 px-s24 py-s24">
      <div className="relative h-full w-full border border-brand-white/10 bg-[#dcc7a8]">
        <Image
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='1200'%3E%3Crect width='900' height='1200' fill='%23dcc7a8'/%3E%3Cg stroke='%23866c56' stroke-width='2' opacity='0.28'%3E%3Cline x1='90' y1='150' x2='820' y2='210'/%3E%3Cline x1='130' y1='250' x2='780' y2='300'/%3E%3Cline x1='90' y1='360' x2='820' y2='420'/%3E%3Cline x1='130' y1='460' x2='780' y2='520'/%3E%3Cline x1='100' y1='575' x2='790' y2='635'/%3E%3Cline x1='130' y1='690' x2='760' y2='735'/%3E%3Cline x1='100' y1='800' x2='810' y2='860'/%3E%3Cline x1='130' y1='920' x2='760' y2='975'/%3E%3Cline x1='100' y1='1030' x2='800' y2='1095'/%3E%3C/g%3E%3C/svg%3E"
          alt="Manuscript scan preview"
          fill
          className="object-contain p-s24"
        />
      </div>
    </div>
  );
}

export function DocumentDetailViewerOverlayDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("object-card-overlay-open-change", {
        detail: { isOpen },
      }),
    );
  }, [isOpen]);

  React.useEffect(() => {
    return () => {
      window.dispatchEvent(
        new CustomEvent("object-card-overlay-open-change", {
          detail: { isOpen: false },
        }),
      );
    };
  }, []);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        Open document detail viewer
      </Button>

      <DocumentDetailOverlay isOpen={isOpen} onOpenChange={setIsOpen}>
        <DocumentDetailTopBar className="justify-between px-s16 lg:px-s24">
          <div className="flex items-center gap-s12 text-xs text-brand-white">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-control items-center gap-s8 border border-brand-white/20 px-s12 text-brand-white"
            >
              <IconArrowRight className="h-s12 w-s12 rotate-180" />
              Back to search
            </button>
            <ToolPill>
              <span>Scan</span>
              <span className="text-neutral-400">|</span>
              <span>Text</span>
            </ToolPill>
          </div>

          <div className="min-w-0 px-s16 text-center font-sans text-xs text-brand-white lg:text-sm">
            <p className="truncate">
              26 March 1702 • missive van den independent fiscael tot cormandel
              Hendrick beiker
            </p>
          </div>

          <div className="flex items-center gap-s8 text-brand-white">
            <button
              type="button"
              className="flex h-control w-control items-center justify-center border border-brand-white/20"
              aria-label="Search"
            >
              <IconSearch className="h-s12 w-s12" />
            </button>
            <button
              type="button"
              className="flex h-control w-control items-center justify-center border border-brand-white/20"
              aria-label="Copy"
            >
              <IconCopy className="h-s12 w-s12" />
            </button>
            <button
              type="button"
              className="flex h-control w-control items-center justify-center border border-brand-white/20"
              aria-label="Download"
            >
              <IconDownload className="h-s12 w-s12" />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-control w-control items-center justify-center border border-brand-white/20"
              aria-label="Close"
            >
              <IconClose className="h-s12 w-s12" />
            </button>
          </div>
        </DocumentDetailTopBar>

        <DocumentDetailBody>
          <DocumentDetailIconRail className="bg-neutral-900 py-s8">
            <button
              type="button"
              className="flex h-16 w-full flex-col items-center justify-center gap-s4 border-b border-brand-white/10 bg-vermilion-500/90 text-brand-black"
              aria-label="Selection mode"
            >
              <IconMenu className="h-s16 w-s16" />
              <span className="text-[10px] font-medium">S</span>
            </button>
            {[
              { label: "1664", active: true },
              { label: "206", active: false },
              { label: "376", active: false },
              { label: "29", active: false },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                className={cn(
                  "flex h-16 w-full flex-col items-center justify-center gap-s4 border-b border-brand-white/10 text-brand-white",
                  item.active ? "bg-neutral-800" : "bg-neutral-900",
                )}
              >
                <span className="h-s16 w-s16 border border-brand-white/50" />
                <span className="text-[10px] leading-none">{item.label}</span>
              </button>
            ))}
          </DocumentDetailIconRail>

          <DocumentDetailViewer>
            <DocumentDetailViewerPane
              toolbar={
                <div className="flex items-center gap-s8 text-brand-white">
                  <ToolPill className="h-toolbar border-0 px-0">
                    <span>100%</span>
                  </ToolPill>
                  <ToolPill>
                    <span>Zoom</span>
                  </ToolPill>
                  <ToolPill>
                    <span>Rotate</span>
                  </ToolPill>
                </div>
              }
            >
              <ManuscriptCanvas />
            </DocumentDetailViewerPane>
          </DocumentDetailViewer>

          <DocumentDetailSidePanel className="bg-neutral-800 py-s16">
            <div className="sticky top-0 z-10 -mx-panel-pad -mt-panel-pad border-b border-brand-white/10 bg-neutral-800 px-panel-pad py-s16">
              <h3 className="font-serif text-lg font-medium text-brand-white">
                Transcript lines
              </h3>
            </div>

            <div className="flex flex-col gap-s8">
              {TRANSCRIPT_LINE_WIDTHS.map((lineWidthClass, index) => (
                <div key={index} className="flex items-center gap-s12">
                  <span className="w-s16 text-right font-sans text-[10px] text-neutral-400">
                    {index + 1}
                  </span>
                  <span
                    className={cn("h-1 bg-neutral-400/70", lineWidthClass)}
                  />
                </div>
              ))}
            </div>
          </DocumentDetailSidePanel>
        </DocumentDetailBody>

        <DocumentDetailBottomBar className="justify-between px-s16 text-xs text-brand-white lg:px-s24">
          <div className="flex items-center gap-s12">
            <span className="text-neutral-300">NL-HaNA_1.04.02_3365_0215</span>
          </div>
          <div className="flex items-center gap-s24">
            <span>
              Scan <span className="text-neutral-400">23</span> of 156
            </span>
            <span>
              Result <span className="text-neutral-400">2</span> of 19
            </span>
          </div>
          <div className="flex items-center gap-s12">
            <span className="text-neutral-300">NL-HaNA_1.04.02_3365_0371</span>
          </div>
        </DocumentDetailBottomBar>
      </DocumentDetailOverlay>
    </>
  );
}
