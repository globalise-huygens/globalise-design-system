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
  ObjectCardReferenceItem,
  IconBrightness,
  IconCalendarClock,
  IconChevronDown,
  IconClose,
  IconDashboardGear,
  IconDocument,
  IconDocumentFrameAlert,
  IconDownloadTray,
  IconExternalLink,
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

const FLOATING_TOOLBAR_REVEAL_CLASS =
  "bg-brand-black/35 text-brand-white/45 shadow-none transition-[background-color,box-shadow,color] duration-150 [&_button]:text-brand-white/45 hover:bg-brand-black hover:text-brand-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.28)] hover:[&_button]:text-brand-white focus-within:bg-brand-black focus-within:text-brand-white focus-within:shadow-[0_4px_16px_rgba(0,0,0,0.28)] focus-within:[&_button]:text-brand-white";

const TOP_BAR_ICON_BUTTON_CLASS =
  "h-s36 min-w-s36 px-0 [&>svg]:h-[18px] [&>svg]:w-[18px]";

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
    count: "(206)",
    railLabel: "206",
    icon: <IconList className="h-s20 w-s20" />,
  },
  {
    id: "identified",
    label: "Identified",
    count: "(376)",
    railLabel: "376",
    icon: <IconViewObjectTrack className="h-s20 w-s20" />,
  },
  {
    id: "events",
    label: "Events",
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

const IDENTIFIED_ENTITIES = [
  ["People", "Hendrick Beiker", "Jan van Riebeeck", "Cornelis Speelman"],
  ["Places", "Cormandel", "Batavia", "Nagapattinam"],
  ["Organisations", "VOC", "Raad van Indie"],
];

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
  onExpand: () => void;
}

function CollapsedMetadataRail({ onExpand }: CollapsedMetadataRailProps) {
  return (
    <DocumentDetailIconRail className="h-full w-full border-r-0 bg-neutral-900">
      <DocumentDetailRailButton
        aria-label="Expand content warning"
        className="h-s72 border-b-0 text-vermilion-500"
        icon={<IconDocumentFrameAlert className="h-s20 w-s20" />}
        onPress={onExpand}
      />

      {SIDEBAR_ITEMS.map((item) => (
        <DocumentDetailRailButton
          key={item.label}
          aria-label={`Expand ${item.label}`}
          className="h-s72 border-b-0"
          icon={item.icon}
          label={item.railLabel}
          onPress={onExpand}
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

function ContentWarningPanel() {
  return (
    <div className="w-full px-s24 py-s20 font-sans">
      <div className="flex items-start gap-s12">
        <p className="text-sm leading-5">
          The Dutch East India Company archives (and consequently their
          transcriptions) and its document descriptions bear harmful and
          discriminatory language. They also record a wide range of events,
          intentions and perspectives that are violent and can cause distress.
          To read more about the GLOBALISE project’s efforts to address
          problematic content, see [here:hyperlink to long read] 
        </p>
      </div>
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
    <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-s12 text-xs leading-4">
      <div className="text-[10px] leading-3 text-neutral-500">{label}</div>
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
      className="flex h-s24 items-center text-xs leading-4 text-brand-white"
      style={{ paddingLeft: level * 18 }}
    >
      {level > 0 && (
        <span className="mr-s8 w-s12 shrink-0 text-right text-neutral-500">
          ↳
        </span>
      )}
      {isCurrent ? (
        <>
          <span className="mr-s8 text-neutral-400">→</span>
          <span className="border border-neutral-500 bg-neutral-600 px-s4 leading-5">
            {label}
          </span>
        </>
      ) : (
        <span className="whitespace-nowrap">{label}</span>
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

      <div className="overflow-x-auto px-s24 py-s8 [scrollbar-width:thin] [scrollbar-color:var(--neutral-600)_transparent]">
        <div className="flex w-200.25 flex-col gap-s2">
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
  buttonRef,
}: {
  title: string;
  isSelected?: boolean;
  buttonRef?: React.Ref<HTMLButtonElement>;
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className={cn(
        "grid w-full grid-cols-[1rem_minmax(0,1fr)_1.5rem] items-start gap-s8 py-s12 text-left text-sm leading-4 text-brand-white transition-colors hover:text-brand-white/75",
        isSelected && "border-t border-neutral-500 font-bold",
      )}
    >
      <IconDocument className="mt-px h-s16 w-s16 shrink-0" />
      <span className="min-w-0">{title}</span>
      <SidebarDisclosureIcon isExpanded={isSelected} />
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
            buttonRef={selectedDocumentRef}
          />

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
        </div>

        {visibleAfterEntries.map((item) => (
          <TableOfContentsEntry key={item.title} title={item.title} />
        ))}
      </div>
    </div>
  );
}

function IdentifiedPanel() {
  return (
    <div className="w-full px-s24 py-s16 font-sans">
      <div className="flex flex-col gap-s16">
        {IDENTIFIED_ENTITIES.map(([group, ...entities]) => (
          <section key={group} className="flex flex-col gap-s8">
            <h3 className="text-xs uppercase text-brand-white/45">{group}</h3>
            <div className="flex flex-wrap gap-s8">
              {entities.map((entity) => (
                <button
                  key={entity}
                  type="button"
                  className="border border-brand-white/15 px-s8 py-s4 text-sm leading-5 text-brand-white transition-colors hover:border-brand-white/35"
                >
                  {entity}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
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

function ExpandedMetadataSidebar() {
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(
    () => new Set(["content-warning"]),
  );

  const toggleSection = React.useCallback((sectionId: string) => {
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

  return (
    <DocumentDetailMetadataSidebar className="w-full overflow-hidden border-r-0">
      <ExpandedSidebarSection
        id="content-warning"
        variant="warning"
        icon={<IconDocumentFrameAlert className="h-s20 w-s20" />}
        label="Content Warning"
        isExpanded={expandedSections.has("content-warning")}
        onToggle={() => toggleSection("content-warning")}
      >
        <ContentWarningPanel />
      </ExpandedSidebarSection>

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
          onToggle={() => toggleSection(item.id)}
        >
          {item.id === "inventory" && <ArchivePanel />}
          {item.id === "table-of-contents" && <TableOfContentsPanel />}
          {item.id === "identified" && <IdentifiedPanel />}
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
    <DocumentDetailCanvas className="bg-neutral-500 px-s24 py-s48">
      <DocumentDetailFloatingToolbar className={FLOATING_TOOLBAR_REVEAL_CLASS}>
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

      <div className="relative h-full max-h-[calc(100%-var(--s32))] aspect-1102/1566 border border-brand-black/70 bg-parchment-200 shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
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
      <DocumentDetailFloatingToolbar
        className={cn(
          "left-auto right-s24 gap-s4 px-s4",
          FLOATING_TOOLBAR_REVEAL_CLASS,
        )}
      >
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

      <div className="mx-auto flex max-w-114 flex-col gap-s4 pt-s24">
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
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false);

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
            <ExpandedMetadataSidebar />
          ) : (
            <CollapsedMetadataRail
              onExpand={() => setIsSidebarExpanded(true)}
            />
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
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <DocumentDetailSegmentedControl className="h-s36 gap-0 overflow-hidden rounded-[6px] bg-transparent p-0">
              <DocumentDetailSegment
                isActive
                className="h-s36 rounded-none rounded-l-[6px] border-r border-brand-black/70 px-s12 text-sm leading-5"
                icon={<IconScan className="h-[18px] w-[18px]" />}
              >
                Scan
              </DocumentDetailSegment>
              <DocumentDetailSegment
                isActive
                className="h-s36 rounded-none rounded-r-[6px] px-s12 text-sm leading-5"
                icon={<IconTranscription className="h-[18px] w-[18px]" />}
              >
                Text
              </DocumentDetailSegment>
            </DocumentDetailSegmentedControl>
            <DocumentDetailSegmentedControl className="h-s36 bg-transparent text-brand-white">
              <DocumentDetailSegment isActive className="h-s36 px-s12">
                N
              </DocumentDetailSegment>
              <DocumentDetailSegment className="h-s36 px-s12 text-brand-white">
                D
              </DocumentDetailSegment>
            </DocumentDetailSegmentedControl>
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
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconPictureInPicture className="h-s16 w-s16" />}
            />
            <DocumentDetailToolButton
              aria-label="Open document"
              className={TOP_BAR_ICON_BUTTON_CLASS}
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
            "justify-center gap-s96 border-t-0 bg-neutral-900 text-xs text-neutral-300 transition-[padding-left] duration-200 ease-out",
            isSidebarExpanded
              ? "pl-overlay-document-viewer-sidebar-width"
              : "pl-overlay-document-viewer-rail-width",
          ].join(" ")}
        >
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
