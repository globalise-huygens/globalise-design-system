"use client";

import {
  IconEvents,
  IconEntityCommodity,
  IconEntityDate,
  IconEntityDocument,
  IconInventory,
  IconTableOfContent,
  IconEntityOrganisation,
  IconEntityPerson,
  IconEntityPlace,
  IconEntityShip,
  IconEntities,
} from "@globalise/design-system";
import * as React from "react";

export const ACTIVE_TOC_DOCUMENT_ID = "document-1702-03-26-26";
export const ACTIVE_TOC_SCAN = 23;
export const INVENTORY_URI = "#inventory-1664";
export const SELECTED_DOCUMENT_URI = `#${ACTIVE_TOC_DOCUMENT_ID}`;

export interface TableOfContentsScan {
  documentScan: number;
  archiveScan: number;
  pages: number[];
  id: string;
  snippet?: React.ReactNode;
  hasResults: boolean;
  hitCount: number;
}

export type TableOfContentsMetadata = Array<[string, string, string?]>;

export interface TableOfContentsDocument {
  id: string;
  title: string;
  hasResults?: boolean;
  scans: TableOfContentsScan[];
  metadata?: TableOfContentsMetadata;
}

export interface SelectedScanReference {
  archiveScan: number;
  documentScan: number;
  documentScanTotal: number;
}

export interface SearchHitReference extends SelectedScanReference {
  hit: number;
  hitOccurrence: number;
  scanHitTotal: number;
}

export type TagNavigationTarget = {
  id: string;
  label: string;
  occurrences: number;
  firstScan: number;
  scanStride: number;
  kind: "Classified" | "Identified";
};

export const SIDEBAR_ITEMS = [
  {
    id: "inventory",
    label: "Inventory",
    badge: "1664",
    railLabel: "1664",
    icon: <IconInventory className="h-s20 w-s20" />,
  },
  {
    id: "table-of-contents",
    label: "Table of Contents",
    icon: <IconTableOfContent className="h-s20 w-s20" />,
  },
  {
    id: "identified",
    label: "Entity tags",
    count: "(376)",
    railLabel: "376",
    icon: <IconEntities className="h-s20 w-s20" />,
  },
  {
    id: "events",
    label: "Event tags",
    count: "(0)",
    railLabel: "0",
    icon: <IconEvents className="h-s20 w-s20" />,
  },
];

export const INVENTORY_METADATA = [
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

export const INVENTORY_SETTLEMENTS = ["Batavia", "Goa"];

export const INVENTORY_HIERARCHY = [
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

function getDocumentScanCount(title: string) {
  const scanCountMatch = title.match(/•\s*(\d+)\s*•/);

  return scanCountMatch ? Number(scanCountMatch[1]) : 1;
}

function getDocumentDate(title: string) {
  const dateMatch = title.match(/^([^•]+?)\s*•/);

  return dateMatch ? dateMatch[1].trim() : "1702";
}

function getDocumentType(title: string) {
  return title.toLowerCase().includes("register") ? "Register" : "Letter";
}

function getDocumentCreator(title: string) {
  const creatorMatch = title.match(/\bvan den ([^,]+?)(?:,|\s+aen|\s+aan)/i);

  if (!creatorMatch) {
    return "Unknown";
  }

  return creatorMatch[1].replace(/\s+/g, " ").trim();
}

function createDocumentMetadata(title: string): TableOfContentsMetadata {
  return [
    ["Type", getDocumentType(title)],
    ["Creator", getDocumentCreator(title)],
    ["Date", getDocumentDate(title)],
    ["Location", "Padang", "[GLOB_64]"],
    ["TANAP", "TANAP Digitized Index (2026-04-10)"],
  ];
}

function createTocScans({
  count,
  startArchiveScan,
  snippets = {},
  hasResults = false,
  doublePageScans = [],
}: {
  count: number;
  startArchiveScan: number;
  snippets?: Record<number, React.ReactNode>;
  hasResults?: boolean;
  doublePageScans?: number[];
}) {
  return Array.from({ length: count }, (_, index) => {
    const documentScan = index + 1;
    const archiveScan = startArchiveScan + index;
    const defaultSnippet =
      hasResults && documentScan === 1 ? (
        <>
          overgesonden de scheepen D&apos; <strong>prins Eugenius</strong> en
          Gansenhoef,
        </>
      ) : undefined;
    const snippet = snippets[documentScan] ?? defaultSnippet;
    const hitCount = snippet ? 1 : 0;
    const pages = doublePageScans.includes(documentScan)
      ? [documentScan * 2 - 1, documentScan * 2]
      : [documentScan];

    return {
      documentScan,
      archiveScan,
      pages,
      id: `NL-HaNA_1.04.02_1664_${archiveScan}`,
      snippet,
      hasResults: hitCount > 0,
      hitCount,
    };
  });
}

const SELECTED_TOC_METADATA: TableOfContentsMetadata = [
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

export const TOC_SCANS = createTocScans({
  count: 26,
  startArchiveScan: 1339,
  snippets: TOC_SCAN_SNIPPETS,
  doublePageScans: [8, 23],
});

export const ACTIVE_TOC_ARCHIVE_SCAN =
  TOC_SCANS.find((scan) => scan.documentScan === ACTIVE_TOC_SCAN)
    ?.archiveScan ?? 1339;

function createTocDocument(
  item: { title: string; hasResults?: boolean },
  index: number,
  group: "before" | "after",
): TableOfContentsDocument {
  const scanCount = getDocumentScanCount(item.title);
  const startArchiveScan =
    group === "before" ? 1210 + index * 32 : 1365 + index * 32;

  return {
    id: `document-${group}-${index + 1}`,
    title: item.title,
    hasResults: item.hasResults,
    metadata: createDocumentMetadata(item.title),
    scans: createTocScans({
      count: scanCount,
      startArchiveScan,
      hasResults: item.hasResults,
    }),
  };
}

export const TABLE_OF_CONTENTS_DOCUMENTS: TableOfContentsDocument[] = [
  ...TABLE_OF_CONTENTS.map((item, index) =>
    createTocDocument(item, index, "before"),
  ),
  {
    id: ACTIVE_TOC_DOCUMENT_ID,
    title: SELECTED_TOC_ENTRY,
    hasResults: true,
    scans: TOC_SCANS,
    metadata: SELECTED_TOC_METADATA,
  },
  ...TABLE_OF_CONTENTS_AFTER_SELECTED.map((item, index) =>
    createTocDocument(item, index, "after"),
  ),
];

export function getScanUri(archiveScan: number) {
  return `#scan-${archiveScan}`;
}

export function getDocumentUri(documentId: string) {
  return `#${documentId}`;
}

export function getNaIdentifierUrl(scanId: string) {
  return `https://www.nationaalarchief.nl/onderzoeken/archief/1.04.02/invnr/1664/file/${scanId}`;
}

export function getShortNaIdentifier(scanId: string) {
  return scanId.replace("NL-HaNA_1.04.02_1664_", "");
}

export function getScanReference(
  document: TableOfContentsDocument,
  scan: TableOfContentsScan,
): SelectedScanReference {
  return {
    archiveScan: scan.archiveScan,
    documentScan: scan.documentScan,
    documentScanTotal: document.scans.length,
  };
}

function getDocumentByArchiveScan(
  archiveScan: number,
  documentScanTotal?: number,
) {
  const matchingDocuments = TABLE_OF_CONTENTS_DOCUMENTS.filter((document) =>
    document.scans.some((scan) => scan.archiveScan === archiveScan),
  );

  return (
    matchingDocuments.find(
      (document) => document.scans.length === documentScanTotal,
    ) ?? matchingDocuments[0]
  );
}

export function getScanReferenceByArchiveScan(
  archiveScan: number,
  documentScanTotal?: number,
) {
  const document = getDocumentByArchiveScan(archiveScan, documentScanTotal);
  const scan = document?.scans.find(
    (documentScan) => documentScan.archiveScan === archiveScan,
  );

  return document && scan ? getScanReference(document, scan) : undefined;
}

export function getScanReferenceByDocumentScan(
  archiveScan: number,
  documentScan: number,
  documentScanTotal?: number,
) {
  const document = getDocumentByArchiveScan(archiveScan, documentScanTotal);

  if (!document) {
    return undefined;
  }

  const clampedDocumentScan = Math.min(
    Math.max(documentScan, 1),
    document.scans.length,
  );
  const scan = document.scans[clampedDocumentScan - 1];

  return scan ? getScanReference(document, scan) : undefined;
}

export const SEARCH_HITS: SearchHitReference[] =
  TABLE_OF_CONTENTS_DOCUMENTS.flatMap((document) =>
    document.scans.flatMap((scan) =>
      Array.from({ length: scan.hitCount }, (_, index) => ({
        ...getScanReference(document, scan),
        hitOccurrence: index + 1,
        scanHitTotal: scan.hitCount,
      })),
    ),
  )
    .sort(
      (first, second) =>
        first.archiveScan - second.archiveScan ||
        first.hitOccurrence - second.hitOccurrence,
    )
    .map((scan, index) => ({
      ...scan,
      hit: index + 1,
    }));

export function getSearchHitByIndex(hit: number) {
  const clampedHit = Math.min(Math.max(hit, 1), SEARCH_HITS.length);

  return SEARCH_HITS[clampedHit - 1];
}

export function getSearchHitIndexByArchiveScan(archiveScan: number) {
  const hitIndex = SEARCH_HITS.findIndex(
    (hit) => hit.archiveScan === archiveScan,
  );

  return hitIndex >= 0 ? hitIndex + 1 : undefined;
}

export const CLASSIFIED_ENTITY_TAG_GROUPS = [
  {
    category: "Persons",
    count: 496,
    icon: <IconEntityPerson className="h-s16 w-s16" />,
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
    icon: <IconEntityOrganisation className="h-s16 w-s16" />,
    firstScan: 1,
    scanStride: 4,
    subcategories: [
      { label: "by Name", count: 71, firstScan: 1, scanStride: 4 },
    ],
  },
  {
    category: "Ships",
    count: 67,
    icon: <IconEntityShip className="h-s16 w-s16" />,
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
    icon: <IconEntityCommodity className="h-s16 w-s16" />,
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
    icon: <IconEntityDate className="h-s16 w-s16" />,
    firstScan: 31,
    scanStride: 3,
    subcategories: [],
  },
  {
    category: "Places",
    count: 34,
    icon: <IconEntityPlace className="h-s16 w-s16" />,
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
    icon: <IconEntityOrganisation className="h-s16 w-s16" />,
    firstScan: 1,
    scanStride: 1,
    subcategories: [],
  },
  {
    category: "Documents",
    count: 2,
    icon: <IconEntityDocument className="h-s16 w-s16" />,
    firstScan: 19,
    scanStride: 23,
    subcategories: [],
  },
  {
    category: "Quantity",
    count: 2,
    icon: <IconTableOfContent className="h-s16 w-s16" />,
    firstScan: 44,
    scanStride: 11,
    subcategories: [],
  },
];

export const IDENTIFIED_ENTITY_TAGS = [
  {
    name: "Joan Maetsuijker",
    type: "Person",
    icon: <IconEntityPerson className="h-s16 w-s16" />,
    classifiedAs: ["Joan Maetsuijker", "gouverneur generaal"],
    occurrences: 496,
    firstScan: 2,
    scanStride: 3,
  },
  {
    name: "Person X",
    type: "Person",
    icon: <IconEntityPerson className="h-s16 w-s16" />,
    classifiedAs: ["persoon X", "oppercoopman"],
    occurrences: 138,
    firstScan: 4,
    scanStride: 5,
  },
  {
    name: "Person Z",
    type: "Person",
    icon: <IconEntityPerson className="h-s16 w-s16" />,
    classifiedAs: ["persoon Z"],
    occurrences: 76,
    firstScan: 6,
    scanStride: 7,
  },
  {
    name: "VOC",
    type: "Organisation",
    icon: <IconEntityOrganisation className="h-s16 w-s16" />,
    classifiedAs: ["VOC", "Oost-Indische Compagnie"],
    occurrences: 71,
    firstScan: 1,
    scanStride: 4,
  },
  {
    name: "Prins Eugenius",
    type: "Ship",
    icon: <IconEntityShip className="h-s16 w-s16" />,
    classifiedAs: ["prins Eugenius", "D' prins Eugenius"],
    occurrences: 67,
    firstScan: 23,
    scanStride: 2,
  },
  {
    name: "Person A",
    type: "Person",
    icon: <IconEntityPerson className="h-s16 w-s16" />,
    classifiedAs: ["persoon A"],
    occurrences: 56,
    firstScan: 12,
    scanStride: 3,
  },
  {
    name: "Person B",
    type: "Person",
    icon: <IconEntityPerson className="h-s16 w-s16" />,
    classifiedAs: ["persoon B"],
    occurrences: 56,
    firstScan: 15,
    scanStride: 4,
  },
  {
    name: "Ship V",
    type: "Ship",
    icon: <IconEntityShip className="h-s16 w-s16" />,
    classifiedAs: ["schip V"],
    occurrences: 53,
    firstScan: 18,
    scanStride: 5,
  },
  {
    name: "Cinnamon",
    type: "Commodity",
    icon: <IconEntityCommodity className="h-s16 w-s16" />,
    classifiedAs: ["cinnamon", "kaneel"],
    occurrences: 51,
    firstScan: 20,
    scanStride: 6,
  },
  {
    name: "March",
    type: "Date",
    icon: <IconEntityDate className="h-s16 w-s16" />,
    classifiedAs: ["maart", "March"],
    occurrences: 46,
    firstScan: 31,
    scanStride: 3,
  },
  {
    name: "Batavia",
    type: "Place",
    icon: <IconEntityPlace className="h-s16 w-s16" />,
    classifiedAs: ["batavia", "tot batavia"],
    occurrences: 34,
    firstScan: 8,
    scanStride: 4,
  },
  {
    name: "India",
    type: "Place",
    icon: <IconEntityPlace className="h-s16 w-s16" />,
    classifiedAs: ["Indie", "India"],
    occurrences: 33,
    firstScan: 11,
    scanStride: 5,
  },
  {
    name: "Thing YUH",
    type: "Commodity",
    icon: <IconEntityCommodity className="h-s16 w-s16" />,
    classifiedAs: ["thing YUH"],
    occurrences: 1,
    firstScan: 56,
    scanStride: 1,
  },
];

export function getTagOccurrenceScan(
  target: TagNavigationTarget,
  occurrenceIndex: number,
  maxScan: number,
) {
  return (
    ((target.firstScan + occurrenceIndex * target.scanStride - 1) % maxScan) + 1
  );
}
