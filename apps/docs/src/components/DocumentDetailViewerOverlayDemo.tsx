"use client";

import {
  Button,
  DocumentDetailBarGroup,
  DocumentDetailBody,
  DocumentDetailBottomBar,
  DocumentDetailCanvas,
  DocumentDetailFloatingToolbar,
  DocumentDetailIconRail,
  DocumentDetailOverlay,
  DocumentDetailRailButton,
  DocumentDetailSegment,
  DocumentDetailSegmentedControl,
  DocumentDetailSplitViewer,
  DocumentDetailTitle,
  DocumentDetailToolButton,
  DocumentDetailTopBar,
  DocumentDetailTranscriptCanvas,
  DocumentDetailTranscriptLine,
  DocumentDetailViewerPane,
  IconArrowLeftAlt,
  IconBrightness,
  IconCalendarClock,
  IconCalendarClockLarge,
  IconDashboardGear,
  IconDocumentFrameAlert,
  IconDownloadTray,
  IconFolderCopy,
  IconFontSizing,
  IconImportContacts,
  IconLeft,
  IconLeftFirst,
  IconList,
  IconPictureInPicture,
  IconRight,
  IconRightLast,
  IconRotate,
  IconScan,
  IconSwap,
  IconTranscription,
  IconTune,
  IconViewModeGrid,
  IconViewObjectTrack,
  IconViewObjectTrackLarge,
  IconWifiHome,
  IconZoomIn,
  IconZoomOut,
} from "@globalise/design-system";
import Image from "next/image";
import * as React from "react";

const TRANSCRIPT_LINE_WIDTHS = [
  "18%",
  "78%",
  "96%",
  "72%",
  "52%",
  "26%",
  "66%",
  "48%",
  "56%",
  "60%",
  "38%",
  "82%",
  "84%",
  "80%",
  "82%",
  "74%",
  "68%",
  "10%",
  "66%",
  "42%",
  "64%",
  "58%",
  "66%",
  "68%",
  "38%",
  "78%",
  "88%",
  "84%",
  "82%",
  "10%",
];

function ManuscriptCanvas() {
  return (
    <DocumentDetailCanvas className="bg-neutral-500 px-s24 py-s48">
      <DocumentDetailFloatingToolbar>
        <DocumentDetailBarGroup className="h-s36 gap-s4 px-s4 text-xs">
          <IconZoomOut className="h-s16 w-s16" />
          <span>100%</span>
          <IconZoomIn className="h-s16 w-s16" />
        </DocumentDetailBarGroup>
        <DocumentDetailToolButton
          aria-label="Rotate scan"
          className="min-w-s28 px-s4"
          icon={<IconRotate className="h-s16 w-s16" />}
        />
        <DocumentDetailToolButton
          aria-label="Adjust scan brightness"
          className="min-w-s28 px-s4"
          icon={<IconBrightness className="h-s16 w-s16" />}
        />
        <DocumentDetailToolButton
          aria-label="Reset scan position"
          className="min-w-s28 px-s4"
          icon={<IconWifiHome className="h-s16 w-s16" />}
        />
        <DocumentDetailToolButton
          aria-label="Tune scan"
          className="min-w-s28 px-s4"
          icon={<IconTune className="h-s16 w-s16" />}
        />
        <DocumentDetailToolButton
          aria-label="Download scan"
          className="min-w-s28 px-s4"
          icon={<IconDownloadTray className="h-s16 w-s16" />}
        />
      </DocumentDetailFloatingToolbar>

      <div className="relative h-full max-h-[calc(100%-var(--s32))] aspect-[1102/1566] border border-brand-black/70 bg-parchment-200 shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
        <Image
          src="/images/document-detail-manuscript.png"
          alt="Manuscript scan preview"
          fill
          className="object-contain"
          sizes="(min-width: 1280px) 44vw, 80vw"
        />
      </div>
    </DocumentDetailCanvas>
  );
}

function TranscriptCanvas() {
  return (
    <DocumentDetailTranscriptCanvas>
      <DocumentDetailFloatingToolbar className="left-auto right-s24 gap-s4 px-s4">
        <DocumentDetailToolButton
          aria-label="Toggle transcript text"
          className="min-w-s28 px-s4"
          icon={<IconFontSizing className="h-s16 w-s16" />}
        />
        <DocumentDetailToolButton
          aria-label="Reset transcript position"
          className="min-w-s28 px-s4"
          icon={<IconWifiHome className="h-s16 w-s16" />}
        />
        <DocumentDetailToolButton
          aria-label="Tune transcript"
          className="min-w-s28 px-s4"
          icon={<IconTune className="h-s16 w-s16" />}
        />
        <DocumentDetailToolButton
          aria-label="Download transcript"
          className="min-w-s28 px-s4"
          icon={<IconDownloadTray className="h-s16 w-s16" />}
        />
      </DocumentDetailFloatingToolbar>

      <div className="mx-auto flex max-w-[456px] flex-col gap-s4 pt-s24">
        {TRANSCRIPT_LINE_WIDTHS.map((width, index) => (
          <DocumentDetailTranscriptLine
            key={`${index}-${width}`}
            index={index + 1}
            width={width}
          />
        ))}
      </div>
    </DocumentDetailTranscriptCanvas>
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

      <DocumentDetailOverlay
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        dialogClassName="bg-background-fixed-card shadow-[0_56px_96px_rgba(0,0,0,0.36)]"
      >
        <DocumentDetailTopBar className="relative justify-between border-b-0 bg-neutral-900 pl-[calc(var(--overlay-document-viewer-rail-width)+var(--s16))] pr-s24">
          <div className="absolute left-0 top-0 flex h-full w-overlay-document-viewer-rail-width items-center justify-center bg-brand-black text-vermilion-500">
            <IconDocumentFrameAlert className="h-s20 w-s20" />
          </div>

          <DocumentDetailBarGroup className="gap-s8">
            <DocumentDetailToolButton
              aria-label="Object overview"
              icon={<IconViewModeGrid className="h-s16 w-s16" />}
            />
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <DocumentDetailToolButton
              onPress={() => setIsOpen(false)}
              icon={<IconArrowLeftAlt className="h-s16 w-s16" />}
            >
              Back to Search
            </DocumentDetailToolButton>
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <DocumentDetailSegmentedControl>
              <DocumentDetailSegment
                isActive
                icon={<IconScan className="h-s16 w-s16" />}
              >
                Scan
              </DocumentDetailSegment>
              <DocumentDetailSegment
                isActive
                icon={<IconTranscription className="h-s16 w-s16" />}
              >
                Text
              </DocumentDetailSegment>
            </DocumentDetailSegmentedControl>
            <DocumentDetailSegmentedControl className="bg-transparent text-brand-white">
              <DocumentDetailSegment isActive>N</DocumentDetailSegment>
              <DocumentDetailSegment className="text-brand-white">
                D
              </DocumentDetailSegment>
            </DocumentDetailSegmentedControl>
          </DocumentDetailBarGroup>

          <DocumentDetailTitle className="max-w-[520px] flex-1 px-s24 text-sm leading-tight text-neutral-200">
            <p className="truncate">
              26 March 1702 • 26 • missive van den independent fiscael tot
              cormandel Hendrick beiker
            </p>
          </DocumentDetailTitle>

          <DocumentDetailBarGroup className="gap-s8">
            <DocumentDetailToolButton
              aria-label="Swap panes"
              icon={<IconSwap className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Picture in picture"
              icon={<IconPictureInPicture className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Open document"
              icon={<IconImportContacts className="h-s16 w-s16" />}
            />
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <DocumentDetailToolButton
              aria-label="Object tracking"
              icon={<IconViewObjectTrack className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Date metadata"
              icon={<IconCalendarClock className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Settings"
              icon={<IconDashboardGear className="h-s16 w-s16" />}
            />
          </DocumentDetailBarGroup>
        </DocumentDetailTopBar>

        <DocumentDetailBody>
          <DocumentDetailIconRail className="border-r-0 bg-neutral-900">
            {[
              {
                label: "1664",
                icon: <IconFolderCopy className="h-s20 w-s20" />,
              },
              {
                label: "206",
                icon: <IconList className="h-s24 w-s24" />,
                active: false,
              },
              {
                label: "376",
                icon: <IconViewObjectTrackLarge className="h-s24 w-s24" />,
                active: false,
              },
              {
                label: "29",
                icon: <IconCalendarClockLarge className="h-s24 w-s24" />,
                active: false,
              },
            ].map((item) => (
              <DocumentDetailRailButton
                key={item.label}
                className="h-s72 border-b-0"
                icon={item.icon}
                label={item.label}
              />
            ))}
          </DocumentDetailIconRail>

          <DocumentDetailSplitViewer>
            <DocumentDetailViewerPane className="relative border-r border-brand-black">
              <ManuscriptCanvas />
            </DocumentDetailViewerPane>
            <DocumentDetailViewerPane className="relative border-r-0">
              <TranscriptCanvas />
            </DocumentDetailViewerPane>
          </DocumentDetailSplitViewer>
        </DocumentDetailBody>

        <DocumentDetailBottomBar className="justify-center gap-s96 border-t-0 bg-neutral-900 pl-overlay-document-viewer-rail-width text-xs text-neutral-300">
          <DocumentDetailBarGroup className="gap-s24">
            <DocumentDetailToolButton
              aria-label="First scan"
              icon={<IconLeftFirst className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Previous scan"
              icon={<IconLeft className="h-s16 w-s16" />}
            />
            <span>
              Scan <span className="text-parchment-500">23</span> of 156
            </span>
            <DocumentDetailToolButton
              aria-label="Next scan"
              icon={<IconRight className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Last scan"
              icon={<IconRightLast className="h-s16 w-s16" />}
            />
          </DocumentDetailBarGroup>
          <DocumentDetailBarGroup className="gap-s24">
            <DocumentDetailToolButton
              aria-label="Previous search hit"
              icon={<IconLeft className="h-s16 w-s16" />}
            />
            <span>
              search hits <span className="text-parchment-500">2</span> of 19
            </span>
            <DocumentDetailToolButton
              aria-label="Next search hit"
              icon={<IconRight className="h-s16 w-s16" />}
            />
          </DocumentDetailBarGroup>
        </DocumentDetailBottomBar>
      </DocumentDetailOverlay>
    </>
  );
}
