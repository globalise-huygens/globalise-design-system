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
  IconAdd,
  IconArrowLeftAlt,
  IconArrowLeftSimple,
  IconArrowPauseLeft,
  IconArrowPauseRight,
  IconArrowRight,
  IconArrowRightSimple,
  IconBrightness,
  IconCalendarClock,
  IconDashboard2Gear,
  IconDocument,
  IconDownload,
  IconEast,
  IconFolderCopy,
  IconFrameExclamation,
  IconImage,
  IconImportContacts,
  IconList,
  IconPictureInPictureAlt,
  IconRotate,
  IconSidebar,
  IconSwapArrow,
  IconTextSize,
  IconTune,
  IconViewObjectTrack,
  IconWifiHome,
  IconZoomIn,
  IconZoomOut,
} from "@globalise/design-system";
import Image from "next/image";
import * as React from "react";

const TRANSCRIPT_LINE_WIDTHS = [
  "w-20",
  "w-80",
  "flex-1",
  "w-72",
  "w-48",
  "w-24",
  "w-64",
  "w-48",
  "w-60",
  "w-60",
  "w-40",
  "w-96",
  "w-96",
  "w-80",
  "w-96",
  "w-80",
  "w-72",
  "w-6",
  "w-64",
  "w-44",
  "w-72",
  "w-64",
  "w-72",
  "w-72",
  "w-40",
  "w-80",
  "w-96",
  "w-96",
  "w-96",
  "w-6",
];

const COLLAPSED_LEFT_SIDEBAR_ITEMS = [
  {
    label: "1664",
    icon: IconFolderCopy,
    iconClassName: "h-5 w-5",
    chip: true,
  },
  {
    label: "206",
    icon: IconList,
    iconClassName: "h-5 w-5",
    chip: false,
  },
  {
    label: "376",
    icon: IconViewObjectTrack,
    iconClassName: "h-5 w-5",
    chip: false,
  },
  {
    label: "29",
    icon: IconCalendarClock,
    iconClassName: "h-5 w-5",
    chip: false,
  },
] as const;

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
        "flex h-8 items-center gap-s8 bg-neutral-900 px-s8 text-xs leading-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

function IconButton({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "flex h-9 w-7 items-center justify-center text-brand-white",
        className,
      )}
    >
      {children}
    </button>
  );
}

function EditableCounter({
  value,
  onChange,
  ariaLabel,
}: {
  value: string;
  onChange: (nextValue: string) => void;
  ariaLabel: string;
}) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [draftValue, setDraftValue] = React.useState(value);

  React.useEffect(() => {
    if (!isEditing) {
      setDraftValue(value);
    }
  }, [isEditing, value]);

  if (isEditing) {
    return (
      <input
        autoFocus
        value={draftValue}
        aria-label={ariaLabel}
        onChange={(event) => setDraftValue(event.target.value)}
        onBlur={() => {
          onChange(draftValue.trim() || value);
          setIsEditing(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onChange(draftValue.trim() || value);
            setIsEditing(false);
          }

          if (event.key === "Escape") {
            setDraftValue(value);
            setIsEditing(false);
          }
        }}
        className="h-5 w-10 border-0 bg-transparent text-center text-xs leading-5 text-stone-400 outline-none"
      />
    );
  }

  return (
    <button
      type="button"
      onDoubleClick={() => setIsEditing(true)}
      className="text-stone-400"
      aria-label={`${ariaLabel}. Double click to edit.`}
    >
      {value}
    </button>
  );
}

function ManuscriptCanvas() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-neutral-900 px-s24 py-s24">
      <div className="relative h-full w-full border-0 bg-[#dcc7a8]">
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
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true);
  const [scanPosition, setScanPosition] = React.useState("23");
  const [resultPosition, setResultPosition] = React.useState("2");

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

      <DocumentDetailOverlay
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        dialogClassName="h-full lg:w-[1233px] lg:max-w-[1233px] lg:mx-auto"
      >
        <DocumentDetailTopBar className="border-0 justify-between px-s16">
          <div className="flex min-w-0 items-center gap-s8 text-xs text-brand-white">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center"
              aria-label="Open sidebar"
            >
              <IconSidebar className="h-3 w-3.75 text-brand-white" />
            </button>

            <span className="text-neutral-400">|</span>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-8 items-center gap-s6 px-s6 text-brand-white transition-opacity hover:opacity-80"
            >
              <IconArrowLeftAlt className="h-s16 w-s16" />
              Back to search
            </button>

            <span className="text-neutral-400">|</span>

            <div className="flex rounded-lg p-0.5">
              <button
                type="button"
                className="flex h-8 w-20 items-center gap-s6 rounded-l-sm bg-brand-white px-s12 text-brand-black"
              >
                <IconImage className="h-s16 w-s16" />
                Scan
              </button>
              <button
                type="button"
                className="flex h-8 w-20 items-center gap-s6 rounded-r-sm bg-brand-white px-s12 text-brand-black"
              >
                <IconDocument className="h-s16 w-s16" />
                Text
              </button>
            </div>

            <div className="flex h-8 items-center gap-0.5 rounded-lg p-0.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-brand-white text-brand-black">
                N
              </span>
              <span className="flex h-7 w-7 items-center justify-center text-brand-white">
                D
              </span>
            </div>
          </div>

          <div className="min-w-0 px-s12 text-center font-sans text-sm text-brand-white">
            <p className="truncate">
              26 March 1702 • 26 • missive van den independent fiscael tot
              cormandel Hendrick beiker, aan haer Ed=ls de hooge req:
            </p>
          </div>

          <div className="hidden items-center gap-s8 text-brand-white lg:flex">
            <IconButton label="Swap relations">
              <IconSwapArrow className="h-s16 w-s16" />
            </IconButton>
            <IconButton label="Picture in picture">
              <IconPictureInPictureAlt className="h-s16 w-s16" />
            </IconButton>
            <IconButton label="Import contacts">
              <IconImportContacts className="h-s16 w-s16" />
            </IconButton>
            <span className="text-neutral-400">|</span>
            <IconButton label="Object links">
              <IconViewObjectTrack className="h-s16 w-s16" />
            </IconButton>
            <IconButton label="Calendar">
              <IconCalendarClock className="h-s16 w-s16" />
            </IconButton>
            <IconButton label="Dashboard settings">
              <IconDashboard2Gear className="h-s16 w-s16" />
            </IconButton>
          </div>
        </DocumentDetailTopBar>

        <DocumentDetailBody className="grid min-h-0 grid-cols-1 lg:grid-cols-[repeat(var(--shell-cols),minmax(0,1fr))]">
          <DocumentDetailIconRail className="order-1 w-auto border-0 bg-neutral-800 py-s0 lg:col-span-1 lg:outline-1 lg:-outline-offset-1 lg:outline-black">
            <button
              type="button"
              className="flex h-20 w-full flex-col items-center justify-center gap-s8 border-0 bg-vermilion-500/95 text-brand-black"
              aria-label="Selection mode"
            >
              <IconFrameExclamation className="h-5 w-5 text-neutral-900" />
            </button>
            {COLLAPSED_LEFT_SIDEBAR_ITEMS.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  className={cn(
                    "flex h-16 w-full flex-col items-center justify-center gap-2.5 border-0 p-2.5 text-brand-white",
                    index === 0 ? "bg-neutral-800" : "bg-neutral-900/90",
                  )}
                >
                  <ItemIcon
                    className={cn(item.iconClassName, "text-brand-white")}
                  />
                  {item.chip ? (
                    <span className="inline-flex items-center justify-center bg-neutral-600 px-0.5 text-xs leading-5 outline-1 -outline-offset-1 outline-neutral-500">
                      {item.label}
                    </span>
                  ) : (
                    <span className="text-xs leading-5">{item.label}</span>
                  )}
                </button>
              );
            })}
          </DocumentDetailIconRail>

          <DocumentDetailViewer
            className={cn(
              "order-2 min-w-0 border-0 bg-neutral-500 lg:outline-1 lg:-outline-offset-1 lg:outline-black",
              isSidebarExpanded ? "lg:col-span-8" : "lg:col-span-15",
            )}
          >
            <DocumentDetailViewerPane
              className="border-0"
              toolbarFloating
              toolbarClassName="absolute left-[13px] top-[20px] z-20"
              toolbar={
                <div className="inline-flex h-12 items-center gap-1 rounded-lg bg-zinc-800 px-2 py-1 text-brand-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]">
                  <ToolPill className="border-0 px-0">
                    <IconZoomOut className="h-s16 w-s16" />
                    <span className="font-sans text-[11px] leading-5">
                      100%
                    </span>
                    <IconZoomIn className="h-s16 w-s16" />
                  </ToolPill>

                  <ToolPill className="border-0 px-s8">
                    <IconRotate className="h-s16 w-s16" />
                    <IconBrightness className="h-s16 w-s16" />
                    <IconWifiHome className="h-s16 w-s16" />
                    <IconTune className="h-s16 w-s16" />
                    <IconDownload className="h-s16 w-s16" />
                  </ToolPill>
                </div>
              }
            >
              <ManuscriptCanvas />
            </DocumentDetailViewerPane>
          </DocumentDetailViewer>

          {isSidebarExpanded && (
            <DocumentDetailSidePanel className="order-3 relative w-auto border-0 bg-neutral-500 px-0 py-0 lg:col-span-7 lg:outline-1 lg:-outline-offset-1 lg:outline-black">
              <div className="pointer-events-none absolute right-5 top-5 z-20">
                <div className="pointer-events-auto inline-flex h-12 items-center gap-1 rounded-lg bg-zinc-800 p-1 text-brand-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]">
                  <button
                    type="button"
                    className="flex h-9 w-7 items-center justify-center"
                    aria-label="Text size"
                  >
                    <IconTextSize className="h-s16 w-s16" />
                  </button>
                  <button
                    type="button"
                    className="flex h-9 w-7 items-center justify-center"
                    aria-label="Viewer mode"
                  >
                    <IconWifiHome className="h-s16 w-s16" />
                  </button>
                  <button
                    type="button"
                    className="flex h-9 w-7 items-center justify-center"
                    aria-label="Sidebar settings"
                  >
                    <IconTune className="h-s16 w-s16" />
                  </button>
                  <button
                    type="button"
                    className="flex h-9 w-7 items-center justify-center"
                    aria-label="Download"
                  >
                    <IconDownload className="h-s16 w-s16" />
                  </button>
                </div>
              </div>

              <div className="absolute left-[23px] top-[122px] flex w-[452px] flex-col gap-1.5 px-3 pt-3">
                {TRANSCRIPT_LINE_WIDTHS.map((lineWidthClass, index) => (
                  <div
                    key={index}
                    className="inline-flex h-2.5 items-center gap-1.5"
                  >
                    <span className="w-3 text-right font-sans text-[7.08px] leading-3 tracking-tight text-gray-300">
                      {index + 1}
                    </span>
                    <span
                      className={cn("h-1 bg-gray-300/60", lineWidthClass)}
                    />
                  </div>
                ))}
              </div>
            </DocumentDetailSidePanel>
          )}
        </DocumentDetailBody>

        <DocumentDetailBottomBar className="border-0 justify-between px-s24 py-s12 text-xs text-brand-white">
          <div className="flex items-center gap-s12 text-neutral-300">
            <IconButton label="Jump to first scan" className="h-8 w-6">
              <IconArrowPauseLeft className="h-s16 w-s16" />
            </IconButton>
            <span className="text-neutral-300">NL-HaNA_1.04.02_3365_0215</span>
          </div>
          <div className="flex items-center gap-s24 text-neutral-300">
            <span className="flex items-center gap-s8">
              <IconArrowLeftSimple className="h-s16 w-s16" />
              Scan{" "}
              <EditableCounter
                value={scanPosition}
                onChange={setScanPosition}
                ariaLabel="Scan position"
              />{" "}
              of 156
              <IconArrowRightSimple className="h-s16 w-s16" />
            </span>
            <span className="flex items-center gap-s8">
              <IconArrowLeftSimple className="h-s16 w-s16" />
              result <span className="italic">&quot;prins Eugenius&quot;</span>
              <EditableCounter
                value={resultPosition}
                onChange={setResultPosition}
                ariaLabel="Search result position"
              />{" "}
              of 19
              <IconArrowRightSimple className="h-s16 w-s16" />
            </span>
          </div>
          <div className="flex items-center gap-s12 text-neutral-300">
            <span className="text-neutral-300">NL-HaNA_1.04.02_3365_0371</span>
            <IconButton label="Jump to last scan" className="h-8 w-6">
              <IconArrowPauseRight className="h-s16 w-s16" />
            </IconButton>
          </div>
        </DocumentDetailBottomBar>
      </DocumentDetailOverlay>
    </>
  );
}
