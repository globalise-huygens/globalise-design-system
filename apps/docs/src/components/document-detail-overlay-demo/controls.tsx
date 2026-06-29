"use client";

import {
  cn,
  DocumentDetailCanvas,
  DocumentDetailCheckbox,
  DocumentDetailFloatingToolbar,
  DocumentDetailNumberField,
  DocumentDetailPopoverSurface,
  DocumentDetailSegmentedToggleGroup,
  DocumentDetailSegmentedToggleItem,
  DocumentDetailToolButton,
  DocumentDetailTooltip,
  DocumentDetailTranscriptCanvas,
  EntityPreviewCard,
  IconBrightness,
  IconContentWarning,
  IconContrast,
  IconCopy,
  IconDownload,
  IconInvert,
  IconModeDark,
  IconModeLight,
  IconModeSepia,
  IconReset,
  IconRotate,
  IconSaturation,
  IconSetting,
  IconTextLine,
  IconTextSpacing,
  IconTextType,
  IconTranscriptionDiplomatic,
  IconTranscriptionNormalised,
  IconViewModeMenu,
  IconZoomIn,
  IconZoomOut,
} from "@globalise/design-system";
import * as React from "react";
import { Button as AriaButton } from "react-aria-components";
import { createPortal } from "react-dom";
import { ENTITY_PREVIEW_CARD_DATA, type EntityPreviewCardId } from "./data";
import { DemoScanPage } from "./DemoScanPage";

const TRANSCRIPT_NORMALIZED_LINES = [
  { lineNumber: 1, text: "108", block: "page-number" },
  {
    lineNumber: 2,
    text: "Een dito dito beschreven Diverse papieren rakende de Negorij Vlaardingen",
    block: "paragraph-1",
  },
  {
    lineNumber: 3,
    text: "Een dito dito beschreven Cassa Rekeningen en ordonnantie van de",
    block: "paragraph-1",
  },
  { lineNumber: 4, text: "Negorij Vlaardingen", block: "paragraph-1" },
  {
    lineNumber: 5,
    text: "E:en blauw met wit uitgemonstert zijde vaende van wijlen den welEdelen",
    block: "paragraph-1",
  },
  {
    lineNumber: 8,
    text: "Een geel zijde vaendel van den welEd. Achib: Her jan Dirk van Cloetwijk",
    block: "paragraph-1",
  },
  {
    lineNumber: 9,
    text: "E en nieuw vaendel voor de pinnisten en burger schutterij gegeven door",
    block: "paragraph-1",
  },
  {
    lineNumber: 10,
    text: "den geweesen. Capitain der burgerij de Heer",
    block: "paragraph-1",
  },
  {
    lineNumber: 12,
    text: "Fredrik willem van Blijdenberg",
    block: "paragraph-1",
  },
  {
    lineNumber: 13,
    text: "Eenige waapenb: en goederen volgens bygevoegde notitie in de burgerwagt",
    block: "paragraph-1",
  },
  {
    lineNumber: 14,
    text: "berlstende tot : dagelijks gebruik onder ver,,",
    block: "paragraph-1",
  },
  {
    lineNumber: 15,
    text: "antwoordinq van den wagtmeester Anthonij",
    block: "paragraph-1",
  },
  { lineNumber: 16, text: "Toll:", block: "paragraph-1" },
  {
    lineNumber: 17,
    text: "/onderst ind/ Maccasser in de steede vlaardingen ult,,o April 17871",
    block: "paragraph-1",
  },
  {
    lineNumber: 18,
    text: "/was geteekend / voor de overgaaf C: Craane en voor den ontvangst",
    block: "paragraph-1",
  },
  {
    lineNumber: 19,
    text: "J:r W:n H:t van Rossum: /inmargine / ons present als gecommitteerdens",
    block: "paragraph-1",
  },
  {
    lineNumber: 20,
    text: "/wab geteekend/ J:s L. de Vos en g=n G,,d Biedach",
    block: "paragraph-1",
  },
  { lineNumber: 21, text: "Eerbiedig Berigt", block: "signature" },
  {
    lineNumber: 22,
    text: "Aan den welEdelen Achtbaaren Heer",
    block: "signature",
  },
  { lineNumber: 23, text: "Barend Reijke", block: "signature" },
  {
    lineNumber: 24,
    text: "Gouverneur en Directeur deeser Custe Celeber &n 25=e",
    block: "signature",
  },
  { lineNumber: 25, text: "wel Edele Achtbaare Heer.", block: "signature" },
];

const TRANSCRIPT_NORMALIZED_LAYOUT_BLOCKS = [
  {
    block: "page-number",
    label: "page-number",
    className: "text-[18px]",
  },
  {
    block: "paragraph-1",
    label: "paragraph",
    className: "text-[18px]",
  },
  {
    block: "signature",
    label: "signature",
    className: "text-[18px]",
  },
] as const;

const DIPLOMATIC_FRAGMENT_BASE_CLASS =
  "absolute whitespace-pre-wrap text-[16px] leading-none";
const LAYOUT_ANNOTATION_LABEL_BASE_CLASS =
  "font-sans text-[10px] leading-[10px]";
const LAYOUT_ANNOTATION_LINE_BASE_CLASS =
  "font-sans text-[11px] leading-[12px]";

const DIPLOMATIC_FRAGMENTS = [
  {
    id: "page-number",
    label: "page-number",
    lineNumber: 1,
    left: "66px",
    top: "14px",
    width: "84px",
    text: "108",
    className: "font-sans text-[34px] font-medium",
  },
  {
    id: "paragraph-main",
    label: "paragraph",
    lineNumber: 2,
    left: "180px",
    top: "58px",
    width: "720px",
    text: "Een dito dito beschreven Diverse papieren rakende de Negorij vlaardingen\n\nEen dito dito beschreven Cassa Rekeningen en ordonnantie van de\n\nNegorij vlaardingen\n\nE:en blauw met wit uitgemonstert zijde vaende van wijlen den welEdelen\n\nEen geel zijde vaendel van den welEd. Achib: Her jan Dirk van Cloetwijk\n\nE en nieuw vaendel voor de pinnisten en burger schutterij gegeven door\nden geweesen. Capitain der burgerij de Heer\n\nFredrik willem van Blijdenberg\n\nEenige waapenb: en goederen volgens bygevoegde notitie in de burgerwagt\nberlstende tot : dagelijks gebruik onder ver,,\n\nantwoordinq van den wagtmeester Anthonij\nToll:\n/onderst ind/ Maccasser in de steede vlaardingen ult,,o April 17871\n/was geteekend / voor de overgaaf C: Craane en voor den ontvangst\nJ:r W:n H:t van Rossum: /inmargine / ons present als gecommitteerdens\n/wab geteekend/ J:s L. de Vos en g=n G,,d Biedach",
    className: "font-mono text-[15px] leading-[1.45]",
  },
  {
    id: "signature-block",
    label: "signature",
    lineNumber: 21,
    left: "430px",
    top: "760px",
    width: "430px",
    text: "Eerbiedig Berigt\nAan den welEdelen Achtbaaren Heer\nBarend Reijke\nGouverneur en Directeur deeser Custe Celeber",
    className: "font-mono text-[22px] leading-[1.65]",
  },
  {
    id: "marginalia-mark",
    label: "no label",
    lineNumber: 72,
    left: "560px",
    top: "634px",
    width: "44px",
    text: "''",
    className: "font-mono text-[26px] font-semibold",
  },
];

const CONTENT_WARNING_TEXT =
  "The Dutch East India Company archives (and consequently their transcriptions) and its document descriptions bear harmful and discriminatory language. They also record a wide range of events, intentions and perspectives that are violent and can cause distress.";

interface TranscriptEntityExampleDefinition {
  phrase: string;
  key: string;
  category: string;
  previewId?: EntityPreviewCardId;
}

interface TranscriptEntitySpan extends TranscriptEntityExampleDefinition {
  start: number;
  end: number;
}

const NORMALIZED_TRANSCRIPT_ENTITY_EXAMPLES: Record<
  number,
  TranscriptEntityExampleDefinition[]
> = {
  12: [
    {
      phrase: "Fredrik willem van Blijdenberg",
      key: "Persons::by Name",
      category: "Persons",
      previewId: "fredrikWillemVanBlijdenberg",
    },
  ],
  17: [
    {
      phrase: "Maccasser",
      key: "Places::by Name",
      category: "Places",
      previewId: "maccasser",
    },
    {
      phrase: "April 17871",
      key: "Dates",
      category: "Dates",
      previewId: "april17871",
    },
  ],
  18: [
    {
      phrase: "C: Craane",
      key: "Persons::by Name",
      category: "Persons",
      previewId: "cCraane",
    },
  ],
  23: [
    {
      phrase: "Barend Reijke",
      key: "Persons::by Name",
      category: "Persons",
      previewId: "barendReijke",
    },
  ],
  24: [
    {
      phrase: "Celeber",
      key: "Places::by Location Form",
      category: "Places",
      previewId: "celeber",
    },
  ],
};

const DIPLOMATIC_TRANSCRIPT_ENTITY_EXAMPLES: Record<
  string,
  TranscriptEntityExampleDefinition[]
> = {
  "paragraph-main": [
    {
      phrase: "Fredrik willem van Blijdenberg",
      key: "Persons::by Name",
      category: "Persons",
      previewId: "fredrikWillemVanBlijdenberg",
    },
    {
      phrase: "Maccasser",
      key: "Places::by Name",
      category: "Places",
      previewId: "maccasser",
    },
    {
      phrase: "April 17871",
      key: "Dates",
      category: "Dates",
      previewId: "april17871",
    },
    {
      phrase: "C: Craane",
      key: "Persons::by Name",
      category: "Persons",
      previewId: "cCraane",
    },
    {
      phrase: "vlaardingen",
      key: "Places::by Location Form",
      category: "Places",
    },
  ],
  "signature-block": [
    {
      phrase: "Barend Reijke",
      key: "Persons::by Name",
      category: "Persons",
      previewId: "barendReijke",
    },
    {
      phrase: "Celeber",
      key: "Places::by Location Form",
      category: "Places",
      previewId: "celeber",
    },
  ],
};

function getEntityExampleSpans(
  text: string,
  examples: TranscriptEntityExampleDefinition[],
) {
  return examples
    .map((example) => {
      const start = text.toLowerCase().indexOf(example.phrase.toLowerCase());

      if (start < 0) {
        return undefined;
      }

      return {
        ...example,
        start,
        end: start + example.phrase.length,
      } satisfies TranscriptEntitySpan;
    })
    .filter((span): span is TranscriptEntitySpan => Boolean(span))
    .sort((first, second) => first.start - second.start);
}

function TranscriptEntityPreviewTrigger({
  children,
  className,
  previewId,
}: {
  children: React.ReactNode;
  className?: string;
  previewId: EntityPreviewCardId;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [hasFocusWithin, setHasFocusWithin] = React.useState(false);
  const [isPinned, setIsPinned] = React.useState(false);
  const rootRef = React.useRef<HTMLSpanElement>(null);
  const popoverRef = React.useRef<HTMLSpanElement>(null);
  const [popoverPosition, setPopoverPosition] = React.useState(() => ({
    top: 0,
    left: 0,
  }));
  const isOpen = isHovered || hasFocusWithin || isPinned;

  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const updatePosition = () => {
      const anchor = rootRef.current;

      if (!anchor) {
        return;
      }

      const rect = anchor.getBoundingClientRect();
      const viewportPadding = 16;
      const assumedCardWidth = 260;
      const minLeft = viewportPadding + assumedCardWidth / 2;
      const maxLeft =
        window.innerWidth - viewportPadding - assumedCardWidth / 2;
      const unclampedLeft = rect.left + rect.width / 2;
      const left = Math.min(Math.max(unclampedLeft, minLeft), maxLeft);

      setPopoverPosition({
        top: rect.bottom + 8,
        left,
      });
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      const isInsideAnchor = rootRef.current?.contains(target);
      const isInsidePopover = popoverRef.current?.contains(target);

      if (!isInsideAnchor && !isInsidePopover) {
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
    <span
      ref={rootRef}
      className="relative inline align-baseline"
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
      <span
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={cn(
          "inline cursor-pointer p-0 focus-visible:outline-none",
          className,
        )}
        onClick={() => setIsPinned((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsPinned((current) => !current);
          }
        }}
      >
        {children}
      </span>

      {isOpen &&
        createPortal(
          <span
            ref={popoverRef}
            className="fixed -translate-x-1/2"
            style={{
              top: `${popoverPosition.top}px`,
              left: `${popoverPosition.left}px`,
              zIndex: 80,
            }}
          >
            <EntityPreviewCard data={ENTITY_PREVIEW_CARD_DATA[previewId]} />
          </span>,
          document.body,
        )}
    </span>
  );
}

function renderTranscriptTextWithHighlights({
  text,
  examples,
  selectedEntityHighlightKeys,
  entityHighlightClassesByCategory,
  keyPrefix,
}: {
  text: string;
  examples: TranscriptEntityExampleDefinition[];
  selectedEntityHighlightKeys: Set<string>;
  entityHighlightClassesByCategory: Record<string, string>;
  keyPrefix: string;
}) {
  const spans = getEntityExampleSpans(text, examples);

  if (spans.length === 0) {
    return text;
  }

  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  spans.forEach((span, index) => {
    if (span.start < cursor) {
      return;
    }

    if (span.start > cursor) {
      nodes.push(
        <React.Fragment key={`${keyPrefix}-text-${index}`}>
          {text.slice(cursor, span.start)}
        </React.Fragment>,
      );
    }

    const isActive =
      selectedEntityHighlightKeys.has(span.key) ||
      selectedEntityHighlightKeys.has(span.category);

    const highlightClassName = cn(
      "box-decoration-clone rounded-xs px-0.5",
      isActive &&
        (entityHighlightClassesByCategory[span.category] ??
          "bg-brand-white/15 ring-1 ring-inset ring-brand-white/25"),
    );

    nodes.push(
      span.previewId && isActive ? (
        <TranscriptEntityPreviewTrigger
          key={`${keyPrefix}-entity-${span.key}-${index}`}
          previewId={span.previewId}
          className={highlightClassName}
        >
          {text.slice(span.start, span.end)}
        </TranscriptEntityPreviewTrigger>
      ) : (
        <span
          key={`${keyPrefix}-entity-${span.key}-${index}`}
          className={highlightClassName}
        >
          {text.slice(span.start, span.end)}
        </span>
      ),
    );

    cursor = span.end;
  });

  if (cursor < text.length) {
    nodes.push(
      <React.Fragment key={`${keyPrefix}-text-tail`}>
        {text.slice(cursor)}
      </React.Fragment>,
    );
  }

  return nodes;
}

export const FLOATING_TOOLBAR_REVEAL_CLASS =
  "bg-brand-black/65 text-brand-white/70 shadow-[0_4px_16px_rgba(0,0,0,0.16)] transition-[background-color,box-shadow,color] duration-100 ease-out hover:bg-brand-black/90 hover:text-brand-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)] focus-within:bg-brand-black/90 focus-within:text-brand-white focus-within:shadow-[0_6px_20px_rgba(0,0,0,0.22)] motion-reduce:transition-none";

export const TOP_BAR_ICON_BUTTON_CLASS =
  "h-s36 min-w-s36 px-0 duration-100 ease-out motion-reduce:transition-none [&>svg]:h-[18px] [&>svg]:w-[18px]";

export const BOTTOM_BAR_ICON_BUTTON_CLASS =
  "h-s24 min-w-s24 rounded-[3px] px-s4 text-neutral-300 duration-100 ease-out data-hovered:bg-brand-white/8 pressed:bg-brand-white/12 data-focus-visible:ring-1 data-disabled:opacity-40 motion-reduce:transition-none [&>svg]:h-s16 [&>svg]:w-s16";

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
  label = "Copy URI",
  ariaLabel,
  tooltip,
  className,
}: {
  uri: string;
  label?: string;
  ariaLabel?: string;
  tooltip?: React.ReactNode;
  className?: string;
}) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const handleCopy = async () => {
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

  const tooltipLabel = hasCopied ? "Copied URI" : (tooltip ?? label);
  const accessibleLabel = hasCopied ? "Copied URI" : (ariaLabel ?? label);

  return (
    <span className="group/copy-uri relative inline-flex">
      <AriaButton
        aria-label={accessibleLabel}
        onPress={handleCopy}
        className={cn(
          "inline-flex h-s20 w-s20 shrink-0 items-center justify-center rounded-xs text-brand-white/45 transition-colors duration-75 ease-out hover:bg-brand-white/8 hover:text-brand-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring motion-reduce:transition-none",
          hasCopied && "text-brand-white",
          className,
        )}
      >
        <IconCopy className="h-s12 w-s12" />
      </AriaButton>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[calc(100%+var(--s8))] z-70 w-max max-w-60 -translate-y-1 overflow-hidden border border-brand-white/10 bg-neutral-700 p-s12 font-sans text-[10px] leading-3 text-brand-white opacity-0 shadow-[0_6px_14px_rgba(0,0,0,0.25),0_25px_25px_rgba(0,0,0,0.22),0_56px_34px_rgba(0,0,0,0.13),0_100px_40px_rgba(0,0,0,0.04)] transition-[opacity,transform] duration-75 ease-out group-focus-within/copy-uri:translate-y-0 group-focus-within/copy-uri:opacity-100 group-hover/copy-uri:translate-y-0 group-hover/copy-uri:opacity-100 motion-reduce:transition-none"
      >
        {tooltipLabel}
      </span>
    </span>
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
  tooltip,
}: {
  value: number;
  onChange: (nextValue: number) => void;
  ariaLabel: string;
  max: number;
  tooltip?: React.ReactNode;
}) {
  const field = (
    <DocumentDetailNumberField
      aria-label={ariaLabel}
      value={value}
      minValue={1}
      maxValue={max}
      digits={String(max).length}
      onChange={(nextValue: number) => onChange(Math.round(nextValue))}
    />
  );

  if (!tooltip) {
    return field;
  }

  return <DocumentDetailTooltip label={tooltip}>{field}</DocumentDetailTooltip>;
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

function ScanSettingsSlider({
  tooltip,
  value,
  onChange,
  icon,
}: {
  tooltip: string;
  value: number;
  onChange: (nextValue: number) => void;
  icon: React.ReactNode;
}) {
  const isDefaultValue = value === 100;
  const valueText = `${value}%${isDefaultValue ? ", default" : ""}`;

  return (
    <label className="group/scan-setting grid grid-cols-[24px_96px_32px] items-center gap-s8 px-0 py-0">
      <DocumentDetailTooltip label={tooltip} placement="left">
        <button
          type="button"
          aria-label={tooltip}
          className="flex h-s24 w-s24 items-center justify-center text-brand-white/80 transition-colors duration-75 hover:text-brand-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-white/60"
        >
          <span className="flex h-3.5 w-3.5 items-center justify-center">
            {icon}
          </span>
        </button>
      </DocumentDetailTooltip>
      <input
        type="range"
        min={0}
        max={200}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.currentTarget.value))}
        className="h-s16 w-full appearance-none bg-transparent accent-brand-white focus:outline-none [&::-moz-range-thumb]:h-s12 [&::-moz-range-thumb]:w-s12 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-brand-white [&::-moz-range-thumb]:shadow-[0_0_0_1px_rgba(0,0,0,0.22)] [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-brand-white/20 [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-brand-white/20 [&::-webkit-slider-thumb]:-mt-1.25 [&::-webkit-slider-thumb]:h-s12 [&::-webkit-slider-thumb]:w-s12 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-white [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_rgba(0,0,0,0.22)]"
        aria-label={tooltip}
        aria-valuetext={valueText}
      />
      <span
        className={cn(
          "text-right font-sans text-[10px] leading-3 opacity-0 transition-opacity duration-75 group-hover/scan-setting:opacity-100 group-focus-within/scan-setting:opacity-100",
          isDefaultValue ? "text-neutral-500" : "text-brand-white/80",
        )}
      >
        {value}%
      </span>
    </label>
  );
}

function ScanSettingsPopover({
  brightness,
  contrast,
  saturation,
  isInverted,
  onBrightnessChange,
  onContrastChange,
  onSaturationChange,
  onInvertChange,
}: {
  brightness: number;
  contrast: number;
  saturation: number;
  isInverted: boolean;
  onBrightnessChange: (nextValue: number) => void;
  onContrastChange: (nextValue: number) => void;
  onSaturationChange: (nextValue: number) => void;
  onInvertChange: (nextValue: boolean) => void;
}) {
  return (
    <DocumentDetailPopoverSurface
      role="dialog"
      aria-label="Scan image settings"
      size="compact"
      className="absolute left-1/2 top-[calc(100%+var(--s8))] z-40 flex w-max -translate-x-1/2 flex-col gap-s8 rounded-none border-brand-white/10 bg-brand-black/90 p-s8 shadow-[0_8px_20px_rgba(0,0,0,0.32)]"
    >
      <ScanSettingsSlider
        tooltip="Adjust scan brightness"
        value={brightness}
        onChange={onBrightnessChange}
        icon={<IconBrightness className="h-3.5 w-3.5" />}
      />
      <ScanSettingsSlider
        tooltip="Adjust scan contrast"
        value={contrast}
        onChange={onContrastChange}
        icon={<IconContrast className="h-3.5 w-3.5" />}
      />
      <ScanSettingsSlider
        tooltip="Adjust scan saturation"
        value={saturation}
        onChange={onSaturationChange}
        icon={<IconSaturation className="h-3.5 w-3.5" />}
      />
      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-s8">
        <span className="flex h-s24 w-s24 items-center justify-center text-brand-white/80">
          <span className="flex h-3.5 w-3.5 items-center justify-center">
            <IconInvert className="h-3.5 w-3.5" />
          </span>
        </span>
        <DocumentDetailTooltip label="Invert scan colours" placement="left">
          <DocumentDetailCheckbox
            isSelected={isInverted}
            onChange={onInvertChange}
            aria-label="Invert scan colours"
            className="h-s24 justify-self-start px-0 text-xs leading-4 text-brand-white"
            indicatorClassName="bg-neutral-600"
          />
        </DocumentDetailTooltip>
      </div>
    </DocumentDetailPopoverSurface>
  );
}

function TranscriptModeOption({
  tooltip,
  icon,
  isActive,
  onPress,
}: {
  tooltip: string;
  icon: React.ReactNode;
  isActive: boolean;
  onPress: () => void;
}) {
  return (
    <DocumentDetailTooltip label={tooltip} placement="left">
      <button
        type="button"
        aria-label={tooltip}
        aria-pressed={isActive}
        onClick={onPress}
        className={cn(
          "flex h-s24 w-s24 items-center justify-center text-brand-white/80 transition-colors duration-75 hover:text-brand-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-white/60",
          isActive && "text-brand-white",
        )}
      >
        <span className="flex h-3.5 w-3.5 items-center justify-center">
          {icon}
        </span>
      </button>
    </DocumentDetailTooltip>
  );
}

function TranscriptModePopover({
  mode,
  onModeChange,
}: {
  mode: "light" | "sepia" | "dark";
  onModeChange: (nextMode: "light" | "sepia" | "dark") => void;
}) {
  return (
    <DocumentDetailPopoverSurface
      role="dialog"
      aria-label="Transcript viewing mode"
      size="compact"
      className="absolute left-1/2 top-[calc(100%+var(--s8))] z-40 flex w-max -translate-x-1/2 flex-col gap-s8 rounded-none border-brand-white/10 bg-brand-black/90 p-s8 shadow-[0_8px_20px_rgba(0,0,0,0.32)]"
    >
      <div className="flex flex-col items-start gap-s8">
        <TranscriptModeOption
          tooltip="Light viewing mode"
          icon={<IconModeLight className="h-3.5 w-3.5" />}
          isActive={mode === "light"}
          onPress={() => onModeChange("light")}
        />
        <TranscriptModeOption
          tooltip="Sepia viewing mode"
          icon={<IconModeSepia className="h-3.5 w-3.5" />}
          isActive={mode === "sepia"}
          onPress={() => onModeChange("sepia")}
        />
        <TranscriptModeOption
          tooltip="Dark viewing mode"
          icon={<IconModeDark className="h-3.5 w-3.5" />}
          isActive={mode === "dark"}
          onPress={() => onModeChange("dark")}
        />
      </div>
    </DocumentDetailPopoverSurface>
  );
}

function TranscriptSettingType({
  isSerif,
  onChange,
}: {
  isSerif: boolean;
  onChange: (nextValue: boolean) => void;
}) {
  return (
    <div className="grid grid-cols-[24px_auto] items-center gap-s8">
      <DocumentDetailTooltip
        label="Switch between Noto Sans and Noto Serif"
        placement="left"
      >
        <button
          type="button"
          aria-label="Switch between Noto Sans and Noto Serif"
          className="flex h-s24 w-s24 items-center justify-center text-brand-white/80 transition-colors duration-75 hover:text-brand-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-white/60"
        >
          <span className="flex h-3.5 w-3.5 items-center justify-center">
            <IconTextType className="h-3.5 w-3.5" />
          </span>
        </button>
      </DocumentDetailTooltip>
      <DocumentDetailSegmentedToggleGroup
        size="compact"
        aria-label="Transcript font type"
        selectionMode="single"
        disallowEmptySelection
        selectedKeys={new Set([isSerif ? "serif" : "sans"])}
        onSelectionChange={(keys) => {
          const [nextKey] = Array.from(keys);
          onChange(nextKey === "serif");
        }}
        className="justify-self-start"
      >
        <DocumentDetailSegmentedToggleItem id="sans" size="compact">
          Sans
        </DocumentDetailSegmentedToggleItem>
        <DocumentDetailSegmentedToggleItem id="serif" size="compact">
          Serif
        </DocumentDetailSegmentedToggleItem>
      </DocumentDetailSegmentedToggleGroup>
    </div>
  );
}

function TranscriptSettingsPopover({
  isSerif,
  letterSpacing,
  lineHeight,
  onSerifChange,
  onLetterSpacingChange,
  onLineHeightChange,
}: {
  isSerif: boolean;
  letterSpacing: number;
  lineHeight: number;
  onSerifChange: (nextValue: boolean) => void;
  onLetterSpacingChange: (nextValue: number) => void;
  onLineHeightChange: (nextValue: number) => void;
}) {
  return (
    <DocumentDetailPopoverSurface
      role="dialog"
      aria-label="Transcript text settings"
      size="compact"
      className="absolute left-1/2 top-[calc(100%+var(--s8))] z-40 flex w-max -translate-x-1/2 flex-col gap-s8 rounded-none border-brand-white/10 bg-brand-black/90 p-s8 shadow-[0_8px_20px_rgba(0,0,0,0.32)]"
    >
      <TranscriptSettingType isSerif={isSerif} onChange={onSerifChange} />
      <ScanSettingsSlider
        tooltip="Adjust letter spacing"
        value={letterSpacing}
        onChange={onLetterSpacingChange}
        icon={<IconTextSpacing className="h-3.5 w-3.5" />}
      />
      <ScanSettingsSlider
        tooltip="Adjust line height"
        value={lineHeight}
        onChange={onLineHeightChange}
        icon={<IconTextLine className="h-3.5 w-3.5" />}
      />
    </DocumentDetailPopoverSurface>
  );
}

export function ManuscriptCanvas({
  transcriptMode: _transcriptMode,
  areLayoutElementsHighlighted: _areLayoutElementsHighlighted = false,
  isPairedPageView = false,
  currentArchiveScan,
  currentDocumentScan,
  pairedArchiveScan,
  pairedDocumentScan,
}: {
  transcriptMode: "n" | "d";
  areLayoutElementsHighlighted?: boolean;
  isPairedPageView?: boolean;
  currentArchiveScan: number;
  currentDocumentScan: number;
  pairedArchiveScan?: number;
  pairedDocumentScan?: number;
}) {
  const [scanZoom, setScanZoom] = React.useState(100);
  const [scanRotation, setScanRotation] = React.useState(0);
  const [scanBrightness, setScanBrightness] = React.useState(100);
  const [scanContrast, setScanContrast] = React.useState(100);
  const [scanSaturation, setScanSaturation] = React.useState(100);
  const [isScanInverted, setIsScanInverted] = React.useState(false);
  const [isScanSettingsOpen, setIsScanSettingsOpen] = React.useState(false);

  const resetScanViewer = React.useCallback(() => {
    setScanZoom(100);
    setScanRotation(0);
    setScanBrightness(100);
    setScanContrast(100);
    setScanSaturation(100);
    setIsScanInverted(false);
  }, []);

  const renderScanPage = React.useCallback(
    (archiveScan: number, documentScan: number) => (
      <div className="relative flex h-full w-full flex-col">
        <DemoScanPage
          label={`Archive scan ${archiveScan}, document scan ${documentScan}`}
        />
      </div>
    ),
    [],
  );

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
          onPress={() => setScanRotation((rotation) => (rotation + 90) % 360)}
        />
        <TooltipIconButton
          aria-label="Reset scan viewer"
          tooltip="Reset everything"
          className="min-w-s28 px-s4"
          icon={<IconReset className="h-s16 w-s16" />}
          onPress={resetScanViewer}
        />
        <div className="relative">
          <DocumentDetailTooltip label="Change settings" placement="bottom">
            <DocumentDetailToolButton
              aria-label="Change scan settings"
              aria-expanded={isScanSettingsOpen}
              className="min-w-s28 px-s4"
              icon={<IconSetting className="h-s16 w-s16" />}
              isActive={isScanSettingsOpen}
              onPress={() =>
                setIsScanSettingsOpen((wasSettingsOpen) => !wasSettingsOpen)
              }
            />
          </DocumentDetailTooltip>
          {isScanSettingsOpen && (
            <ScanSettingsPopover
              brightness={scanBrightness}
              contrast={scanContrast}
              saturation={scanSaturation}
              isInverted={isScanInverted}
              onBrightnessChange={setScanBrightness}
              onContrastChange={setScanContrast}
              onSaturationChange={setScanSaturation}
              onInvertChange={setIsScanInverted}
            />
          )}
        </div>
        <TooltipIconButton
          aria-label="Download scan"
          tooltip="Download"
          className="min-w-s28 px-s4"
          icon={<IconDownload className="h-s16 w-s16" />}
        />
      </DocumentDetailFloatingToolbar>

      <div
        className={cn(
          "relative transition-transform duration-100 ease-out motion-reduce:transition-none",
          isPairedPageView
            ? "grid h-full max-h-[calc(100%-var(--s32))] w-full max-w-[calc(100%-var(--s32))] grid-cols-2 gap-s16"
            : "h-full max-h-[calc(100%-var(--s32))] aspect-1102/1566",
        )}
        style={{
          filter: `brightness(${scanBrightness}%) contrast(${scanContrast}%) saturate(${scanSaturation}%) invert(${
            isScanInverted ? 1 : 0
          })`,
          transform: `scale(${scanZoom / 100}) rotate(${scanRotation}deg)`,
          transformOrigin: "center center",
        }}
      >
        {isPairedPageView ? (
          <>
            <div className="relative h-full border border-brand-black/70 bg-parchment-200 shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
              {renderScanPage(currentArchiveScan, currentDocumentScan)}
            </div>
            <div className="relative h-full border border-brand-black/70 bg-parchment-200 shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
              {pairedArchiveScan && pairedDocumentScan
                ? renderScanPage(pairedArchiveScan, pairedDocumentScan)
                : renderScanPage(currentArchiveScan, currentDocumentScan)}
            </div>
          </>
        ) : (
          <div className="relative h-full border border-brand-black/70 bg-parchment-200 shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
            {renderScanPage(currentArchiveScan, currentDocumentScan)}
          </div>
        )}
      </div>
    </DocumentDetailCanvas>
  );
}

export function TranscriptCanvas({
  onTranscriptModeChange,
  transcriptMode,
  areLayoutElementsHighlighted = false,
  isPairedPageView = false,
  selectedEntityHighlightKeys,
  entityHighlightClassesByCategory,
  currentArchiveScan: _currentArchiveScan,
  currentDocumentScan,
  pairedArchiveScan: _pairedArchiveScan,
  pairedDocumentScan,
}: {
  onTranscriptModeChange: (nextMode: "n" | "d") => void;
  transcriptMode: "n" | "d";
  areLayoutElementsHighlighted?: boolean;
  isPairedPageView?: boolean;
  selectedEntityHighlightKeys: Set<string>;
  entityHighlightClassesByCategory: Record<string, string>;
  currentArchiveScan: number;
  currentDocumentScan: number;
  pairedArchiveScan?: number;
  pairedDocumentScan?: number;
}) {
  const [transcriptZoom, setTranscriptZoom] = React.useState(100);
  const [transcriptViewerMode, setTranscriptViewerMode] = React.useState<
    "light" | "sepia" | "dark"
  >("dark");
  const [isTranscriptSerif, setIsTranscriptSerif] = React.useState(false);
  const [transcriptLetterSpacing, setTranscriptLetterSpacing] =
    React.useState(100);
  const [transcriptLineHeight, setTranscriptLineHeight] = React.useState(140);
  const [openTranscriptMenu, setOpenTranscriptMenu] = React.useState<
    "mode" | "settings" | null
  >(null);

  const transcriptViewerTone = {
    dark: {
      backgroundClassName: "bg-neutral-500",
      textClassName: "text-brand-white/92",
      lineNumberClassName: "text-neutral-200/75",
      annotationLabelClassName: "text-turquoise-300",
      annotationLineClassName: "text-turquoise-300",
      annotationRuleClassName: "bg-turquoise-300/35",
    },
    light: {
      backgroundClassName: "bg-neutral-100",
      textClassName: "text-brand-black/88",
      lineNumberClassName: "text-neutral-600",
      annotationLabelClassName: "text-turquoise-800",
      annotationLineClassName: "text-turquoise-800",
      annotationRuleClassName: "bg-turquoise-700/28",
    },
    sepia: {
      backgroundClassName: "bg-parchment-300",
      textClassName: "text-parchment-900",
      lineNumberClassName: "text-parchment-700",
      annotationLabelClassName: "text-turquoise-800",
      annotationLineClassName: "text-turquoise-800",
      annotationRuleClassName: "bg-turquoise-700/28",
    },
  }[transcriptViewerMode];

  const resetTranscriptViewer = React.useCallback(() => {
    setTranscriptZoom(100);
    setTranscriptViewerMode("dark");
    setIsTranscriptSerif(false);
    setTranscriptLetterSpacing(100);
    setTranscriptLineHeight(140);
  }, []);

  const transcriptTypographyClassName = cn(
    isTranscriptSerif ? "font-serif" : "font-sans",
    transcriptViewerTone.textClassName,
  );
  const annotationLabelClassName = cn(
    LAYOUT_ANNOTATION_LABEL_BASE_CLASS,
    transcriptViewerTone.annotationLabelClassName,
  );
  const annotationLineClassName = cn(
    LAYOUT_ANNOTATION_LINE_BASE_CLASS,
    transcriptViewerTone.annotationLineClassName,
  );

  const normalizedLinesByBlock = TRANSCRIPT_NORMALIZED_LINES.reduce<
    Record<string, typeof TRANSCRIPT_NORMALIZED_LINES>
  >((groups, line) => {
    groups[line.block] ??= [];
    groups[line.block].push(line);
    return groups;
  }, {});

  const renderDiplomaticTranscriptPage = React.useCallback(
    () => (
      <div className="relative min-h-280 px-s24 py-s24">
        {DIPLOMATIC_FRAGMENTS.map((fragment) => (
          <div
            key={fragment.id}
            className={cn(
              DIPLOMATIC_FRAGMENT_BASE_CLASS,
              fragment.className,
              transcriptTypographyClassName,
            )}
            style={{
              left: fragment.left,
              top: fragment.top,
              width: fragment.width,
              lineHeight: `${transcriptLineHeight}%`,
              letterSpacing: `${((transcriptLetterSpacing - 100) / 100) * 0.04}em`,
            }}
          >
            {areLayoutElementsHighlighted ? (
              <>
                <span
                  className={cn(
                    "absolute -left-7 top-0.75 min-w-s20 text-right",
                    annotationLineClassName,
                  )}
                >
                  {fragment.lineNumber}
                </span>
                <span
                  className={cn(
                    "absolute left-0 -top-3.5",
                    annotationLabelClassName,
                  )}
                >
                  {fragment.label}
                </span>
              </>
            ) : null}
            {renderTranscriptTextWithHighlights({
              text: fragment.text,
              examples:
                DIPLOMATIC_TRANSCRIPT_ENTITY_EXAMPLES[fragment.id] ?? [],
              selectedEntityHighlightKeys,
              entityHighlightClassesByCategory,
              keyPrefix: `diplomatic-${fragment.id}`,
            })}
          </div>
        ))}
      </div>
    ),
    [
      annotationLabelClassName,
      annotationLineClassName,
      areLayoutElementsHighlighted,
      selectedEntityHighlightKeys,
      transcriptLetterSpacing,
      transcriptLineHeight,
      transcriptTypographyClassName,
      entityHighlightClassesByCategory,
    ],
  );

  const renderNormalizedTranscriptPage = React.useCallback(
    () =>
      areLayoutElementsHighlighted ? (
        <div className="grid gap-s20 px-s24 py-s24">
          {TRANSCRIPT_NORMALIZED_LAYOUT_BLOCKS.map((section) => {
            const sectionLines = normalizedLinesByBlock[section.block] ?? [];

            return (
              <section key={section.block} className="grid gap-s8">
                <span className={annotationLabelClassName}>
                  {section.label}
                </span>
                <div className="grid gap-s10">
                  {sectionLines.map((line) => (
                    <div
                      key={`${section.block}-${line.lineNumber}`}
                      className="grid grid-cols-[var(--s24)_1px_minmax(0,1fr)] items-start gap-s12"
                    >
                      <span
                        className={cn(
                          "min-w-s24 pt-0.5 text-right",
                          annotationLineClassName,
                        )}
                      >
                        {line.lineNumber}
                      </span>
                      <div
                        className={cn(
                          "h-full min-h-[1.25em]",
                          transcriptViewerTone.annotationRuleClassName,
                        )}
                      />
                      <p
                        className={cn(
                          section.className,
                          "leading-[inherit]",
                          transcriptTypographyClassName,
                        )}
                        style={{
                          letterSpacing: `${((transcriptLetterSpacing - 100) / 100) * 0.03}em`,
                          lineHeight: `${transcriptLineHeight}%`,
                        }}
                      >
                        {renderTranscriptTextWithHighlights({
                          text: line.text,
                          examples:
                            NORMALIZED_TRANSCRIPT_ENTITY_EXAMPLES[
                              line.lineNumber
                            ] ?? [],
                          selectedEntityHighlightKeys,
                          entityHighlightClassesByCategory,
                          keyPrefix: `normalized-annotated-${line.lineNumber}`,
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-s10 px-s24 py-s24">
          {TRANSCRIPT_NORMALIZED_LINES.map((line) => (
            <div
              key={`normalized-${line.lineNumber}`}
              className="grid grid-cols-[minmax(0,1fr)] items-start"
            >
              <p
                className={cn(
                  "text-[18px] leading-[inherit]",
                  transcriptTypographyClassName,
                )}
                style={{
                  letterSpacing: `${((transcriptLetterSpacing - 100) / 100) * 0.03}em`,
                  lineHeight: `${transcriptLineHeight}%`,
                }}
              >
                {renderTranscriptTextWithHighlights({
                  text: line.text,
                  examples:
                    NORMALIZED_TRANSCRIPT_ENTITY_EXAMPLES[line.lineNumber] ??
                    [],
                  selectedEntityHighlightKeys,
                  entityHighlightClassesByCategory,
                  keyPrefix: `normalized-${line.lineNumber}`,
                })}
              </p>
            </div>
          ))}
        </div>
      ),
    [
      annotationLabelClassName,
      annotationLineClassName,
      areLayoutElementsHighlighted,
      normalizedLinesByBlock,
      selectedEntityHighlightKeys,
      transcriptLetterSpacing,
      transcriptLineHeight,
      transcriptTypographyClassName,
      entityHighlightClassesByCategory,
      transcriptViewerTone.annotationRuleClassName,
    ],
  );

  return (
    <DocumentDetailTranscriptCanvas
      className={transcriptViewerTone.backgroundClassName}
    >
      <DocumentDetailFloatingToolbar
        align="end"
        className={cn("gap-s4 px-s4", FLOATING_TOOLBAR_REVEAL_CLASS)}
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
              onTranscriptModeChange(nextMode);
            }
          }}
        >
          <DocumentDetailTooltip
            label={
              transcriptMode === "n"
                ? "Currently viewing the transcription normalised"
                : "Switch to showing the transcription normalised"
            }
          >
            <DocumentDetailSegmentedToggleItem
              id="n"
              size="compact"
              icon={<IconTranscriptionNormalised aria-hidden="true" />}
              aria-label={
                transcriptMode === "n"
                  ? "Currently viewing the transcription normalised"
                  : "Switch to showing the transcription normalised"
              }
            />
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
              icon={<IconTranscriptionDiplomatic aria-hidden="true" />}
              aria-label={
                transcriptMode === "d"
                  ? "Currently viewing the transcription diplomatic"
                  : "Switch to showing the transcription diplomatic"
              }
            />
          </DocumentDetailTooltip>
        </DocumentDetailSegmentedToggleGroup>
        <ViewerZoomControl
          label="Transcript"
          value={transcriptZoom}
          onChange={setTranscriptZoom}
        />
        <div className="relative">
          <TooltipIconButton
            aria-label="Change transcription viewing mode"
            tooltip="Change viewing mode"
            className="min-w-s28 px-s4"
            icon={<IconViewModeMenu className="h-s16 w-s16" />}
            isActive={openTranscriptMenu === "mode"}
            onPress={() =>
              setOpenTranscriptMenu((currentMenu) =>
                currentMenu === "mode" ? null : "mode",
              )
            }
          />
          {openTranscriptMenu === "mode" && (
            <TranscriptModePopover
              mode={transcriptViewerMode}
              onModeChange={(nextMode) => {
                setTranscriptViewerMode(nextMode);
                setOpenTranscriptMenu(null);
              }}
            />
          )}
        </div>
        <TooltipIconButton
          aria-label="Reset transcription viewer"
          tooltip="Reset everything"
          className="min-w-s28 px-s4"
          icon={<IconReset className="h-s16 w-s16" />}
          onPress={resetTranscriptViewer}
        />
        <div className="relative">
          <TooltipIconButton
            aria-label="Change transcription settings"
            tooltip="Change settings"
            className="min-w-s28 px-s4"
            icon={<IconSetting className="h-s16 w-s16" />}
            isActive={openTranscriptMenu === "settings"}
            onPress={() =>
              setOpenTranscriptMenu((currentMenu) =>
                currentMenu === "settings" ? null : "settings",
              )
            }
          />
          {openTranscriptMenu === "settings" && (
            <TranscriptSettingsPopover
              isSerif={isTranscriptSerif}
              letterSpacing={transcriptLetterSpacing}
              lineHeight={transcriptLineHeight}
              onSerifChange={setIsTranscriptSerif}
              onLetterSpacingChange={setTranscriptLetterSpacing}
              onLineHeightChange={setTranscriptLineHeight}
            />
          )}
        </div>
        <TooltipIconButton
          aria-label="Download transcript"
          tooltip="Download"
          className="min-w-s28 px-s4"
          icon={<IconDownload className="h-s16 w-s16" />}
        />
      </DocumentDetailFloatingToolbar>

      <div className="h-full overflow-y-auto scrollbar-thin [scrollbar-color:var(--neutral-600)_transparent]">
        <div
          className="min-h-full origin-top transition-transform duration-100 ease-out motion-reduce:transition-none"
          style={{ transform: `scale(${transcriptZoom / 100})` }}
        >
          {isPairedPageView ? (
            <div className="grid min-h-full grid-cols-2 gap-s24 px-s24 py-s24">
              <div className="min-w-0 border-r border-brand-black/20 pr-s12">
                {transcriptMode === "d"
                  ? renderDiplomaticTranscriptPage()
                  : renderNormalizedTranscriptPage()}
              </div>
              <div className="min-w-0 pl-s12">
                {transcriptMode === "d"
                  ? renderDiplomaticTranscriptPage()
                  : renderNormalizedTranscriptPage()}
              </div>
            </div>
          ) : transcriptMode === "d" ? (
            renderDiplomaticTranscriptPage()
          ) : (
            renderNormalizedTranscriptPage()
          )}
        </div>
      </div>
    </DocumentDetailTranscriptCanvas>
  );
}
