"use client";

import {
  cn,
  DocumentDetailCanvas,
  DocumentDetailFloatingToolbar,
  DocumentDetailNumberField,
  DocumentDetailPopoverSurface,
  DocumentDetailSegmentedToggleGroup,
  DocumentDetailSegmentedToggleItem,
  DocumentDetailToolButton,
  DocumentDetailTooltip,
  DocumentDetailTranscriptCanvas,
  DocumentDetailTranscriptLine,
  IconBrightness,
  IconCopy,
  IconContentWarning,
  IconDownload,
  IconRotate,
  IconSetting,
  IconReset,
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

const CONTENT_WARNING_TEXT =
  "The Dutch East India Company archives (and consequently their transcriptions) and its document descriptions bear harmful and discriminatory language. They also record a wide range of events, intentions and perspectives that are violent and can cause distress.";

export const FLOATING_TOOLBAR_REVEAL_CLASS =
  "bg-brand-black/65 text-brand-white/70 shadow-[0_4px_16px_rgba(0,0,0,0.16)] transition-[background-color,box-shadow,color] duration-100 ease-out hover:bg-brand-black/90 hover:text-brand-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)] focus-within:bg-brand-black/90 focus-within:text-brand-white focus-within:shadow-[0_6px_20px_rgba(0,0,0,0.22)] motion-reduce:transition-none";

export const TOP_BAR_ICON_BUTTON_CLASS =
  "h-s36 min-w-s36 px-0 duration-100 ease-out motion-reduce:transition-none [&>svg]:h-[18px] [&>svg]:w-[18px]";

export const BOTTOM_BAR_ICON_BUTTON_CLASS =
  "h-s24 min-w-s24 rounded-[3px] px-s4 text-neutral-300 duration-100 ease-out data-hovered:bg-brand-white/8 pressed:bg-brand-white/12 data-focus-visible:ring-1 motion-reduce:transition-none [&>svg]:h-s16 [&>svg]:w-s16";

export const SEGMENTED_SURFACE_COMPACT_CLASS =
  "inline-flex h-s28 shrink-0 items-center gap-0 overflow-hidden rounded-[4px] bg-brand-white/10 p-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]";

export function ContentWarningTopBarControl({
  className,
}: {
  className?: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [hasFocusWithin, setHasFocusWithin] = React.useState(false);
  const [isPinned, setIsPinned] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const popoverId = React.useId();
  const isOpen = isHovered || hasFocusWithin || isPinned;

  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsPinned(false);
        setIsHovered(false);
        setHasFocusWithin(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPinned(false);
        setIsHovered(false);
        setHasFocusWithin(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocusWithin(true)}
      onBlur={(event) => {
        const nextFocusedElement = event.relatedTarget;

        if (
          !(nextFocusedElement instanceof Node) ||
          !event.currentTarget.contains(nextFocusedElement)
        ) {
          setHasFocusWithin(false);
        }
      }}
    >
      <DocumentDetailToolButton
        aria-controls={popoverId}
        aria-expanded={isOpen}
        aria-label="Content warning"
        className={cn(
          "h-s48 rounded-sm px-s12 font-sans text-sm leading-5",
          "text-vermilion-500 data-hovered:bg-vermilion-500/10 data-focus-visible:ring-vermilion-500",
          isOpen && "bg-vermilion-500/10",
        )}
        icon={<IconContentWarning className="h-s16 w-s16" />}
        onPress={() => setIsPinned((current) => !current)}
      >
        Content Warning
      </DocumentDetailToolButton>

      {isOpen && (
        <DocumentDetailPopoverSurface
          id={popoverId}
          role="dialog"
          aria-label="Content warning details"
          variant="warning"
          className="absolute left-1/2 top-[calc(100%+var(--s8))] z-30 -translate-x-1/2"
          footer={
            <a
              href="#"
              className="inline-flex text-xs leading-4 underline underline-offset-2 transition-colors duration-100 ease-out hover:text-vermilion-400 motion-reduce:transition-none"
            >
              Read more about problematic content
            </a>
          }
        >
          {CONTENT_WARNING_TEXT}
        </DocumentDetailPopoverSurface>
      )}
    </div>
  );
}

export function CopyUriButton({
  uri,
  label,
  className,
}: {
  uri: string;
  label: string;
  className?: string;
}) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const uriToCopy =
      typeof window === "undefined" || uri.startsWith("http")
        ? uri
        : new URL(uri, window.location.href).toString();

    try {
      await navigator.clipboard.writeText(uriToCopy);
      setHasCopied(true);
      window.setTimeout(() => setHasCopied(false), 1600);
    } catch {
      setHasCopied(false);
    }
  };

  const accessibleLabel = hasCopied ? "Copied URI" : label;

  return (
    <DocumentDetailTooltip label={accessibleLabel}>
      <button
        type="button"
        aria-label={accessibleLabel}
        onClick={handleCopy}
        className={cn(
          "inline-flex h-s20 w-s20 shrink-0 items-center justify-center rounded-[2px] text-brand-white/45 transition-colors duration-75 ease-out hover:bg-brand-white/8 hover:text-brand-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring motion-reduce:transition-none",
          hasCopied && "text-brand-white",
          className,
        )}
      >
        <IconCopy className="h-s12 w-s12" />
      </button>
    </DocumentDetailTooltip>
  );
}

type TooltipIconButtonProps = React.ComponentProps<
  typeof DocumentDetailToolButton
> & {
  tooltip: React.ReactNode;
  tooltipPlacement?: React.ComponentProps<
    typeof DocumentDetailTooltip
  >["placement"];
};

export function TooltipIconButton({
  tooltip,
  tooltipPlacement = "bottom",
  ...buttonProps
}: TooltipIconButtonProps) {
  return (
    <DocumentDetailTooltip label={tooltip} placement={tooltipPlacement}>
      <DocumentDetailToolButton {...buttonProps} />
    </DocumentDetailTooltip>
  );
}

export function NumericJumpField({
  value,
  onChange,
  ariaLabel,
  max,
}: {
  value: number;
  onChange: (nextValue: number) => void;
  ariaLabel: string;
  max: number;
}) {
  return (
    <DocumentDetailNumberField
      aria-label={ariaLabel}
      value={value}
      minValue={1}
      maxValue={max}
      digits={String(max).length}
      onChange={(nextValue: number) => onChange(Math.round(nextValue))}
    />
  );
}

function ZoomPercentageField({
  value,
  onChange,
  ariaLabel,
  min = 25,
  max = 400,
}: {
  value: number;
  onChange: (nextValue: number) => void;
  ariaLabel: string;
  min?: number;
  max?: number;
}) {
  return (
    <DocumentDetailNumberField
      aria-label={ariaLabel}
      value={value}
      minValue={min}
      maxValue={max}
      digits={String(max).length}
      suffix="%"
      onChange={(nextValue: number) => onChange(Math.round(nextValue))}
    />
  );
}

function ViewerZoomControl({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (nextValue: number) => void;
  label: string;
}) {
  const minZoom = 25;
  const maxZoom = 400;
  const step = 10;

  const changeZoom = React.useCallback(
    (delta: number) => {
      onChange(Math.min(Math.max(value + delta, minZoom), maxZoom));
    },
    [onChange, value],
  );

  return (
    <div
      className={cn(SEGMENTED_SURFACE_COMPACT_CLASS, "text-brand-white")}
      role="group"
      aria-label={`${label} zoom controls`}
    >
      <button
        type="button"
        aria-label={`${label} zoom out`}
        className="flex h-s28 w-s36 items-center justify-center border-r border-brand-black/60 text-current transition-colors duration-75 ease-out hover:bg-brand-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand-white/60 motion-reduce:transition-none"
        onClick={() => changeZoom(-step)}
      >
        <IconZoomOut className="h-s16 w-s16" />
      </button>
      <div className="flex h-s28 w-s56 items-center justify-center px-s4">
        <ZoomPercentageField
          ariaLabel={`${label} zoom percentage`}
          value={value}
          onChange={onChange}
          min={minZoom}
          max={maxZoom}
        />
      </div>
      <button
        type="button"
        aria-label={`${label} zoom in`}
        className="flex h-s28 w-s36 items-center justify-center border-l border-brand-black/60 text-current transition-colors duration-75 ease-out hover:bg-brand-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand-white/60 motion-reduce:transition-none"
        onClick={() => changeZoom(step)}
      >
        <IconZoomIn className="h-s16 w-s16" />
      </button>
    </div>
  );
}

export function ManuscriptCanvas() {
  const [scanZoom, setScanZoom] = React.useState(100);

  return (
    <DocumentDetailCanvas className="bg-neutral-500 px-s24 py-s48">
      <DocumentDetailFloatingToolbar className={FLOATING_TOOLBAR_REVEAL_CLASS}>
        <ViewerZoomControl
          label="Scan"
          value={scanZoom}
          onChange={setScanZoom}
        />
        <TooltipIconButton
          aria-label="Rotate scan"
          tooltip="Rotate 90˚ clockwise"
          className="min-w-s28 px-s4"
          icon={<IconRotate className="h-s16 w-s16" />}
        />
        <TooltipIconButton
          aria-label="Reset scan viewer"
          tooltip="Reset everything"
          className="min-w-s28 px-s4"
          icon={<IconReset className="h-s16 w-s16" />}
        />
        <TooltipIconButton
          aria-label="Change scan settings"
          tooltip="Change settings"
          className="min-w-s28 px-s4"
          icon={<IconSetting className="h-s16 w-s16" />}
        />
        <TooltipIconButton
          aria-label="Download scan"
          tooltip="Download"
          className="min-w-s28 px-s4"
          icon={<IconDownload className="h-s16 w-s16" />}
        />
      </DocumentDetailFloatingToolbar>

      <div
        className="relative h-full max-h-[calc(100%-var(--s32))] aspect-1102/1566 border border-brand-black/70 bg-parchment-200 shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-100 ease-out motion-reduce:transition-none"
        style={{
          transform: `scale(${scanZoom / 100})`,
          transformOrigin: "center center",
        }}
      >
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

export function TranscriptCanvas() {
  const [transcriptMode, setTranscriptMode] = React.useState<"n" | "d">("n");
  const [transcriptZoom, setTranscriptZoom] = React.useState(100);

  return (
    <DocumentDetailTranscriptCanvas>
      <DocumentDetailFloatingToolbar
        className={cn(
          "left-auto right-s24 gap-s4 px-s4",
          FLOATING_TOOLBAR_REVEAL_CLASS,
        )}
      >
        <DocumentDetailSegmentedToggleGroup
          size="compact"
          aria-label="Transcript mode controls"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={new Set([transcriptMode])}
          onSelectionChange={(keys) => {
            const [nextMode] = Array.from(keys);

            if (nextMode === "n" || nextMode === "d") {
              setTranscriptMode(nextMode);
            }
          }}
        >
          <DocumentDetailTooltip
            label={
              transcriptMode === "n"
                ? "Currently viewing the transcription normalized"
                : "Switch to showing the transcription normalized"
            }
          >
            <DocumentDetailSegmentedToggleItem
              id="n"
              size="compact"
              aria-label={
                transcriptMode === "n"
                  ? "Currently viewing the transcription normalized"
                  : "Switch to showing the transcription normalized"
              }
            >
              N
            </DocumentDetailSegmentedToggleItem>
          </DocumentDetailTooltip>
          <DocumentDetailTooltip
            label={
              transcriptMode === "d"
                ? "Currently viewing the transcription diplomatic"
                : "Switch to showing the transcription diplomatic"
            }
          >
            <DocumentDetailSegmentedToggleItem
              id="d"
              size="compact"
              aria-label={
                transcriptMode === "d"
                  ? "Currently viewing the transcription diplomatic"
                  : "Switch to showing the transcription diplomatic"
              }
            >
              D
            </DocumentDetailSegmentedToggleItem>
          </DocumentDetailTooltip>
        </DocumentDetailSegmentedToggleGroup>
        <ViewerZoomControl
          label="Transcript"
          value={transcriptZoom}
          onChange={setTranscriptZoom}
        />
        <TooltipIconButton
          aria-label="Change transcription viewing mode"
          tooltip="Change viewing mode"
          className="min-w-s28 px-s4"
          icon={<IconBrightness className="h-s16 w-s16" />}
        />
        <TooltipIconButton
          aria-label="Reset transcription viewer"
          tooltip="Reset everything"
          className="min-w-s28 px-s4"
          icon={<IconReset className="h-s16 w-s16" />}
        />
        <TooltipIconButton
          aria-label="Change transcription settings"
          tooltip="Change settings"
          className="min-w-s28 px-s4"
          icon={<IconSetting className="h-s16 w-s16" />}
        />
        <TooltipIconButton
          aria-label="Download transcript"
          tooltip="Download"
          className="min-w-s28 px-s4"
          icon={<IconDownload className="h-s16 w-s16" />}
        />
      </DocumentDetailFloatingToolbar>

      <div
        className="mx-auto flex max-w-114 origin-top flex-col gap-s4 pt-s24 transition-transform duration-100 ease-out motion-reduce:transition-none"
        style={{ transform: `scale(${transcriptZoom / 100})` }}
      >
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
