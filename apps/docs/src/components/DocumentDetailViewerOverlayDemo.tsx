"use client";

import {
  Button,
  cn,
  DocumentDetailBarGroup,
  DocumentDetailBody,
  DocumentDetailBottomBar,
  DocumentDetailCanvas,
  DocumentDetailFloatingToolbar,
  DocumentDetailIconRail,
  DocumentDetailMetadataSidebar,
  DocumentDetailMetadataSidebarBadge,
  DocumentDetailMetadataSidebarButton,
  DocumentDetailOverlay,
  DocumentDetailRailButton,
  DocumentDetailSegment,
  DocumentDetailSegmentedControl,
  DocumentDetailSplitViewer,
  DocumentDetailToolButton,
  DocumentDetailTopBar,
  DocumentDetailTranscriptCanvas,
  DocumentDetailTranscriptLine,
  DocumentDetailViewerPane,
  IconBrightness,
  IconCalendarClock,
  IconChevronDown,
  IconClose,
  IconCommodity,
  IconDashboardGear,
  IconDate,
  IconDocument,
  IconDocumentFrameAlert,
  IconDownloadTray,
  IconExternalLink,
  IconFolderCopy,
  IconImportContacts,
  IconLeft,
  IconLeftFirst,
  IconList,
  IconOrganisation,
  IconPerson,
  IconPictureInPicture,
  IconPlace,
  IconRight,
  IconRightLast,
  IconRotate,
  IconScan,
  IconSearch,
  IconShip,
  IconSwap,
  IconTranscription,
  IconTune,
  IconViewModeGrid,
  IconViewObjectTrack,
  IconWifiHome,
  IconZoomIn,
  IconZoomOut,
  ObjectCardReferenceItem,
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

const FLOATING_TOOLBAR_REVEAL_CLASS =
  "bg-brand-black/35 text-brand-white/45 shadow-none transition-[background-color,box-shadow,color] duration-150 hover:bg-brand-black hover:text-brand-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.28)] focus-within:bg-brand-black focus-within:text-brand-white focus-within:shadow-[0_4px_16px_rgba(0,0,0,0.28)]";

const TOP_BAR_ICON_BUTTON_CLASS =
  "h-s36 min-w-s36 px-0 [&>svg]:h-[18px] [&>svg]:w-[18px]";

const BOTTOM_BAR_ICON_BUTTON_CLASS =
  "h-s24 min-w-s24 rounded-[3px] px-s4 text-neutral-300 data-hovered:bg-brand-white/8 pressed:bg-brand-white/12 data-focus-visible:ring-1 [&>svg]:h-s16 [&>svg]:w-s16";

const EDITABLE_NUMBER_INPUT_CLASS =
  "mx-[2px] inline-block h-s16 self-baseline rounded-[2px] border-0 bg-transparent px-[2px] pb-0 pt-0 text-center font-sans text-xs leading-4 text-parchment-500 outline-none transition-colors [appearance:textfield] hover:bg-brand-white/5 focus:bg-brand-white/10 focus:ring-1 focus:ring-parchment-500/50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

const SEGMENTED_SURFACE_COMPACT_CLASS =
  "inline-flex h-s28 shrink-0 items-center gap-0 overflow-hidden rounded-[4px] bg-brand-white/10 p-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]";

const SEGMENTED_SURFACE_REGULAR_CLASS =
  "inline-flex h-s36 shrink-0 items-center gap-0 overflow-hidden rounded-[6px] bg-brand-white/10 p-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]";

const SEGMENTED_BUTTON_ACTIVE_CLASS = "bg-brand-white text-brand-black";

const SEGMENTED_BUTTON_INACTIVE_CLASS =
  "text-brand-white/65 hover:bg-brand-white/10 hover:text-brand-white";

const SEGMENTED_BUTTON_COMPACT_CLASS =
  "inline-flex h-s28 min-w-s36 shrink-0 items-center justify-center whitespace-nowrap border-r border-brand-black/70 px-s8 text-xs leading-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand-white/60 last:border-r-0";

const SEGMENTED_BUTTON_REGULAR_CLASS =
  "inline-flex h-s36 shrink-0 items-center justify-center gap-s4 whitespace-nowrap border-r border-brand-black/70 px-s12 text-sm leading-5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand-white/60 last:border-r-0";
const CONTENT_WARNING_TEXT =
  "The Dutch East India Company archives (and consequently their transcriptions) and its document descriptions bear harmful and discriminatory language. They also record a wide range of events, intentions and perspectives that are violent and can cause distress.";

const SIDEBAR_ITEMS = [
  {
    id: "inventory",
    label: "Inventory",
    badge: "1664",
    railLabel: "1664",
    icon: <IconFolderCopy className="h-s20 w-s20" />,
  },
  {
    id: "table-of-contents",
    label: "Table of Contents",
    icon: <IconList className="h-s20 w-s20" />,
  },
  {
    id: "identified",
    label: "Entity tags",
    count: "(376)",
    railLabel: "376",
    icon: <IconViewObjectTrack className="h-s20 w-s20" />,
  },
  {
    id: "events",
    label: "Event tags",
    count: "(0)",
    railLabel: "0",
    icon: <IconCalendarClock className="h-s20 w-s20" />,
  },
];

const INVENTORY_METADATA = [
  {
    label: "Title(s)",
    value:
      "1703. RRRRR. Veertiende boek: Batavia's ingekomen brievenboek, deel III: Sumatra's Westkust, Bengalen, Coromandel 1703",
  },
  {
    label: "Date",
    value: "1703-01-01 - 1703-12-31",
  },
];

const INVENTORY_SETTLEMENTS = ["Batavia", "Goa"];

const INVENTORY_HIERARCHY = [
  {
    level: 0,
    label:
      "1.04.02 Inventaris van het archief van de Verenigde Oost-Indische Compagnie (VOC)",
  },
  {
    level: 1,
    label: "Deel I Heren Zeventien en kamer Amsterdam",
  },
  {
    level: 2,
    label: "Deel I/E INGEKOMEN STUKKEN UIT",
  },
  {
    level: 3,
    label: "Deel-I-E.5 - Overgekomen brieven en papieren",
  },
  {
    level: 4,
    label:
      "Deel-I-E.5.a - Overgekomen brieven en papieren uit Indië aan de Heren XVII en de kamer Amsterdam",
  },
  {
    level: 5,
    label:
      "1056-3986 - Overgekomen brieven en papieren uit Indië aan de Heren XVII en de kamer Amsterdam",
  },
  {
    level: 6,
    label: "1664",
    isCurrent: true,
  },
];

const TABLE_OF_CONTENTS = [
  {
    title:
      "Februar 1701 • 1 • wij in het afgeweken Jaar hebben gedaan geligt lb 4000. buskruit te weten uit de",
  },
  {
    title: "03 March 1701 • 309 • Register der papieren",
  },
  {
    title:
      "15 March 1701 • 31 • D=o voor den secretaris joris van de velde in desselfs reijse na priaman den laasten november 1701",
  },
  {
    title:
      "04 April 1701 • 56 • missive van den oppercoopman en gesaghebber Encam en raad tot padang aen haer Ed„s de hoge reg: tot batavia gesz de dato 5=en februarij 1702",
  },
  {
    title:
      "27 August 1701 • 3 • translaat briefje door op gem gesaghebberen raad, aen Radja nanda ende de verdere regenten tot priaman gesz",
  },
  {
    title:
      "08 September 1701 • 2 • briefje vanden oppercoopman en gesaghebber Anthonij Encam ende den raad tot padang aen haer Ed=s de hooge Regeringe tot batavia, aen haer Ed=s de hooge regeringe tot batavia gesz de dato 22 feb 1702 verdere regenten tot priaman gesz",
    hasResults: true,
  },
  {
    title:
      "09 September 1701 • 2 • Instructie den vaandrager Hans michiel schreuder ter narigt mede gegeven in syne Commissie na Indrapoura den 21=e april 1701",
  },
  {
    title:
      "12 December 1701 • 98 • nader ditto van den coopman Jordaan Teding wegens sijne verrigtinge en ontmoeting der plaatse voorsz",
    hasResults: true,
  },
  {
    title: "28 December 1701 • 16 • Register der papieren",
  },
];

const SELECTED_TOC_ENTRY =
  "26 March 1702 • 26 • missive van den independent fiscael tot cormandel Hendrick beiker, aan haer Ed=ls de hooge req: tot batavia gesz de dato 22:' meij 1702:";

const ACTIVE_TOC_SCAN = 23;

const SELECTED_TOC_METADATA = [
  ["Type", "Letter"],
  ["Creator", "Hendrick Beiker"],
  ["Date", "1702-01-01 - 1702-12-31 to 1703-01-01 - 1703-12-31"],
  ["Location", "Coromandel", "[GLOB_40]"],
  ["TANAP", "TANAP Digitized Index (2026-04-10)"],
];

const TOC_SCAN_SNIPPETS: Record<number, React.ReactNode> = {
  2: (
    <>
      overgesonden de scheepen D&apos; <strong>prins Eugenius</strong> en
      Gansenhoef,
    </>
  ),
  7: (
    <>
      Zeeland, mitsganders de <strong>prins Eugenius</strong>, den Bergh,
      &apos;T Noord
    </>
  ),
  8: (
    <>
      Voor Amsterdam T schip <strong>prins Eugenius</strong> deb berg: moorder
    </>
  ),
  9: (
    <>
      batavia met de scheppen <strong>prins Eugenius</strong> en gansenhoev tot
    </>
  ),
  11: (
    <>
      ontfangen per het schip <strong>prins Eugenius</strong> hpoog op october
    </>
  ),
  12: (
    <>
      kunnen voldoen <strong>prins Eugenius</strong> den 21: Julij mitsgad
    </>
  ),
  17: (
    <>
      Voor de proesdidiale Kamer <strong>prins Eugenius</strong> en Gansenhoef,
    </>
  ),
  18: (
    <>
      is voldaan P:r de <strong>prins Eugenius</strong> op den 20:e Maart 1723
    </>
  ),
  19: (
    <>
      de scheppen de <strong>prins Eugenius</strong> wendela.
    </>
  ),
  21: (
    <>
      overgesonden de scheepen D&apos; <strong>prins Eugenius</strong> en
      Gansenhoef,
    </>
  ),
  23: (
    <>
      overgesonden de scheepen D&apos; <strong>prins Eugenius</strong> en
      Gansenhoef,
    </>
  ),
  24: (
    <>
      overgesonden de scheepen D&apos; <strong>prins Eugenius</strong> en
      Gansenhoef,
    </>
  ),
};

const TOC_SCANS = Array.from({ length: 26 }, (_, index) => {
  const scan = index + 1;

  return {
    scan,
    id: `NL-HaNA_1.04.02_1664_${1338 + scan}`,
    snippet: TOC_SCAN_SNIPPETS[scan],
  };
});

const TABLE_OF_CONTENTS_AFTER_SELECTED = [
  {
    title:
      "06 April 1702 • 31 • d=o voor den opsiender der Equipagie dirk hiersz, en onderstuurman Jacob van Doorn den 3=e februarij deses jaars uyjtgesonden om te kruysten tusschen priaman en oulaccan",
    hasResults: true,
  },
  {
    title:
      "15 April 1702 • 2 • Als voren translaat missive van den panglima en de twaalf ponglons tot padang aende Heer gouverneur generaal willem van Outhoorn tot batavia gesz",
  },
  {
    title: "19 April 1702 • 4 • Ditto aen als voren",
  },
  {
    title:
      "21 April 1702 • 26 • D=o door radja soucca ampat uijt songi pagou, aen den panglima sirrinarra end'verdere pouglons van sillida gesz:",
  },
  {
    title:
      "17 September 1702 • 4 • DD=o door eenige hoofden tot padang aen maharadja jndra tot bat:a gesr",
  },
  {
    title:
      "29 September 1702 • 2 • missive van den oppercoopman en gesaghebber Anthonij ducam ende den raad tot padang aen haer Ed=s tot batavia gesz den 13=' maert 1702",
    hasResults: true,
  },
  {
    title:
      "11 October 1702 • 53 • briefjes van den raad tot padang bij overlijden van den gesaghebber anthonij ducam aen haer edelens tot Batavia gesz de dato 26e maart anno 1702",
    hasResults: true,
  },
  {
    title:
      "31 October 1702 • 34 • rendement der vercogte coopmanschappen tot padang in een rondjaar ofte thedert primo september onno 1700 tot ultimo augustus anno passado",
  },
  {
    title:
      "01 November 1702 • 4 • item van als voren der comptoirs primo Chinco in opgem. Tijt",
  },
  {
    title:
      "11 November 1702 • 4 • item van als voren der comptoire banos in voorsz tijt",
  },
  {
    title:
      "12 December 1702 • 2 • Als voren translaat missive van den panglima en de twaalf ponglons tot padang aende Heer gouverneur generaal willem van Outhoorn tot batavia gesz",
  },
  {
    title: "19 Januar 1703 • 39 • Register der papieren",
  },
];

const CLASSIFIED_ENTITY_TAG_GROUPS = [
  {
    category: "Persons",
    count: 496,
    icon: <IconPerson className="h-s16 w-s16" />,
    firstScan: 2,
    scanStride: 3,
    subcategories: [
      { label: "by Name", count: 298, firstScan: 2, scanStride: 3 },
      { label: "by Attributes", count: 45, firstScan: 6, scanStride: 5 },
      { label: "by Profession", count: 58, firstScan: 9, scanStride: 4 },
      { label: "by Civic Status", count: 106, firstScan: 12, scanStride: 6 },
      {
        label: "by Ethno-Religious Appellation",
        count: 106,
        firstScan: 15,
        scanStride: 7,
      },
    ],
  },
  {
    category: "Organisations",
    count: 71,
    icon: <IconOrganisation className="h-s16 w-s16" />,
    firstScan: 1,
    scanStride: 4,
    subcategories: [
      { label: "by Name", count: 71, firstScan: 1, scanStride: 4 },
    ],
  },
  {
    category: "Ships",
    count: 67,
    icon: <IconShip className="h-s16 w-s16" />,
    firstScan: 23,
    scanStride: 2,
    subcategories: [
      { label: "by Name", count: 106, firstScan: 23, scanStride: 2 },
      { label: "by Type", count: 106, firstScan: 28, scanStride: 5 },
    ],
  },
  {
    category: "Commodities",
    count: 51,
    icon: <IconCommodity className="h-s16 w-s16" />,
    firstScan: 20,
    scanStride: 6,
    subcategories: [
      { label: "by Name", count: 106, firstScan: 20, scanStride: 6 },
      { label: "by Qualifier", count: 106, firstScan: 26, scanStride: 4 },
    ],
  },
  {
    category: "Dates",
    count: 46,
    icon: <IconDate className="h-s16 w-s16" />,
    firstScan: 31,
    scanStride: 3,
    subcategories: [],
  },
  {
    category: "Places",
    count: 34,
    icon: <IconPlace className="h-s16 w-s16" />,
    firstScan: 8,
    scanStride: 4,
    subcategories: [
      { label: "by Name", count: 106, firstScan: 8, scanStride: 4 },
      { label: "by Location Form", count: 106, firstScan: 13, scanStride: 5 },
    ],
  },
  {
    category: "Polities",
    count: 0,
    icon: <IconOrganisation className="h-s16 w-s16" />,
    firstScan: 1,
    scanStride: 1,
    subcategories: [],
  },
  {
    category: "Documents",
    count: 2,
    icon: <IconDocument className="h-s16 w-s16" />,
    firstScan: 19,
    scanStride: 23,
    subcategories: [],
  },
  {
    category: "Quantity",
    count: 2,
    icon: <IconList className="h-s16 w-s16" />,
    firstScan: 44,
    scanStride: 11,
    subcategories: [],
  },
];

const IDENTIFIED_ENTITY_TAGS = [
  {
    name: "Joan Maetsuijker",
    type: "Person",
    icon: <IconPerson className="h-s16 w-s16" />,
    classifiedAs: ["Joan Maetsuijker", "gouverneur generaal"],
    occurrences: 496,
    firstScan: 2,
    scanStride: 3,
  },
  {
    name: "Person X",
    type: "Person",
    icon: <IconPerson className="h-s16 w-s16" />,
    classifiedAs: ["persoon X", "oppercoopman"],
    occurrences: 138,
    firstScan: 4,
    scanStride: 5,
  },
  {
    name: "Person Z",
    type: "Person",
    icon: <IconPerson className="h-s16 w-s16" />,
    classifiedAs: ["persoon Z"],
    occurrences: 76,
    firstScan: 6,
    scanStride: 7,
  },
  {
    name: "VOC",
    type: "Organisation",
    icon: <IconOrganisation className="h-s16 w-s16" />,
    classifiedAs: ["VOC", "Oost-Indische Compagnie"],
    occurrences: 71,
    firstScan: 1,
    scanStride: 4,
  },
  {
    name: "Prins Eugenius",
    type: "Ship",
    icon: <IconShip className="h-s16 w-s16" />,
    classifiedAs: ["prins Eugenius", "D' prins Eugenius"],
    occurrences: 67,
    firstScan: 23,
    scanStride: 2,
  },
  {
    name: "Person A",
    type: "Person",
    icon: <IconPerson className="h-s16 w-s16" />,
    classifiedAs: ["persoon A"],
    occurrences: 56,
    firstScan: 12,
    scanStride: 3,
  },
  {
    name: "Person B",
    type: "Person",
    icon: <IconPerson className="h-s16 w-s16" />,
    classifiedAs: ["persoon B"],
    occurrences: 56,
    firstScan: 15,
    scanStride: 4,
  },
  {
    name: "Ship V",
    type: "Ship",
    icon: <IconShip className="h-s16 w-s16" />,
    classifiedAs: ["schip V"],
    occurrences: 53,
    firstScan: 18,
    scanStride: 5,
  },
  {
    name: "Cinnamon",
    type: "Commodity",
    icon: <IconCommodity className="h-s16 w-s16" />,
    classifiedAs: ["cinnamon", "kaneel"],
    occurrences: 51,
    firstScan: 20,
    scanStride: 6,
  },
  {
    name: "March",
    type: "Date",
    icon: <IconDate className="h-s16 w-s16" />,
    classifiedAs: ["maart", "March"],
    occurrences: 46,
    firstScan: 31,
    scanStride: 3,
  },
  {
    name: "Batavia",
    type: "Place",
    icon: <IconPlace className="h-s16 w-s16" />,
    classifiedAs: ["batavia", "tot batavia"],
    occurrences: 34,
    firstScan: 8,
    scanStride: 4,
  },
  {
    name: "India",
    type: "Place",
    icon: <IconPlace className="h-s16 w-s16" />,
    classifiedAs: ["Indie", "India"],
    occurrences: 33,
    firstScan: 11,
    scanStride: 5,
  },
  {
    name: "Thing YUH",
    type: "Commodity",
    icon: <IconCommodity className="h-s16 w-s16" />,
    classifiedAs: ["thing YUH"],
    occurrences: 1,
    firstScan: 56,
    scanStride: 1,
  },
];

type TagNavigationTarget = {
  id: string;
  label: string;
  occurrences: number;
  firstScan: number;
  scanStride: number;
  kind: "Classified" | "Identified";
};

function getTagOccurrenceScan(
  target: TagNavigationTarget,
  occurrenceIndex: number,
  maxScan: number,
) {
  return (
    ((target.firstScan + occurrenceIndex * target.scanStride - 1) % maxScan) + 1
  );
}

function SidebarDisclosureIcon({
  isExpanded = false,
}: {
  isExpanded?: boolean;
}) {
  return (
    <IconChevronDown
      className={cn(
        "h-s20 w-s20 text-current transition-transform duration-150",
        isExpanded && "rotate-180",
      )}
    />
  );
}

interface CollapsedMetadataRailProps {
  onExpandSection: (sectionId: string) => void;
}

function CollapsedMetadataRail({
  onExpandSection,
}: CollapsedMetadataRailProps) {
  return (
    <DocumentDetailIconRail className="h-full w-full border-r-0 bg-neutral-900">
      {SIDEBAR_ITEMS.map((item) => (
        <DocumentDetailRailButton
          key={item.label}
          aria-label={`Expand ${item.label}`}
          className="h-s72 border-b-0"
          icon={item.icon}
          label={item.railLabel}
          onPress={() => onExpandSection(item.id)}
        />
      ))}
    </DocumentDetailIconRail>
  );
}

interface ExpandedSidebarSectionProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  count?: React.ReactNode;
  badge?: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  variant?: "default" | "warning";
  children: React.ReactNode;
}

function ExpandedSidebarSection({
  id,
  icon,
  label,
  count,
  badge,
  isExpanded,
  onToggle,
  variant = "default",
  children,
}: ExpandedSidebarSectionProps) {
  const panelId = `${id}-panel`;

  return (
    <>
      <DocumentDetailMetadataSidebarButton
        aria-controls={panelId}
        aria-expanded={isExpanded}
        className={cn(
          "h-s64 shrink-0",
          variant === "warning" &&
            "text-vermilion-500 data-hovered:bg-vermilion-500/10",
          variant === "warning" &&
            isExpanded &&
            "bg-neutral-800 text-vermilion-500 data-hovered:bg-neutral-800",
        )}
        variant={variant}
        icon={icon}
        label={label}
        count={count}
        trailing={<SidebarDisclosureIcon isExpanded={isExpanded} />}
        onPress={onToggle}
      >
        {badge}
      </DocumentDetailMetadataSidebarButton>

      {isExpanded && (
        <div
          id={panelId}
          role="region"
          aria-label={`${label} details`}
          className={cn(
            "min-h-0 flex-1 overflow-y-auto overflow-x-hidden border-b border-brand-white/10 [scrollbar-width:thin]",
            variant === "warning"
              ? "bg-neutral-800 text-vermilion-500 [scrollbar-color:var(--vermilion-600)_transparent]"
              : "bg-neutral-800 text-brand-white [scrollbar-color:var(--neutral-600)_transparent]",
          )}
        >
          {children}
        </div>
      )}
    </>
  );
}

function ContentWarningTopBarControl() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [hasFocusWithin, setHasFocusWithin] = React.useState(false);
  const [isPinned, setIsPinned] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const popoverId = React.useId();
  const titleId = React.useId();
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
      className="relative"
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
          TOP_BAR_ICON_BUTTON_CLASS,
          "text-vermilion-500 data-hovered:bg-vermilion-500/10 data-focus-visible:ring-vermilion-500",
          isOpen && "bg-vermilion-500/10",
        )}
        icon={<IconDocumentFrameAlert className="h-s16 w-s16" />}
        onPress={() => setIsPinned((current) => !current)}
      />

      {isOpen && (
        <div
          id={popoverId}
          role="dialog"
          aria-labelledby={titleId}
          className="absolute left-0 top-[calc(100%+var(--s8))] z-30 w-[min(380px,calc(100vw-var(--s32)))] border border-vermilion-500/35 bg-neutral-900 p-s16 font-sans text-vermilion-500 shadow-[0_16px_32px_rgba(0,0,0,0.36)]"
        >
          <div className="mb-s8 flex items-center gap-s8">
            <IconDocumentFrameAlert className="h-s16 w-s16 shrink-0" />
            <h2 id={titleId} className="text-sm leading-5">
              Content Warning
            </h2>
          </div>
          <p className="text-xs leading-5">{CONTENT_WARNING_TEXT}</p>
          <a
            href="#"
            className="mt-s12 inline-flex text-xs leading-4 underline underline-offset-2 transition-colors hover:text-vermilion-400"
          >
            Read more about problematic content
          </a>
        </div>
      )}
    </div>
  );
}

function InventoryMetadataRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-s12 text-sm leading-5">
      <div className="pt-px text-xs leading-4 text-neutral-500">{label}</div>
      <div className="min-w-0 text-brand-white">{children}</div>
    </div>
  );
}

function InventoryHierarchyRow({
  level,
  label,
  isCurrent = false,
}: {
  level: number;
  label: string;
  isCurrent?: boolean;
}) {
  return (
    <div
      className="flex min-h-s28 items-start text-sm leading-5 text-brand-white"
      style={{ paddingLeft: level * 8 }}
    >
      {isCurrent ? (
        <>
          <span className="mr-s8 w-s12 shrink-0 text-right text-neutral-400">
            →
          </span>
          <span className="border border-neutral-500 bg-neutral-600 px-s4 text-sm leading-5">
            {label}
          </span>
        </>
      ) : (
        <>
          {level > 0 && (
            <span className="mr-s8 w-s12 shrink-0 text-right text-neutral-500">
              ↳
            </span>
          )}
          <span className="min-w-0 flex-1 whitespace-normal break-words">
            {label}
          </span>
        </>
      )}
    </div>
  );
}

function ArchivePanel() {
  return (
    <div className="flex w-full flex-col gap-s16 py-s12 font-sans">
      <div className="flex flex-col gap-s12 px-s24">
        {INVENTORY_METADATA.map((item) => (
          <InventoryMetadataRow key={item.label} label={item.label}>
            {item.value}
          </InventoryMetadataRow>
        ))}

        <InventoryMetadataRow label="settlement(s)">
          {INVENTORY_SETTLEMENTS.map((settlement, index) => (
            <React.Fragment key={settlement}>
              {index > 0 && <span>, </span>}
              <a href="#" className="underline underline-offset-2">
                {settlement}
              </a>
            </React.Fragment>
          ))}
        </InventoryMetadataRow>

        <InventoryMetadataRow label="handle">
          <a
            href="#"
            className="inline-flex items-center gap-s8 underline underline-offset-2"
          >
            see nationaal archive
            <IconExternalLink className="h-s12 w-s12 shrink-0" />
          </a>
        </InventoryMetadataRow>
      </div>

      <div className="px-s24 py-s8">
        <div className="flex w-full flex-col gap-s4">
          {INVENTORY_HIERARCHY.map((item) => (
            <InventoryHierarchyRow
              key={`${item.level}-${item.label}`}
              level={item.level}
              label={item.label}
              isCurrent={item.isCurrent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TableOfContentsEntry({
  title,
  isSelected = false,
  isExpanded = false,
  buttonRef,
  onToggle,
}: {
  title: string;
  isSelected?: boolean;
  isExpanded?: boolean;
  buttonRef?: React.Ref<HTMLButtonElement>;
  onToggle?: () => void;
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      aria-expanded={onToggle ? isExpanded : undefined}
      onClick={onToggle}
      className={cn(
        "grid w-full grid-cols-[1rem_minmax(0,1fr)_1.5rem] items-start gap-s8 py-s12 text-left text-sm leading-4 text-brand-white transition-colors hover:text-brand-white/75",
        isSelected && "border-t border-neutral-500 font-bold",
      )}
    >
      <IconDocument className="mt-px h-s16 w-s16 shrink-0" />
      <span className="min-w-0">{title}</span>
      {onToggle && <SidebarDisclosureIcon isExpanded={isExpanded} />}
    </button>
  );
}

function TableOfContentsMetadataRow({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-s24 text-xs leading-4">
      <div className="text-[10px] leading-3 text-neutral-500">{label}</div>
      <div className="min-w-0 text-brand-white">
        {label === "Type" || label === "Creator" || label === "Location" ? (
          <a href="#" className="underline underline-offset-2">
            {value}
          </a>
        ) : (
          value
        )}
        {suffix && (
          <span className="ml-s4 align-middle text-[6px] leading-2">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function TableOfContentsScanCard({
  id,
  scan,
  snippet,
  cardRef,
}: {
  id: string;
  scan: number;
  snippet?: React.ReactNode;
  cardRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div ref={cardRef}>
      <ObjectCardReferenceItem
        className="border-brand-white/20 py-s12"
        title={`${id} · scan ${scan}`}
        archiveId="NA Identifier"
        href="#"
        image={
          <div className="relative h-full w-full overflow-hidden bg-neutral-700">
            <Image
              src="/images/document-detail-manuscript.png"
              alt=""
              fill
              sizes="80px"
              className="object-contain p-s4"
            />
          </div>
        }
        snippet={
          snippet ? (
            <span className="[&_strong]:font-semibold">{snippet}</span>
          ) : undefined
        }
      />
    </div>
  );
}

function TableOfContentsPanel() {
  const [resultsOnly, setResultsOnly] = React.useState(false);
  const [isSelectedDocumentExpanded, setIsSelectedDocumentExpanded] =
    React.useState(true);
  const selectedDocumentRef = React.useRef<HTMLButtonElement>(null);
  const activeScanRef = React.useRef<HTMLDivElement>(null);

  const visibleBeforeEntries = resultsOnly
    ? TABLE_OF_CONTENTS.filter((item) => item.hasResults)
    : TABLE_OF_CONTENTS;
  const visibleAfterEntries = resultsOnly
    ? TABLE_OF_CONTENTS_AFTER_SELECTED.filter((item) => item.hasResults)
    : TABLE_OF_CONTENTS_AFTER_SELECTED;
  const visibleScans = resultsOnly
    ? TOC_SCANS.filter((scan) => scan.snippet)
    : TOC_SCANS;

  const scrollToSelectedDocument = () => {
    selectedDocumentRef.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  const scrollToActiveScan = () => {
    activeScanRef.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  return (
    <div className="flex w-full flex-col font-sans">
      <div className="sticky top-0 z-20 flex items-center justify-between gap-s8 border-b border-brand-white/10 bg-neutral-800 px-s24 py-s12">
        <label className="inline-flex h-s28 min-w-0 items-center gap-s8 px-s2 text-[10px] leading-3 text-brand-white transition-colors hover:text-brand-white/75">
          <input
            type="checkbox"
            checked={resultsOnly}
            onChange={(event) => setResultsOnly(event.target.checked)}
            className="peer sr-only"
          />
          <span className="h-s12 w-s12 shrink-0 bg-neutral-700 peer-checked:bg-brand-white peer-checked:shadow-[inset_0_0_0_2px_var(--neutral-800)]" />
          <span>Results</span>
        </label>

        <div className="flex shrink-0 items-center gap-s12">
          <span className="text-[10px] leading-3 text-brand-white/45">
            Jump
          </span>
          <div className="flex items-center gap-s12">
            <button
              type="button"
              aria-label="Jump to active document"
              title="Jump to active document"
              onClick={scrollToSelectedDocument}
              className="inline-flex h-s28 items-center gap-s8 px-s2 text-[10px] leading-3 text-brand-white transition-colors hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <IconDocument className="h-s12 w-s12" />
              Doc
            </button>
            <button
              type="button"
              aria-label={`Jump to active scan page ${ACTIVE_TOC_SCAN}`}
              title={`Jump to active scan page ${ACTIVE_TOC_SCAN}`}
              onClick={scrollToActiveScan}
              className="inline-flex h-s28 items-center gap-s8 px-s2 text-[10px] leading-3 text-brand-white transition-colors hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <IconScan className="h-s12 w-s12" />
              {ACTIVE_TOC_SCAN}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-s24 pb-s32">
        {visibleBeforeEntries.map((item) => (
          <TableOfContentsEntry key={item.title} title={item.title} />
        ))}

        <div className="flex flex-col gap-s12">
          <TableOfContentsEntry
            title={SELECTED_TOC_ENTRY}
            isSelected
            isExpanded={isSelectedDocumentExpanded}
            buttonRef={selectedDocumentRef}
            onToggle={() =>
              setIsSelectedDocumentExpanded((current) => !current)
            }
          />

          {isSelectedDocumentExpanded && (
            <>
              <div className="flex flex-col gap-s10 px-s24 py-s2">
                {SELECTED_TOC_METADATA.map(([label, value, suffix]) => (
                  <TableOfContentsMetadataRow
                    key={label}
                    label={label}
                    value={value}
                    suffix={suffix}
                  />
                ))}
              </div>

              <div className="flex flex-col overflow-hidden px-s2">
                {visibleScans.map((scan) => (
                  <TableOfContentsScanCard
                    key={scan.id}
                    id={scan.id}
                    scan={scan.scan}
                    snippet={scan.snippet}
                    cardRef={
                      scan.scan === ACTIVE_TOC_SCAN ? activeScanRef : undefined
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {visibleAfterEntries.map((item) => (
          <TableOfContentsEntry key={item.title} title={item.title} />
        ))}
      </div>
    </div>
  );
}

function IdentifiedPanel({
  activeTagTargetId,
  onSelectTagTarget,
}: {
  activeTagTargetId?: string;
  onSelectTagTarget: (target: TagNavigationTarget) => void;
}) {
  const [expandedClassifiedCategories, setExpandedClassifiedCategories] =
    React.useState<Set<string>>(() => new Set());
  const [entityQuery, setEntityQuery] = React.useState("");
  const [entitySort, setEntitySort] = React.useState<
    "sequential" | "alphabet" | "amount"
  >("amount");
  const [isTypeGroupingEnabled, setIsTypeGroupingEnabled] =
    React.useState(false);
  const [entitySortDirection, setEntitySortDirection] = React.useState<
    "ascending" | "descending"
  >("descending");

  const visibleIdentifiedEntities = React.useMemo(() => {
    const normalizedQuery = entityQuery.trim().toLowerCase();

    return IDENTIFIED_ENTITY_TAGS.filter((entity) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        entity.name.toLowerCase().includes(normalizedQuery) ||
        entity.type.toLowerCase().includes(normalizedQuery) ||
        entity.classifiedAs.some((tag) =>
          tag.toLowerCase().includes(normalizedQuery),
        );

      return matchesQuery;
    }).sort((firstEntity, secondEntity) => {
      if (isTypeGroupingEnabled) {
        const typeComparison = firstEntity.type.localeCompare(
          secondEntity.type,
        );

        if (typeComparison !== 0) {
          return entitySortDirection === "ascending"
            ? typeComparison
            : -typeComparison;
        }
      }

      let comparison = 0;

      if (entitySort === "alphabet") {
        comparison = firstEntity.name.localeCompare(secondEntity.name);
      } else if (entitySort === "amount") {
        comparison = firstEntity.occurrences - secondEntity.occurrences;
      } else {
        comparison =
          IDENTIFIED_ENTITY_TAGS.indexOf(firstEntity) -
          IDENTIFIED_ENTITY_TAGS.indexOf(secondEntity);
      }

      return entitySortDirection === "ascending" ? comparison : -comparison;
    });
  }, [entityQuery, entitySort, entitySortDirection, isTypeGroupingEnabled]);

  const toggleClassifiedCategory = React.useCallback((category: string) => {
    setExpandedClassifiedCategories((current) => {
      const next = new Set(current);

      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }

      return next;
    });
  }, []);

  const getClassifiedTarget = React.useCallback(
    (
      group: (typeof CLASSIFIED_ENTITY_TAG_GROUPS)[number],
      subcategory?: (typeof CLASSIFIED_ENTITY_TAG_GROUPS)[number]["subcategories"][number],
    ): TagNavigationTarget => ({
      id: subcategory
        ? `classified:${group.category}:${subcategory.label}`
        : `classified:${group.category}`,
      label: subcategory
        ? `${group.category} · ${subcategory.label}`
        : group.category,
      occurrences: subcategory?.count ?? group.count,
      firstScan: subcategory?.firstScan ?? group.firstScan,
      scanStride: subcategory?.scanStride ?? group.scanStride,
      kind: "Classified",
    }),
    [],
  );

  const getIdentifiedTarget = React.useCallback(
    (entity: (typeof IDENTIFIED_ENTITY_TAGS)[number]): TagNavigationTarget => ({
      id: `identified:${entity.name}`,
      label: entity.name,
      occurrences: entity.occurrences,
      firstScan: entity.firstScan,
      scanStride: entity.scanStride,
      kind: "Identified",
    }),
    [],
  );

  return (
    <div className="w-full font-sans text-brand-white">
      <section className="border-b border-brand-white/10 px-s24 py-s16">
        <div className="mb-s12 flex items-center justify-between gap-s16">
          <div className="flex items-baseline gap-s8">
            <h3 className="text-sm leading-5 text-brand-white">
              Classified as
            </h3>
            <span className="text-sm leading-5 text-brand-white/45">19096</span>
          </div>
          <IconChevronDown className="h-s16 w-s16 rotate-180 text-brand-white" />
        </div>

        <div className="flex flex-col gap-s4">
          {CLASSIFIED_ENTITY_TAG_GROUPS.map((group) => (
            <div key={group.category} className="flex flex-col">
              <div className="flex h-s24 items-center justify-between gap-s8 text-xs leading-3">
                <button
                  type="button"
                  disabled={group.count <= 0}
                  className={cn(
                    "flex min-w-0 items-center gap-s8 px-s8 text-left text-brand-white transition-colors hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:text-brand-white/30 disabled:hover:bg-transparent",
                    activeTagTargetId === `classified:${group.category}` &&
                      "bg-brand-white/10 text-parchment-500 hover:text-parchment-500",
                  )}
                  onClick={() => onSelectTagTarget(getClassifiedTarget(group))}
                >
                  <span className="text-brand-white/55">{group.icon}</span>
                  <span className="truncate">{group.category}</span>
                  <span className="text-brand-white/45">{group.count}</span>
                </button>
                {group.subcategories.length > 0 && (
                  <button
                    type="button"
                    aria-label={`Toggle ${group.category} subcategories`}
                    aria-expanded={expandedClassifiedCategories.has(
                      group.category,
                    )}
                    className="flex h-s24 w-s24 shrink-0 items-center justify-center text-brand-white transition-colors hover:bg-brand-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => toggleClassifiedCategory(group.category)}
                  >
                    <IconChevronDown
                      className={cn(
                        "h-s16 w-s16 transition-transform",
                        expandedClassifiedCategories.has(group.category) &&
                          "rotate-180",
                      )}
                    />
                  </button>
                )}
              </div>

              {expandedClassifiedCategories.has(group.category) &&
                group.subcategories.map((subcategory) => (
                  <button
                    key={`${group.category}-${subcategory.label}`}
                    type="button"
                    className={cn(
                      "ml-s24 flex h-s24 min-w-0 items-center gap-s8 px-s8 text-left text-xs leading-3 text-brand-white transition-colors hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      activeTagTargetId ===
                        `classified:${group.category}:${subcategory.label}` &&
                        "bg-brand-white/10 text-parchment-500 hover:text-parchment-500",
                    )}
                    onClick={() =>
                      onSelectTagTarget(getClassifiedTarget(group, subcategory))
                    }
                  >
                    <span className="text-brand-white/35">{group.icon}</span>
                    <span className="truncate">{subcategory.label}</span>
                    <span className="shrink-0 text-brand-white/45">
                      {subcategory.count}
                    </span>
                  </button>
                ))}
            </div>
          ))}
        </div>
      </section>

      <section className="px-s24 py-s16">
        <div className="mb-s12 flex items-center justify-between gap-s16">
          <div className="flex items-baseline gap-s8">
            <h3 className="text-sm leading-5 text-brand-white">
              Identified as
            </h3>
            <span className="text-sm leading-5 text-brand-white/45">18191</span>
          </div>
          <IconChevronDown className="h-s16 w-s16 rotate-180 text-brand-white" />
        </div>

        <div className="mb-s12 flex flex-col gap-s8">
          <label className="flex h-s28 items-center gap-s8 border border-brand-white/10 bg-neutral-800 px-s8 text-xs leading-4 text-brand-white">
            <IconSearch className="h-s12 w-s12 shrink-0 text-brand-white/55" />
            <input
              value={entityQuery}
              onChange={(event) => setEntityQuery(event.target.value)}
              placeholder="Search entities"
              className="min-w-0 flex-1 border-0 bg-transparent p-0 text-xs leading-4 text-brand-white outline-none placeholder:text-brand-white/35"
            />
          </label>

          <div
            className="flex items-center justify-between gap-s8"
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <div
              className={SEGMENTED_SURFACE_COMPACT_CLASS}
              role="group"
              aria-label="Entity sort controls"
            >
              {[
                ["sequential", "Sequential"],
                ["alphabet", "Alphabet"],
                ["amount", "Amount"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={cn(
                    SEGMENTED_BUTTON_COMPACT_CLASS,
                    "min-w-0 px-s8 text-[10px] leading-3",
                    entitySort === value
                      ? SEGMENTED_BUTTON_ACTIVE_CLASS
                      : SEGMENTED_BUTTON_INACTIVE_CLASS,
                  )}
                  onClick={() =>
                    setEntitySort(value as "sequential" | "alphabet" | "amount")
                  }
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-s8">
              <button
                type="button"
                role="checkbox"
                aria-checked={isTypeGroupingEnabled}
                className="inline-flex h-s28 min-w-0 items-center gap-s8 px-s2 text-[10px] leading-3 text-brand-white transition-colors hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setIsTypeGroupingEnabled((current) => !current)}
              >
                <span
                  className={cn(
                    "h-s12 w-s12 shrink-0 bg-neutral-700",
                    isTypeGroupingEnabled &&
                      "bg-brand-white shadow-[inset_0_0_0_2px_var(--neutral-800)]",
                  )}
                />
                <span>Type</span>
              </button>
              <button
                type="button"
                aria-label={
                  entitySortDirection === "ascending"
                    ? "Sort last to first"
                    : "Sort first to last"
                }
                title={
                  entitySortDirection === "ascending"
                    ? "First to last"
                    : "Last to first"
                }
                className="flex h-s28 w-s28 items-center justify-center text-brand-white transition-colors hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() =>
                  setEntitySortDirection((current) =>
                    current === "ascending" ? "descending" : "ascending",
                  )
                }
              >
                <IconSwap
                  className={cn(
                    "h-s16 w-s16 transition-transform",
                    entitySortDirection === "ascending"
                      ? "rotate-90"
                      : "-rotate-90",
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          {visibleIdentifiedEntities.map((entity) => (
            <button
              key={entity.name}
              type="button"
              className={cn(
                "flex h-s24 items-center gap-s8 px-s8 text-left text-xs leading-3 text-brand-white transition-colors hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeTagTargetId === `identified:${entity.name}` &&
                  "bg-brand-white/10 text-parchment-500 hover:text-parchment-500",
              )}
              onClick={() => onSelectTagTarget(getIdentifiedTarget(entity))}
            >
              <span className="shrink-0 text-brand-white/55">
                {entity.icon}
              </span>
              <span className="min-w-0 flex-1 truncate">{entity.name}</span>
              <span className="shrink-0 text-brand-white/45">
                {entity.occurrences}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function EventsPanel() {
  return (
    <div className="w-full px-s24 py-s16 font-sans text-sm leading-5 text-brand-white/55">
      No events have been identified for this document.
    </div>
  );
}

function ExpandedMetadataSidebar({
  expandedSections,
  onToggleSection,
  activeTagTargetId,
  onSelectTagTarget,
}: {
  expandedSections: Set<string>;
  onToggleSection: (sectionId: string) => void;
  activeTagTargetId?: string;
  onSelectTagTarget: (target: TagNavigationTarget) => void;
}) {
  return (
    <DocumentDetailMetadataSidebar className="w-full overflow-hidden border-r-0">
      {SIDEBAR_ITEMS.map((item) => (
        <ExpandedSidebarSection
          key={item.id}
          id={item.id}
          icon={item.icon}
          label={item.label}
          count={item.count}
          badge={
            item.badge ? (
              <DocumentDetailMetadataSidebarBadge>
                {item.badge}
              </DocumentDetailMetadataSidebarBadge>
            ) : undefined
          }
          isExpanded={expandedSections.has(item.id)}
          onToggle={() => onToggleSection(item.id)}
        >
          {item.id === "inventory" && <ArchivePanel />}
          {item.id === "table-of-contents" && <TableOfContentsPanel />}
          {item.id === "identified" && (
            <IdentifiedPanel
              activeTagTargetId={activeTagTargetId}
              onSelectTagTarget={onSelectTagTarget}
            />
          )}
          {item.id === "events" && <EventsPanel />}
        </ExpandedSidebarSection>
      ))}
    </DocumentDetailMetadataSidebar>
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

function NumericJumpField({
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
  const [draftValue, setDraftValue] = React.useState(String(value));

  const commitValue = React.useCallback(() => {
    const parsedValue = Number.parseInt(draftValue, 10);
    const nextValue = Number.isNaN(parsedValue)
      ? value
      : Math.min(Math.max(parsedValue, 1), max);

    onChange(nextValue);
    setDraftValue(String(nextValue));
  }, [draftValue, max, onChange, value]);

  React.useEffect(() => {
    setDraftValue(String(value));
  }, [value]);

  return (
    <input
      type="number"
      min={1}
      max={max}
      value={draftValue}
      aria-label={ariaLabel}
      onChange={(event) => {
        setDraftValue(event.target.value.replace(/\D/g, ""));
      }}
      onBlur={commitValue}
      onFocus={(event) => event.currentTarget.select()}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.currentTarget.blur();
        }

        if (event.key === "Escape") {
          setDraftValue(String(value));
          event.currentTarget.blur();
        }
      }}
      className={EDITABLE_NUMBER_INPUT_CLASS}
      style={{ width: `${String(max).length + 0.5}ch` }}
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
  const [draftValue, setDraftValue] = React.useState(String(value));

  const commitValue = React.useCallback(() => {
    const parsedValue = Number.parseInt(draftValue, 10);
    const nextValue = Number.isNaN(parsedValue)
      ? value
      : Math.min(Math.max(parsedValue, min), max);

    onChange(nextValue);
    setDraftValue(String(nextValue));
  }, [draftValue, max, min, onChange, value]);

  React.useEffect(() => {
    setDraftValue(String(value));
  }, [value]);

  return (
    <span className="inline-flex h-s16 w-full items-baseline justify-center leading-4">
      <input
        type="number"
        min={min}
        max={max}
        value={draftValue}
        aria-label={ariaLabel}
        onChange={(event) => {
          setDraftValue(event.target.value.replace(/\D/g, ""));
        }}
        onBlur={commitValue}
        onFocus={(event) => event.currentTarget.select()}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.currentTarget.blur();
          }

          if (event.key === "Escape") {
            setDraftValue(String(value));
            event.currentTarget.blur();
          }
        }}
        className={cn(EDITABLE_NUMBER_INPUT_CLASS, "mx-0")}
        style={{ width: `${String(max).length + 1}ch` }}
      />
      <span className="ml-px text-xs leading-4 text-parchment-500">%</span>
    </span>
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
        className="flex h-s28 w-s36 items-center justify-center border-r border-brand-black/60 text-current transition-colors hover:bg-brand-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand-white/60"
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
        className="flex h-s28 w-s36 items-center justify-center border-l border-brand-black/60 text-current transition-colors hover:bg-brand-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand-white/60"
        onClick={() => changeZoom(step)}
      >
        <IconZoomIn className="h-s16 w-s16" />
      </button>
    </div>
  );
}

function ManuscriptCanvas() {
  const [scanZoom, setScanZoom] = React.useState(100);

  return (
    <DocumentDetailCanvas className="bg-neutral-500 px-s24 py-s48">
      <DocumentDetailFloatingToolbar className={FLOATING_TOOLBAR_REVEAL_CLASS}>
        <ViewerZoomControl
          label="Scan"
          value={scanZoom}
          onChange={setScanZoom}
        />
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

      <div
        className="relative h-full max-h-[calc(100%-var(--s32))] aspect-1102/1566 border border-brand-black/70 bg-parchment-200 shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-150 ease-out"
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

function TranscriptCanvas() {
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
        <div
          className={SEGMENTED_SURFACE_COMPACT_CLASS}
          role="group"
          aria-label="Transcript mode controls"
        >
          <button
            type="button"
            aria-label="Show normalized transcription"
            className={cn(
              SEGMENTED_BUTTON_COMPACT_CLASS,
              transcriptMode === "n"
                ? SEGMENTED_BUTTON_ACTIVE_CLASS
                : SEGMENTED_BUTTON_INACTIVE_CLASS,
            )}
            onClick={() => setTranscriptMode("n")}
          >
            N
          </button>
          <button
            type="button"
            aria-label="Show diplomatic transcription"
            className={cn(
              SEGMENTED_BUTTON_COMPACT_CLASS,
              transcriptMode === "d"
                ? SEGMENTED_BUTTON_ACTIVE_CLASS
                : SEGMENTED_BUTTON_INACTIVE_CLASS,
            )}
            onClick={() => setTranscriptMode("d")}
          >
            D
          </button>
        </div>
        <ViewerZoomControl
          label="Transcript"
          value={transcriptZoom}
          onChange={setTranscriptZoom}
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

      <div
        className="mx-auto flex max-w-114 origin-top flex-col gap-s4 pt-s24 transition-transform duration-150 ease-out"
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

export function DocumentDetailViewerOverlayDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true);
  const [primaryViewMode, setPrimaryViewMode] = React.useState<"scan" | "text">(
    "scan",
  );
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(
    () => new Set(["inventory", "table-of-contents"]),
  );
  const [currentScan, setCurrentScan] = React.useState(23);
  const [currentSearchHit, setCurrentSearchHit] = React.useState(2);
  const [activeTagTarget, setActiveTagTarget] =
    React.useState<TagNavigationTarget>();
  const [currentTagOccurrence, setCurrentTagOccurrence] = React.useState(1);

  const maxScan = 156;
  const maxSearchHit = 19;

  const toggleSidebarSection = React.useCallback((sectionId: string) => {
    setExpandedSections((current) => {
      const next = new Set(current);

      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }

      return next;
    });
  }, []);

  const expandSidebarSection = React.useCallback((sectionId: string) => {
    setExpandedSections((current) => {
      const next = new Set(current);
      next.add(sectionId);
      return next;
    });
    setIsSidebarExpanded(true);
  }, []);

  const selectTagTarget = React.useCallback(
    (target: TagNavigationTarget) => {
      if (target.occurrences <= 0) {
        return;
      }

      setActiveTagTarget(target);
      setCurrentTagOccurrence(1);
      setCurrentScan(getTagOccurrenceScan(target, 0, maxScan));
    },
    [maxScan],
  );

  const goToTagOccurrence = React.useCallback(
    (nextOccurrence: number) => {
      if (!activeTagTarget) {
        return;
      }

      const clampedOccurrence = Math.min(
        Math.max(nextOccurrence, 1),
        activeTagTarget.occurrences,
      );

      setCurrentTagOccurrence(clampedOccurrence);
      setCurrentScan(
        getTagOccurrenceScan(activeTagTarget, clampedOccurrence - 1, maxScan),
      );
    },
    [activeTagTarget, maxScan],
  );

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
        dialogClassName="relative bg-background-fixed-card shadow-[0_56px_96px_rgba(0,0,0,0.36)]"
      >
        <div
          id="document-detail-sidebar"
          className={[
            "absolute bottom-0 left-0 top-0 z-10 overflow-hidden transition-[width] duration-200 ease-out",
            isSidebarExpanded
              ? "w-overlay-document-viewer-sidebar-width"
              : "w-overlay-document-viewer-rail-width",
          ].join(" ")}
        >
          {isSidebarExpanded ? (
            <ExpandedMetadataSidebar
              expandedSections={expandedSections}
              onToggleSection={toggleSidebarSection}
              activeTagTargetId={activeTagTarget?.id}
              onSelectTagTarget={selectTagTarget}
            />
          ) : (
            <CollapsedMetadataRail onExpandSection={expandSidebarSection} />
          )}
        </div>

        <DocumentDetailTopBar
          className={[
            "relative justify-between border-b-0 bg-neutral-900 pr-s24 transition-[padding-left] duration-200 ease-out",
            isSidebarExpanded
              ? "pl-[calc(var(--overlay-document-viewer-sidebar-width)+var(--s16))]"
              : "pl-[calc(var(--overlay-document-viewer-rail-width)+var(--s16))]",
          ].join(" ")}
        >
          <DocumentDetailBarGroup className="gap-s8">
            <DocumentDetailToolButton
              aria-controls="document-detail-sidebar"
              aria-expanded={isSidebarExpanded}
              aria-label={
                isSidebarExpanded
                  ? "Collapse metadata sidebar"
                  : "Expand metadata sidebar"
              }
              isActive={isSidebarExpanded}
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconViewModeGrid className="h-s16 w-s16" />}
              onPress={() => setIsSidebarExpanded((current) => !current)}
            />
            <ContentWarningTopBarControl />
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <div
              className={SEGMENTED_SURFACE_REGULAR_CLASS}
              role="group"
              aria-label="Primary viewer mode controls"
            >
              <button
                type="button"
                className={cn(
                  SEGMENTED_BUTTON_REGULAR_CLASS,
                  primaryViewMode === "scan"
                    ? SEGMENTED_BUTTON_ACTIVE_CLASS
                    : SEGMENTED_BUTTON_INACTIVE_CLASS,
                )}
                onClick={() => setPrimaryViewMode("scan")}
              >
                <IconScan className="h-4.5 w-4.5" />
                <span>Scan</span>
              </button>
              <button
                type="button"
                className={cn(
                  SEGMENTED_BUTTON_REGULAR_CLASS,
                  primaryViewMode === "text"
                    ? SEGMENTED_BUTTON_ACTIVE_CLASS
                    : SEGMENTED_BUTTON_INACTIVE_CLASS,
                )}
                onClick={() => setPrimaryViewMode("text")}
              >
                <IconTranscription className="h-4.5 w-4.5" />
                <span>Text</span>
              </button>
            </div>
          </DocumentDetailBarGroup>

          <div className="flex-1" />

          <DocumentDetailBarGroup className="gap-s8">
            <DocumentDetailToolButton
              aria-label="Swap panes"
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconSwap className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Picture in picture"
              isDisabled
              className={cn(
                TOP_BAR_ICON_BUTTON_CLASS,
                "cursor-not-allowed text-brand-white/30 data-hovered:bg-transparent",
              )}
              icon={<IconPictureInPicture className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Open document"
              isDisabled
              className={cn(
                TOP_BAR_ICON_BUTTON_CLASS,
                "cursor-not-allowed text-brand-white/30 data-hovered:bg-transparent",
              )}
              icon={<IconImportContacts className="h-s16 w-s16" />}
            />
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <DocumentDetailToolButton
              aria-label="Object tracking"
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconViewObjectTrack className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Date metadata"
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconCalendarClock className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Settings"
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconDashboardGear className="h-s16 w-s16" />}
            />
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <DocumentDetailToolButton
              aria-label="Close document detail viewer"
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconClose className="h-s16 w-s16" />}
              onPress={() => setIsOpen(false)}
            />
          </DocumentDetailBarGroup>
        </DocumentDetailTopBar>

        <DocumentDetailBody
          className={[
            "transition-[padding-left] duration-200 ease-out",
            isSidebarExpanded
              ? "pl-overlay-document-viewer-sidebar-width"
              : "pl-overlay-document-viewer-rail-width",
          ].join(" ")}
        >
          <DocumentDetailSplitViewer>
            <DocumentDetailViewerPane className="relative border-r border-brand-black">
              <ManuscriptCanvas />
            </DocumentDetailViewerPane>
            <DocumentDetailViewerPane className="relative border-r-0">
              <TranscriptCanvas />
            </DocumentDetailViewerPane>
          </DocumentDetailSplitViewer>
        </DocumentDetailBody>

        <DocumentDetailBottomBar
          className={[
            "h-s36! justify-center border-t-0 bg-neutral-900 text-xs text-neutral-300 transition-[padding-left] duration-200 ease-out",
            activeTagTarget ? "gap-s48" : "gap-s96",
            isSidebarExpanded
              ? "pl-overlay-document-viewer-sidebar-width"
              : "pl-overlay-document-viewer-rail-width",
          ].join(" ")}
        >
          <DocumentDetailBarGroup className="gap-s24">
            <DocumentDetailToolButton
              aria-label="First scan"
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconLeftFirst className="h-s16 w-s16" />}
              onPress={() => setCurrentScan(1)}
            />
            <DocumentDetailToolButton
              aria-label="Previous scan"
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconLeft className="h-s16 w-s16" />}
              onPress={() => {
                setCurrentScan((current) => Math.max(current - 1, 1));
              }}
            />
            <span className="inline-flex items-baseline leading-4">
              Scan
              <NumericJumpField
                ariaLabel="Go to scan"
                value={currentScan}
                max={maxScan}
                onChange={setCurrentScan}
              />
              of {maxScan}
            </span>
            <DocumentDetailToolButton
              aria-label="Next scan"
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconRight className="h-s16 w-s16" />}
              onPress={() => {
                setCurrentScan((current) => Math.min(current + 1, maxScan));
              }}
            />
            <DocumentDetailToolButton
              aria-label="Last scan"
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconRightLast className="h-s16 w-s16" />}
              onPress={() => setCurrentScan(maxScan)}
            />
          </DocumentDetailBarGroup>
          <DocumentDetailBarGroup className="gap-s24">
            <DocumentDetailToolButton
              aria-label="Previous search hit"
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconLeft className="h-s16 w-s16" />}
              onPress={() => {
                setCurrentSearchHit((current) => Math.max(current - 1, 1));
              }}
            />
            <span className="inline-flex items-baseline leading-4">
              search hits
              <NumericJumpField
                ariaLabel="Go to search hit"
                value={currentSearchHit}
                max={maxSearchHit}
                onChange={setCurrentSearchHit}
              />
              of {maxSearchHit}
            </span>
            <DocumentDetailToolButton
              aria-label="Next search hit"
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconRight className="h-s16 w-s16" />}
              onPress={() => {
                setCurrentSearchHit((current) =>
                  Math.min(current + 1, maxSearchHit),
                );
              }}
            />
          </DocumentDetailBarGroup>
          {activeTagTarget && (
            <DocumentDetailBarGroup className="gap-s24">
              <DocumentDetailToolButton
                aria-label={`Previous ${activeTagTarget.label} occurrence`}
                className={BOTTOM_BAR_ICON_BUTTON_CLASS}
                icon={<IconLeft className="h-s16 w-s16" />}
                onPress={() => goToTagOccurrence(currentTagOccurrence - 1)}
              />
              <span className="inline-flex max-w-55 items-baseline leading-4">
                <span className="mr-s4 truncate text-parchment-500">
                  {activeTagTarget.label}
                </span>
                <NumericJumpField
                  ariaLabel={`Go to ${activeTagTarget.label} occurrence`}
                  value={currentTagOccurrence}
                  max={activeTagTarget.occurrences}
                  onChange={goToTagOccurrence}
                />
                of {activeTagTarget.occurrences}
              </span>
              <DocumentDetailToolButton
                aria-label={`Next ${activeTagTarget.label} occurrence`}
                className={BOTTOM_BAR_ICON_BUTTON_CLASS}
                icon={<IconRight className="h-s16 w-s16" />}
                onPress={() => goToTagOccurrence(currentTagOccurrence + 1)}
              />
            </DocumentDetailBarGroup>
          )}
        </DocumentDetailBottomBar>
      </DocumentDetailOverlay>
    </>
  );
}
