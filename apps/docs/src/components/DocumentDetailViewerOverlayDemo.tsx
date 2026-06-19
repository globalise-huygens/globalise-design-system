"use client";

import {
  Button,
  cn,
  DocumentDetailBarGroup,
  DocumentDetailBody,
  DocumentDetailBottomBar,
  DocumentDetailCheckbox,
  DocumentDetailEntityHighlightMenu,
  DocumentDetailIconRail,
  DocumentDetailMetadataSidebar,
  DocumentDetailMetadataSidebarBadge,
  DocumentDetailMetadataSidebarButton,
  DocumentDetailOverlay,
  DocumentDetailRailButton,
  DocumentDetailReferenceCard,
  DocumentDetailSegmentedToggleGroup,
  DocumentDetailSegmentedToggleItem,
  DocumentDetailSplitViewer,
  DocumentDetailTooltip,
  DocumentDetailTopBar,
  DocumentDetailViewerPane,
  EntityTag,
  IconClose,
  IconEntities,
  IconEntityDocument,
  IconEvents,
  IconExpandSection,
  IconExternalLink,
  IconLayoutElements,
  IconLeft,
  IconLeftFirst,
  IconPairedPage,
  IconPictureInPicture,
  IconRight,
  IconRightLast,
  IconScan,
  IconSearch,
  IconSidebar,
  IconSwap,
  IconTranscription,
} from "@globalise/design-system";
import * as React from "react";
import {
  BOTTOM_BAR_ICON_BUTTON_CLASS,
  ContentWarningTopBarControl,
  CopyUriButton,
  ManuscriptCanvas,
  NumericJumpField,
  TooltipIconButton,
  TOP_BAR_ICON_BUTTON_CLASS,
  TranscriptCanvas,
} from "./document-detail-overlay-demo/controls";
import {
  ACTIVE_TOC_ARCHIVE_SCAN,
  ACTIVE_TOC_DOCUMENT_ID,
  ACTIVE_TOC_SCAN,
  CLASSIFIED_ENTITY_TAG_GROUPS,
  getDocumentIndex,
  getDocumentUri,
  getNaIdentifierUrl,
  getScanReference,
  getScanReferenceByArchiveScan,
  getScanReferenceByDocumentScan,
  getScanUri,
  getSearchHitByIndex,
  getSearchHitIndexByArchiveScan,
  getShortNaIdentifier,
  getTagOccurrenceScan,
  IDENTIFIED_ENTITY_TAGS,
  INVENTORY_HIERARCHY,
  INVENTORY_METADATA,
  INVENTORY_SETTLEMENTS,
  INVENTORY_URI,
  SEARCH_HITS,
  SELECTED_DOCUMENT_URI,
  type SelectedScanReference,
  SIDEBAR_ITEMS,
  TABLE_OF_CONTENTS_DOCUMENTS,
  type TableOfContentsDocument,
  type TableOfContentsScan,
  type TagNavigationTarget,
  TOC_SCANS,
} from "./document-detail-overlay-demo/data";
import { DemoScanPage } from "./document-detail-overlay-demo/DemoScanPage";

function SidebarDisclosureIcon({
  isExpanded = false,
}: {
  isExpanded?: boolean;
}) {
  return (
    <IconExpandSection
      className={cn(
        "h-s20 w-s20 text-current transition-transform duration-100 ease-out motion-reduce:transition-none",
        isExpanded && "rotate-180",
      )}
    />
  );
}

function MiniWindowFrame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pointer-events-none absolute bottom-s16 right-s16 z-20 w-33 overflow-hidden border border-brand-black/30 bg-brand-white shadow-[0_8px_18px_rgba(0,0,0,0.22)]">
      <div className="flex h-s16 items-center justify-between border-b border-brand-black/10 bg-brand-white px-s6">
        <span className="font-sans text-[8px] uppercase leading-2 text-neutral-500">
          {label}
        </span>
        <span className="font-sans text-[8px] uppercase leading-2 text-brand-mint">
          Mini
        </span>
      </div>
      <div className="relative h-23 bg-brand-white">{children}</div>
    </div>
  );
}

function MiniTranscriptWindow() {
  return (
    <MiniWindowFrame label="Transcription">
      <div className="flex h-full flex-col gap-1.25 px-s8 py-s8">
        {Array.from({ length: 9 }, (_, index) => (
          <span
            key={index}
            className={cn(
              "block h-0.5 rounded-full bg-neutral-200",
              index === 5 ? "w-[86%]" : index % 3 === 0 ? "w-[78%]" : "w-full",
            )}
          />
        ))}
      </div>
      <div className="absolute bottom-s8 right-s8 h-5.5 w-10 border border-brand-mint/65 bg-brand-white/95" />
    </MiniWindowFrame>
  );
}

function MiniScanWindow() {
  return (
    <MiniWindowFrame label="Scan">
      <DemoScanPage label="Mini scan preview" className="h-full w-full" />
      <div className="absolute left-8.5 top-5 h-8 w-11.5 border border-brand-mint/75 bg-brand-mint/12" />
    </MiniWindowFrame>
  );
}

const ENTITY_HIGHLIGHT_COLOR_SCHEMES: Record<
  string,
  {
    rowClassName: string;
    subRowClassName: string;
    textClassName: string;
  }
> = {
  Persons: {
    rowClassName: "border-rose-300/35 bg-rose-300/10",
    subRowClassName: "border-rose-300/25 bg-rose-300/6",
    textClassName: "text-rose-200",
  },
  Places: {
    rowClassName: "border-green-300/35 bg-green-300/10",
    subRowClassName: "border-lime-300/30 bg-lime-300/8",
    textClassName: "text-green-200",
  },
  Commodities: {
    rowClassName: "border-orange-300/35 bg-orange-300/10",
    subRowClassName: "border-amber-300/30 bg-amber-300/8",
    textClassName: "text-orange-200",
  },
  Documents: {
    rowClassName: "border-amber-300/35 bg-amber-300/10",
    subRowClassName: "border-amber-300/30 bg-amber-300/8",
    textClassName: "text-amber-200",
  },
  Dates: {
    rowClassName: "border-sky-300/35 bg-sky-300/10",
    subRowClassName: "border-sky-300/30 bg-sky-300/8",
    textClassName: "text-sky-200",
  },
  Ships: {
    rowClassName: "border-stone-300/35 bg-stone-300/10",
    subRowClassName: "border-slate-300/30 bg-slate-300/8",
    textClassName: "text-stone-200",
  },
  Organisations: {
    rowClassName: "border-purple-300/35 bg-purple-300/10",
    subRowClassName: "border-blue-300/30 bg-blue-300/8",
    textClassName: "text-purple-200",
  },
  Polities: {
    rowClassName: "border-neutral-400/30 bg-neutral-400/8",
    subRowClassName: "border-neutral-400/25 bg-neutral-400/6",
    textClassName: "text-neutral-300",
  },
  Quantity: {
    rowClassName: "border-neutral-400/30 bg-neutral-400/8",
    subRowClassName: "border-neutral-400/25 bg-neutral-400/6",
    textClassName: "text-neutral-300",
  },
};

function getEntityHighlightCategories() {
  return CLASSIFIED_ENTITY_TAG_GROUPS.map((group) => {
    const scheme =
      ENTITY_HIGHLIGHT_COLOR_SCHEMES[group.category] ??
      ENTITY_HIGHLIGHT_COLOR_SCHEMES.Quantity;

    return {
      id: group.category,
      label: group.category,
      count: group.count,
      icon: group.icon,
      rowClassName: scheme.rowClassName,
      subRowClassName: scheme.subRowClassName,
      textClassName: scheme.textClassName,
      subcategories: group.subcategories.map((subcategory) => ({
        id: `${group.category}::${subcategory.label}`,
        label: subcategory.label,
        count: subcategory.count,
      })),
    };
  });
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
          className="border-b-0"
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
          <span className="inline-flex min-w-0 items-center gap-s4">
            <span className="border border-neutral-500 bg-neutral-600 px-s4 text-sm leading-5">
              {label}
            </span>
            <CopyUriButton
              uri={INVENTORY_URI}
              ariaLabel={`Copy inventory ${label} URI`}
              className="h-s20 w-s20"
            />
          </span>
        </>
      ) : (
        <>
          {level > 0 && (
            <span className="mr-s8 w-s12 shrink-0 text-right text-neutral-500">
              ↳
            </span>
          )}
          <span className="min-w-0 flex-1 whitespace-normal wrap-break-words">
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
              <EntityTag type="place" href="#" className="text-xs">
                {settlement}
              </EntityTag>
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
  onSelect,
  copyAction,
}: {
  title: string;
  isSelected?: boolean;
  isExpanded?: boolean;
  buttonRef?: React.Ref<HTMLButtonElement>;
  onToggle?: () => void;
  onSelect?: () => void;
  copyAction?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative grid w-full grid-cols-[minmax(0,1fr)_1.25rem_1.5rem] items-start border-t border-brand-white/10 before:absolute before:bottom-s8 before:left-0 before:top-s8 before:w-px before:bg-transparent hover:before:bg-brand-white/30",
        isSelected && "before:w-0.5 before:bg-brand-white",
      )}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-current={isSelected ? "true" : undefined}
        onClick={onSelect}
        className={cn(
          "grid w-full grid-cols-[1rem_minmax(0,1fr)] items-start gap-s8 py-s12 pl-s8 pr-s4 text-left text-sm font-normal leading-4 text-brand-white transition-colors duration-75 ease-out hover:text-brand-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring motion-reduce:transition-none",
        )}
      >
        <IconEntityDocument className="mt-px h-s16 w-s16 shrink-0" />
        <span className="min-w-0">{title}</span>
      </button>
      {copyAction && (
        <div className="flex h-s40 items-start justify-center pt-s12">
          {copyAction}
        </div>
      )}
      <button
        type="button"
        aria-label={isExpanded ? "Collapse document" : "Expand document"}
        aria-expanded={isExpanded}
        onClick={onToggle}
        className="flex h-s40 w-s24 items-start justify-center py-s12 text-brand-white transition-colors duration-75 ease-out hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring motion-reduce:transition-none"
      >
        <SidebarDisclosureIcon isExpanded={isExpanded} />
      </button>
    </div>
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
          <EntityTag
            type={
              label === "Location"
                ? "place"
                : label === "Type"
                  ? "document"
                  : "organisation"
            }
            href="#"
            className="text-xs"
          >
            {value}
          </EntityTag>
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
  scan,
  snippet,
  cardRef,
  isSelected = false,
  onSelect,
}: {
  scan: TableOfContentsScan;
  snippet?: React.ReactNode;
  cardRef?: React.Ref<HTMLDivElement>;
  isSelected?: boolean;
  onSelect: () => void;
}) {
  return (
    <DocumentDetailReferenceCard
      ref={cardRef}
      isSelected={isSelected}
      thumbnail={
        <button
          type="button"
          aria-label={`Select archive scan ${scan.archiveScan}, document scan ${scan.documentScan}`}
          onClick={onSelect}
          className="absolute inset-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <DemoScanPage label="Scan thumbnail placeholder" />
        </button>
      }
      heading={
        <div className="inline-flex min-w-0 items-center gap-s6">
          <button
            type="button"
            aria-label={`Select archive scan ${scan.archiveScan}, document scan ${scan.documentScan}`}
            onClick={onSelect}
            className="inline-flex min-w-0 items-baseline gap-s6 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <span className="font-sans text-sm leading-5 text-brand-white">
              Scan {scan.archiveScan}
            </span>
            <span className="text-xs leading-4 text-neutral-500">|</span>
            <span className="text-xs leading-4 text-neutral-400">
              in doc. {scan.documentScan}
            </span>
          </button>
          <CopyUriButton
            uri={getScanUri(scan.archiveScan)}
            ariaLabel={`Copy archive scan ${scan.archiveScan} URI`}
            className="h-s20 w-s20"
          />
        </div>
      }
      snippet={
        snippet ? (
          <button
            type="button"
            aria-label={`Select archive scan ${scan.archiveScan}`}
            onClick={onSelect}
            className="block w-full text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <span
              className={cn(
                "line-clamp-2 font-serif text-xs italic leading-4 text-neutral-200 [&_strong]:font-semibold [&_strong]:text-parchment-500",
              )}
            >
              {snippet}
            </span>
          </button>
        ) : undefined
      }
      meta={
        <a
          href={getNaIdentifierUrl(scan.id)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex max-w-full items-center gap-s4 font-sans text-xs leading-4 text-neutral-400 underline-offset-2 hover:text-brand-white hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          )}
        >
          <span className="min-w-0 truncate">
            NA Identifier: {getShortNaIdentifier(scan.id)}
          </span>
          <IconExternalLink className="h-s12 w-s12 shrink-0" />
        </a>
      }
    />
  );
}

function TableOfContentsPanel({
  selectedScan,
  onSelectScan,
  searchQuery,
}: {
  selectedScan: SelectedScanReference;
  onSelectScan: (scan: SelectedScanReference) => void;
  searchQuery: string;
}) {
  const [searchHitsOnly, setSearchHitsOnly] = React.useState(false);
  const [expandedDocumentIds, setExpandedDocumentIds] = React.useState<
    Set<string>
  >(() => new Set([ACTIVE_TOC_DOCUMENT_ID]));
  const [selectedDocumentId, setSelectedDocumentId] = React.useState(
    ACTIVE_TOC_DOCUMENT_ID,
  );
  const [selectedArchiveScan, setSelectedArchiveScan] = React.useState(
    ACTIVE_TOC_ARCHIVE_SCAN,
  );
  const selectedDocumentRef = React.useRef<HTMLButtonElement>(null);
  const activeScanRef = React.useRef<HTMLDivElement>(null);

  const visibleDocuments = searchHitsOnly
    ? TABLE_OF_CONTENTS_DOCUMENTS.filter((document) =>
        document.scans.some((scan) => scan.hasResults),
      )
    : TABLE_OF_CONTENTS_DOCUMENTS;

  const selectedDocument = TABLE_OF_CONTENTS_DOCUMENTS.find(
    (document) => document.id === selectedDocumentId,
  );
  const selectedTocScan = selectedDocument?.scans.find(
    (scan) => scan.archiveScan === selectedArchiveScan,
  );

  React.useEffect(() => {
    const nextSelectedDocument = TABLE_OF_CONTENTS_DOCUMENTS.find(
      (document) =>
        document.scans.length === selectedScan.documentScanTotal &&
        document.scans.some(
          (scan) => scan.archiveScan === selectedScan.archiveScan,
        ),
    );

    if (!nextSelectedDocument) {
      return;
    }

    setSelectedDocumentId(nextSelectedDocument.id);
    setSelectedArchiveScan(selectedScan.archiveScan);
    setExpandedDocumentIds((current) => {
      const next = new Set(current);
      next.add(nextSelectedDocument.id);
      return next;
    });
  }, [selectedScan.archiveScan, selectedScan.documentScanTotal]);

  React.useEffect(() => {
    window.requestAnimationFrame(() => {
      activeScanRef.current?.scrollIntoView({
        block: "nearest",
        behavior: "auto",
      });
    });
  }, [selectedArchiveScan]);

  const expandDocument = React.useCallback((documentId: string) => {
    setExpandedDocumentIds((current) => {
      const next = new Set(current);
      next.add(documentId);
      return next;
    });
  }, []);

  const toggleDocument = (documentId: string) => {
    setExpandedDocumentIds((current) => {
      const next = new Set(current);

      if (next.has(documentId)) {
        next.delete(documentId);
      } else {
        next.add(documentId);
      }

      return next;
    });
  };

  const selectDocument = (document: TableOfContentsDocument) => {
    const firstVisibleScan =
      (searchHitsOnly && document.scans.find((scan) => scan.hasResults)) ||
      document.scans[0];

    setSelectedDocumentId(document.id);
    expandDocument(document.id);

    if (firstVisibleScan) {
      setSelectedArchiveScan(firstVisibleScan.archiveScan);
      onSelectScan(getScanReference(document, firstVisibleScan));
    }
  };

  const selectScan = (
    document: TableOfContentsDocument,
    scan: TableOfContentsScan,
  ) => {
    setSelectedDocumentId(document.id);
    setSelectedArchiveScan(scan.archiveScan);
    onSelectScan(getScanReference(document, scan));
    expandDocument(document.id);
  };

  const scrollToSelectedDocument = () => {
    expandDocument(selectedDocumentId);

    window.requestAnimationFrame(() => {
      selectedDocumentRef.current?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
  };

  const scrollToActiveScan = () => {
    expandDocument(selectedDocumentId);

    window.requestAnimationFrame(() => {
      activeScanRef.current?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
  };

  return (
    <div className="flex w-full flex-col font-sans">
      <div className="sticky top-0 z-20 flex items-center justify-between gap-s8 border-b border-brand-white/10 bg-neutral-800 px-s24 py-s12">
        <span className="group/hits-only relative inline-flex">
          <DocumentDetailCheckbox
            aria-label="Show only documents and scans with search hits"
            isSelected={searchHitsOnly}
            onChange={setSearchHitsOnly}
          >
            Hits only
          </DocumentDetailCheckbox>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-[calc(100%+var(--s8))] z-70 w-max max-w-60 -translate-y-1 overflow-hidden border border-brand-white/10 bg-neutral-700 p-s12 font-sans text-[10px] leading-3 text-brand-white opacity-0 shadow-[0_6px_14px_rgba(0,0,0,0.25),0_25px_25px_rgba(0,0,0,0.22),0_56px_34px_rgba(0,0,0,0.13),0_100px_40px_rgba(0,0,0,0.04)] transition-[opacity,transform] duration-75 ease-out group-focus-within/hits-only:translate-y-0 group-focus-within/hits-only:opacity-100 group-hover/hits-only:translate-y-0 group-hover/hits-only:opacity-100 motion-reduce:transition-none"
          >
            {`Show search hits only for "${searchQuery}"`}
          </span>
        </span>

        <div
          aria-label="Jump to current selection"
          className="flex shrink-0 items-center gap-s8"
        >
          <span className="text-[10px] leading-3 text-brand-white/45">
            Go to
          </span>
          <div className="flex items-center gap-s8">
            <DocumentDetailTooltip label="Go to current document">
              <button
                type="button"
                aria-label="Jump to selected document"
                onClick={scrollToSelectedDocument}
                className="inline-flex h-s28 items-center gap-s8 px-s2 text-[10px] leading-3 text-brand-white transition-colors duration-75 ease-out hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
              >
                <IconEntityDocument className="h-s12 w-s12" />
                Doc
              </button>
            </DocumentDetailTooltip>
            <DocumentDetailTooltip
              label={`Go to current scan ${selectedTocScan?.documentScan ?? ACTIVE_TOC_SCAN}`}
            >
              <button
                type="button"
                aria-label={`Jump to selected document scan ${selectedTocScan?.documentScan ?? ACTIVE_TOC_SCAN}`}
                onClick={scrollToActiveScan}
                className="inline-flex h-s28 items-center gap-s8 px-s2 text-[10px] leading-3 text-brand-white transition-colors duration-75 ease-out hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
              >
                <IconScan className="h-s12 w-s12" />
                Scan {selectedTocScan?.documentScan ?? ACTIVE_TOC_SCAN}
              </button>
            </DocumentDetailTooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-s24 pb-s32">
        {visibleDocuments.map((document) => {
          const isExpanded = expandedDocumentIds.has(document.id);
          const isSelectedDocument = document.id === selectedDocumentId;
          const visibleScans = searchHitsOnly
            ? document.scans.filter((scan) => scan.hasResults)
            : document.scans;

          return (
            <div key={document.id} className="flex flex-col gap-s12">
              <TableOfContentsEntry
                title={document.title}
                isSelected={isSelectedDocument}
                isExpanded={isExpanded}
                buttonRef={isSelectedDocument ? selectedDocumentRef : undefined}
                onSelect={() => selectDocument(document)}
                onToggle={() => toggleDocument(document.id)}
                copyAction={
                  <CopyUriButton
                    uri={
                      document.id === ACTIVE_TOC_DOCUMENT_ID
                        ? SELECTED_DOCUMENT_URI
                        : getDocumentUri(document.id)
                    }
                  />
                }
              />

              {isExpanded && (
                <>
                  <div className="flex flex-col gap-s10 px-s24 py-s2">
                    {document.metadata?.map(([label, value, suffix]) => (
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
                        scan={scan}
                        snippet={scan.snippet}
                        isSelected={
                          isSelectedDocument &&
                          scan.archiveScan === selectedArchiveScan
                        }
                        onSelect={() => selectScan(document, scan)}
                        cardRef={
                          isSelectedDocument &&
                          scan.archiveScan === selectedArchiveScan
                            ? activeScanRef
                            : undefined
                        }
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
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
          <IconExpandSection className="h-s16 w-s16 rotate-180 text-brand-white" />
        </div>

        <div className="flex flex-col gap-s4">
          {CLASSIFIED_ENTITY_TAG_GROUPS.map((group) => (
            <div key={group.category} className="flex flex-col">
              <div className="flex h-s24 items-center justify-between gap-s8 text-xs leading-3">
                <button
                  type="button"
                  disabled={group.count <= 0}
                  className={cn(
                    "flex min-w-0 items-center gap-s8 px-s8 text-left text-brand-white transition-colors duration-75 ease-out hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none disabled:cursor-not-allowed disabled:text-brand-white/30 disabled:hover:bg-transparent",
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
                    className="flex h-s24 w-s24 shrink-0 items-center justify-center text-brand-white transition-colors duration-75 ease-out hover:bg-brand-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
                    onClick={() => toggleClassifiedCategory(group.category)}
                  >
                    <IconExpandSection
                      className={cn(
                        "h-s16 w-s16 transition-transform duration-100 ease-out motion-reduce:transition-none",
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
                      "ml-s24 flex h-s24 min-w-0 items-center gap-s8 px-s8 text-left text-xs leading-3 text-brand-white transition-colors duration-75 ease-out hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none",
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
          <IconExpandSection className="h-s16 w-s16 rotate-180 text-brand-white" />
        </div>

        <div className="mb-s12 flex flex-col gap-s8">
          <label className="flex h-s28 items-center gap-s8 border border-brand-white/10 bg-neutral-800 px-s8 text-xs leading-4 text-brand-white">
            <IconSearch className="h-s12 w-s12 shrink-0 text-brand-white/55" />
            <input
              aria-label="Search entities"
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
            <DocumentDetailSegmentedToggleGroup
              size="compact"
              aria-label="Entity sort controls"
              selectionMode="single"
              disallowEmptySelection
              selectedKeys={new Set([entitySort])}
              onSelectionChange={(keys) => {
                const [nextSort] = Array.from(keys);

                if (
                  nextSort === "sequential" ||
                  nextSort === "alphabet" ||
                  nextSort === "amount"
                ) {
                  setEntitySort(nextSort);
                }
              }}
            >
              {[
                ["sequential", "Sequential"],
                ["alphabet", "Alphabet"],
                ["amount", "Amount"],
              ].map(([value, label]) => (
                <DocumentDetailSegmentedToggleItem
                  key={value}
                  id={value}
                  size="compact"
                  className="min-w-0 px-s8 text-[10px] leading-3"
                >
                  {label}
                </DocumentDetailSegmentedToggleItem>
              ))}
            </DocumentDetailSegmentedToggleGroup>

            <div className="flex items-center gap-s8">
              <DocumentDetailCheckbox
                isSelected={isTypeGroupingEnabled}
                onChange={setIsTypeGroupingEnabled}
              >
                Type
              </DocumentDetailCheckbox>
              <DocumentDetailTooltip
                label={
                  entitySortDirection === "ascending"
                    ? "First to last"
                    : "Last to first"
                }
              >
                <button
                  type="button"
                  aria-label={
                    entitySortDirection === "ascending"
                      ? "Sort last to first"
                      : "Sort first to last"
                  }
                  className="flex h-s28 w-s28 items-center justify-center text-brand-white transition-colors duration-75 ease-out hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
                  onClick={() =>
                    setEntitySortDirection((current) =>
                      current === "ascending" ? "descending" : "ascending",
                    )
                  }
                >
                  <IconSwap
                    className={cn(
                      "h-s16 w-s16 transition-transform duration-100 ease-out motion-reduce:transition-none",
                      entitySortDirection === "ascending"
                        ? "rotate-90"
                        : "-rotate-90",
                    )}
                  />
                </button>
              </DocumentDetailTooltip>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          {visibleIdentifiedEntities.map((entity) => (
            <button
              key={entity.name}
              type="button"
              className={cn(
                "flex h-s24 items-center gap-s8 px-s8 text-left text-xs leading-3 text-brand-white transition-colors duration-75 ease-out hover:bg-brand-white/5 hover:text-brand-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none",
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
  selectedScan,
  onSelectScan,
  searchQuery,
}: {
  expandedSections: Set<string>;
  onToggleSection: (sectionId: string) => void;
  activeTagTargetId?: string;
  onSelectTagTarget: (target: TagNavigationTarget) => void;
  selectedScan: SelectedScanReference;
  onSelectScan: (scan: SelectedScanReference) => void;
  searchQuery: string;
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
          {item.id === "table-of-contents" && (
            <TableOfContentsPanel
              selectedScan={selectedScan}
              onSelectScan={onSelectScan}
              searchQuery={searchQuery}
            />
          )}
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

export function DocumentDetailViewerOverlayDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true);
  const [isScanVisible, setIsScanVisible] = React.useState(true);
  const [isTextVisible, setIsTextVisible] = React.useState(true);
  const [isViewerOrderSwapped, setIsViewerOrderSwapped] = React.useState(false);
  const [isPairedPageView, setIsPairedPageView] = React.useState(false);
  const [isMiniWindowEnabled, setIsMiniWindowEnabled] = React.useState(false);
  const [transcriptMode, setTranscriptMode] = React.useState<"n" | "d">("n");
  const [selectedEntityHighlightKeys, setSelectedEntityHighlightKeys] =
    React.useState<Set<string>>(() => new Set());
  const [areEventTagsHighlighted, setAreEventTagsHighlighted] =
    React.useState(false);
  const [areLayoutElementsHighlighted, setAreLayoutElementsHighlighted] =
    React.useState(false);
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(
    () => new Set(["inventory", "table-of-contents"]),
  );
  const [currentScan, setCurrentScan] = React.useState(ACTIVE_TOC_SCAN);
  const [currentArchiveScan, setCurrentArchiveScan] = React.useState(
    ACTIVE_TOC_ARCHIVE_SCAN,
  );
  const [currentDocumentScanTotal, setCurrentDocumentScanTotal] =
    React.useState(TOC_SCANS.length);
  const [currentSearchHit, setCurrentSearchHit] = React.useState(
    () => getSearchHitIndexByArchiveScan(ACTIVE_TOC_ARCHIVE_SCAN) ?? 1,
  );
  const [activeTagTarget, setActiveTagTarget] =
    React.useState<TagNavigationTarget>();
  const [currentTagOccurrence, setCurrentTagOccurrence] = React.useState(1);
  const activeSearchQuery = "prins Eugenius";

  const maxSearchHit = SEARCH_HITS.length;
  const entityHighlightCategories = React.useMemo(
    () => getEntityHighlightCategories(),
    [],
  );

  const selectViewerScan = React.useCallback((scan: SelectedScanReference) => {
    setCurrentScan(scan.documentScan);
    setCurrentArchiveScan(scan.archiveScan);
    setCurrentDocumentScanTotal(scan.documentScanTotal);
    const searchHit = getSearchHitIndexByArchiveScan(scan.archiveScan);

    if (searchHit) {
      setCurrentSearchHit(searchHit);
    }
  }, []);

  const setViewerScan = React.useCallback(
    (nextScan: number | ((current: number) => number)) => {
      const nextDocumentScan =
        typeof nextScan === "function" ? nextScan(currentScan) : nextScan;
      const nextScanReference = getScanReferenceByDocumentScan(
        currentArchiveScan,
        nextDocumentScan,
        currentDocumentScanTotal,
      );

      if (nextScanReference) {
        selectViewerScan(nextScanReference);
      }
    },
    [
      currentArchiveScan,
      currentDocumentScanTotal,
      currentScan,
      selectViewerScan,
    ],
  );

  const currentDocumentIndex = React.useMemo(
    () => getDocumentIndex(currentArchiveScan, currentDocumentScanTotal),
    [currentArchiveScan, currentDocumentScanTotal],
  );
  const isAtFirstScan = currentScan === 1;
  const isAtLastScan = currentScan === currentDocumentScanTotal;
  const prevDocument = TABLE_OF_CONTENTS_DOCUMENTS[currentDocumentIndex - 1];
  const nextDocument = TABLE_OF_CONTENTS_DOCUMENTS[currentDocumentIndex + 1];

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
      setViewerScan(getTagOccurrenceScan(target, 0, currentDocumentScanTotal));
    },
    [currentDocumentScanTotal, setViewerScan],
  );

  const goToSearchHit = React.useCallback(
    (nextSearchHit: number) => {
      const searchHit = getSearchHitByIndex(nextSearchHit);

      if (!searchHit) {
        return;
      }

      setCurrentSearchHit(searchHit.hit);
      selectViewerScan(searchHit);
    },
    [selectViewerScan],
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
      setViewerScan(
        getTagOccurrenceScan(
          activeTagTarget,
          clampedOccurrence - 1,
          currentDocumentScanTotal,
        ),
      );
    },
    [activeTagTarget, currentDocumentScanTotal, setViewerScan],
  );

  React.useEffect(() => {
    const scanReference = getScanReferenceByArchiveScan(
      currentArchiveScan,
      currentDocumentScanTotal,
    );

    if (!scanReference) {
      return;
    }

    if (
      scanReference.documentScan !== currentScan ||
      scanReference.documentScanTotal !== currentDocumentScanTotal
    ) {
      setCurrentScan(scanReference.documentScan);
      setCurrentDocumentScanTotal(scanReference.documentScanTotal);
    }
  }, [currentArchiveScan, currentDocumentScanTotal, currentScan]);

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

  React.useEffect(() => {
    if (isScanVisible && isTextVisible) {
      setIsPairedPageView(false);
    }
  }, [isScanVisible, isTextVisible]);

  React.useEffect(() => {
    if (isScanVisible === isTextVisible) {
      setIsMiniWindowEnabled(false);
    }
  }, [isScanVisible, isTextVisible]);

  const selectedScanReference = {
    archiveScan: currentArchiveScan,
    documentScan: currentScan,
    documentScanTotal: currentDocumentScanTotal,
  };
  const canSwapViewers = isScanVisible && isTextVisible;
  const canUsePairedPageView = isScanVisible !== isTextVisible;
  const canUseMiniWindow = isScanVisible !== isTextVisible;
  const pairedScanReference =
    isPairedPageView && currentScan < currentDocumentScanTotal
      ? getScanReferenceByDocumentScan(
          currentArchiveScan,
          currentScan + 1,
          currentDocumentScanTotal,
        )
      : null;

  const scanPane = isScanVisible ? (
    <DocumentDetailViewerPane
      key="scan"
      className={cn(
        "relative",
        isTextVisible && !isViewerOrderSwapped
          ? "border-r border-brand-black"
          : "border-r-0",
      )}
    >
      <ManuscriptCanvas
        transcriptMode={transcriptMode}
        areLayoutElementsHighlighted={areLayoutElementsHighlighted}
        isPairedPageView={isPairedPageView}
        currentArchiveScan={currentArchiveScan}
        currentDocumentScan={currentScan}
        pairedArchiveScan={pairedScanReference?.archiveScan}
        pairedDocumentScan={pairedScanReference?.documentScan}
      />
      {isMiniWindowEnabled && <MiniTranscriptWindow />}
    </DocumentDetailViewerPane>
  ) : null;

  const textPane = isTextVisible ? (
    <DocumentDetailViewerPane
      key="text"
      className={cn(
        "relative border-r-0",
        isScanVisible && isViewerOrderSwapped && "border-r border-brand-black",
      )}
    >
      <TranscriptCanvas
        transcriptMode={transcriptMode}
        onTranscriptModeChange={setTranscriptMode}
        areLayoutElementsHighlighted={areLayoutElementsHighlighted}
        isPairedPageView={isPairedPageView}
        currentArchiveScan={currentArchiveScan}
        currentDocumentScan={currentScan}
        pairedArchiveScan={pairedScanReference?.archiveScan}
        pairedDocumentScan={pairedScanReference?.documentScan}
      />
      {isMiniWindowEnabled && <MiniScanWindow />}
    </DocumentDetailViewerPane>
  ) : null;

  const viewerPanes = isViewerOrderSwapped
    ? [textPane, scanPane]
    : [scanPane, textPane];

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
            "absolute bottom-0 left-0 top-0 z-10 overflow-hidden transition-[width] duration-150 ease-out motion-reduce:transition-none",
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
              selectedScan={selectedScanReference}
              onSelectScan={selectViewerScan}
              searchQuery={activeSearchQuery}
            />
          ) : (
            <CollapsedMetadataRail onExpandSection={expandSidebarSection} />
          )}
        </div>

        <DocumentDetailTopBar
          className={[
            "relative grid h-s64 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center border-b-0 bg-neutral-900 pr-s24 transition-[padding-left] duration-150 ease-out motion-reduce:transition-none",
            isSidebarExpanded
              ? "pl-[calc(var(--overlay-document-viewer-sidebar-width)+var(--s16))]"
              : "pl-[calc(var(--overlay-document-viewer-rail-width)+var(--s16))]",
          ].join(" ")}
        >
          <DocumentDetailBarGroup className="min-w-0 justify-self-start gap-s8">
            <TooltipIconButton
              aria-controls="document-detail-sidebar"
              aria-expanded={isSidebarExpanded}
              aria-label={isSidebarExpanded ? "Close sidebar" : "Open sidebar"}
              tooltip={isSidebarExpanded ? "Closes sidebar" : "Opens sidebar"}
              isActive={isSidebarExpanded}
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconSidebar className="h-s16 w-s16" />}
              onPress={() => setIsSidebarExpanded((current) => !current)}
            />
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <DocumentDetailSegmentedToggleGroup
              aria-label="Primary viewer mode controls"
              selectionMode="multiple"
              selectedKeys={
                new Set([
                  ...(isScanVisible ? ["scan"] : []),
                  ...(isTextVisible ? ["text"] : []),
                ])
              }
              onSelectionChange={(keys) => {
                const nextKeys = new Set(Array.from(keys).map(String));

                if (nextKeys.size === 0) {
                  return;
                }

                setIsScanVisible(nextKeys.has("scan"));
                setIsTextVisible(nextKeys.has("text"));
              }}
            >
              <DocumentDetailTooltip
                label={
                  isScanVisible ? "Closes scan viewer" : "Opens scan viewer"
                }
              >
                <DocumentDetailSegmentedToggleItem
                  id="scan"
                  aria-label={
                    isScanVisible ? "Close scan viewer" : "Open scan viewer"
                  }
                  icon={<IconScan className="h-4.5 w-4.5" />}
                >
                  Scan
                </DocumentDetailSegmentedToggleItem>
              </DocumentDetailTooltip>
              <DocumentDetailTooltip
                label={
                  isTextVisible
                    ? "Closes transcription viewer"
                    : "Opens transcription viewer"
                }
              >
                <DocumentDetailSegmentedToggleItem
                  id="text"
                  aria-label={
                    isTextVisible
                      ? "Close transcription viewer"
                      : "Open transcription viewer"
                  }
                  icon={<IconTranscription className="h-4.5 w-4.5" />}
                >
                  Text
                </DocumentDetailSegmentedToggleItem>
              </DocumentDetailTooltip>
            </DocumentDetailSegmentedToggleGroup>
          </DocumentDetailBarGroup>

          <ContentWarningTopBarControl className="z-40 justify-self-center" />

          <DocumentDetailBarGroup className="min-w-0 justify-self-end gap-s8">
            <TooltipIconButton
              aria-disabled={!canSwapViewers}
              aria-label={
                canSwapViewers ? "Swap panes" : "Swapping panes unavailable"
              }
              tooltip={
                canSwapViewers
                  ? "Swaps scan and transcription viewer"
                  : "Swapping is only available when both viewers are open"
              }
              className={cn(
                TOP_BAR_ICON_BUTTON_CLASS,
                !canSwapViewers &&
                  "cursor-not-allowed text-brand-white/30 data-hovered:bg-transparent",
              )}
              icon={<IconSwap className="h-s16 w-s16" />}
              onPress={
                canSwapViewers
                  ? () => setIsViewerOrderSwapped((current) => !current)
                  : undefined
              }
            />
            <TooltipIconButton
              aria-disabled={!canUseMiniWindow}
              aria-label={
                canUseMiniWindow
                  ? isMiniWindowEnabled
                    ? "Disable mini window"
                    : "Enable mini window"
                  : "Mini window unavailable"
              }
              tooltip={
                canUseMiniWindow
                  ? isMiniWindowEnabled
                    ? "Closes mini window"
                    : "Opens not active viewer in a small window"
                  : "Mini window is only available when one viewer is open"
              }
              className={cn(
                TOP_BAR_ICON_BUTTON_CLASS,
                !canUseMiniWindow &&
                  "cursor-not-allowed text-brand-white/30 data-hovered:bg-transparent",
              )}
              icon={<IconPictureInPicture className="h-s16 w-s16" />}
              isActive={isMiniWindowEnabled}
              onPress={
                canUseMiniWindow
                  ? () => setIsMiniWindowEnabled((current) => !current)
                  : undefined
              }
            />
            <TooltipIconButton
              aria-disabled={!canUsePairedPageView}
              aria-label={
                canUsePairedPageView
                  ? isPairedPageView
                    ? "Disable paired page view"
                    : "Enable paired page view"
                  : "Paired page view unavailable"
              }
              tooltip={
                canUsePairedPageView
                  ? isPairedPageView
                    ? "Disables paired page view"
                    : "Enables paired page view"
                  : "Paired page view is only available when one viewer is open"
              }
              className={cn(
                TOP_BAR_ICON_BUTTON_CLASS,
                !canUsePairedPageView &&
                  "cursor-not-allowed text-brand-white/30 data-hovered:bg-transparent",
              )}
              icon={<IconPairedPage className="h-s16 w-s16" />}
              isActive={isPairedPageView}
              onPress={
                canUsePairedPageView
                  ? () => setIsPairedPageView((current) => !current)
                  : undefined
              }
            />
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <DocumentDetailEntityHighlightMenu
              categories={entityHighlightCategories}
              selectedKeys={selectedEntityHighlightKeys}
              onSelectedKeysChange={setSelectedEntityHighlightKeys}
              triggerIcon={<IconEntities className="h-s16 w-s16" />}
              triggerClassName={TOP_BAR_ICON_BUTTON_CLASS}
            />
            <TooltipIconButton
              aria-label={
                areEventTagsHighlighted
                  ? "Hide event tags"
                  : "Highlight event tags"
              }
              tooltip={
                areEventTagsHighlighted
                  ? "Hide event tags"
                  : "Highlight event tags"
              }
              isActive={areEventTagsHighlighted}
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconEvents className="h-s16 w-s16" />}
              onPress={() => setAreEventTagsHighlighted((current) => !current)}
            />
            <TooltipIconButton
              aria-label={
                areLayoutElementsHighlighted
                  ? "Hide layout elements"
                  : "Highlight layout elements and show line numbers"
              }
              tooltip={
                areLayoutElementsHighlighted
                  ? "Hide layout elements"
                  : "Highlight layout elements and show line numbers"
              }
              isActive={areLayoutElementsHighlighted}
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconLayoutElements className="h-s16 w-s16" />}
              onPress={() =>
                setAreLayoutElementsHighlighted((current) => !current)
              }
            />
            <span className="font-sans text-xs text-brand-white/70">|</span>
            <TooltipIconButton
              aria-label="Close document detail viewer"
              tooltip="Close window"
              className={TOP_BAR_ICON_BUTTON_CLASS}
              icon={<IconClose className="h-s16 w-s16" />}
              onPress={() => setIsOpen(false)}
            />
          </DocumentDetailBarGroup>
        </DocumentDetailTopBar>

        <DocumentDetailBody
          className={[
            "transition-[padding-left] duration-150 ease-out motion-reduce:transition-none",
            isSidebarExpanded
              ? "pl-overlay-document-viewer-sidebar-width"
              : "pl-overlay-document-viewer-rail-width",
          ].join(" ")}
        >
          <DocumentDetailSplitViewer
            className={cn(
              isScanVisible && isTextVisible
                ? "lg:grid-cols-2"
                : "lg:grid-cols-1",
            )}
          >
            {viewerPanes}
          </DocumentDetailSplitViewer>
        </DocumentDetailBody>

        <DocumentDetailBottomBar
          className={[
            "h-s36! justify-center border-t-0 bg-neutral-900 text-xs text-neutral-300 transition-[padding-left] duration-150 ease-out motion-reduce:transition-none",
            activeTagTarget ? "gap-s48" : "gap-s96",
            isSidebarExpanded
              ? "pl-overlay-document-viewer-sidebar-width"
              : "pl-overlay-document-viewer-rail-width",
          ].join(" ")}
        >
          <DocumentDetailBarGroup className="gap-s24">
            <TooltipIconButton
              aria-label="First scan"
              tooltip="Go to first scan"
              tooltipPlacement="top"
              isDisabled={isAtFirstScan}
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconLeftFirst className="h-s16 w-s16" />}
              onPress={() => setViewerScan(1)}
            />
            <TooltipIconButton
              aria-label="Previous scan"
              tooltip={
                isAtFirstScan && prevDocument
                  ? "Previous document"
                  : "Go to previous scan"
              }
              tooltipPlacement="top"
              className={cn(
                BOTTOM_BAR_ICON_BUTTON_CLASS,
                isAtFirstScan && prevDocument && "text-brand-white",
              )}
              icon={<IconLeft className="h-s16 w-s16" />}
              onPress={() => {
                if (isAtFirstScan && prevDocument) {
                  selectViewerScan(
                    getScanReference(
                      prevDocument,
                      prevDocument.scans[prevDocument.scans.length - 1],
                    ),
                  );
                } else {
                  setViewerScan((current) => Math.max(current - 1, 1));
                }
              }}
            />
            <span className="inline-flex items-baseline gap-s8 leading-4">
              <span>Scan {currentArchiveScan}</span>
              <span className="text-neutral-500">|</span>
              <span>in doc.</span>
              <NumericJumpField
                ariaLabel="Go to document scan"
                value={currentScan}
                max={currentDocumentScanTotal}
                onChange={setViewerScan}
                tooltip="Type a scan number in this document"
              />
              of {currentDocumentScanTotal}
            </span>
            <TooltipIconButton
              aria-label="Next scan"
              tooltip={
                isAtLastScan && nextDocument
                  ? "Next document"
                  : "Go to next scan"
              }
              tooltipPlacement="top"
              className={cn(
                BOTTOM_BAR_ICON_BUTTON_CLASS,
                isAtLastScan && nextDocument && "text-brand-white",
              )}
              icon={<IconRight className="h-s16 w-s16" />}
              onPress={() => {
                if (isAtLastScan && nextDocument) {
                  selectViewerScan(
                    getScanReference(nextDocument, nextDocument.scans[0]),
                  );
                } else {
                  setViewerScan((current) =>
                    Math.min(current + 1, currentDocumentScanTotal),
                  );
                }
              }}
            />
            <TooltipIconButton
              aria-label="Last scan"
              tooltip="Go to last scan"
              tooltipPlacement="top"
              isDisabled={isAtLastScan}
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconRightLast className="h-s16 w-s16" />}
              onPress={() => setViewerScan(currentDocumentScanTotal)}
            />
          </DocumentDetailBarGroup>
          <DocumentDetailBarGroup className="gap-s24">
            <TooltipIconButton
              aria-label="Previous search hit"
              tooltip={`Go to previous search hit for "${activeSearchQuery}"`}
              tooltipPlacement="top"
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconLeft className="h-s16 w-s16" />}
              onPress={() => {
                goToSearchHit(currentSearchHit - 1);
              }}
            />
            <span className="group/search-hit-summary relative inline-flex items-baseline leading-4">
              search hits
              <NumericJumpField
                ariaLabel="Go to search hit"
                value={currentSearchHit}
                max={maxSearchHit}
                onChange={goToSearchHit}
                tooltip={`Type a search hit number for "${activeSearchQuery}"`}
              />
              of {maxSearchHit}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[calc(100%+var(--s8))] left-1/2 z-70 w-max max-w-60 -translate-x-1/2 translate-y-1 overflow-hidden border border-brand-white/10 bg-neutral-700 p-s12 font-sans text-[10px] leading-3 text-brand-white opacity-0 shadow-[0_6px_14px_rgba(0,0,0,0.25),0_25px_25px_rgba(0,0,0,0.22),0_56px_34px_rgba(0,0,0,0.13),0_100px_40px_rgba(0,0,0,0.04)] transition-[opacity,transform] duration-75 ease-out group-focus-within/search-hit-summary:translate-y-0 group-focus-within/search-hit-summary:opacity-100 group-hover/search-hit-summary:translate-y-0 group-hover/search-hit-summary:opacity-100 motion-reduce:transition-none"
              >
                {`Search hits for "${activeSearchQuery}"`}
              </span>
            </span>
            <TooltipIconButton
              aria-label="Next search hit"
              tooltip={`Go to next search hit for "${activeSearchQuery}"`}
              tooltipPlacement="top"
              className={BOTTOM_BAR_ICON_BUTTON_CLASS}
              icon={<IconRight className="h-s16 w-s16" />}
              onPress={() => {
                goToSearchHit(currentSearchHit + 1);
              }}
            />
          </DocumentDetailBarGroup>
          {activeTagTarget && (
            <DocumentDetailBarGroup className="gap-s24">
              <TooltipIconButton
                aria-label={`Previous ${activeTagTarget.label} occurrence`}
                tooltip={`Go to previous ${activeTagTarget.label} occurrence`}
                tooltipPlacement="top"
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
                  tooltip={`Type a ${activeTagTarget.label} occurrence number`}
                />
                of {activeTagTarget.occurrences}
              </span>
              <TooltipIconButton
                aria-label={`Next ${activeTagTarget.label} occurrence`}
                tooltip={`Go to next ${activeTagTarget.label} occurrence`}
                tooltipPlacement="top"
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
