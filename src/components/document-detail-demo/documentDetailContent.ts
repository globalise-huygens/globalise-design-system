import type {
  DocumentDetailOverlayContent,
  DocumentDetailOverlayDocument,
  DocumentDetailOverlayIdentifiedEntity,
  DocumentDetailOverlayScan,
  DocumentDetailOverlayTagGroup,
  DocumentDetailOverlayTocMetadata,
} from "@/index";

const ACTIVE_DOCUMENT_ID = "document-1702-03-26-26";
const ACTIVE_DOCUMENT_SCAN = 23;

const inventoryMetadata = [
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

const inventoryHierarchy = [
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
      "Deel-I-E.5.a - Overgekomen brieven en papieren uit Indie aan de Heren XVII en de kamer Amsterdam",
  },
  {
    level: 5,
    label:
      "1056-3986 - Overgekomen brieven en papieren uit Indie aan de Heren XVII en de kamer Amsterdam",
  },
  {
    level: 6,
    label: "1664",
    isCurrent: true,
  },
];

const tableOfContentsBeforeSelected = [
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
      "04 April 1701 • 56 • missive van den oppercoopman en gesaghebber Encam en raad tot padang aen haer Ed,,s de hoge reg: tot batavia gesz de dato 5=en februarij 1702",
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

const selectedTocEntry =
  "26 March 1702 • 26 • missive van den independent fiscael tot cormandel Hendrick beiker, aan haer Ed=ls de hooge req: tot batavia gesz de dato 22:' meij 1702:";

const tableOfContentsAfterSelected = [
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

function createDocumentMetadata(
  title: string,
): DocumentDetailOverlayTocMetadata {
  return [
    ["Type", getDocumentType(title)],
    ["Creator", getDocumentCreator(title)],
    ["Date", getDocumentDate(title)],
    ["Location", "Padang", "[GLOB_64]"],
    ["TANAP", "TANAP Digitized Index (2026-04-10)"],
  ];
}

const selectedTocMetadata: DocumentDetailOverlayTocMetadata = [
  ["Type", "Letter"],
  ["Creator", "Hendrick Beiker"],
  ["Date", "1702-01-01 - 1702-12-31 to 1703-01-01 - 1703-12-31"],
  ["Location", "Coromandel", "[GLOB_40]"],
  ["TANAP", "TANAP Digitized Index (2026-04-10)"],
];

const scanSnippets: Record<number, string> = {
  2: "overgesonden de scheepen D' prins Eugenius en Gansenhoef,",
  7: "Zeeland, mitsganders de prins Eugenius, den Bergh, 'T Noord",
  8: "Voor Amsterdam T schip prins Eugenius deb berg: moorder",
  9: "batavia met de scheppen prins Eugenius en gansenhoev tot",
  11: "ontfangen per het schip prins Eugenius hpoog op october",
  12: "kunnen voldoen prins Eugenius den 21: Julij mitsgad",
  17: "Voor de proesdidiale Kamer prins Eugenius en Gansenhoef,",
  18: "is voldaan P:r de prins Eugenius op den 20:e Maart 1723",
  19: "de scheppen de prins Eugenius wendela.",
  21: "overgesonden de scheepen D' prins Eugenius en Gansenhoef,",
  23: "overgesonden de scheepen D' prins Eugenius en Gansenhoef,",
  24: "overgesonden de scheepen D' prins Eugenius en Gansenhoef,",
};

function createTocScans({
  count,
  startArchiveScan,
  snippets = {},
  hasResults = false,
  doublePageScans = [],
  documentId,
  documentTitle,
}: {
  count: number;
  startArchiveScan: number;
  snippets?: Record<number, string>;
  hasResults?: boolean;
  doublePageScans?: number[];
  documentId: string;
  documentTitle: string;
}): DocumentDetailOverlayScan[] {
  return Array.from({ length: count }, (_, index) => {
    const documentScan = index + 1;
    const archiveScan = startArchiveScan + index;
    const snippet =
      snippets[documentScan] ??
      (hasResults && documentScan === 1
        ? "overgesonden de scheepen D' prins Eugenius en Gansenhoef,"
        : undefined);
    const hitCount = snippet ? 1 : 0;
    const pages = doublePageScans.includes(documentScan)
      ? [documentScan * 2 - 1, documentScan * 2]
      : [documentScan];

    return {
      archiveScan,
      documentScan,
      documentId,
      documentTitle,
      pages,
      identifier: `NL-HaNA_1.04.02_1664_${archiveScan}`,
      snippet,
      hasResults: hitCount > 0,
      hitCount,
      selected:
        documentId === ACTIVE_DOCUMENT_ID &&
        documentScan === ACTIVE_DOCUMENT_SCAN,
    };
  });
}

function createTocDocument(
  item: { title: string; hasResults?: boolean },
  index: number,
  group: "before" | "after",
): DocumentDetailOverlayDocument {
  const documentId = `document-${group}-${index + 1}`;
  const scanCount = getDocumentScanCount(item.title);
  const startArchiveScan =
    group === "before" ? 1210 + index * 32 : 1365 + index * 32;

  return {
    id: documentId,
    title: item.title,
    hasResults: item.hasResults,
    metadata: createDocumentMetadata(item.title),
    scans: createTocScans({
      count: scanCount,
      startArchiveScan,
      hasResults: item.hasResults,
      documentId,
      documentTitle: item.title,
    }),
  };
}

const selectedDocumentScans = createTocScans({
  count: 26,
  startArchiveScan: 1339,
  snippets: scanSnippets,
  doublePageScans: [8, 23],
  documentId: ACTIVE_DOCUMENT_ID,
  documentTitle: selectedTocEntry,
});

const tableOfContentsDocuments: DocumentDetailOverlayDocument[] = [
  ...tableOfContentsBeforeSelected.map((item, index) =>
    createTocDocument(item, index, "before"),
  ),
  {
    id: ACTIVE_DOCUMENT_ID,
    title: selectedTocEntry,
    hasResults: true,
    scans: selectedDocumentScans,
    metadata: selectedTocMetadata,
  },
  ...tableOfContentsAfterSelected.map((item, index) =>
    createTocDocument(item, index, "after"),
  ),
];

const searchHits = tableOfContentsDocuments
  .flatMap((document) =>
    document.scans.flatMap((scan) =>
      Array.from({ length: scan.hitCount ?? 0 }, () => ({
        archiveScan: scan.archiveScan,
      })),
    ),
  )
  .sort((first, second) => first.archiveScan - second.archiveScan);

const activeScan =
  selectedDocumentScans.find(
    (scan) => scan.documentScan === ACTIVE_DOCUMENT_SCAN,
  ) ?? selectedDocumentScans[0];

const activeSearchHit =
  searchHits.findIndex((hit) => hit.archiveScan === activeScan.archiveScan) + 1;

const entityGroups: DocumentDetailOverlayTagGroup[] = [
  {
    id: "classified-persons",
    label: "Persons",
    count: 496,
    kind: "Classified",
    icon: "person",
    firstScan: 2,
    scanStride: 3,
    subcategories: [
      { id: "persons-name", label: "by Name", count: 298, firstScan: 2 },
      {
        id: "persons-attributes",
        label: "by Attributes",
        count: 45,
        firstScan: 6,
      },
      {
        id: "persons-profession",
        label: "by Profession",
        count: 58,
        firstScan: 9,
      },
      {
        id: "persons-civic-status",
        label: "by Civic Status",
        count: 106,
        firstScan: 12,
      },
      {
        id: "persons-ethno-religious",
        label: "by Ethno-Religious Appellation",
        count: 106,
        firstScan: 15,
      },
    ],
  },
  {
    id: "classified-organisations",
    label: "Organisations",
    count: 71,
    kind: "Classified",
    icon: "organisation",
    firstScan: 1,
    scanStride: 4,
    subcategories: [
      { id: "organisations-name", label: "by Name", count: 71, firstScan: 1 },
    ],
  },
  {
    id: "classified-ships",
    label: "Ships",
    count: 67,
    kind: "Classified",
    icon: "ship",
    firstScan: 23,
    scanStride: 2,
    subcategories: [
      { id: "ships-name", label: "by Name", count: 106, firstScan: 23 },
      { id: "ships-type", label: "by Type", count: 106, firstScan: 26 },
    ],
  },
  {
    id: "classified-commodities",
    label: "Commodities",
    count: 51,
    kind: "Classified",
    icon: "commodity",
    firstScan: 20,
    scanStride: 6,
    subcategories: [
      { id: "commodities-name", label: "by Name", count: 106, firstScan: 20 },
      {
        id: "commodities-qualifier",
        label: "by Qualifier",
        count: 106,
        firstScan: 26,
      },
    ],
  },
  {
    id: "classified-dates",
    label: "Dates",
    count: 46,
    kind: "Classified",
    icon: "date",
    firstScan: 31,
    scanStride: 3,
    subcategories: [],
  },
  {
    id: "classified-places",
    label: "Places",
    count: 34,
    kind: "Classified",
    icon: "place",
    firstScan: 8,
    scanStride: 4,
    subcategories: [
      { id: "places-name", label: "by Name", count: 106, firstScan: 8 },
      {
        id: "places-location-form",
        label: "by Location Form",
        count: 106,
        firstScan: 13,
      },
    ],
  },
  {
    id: "classified-polities",
    label: "Polities",
    count: 0,
    kind: "Classified",
    icon: "organisation",
    firstScan: 1,
    scanStride: 1,
    subcategories: [],
  },
  {
    id: "classified-documents",
    label: "Documents",
    count: 2,
    kind: "Classified",
    icon: "document",
    firstScan: 19,
    scanStride: 23,
    subcategories: [],
  },
  {
    id: "classified-quantity",
    label: "Quantity",
    count: 2,
    kind: "Classified",
    icon: "quantity",
    firstScan: 44,
    scanStride: 11,
    subcategories: [],
  },
];

const identifiedEntities: DocumentDetailOverlayIdentifiedEntity[] = [
  {
    id: "joan-maetsuijker",
    label: "Joan Maetsuijker",
    type: "Person",
    icon: "person",
    count: 496,
    firstScan: 2,
    scanStride: 3,
  },
  {
    id: "person-x",
    label: "Person X",
    type: "Person",
    icon: "person",
    count: 138,
    firstScan: 4,
    scanStride: 5,
  },
  {
    id: "person-z",
    label: "Person Z",
    type: "Person",
    icon: "person",
    count: 76,
    firstScan: 6,
    scanStride: 7,
  },
  {
    id: "voc",
    label: "VOC",
    type: "Organisation",
    icon: "organisation",
    count: 71,
    firstScan: 1,
    scanStride: 4,
  },
  {
    id: "prins-eugenius",
    label: "Prins Eugenius",
    type: "Ship",
    icon: "ship",
    count: 67,
    firstScan: 23,
    scanStride: 2,
  },
  {
    id: "person-a",
    label: "Person A",
    type: "Person",
    icon: "person",
    count: 56,
    firstScan: 12,
    scanStride: 3,
  },
  {
    id: "person-b",
    label: "Person B",
    type: "Person",
    icon: "person",
    count: 56,
    firstScan: 15,
    scanStride: 4,
  },
  {
    id: "ship-v",
    label: "Ship V",
    type: "Ship",
    icon: "ship",
    count: 53,
    firstScan: 18,
    scanStride: 5,
  },
  {
    id: "cinnamon",
    label: "Cinnamon",
    type: "Commodity",
    icon: "commodity",
    count: 51,
    firstScan: 20,
    scanStride: 6,
  },
  {
    id: "march",
    label: "March",
    type: "Date",
    icon: "date",
    count: 46,
    firstScan: 31,
    scanStride: 3,
  },
  {
    id: "batavia",
    label: "Batavia",
    type: "Place",
    icon: "place",
    count: 34,
    firstScan: 8,
    scanStride: 4,
  },
  {
    id: "india",
    label: "India",
    type: "Place",
    icon: "place",
    count: 33,
    firstScan: 11,
    scanStride: 5,
  },
  {
    id: "person-ghkj",
    label: "Person GHKJ",
    type: "Person",
    icon: "person",
    count: 2,
    firstScan: 52,
    scanStride: 1,
  },
  {
    id: "thing-yuh",
    label: "Thing YUH",
    type: "Commodity",
    icon: "commodity",
    count: 1,
    firstScan: 56,
    scanStride: 1,
  },
  {
    id: "ship-vf",
    label: "Ship VF",
    type: "Ship",
    icon: "ship",
    count: 1,
    firstScan: 57,
    scanStride: 1,
  },
  {
    id: "ship-vhg",
    label: "Ship VHG",
    type: "Ship",
    icon: "ship",
    count: 1,
    firstScan: 58,
    scanStride: 1,
  },
];

export const documentDetailDemoContent: DocumentDetailOverlayContent = {
  inventory: {
    title: "Inventory",
    year: "1664",
    description:
      "1.04.02 Inventaris van het archief van de Verenigde Oost-Indische Compagnie",
  },
  metadata: {
    titles: inventoryMetadata[0].value,
    date: inventoryMetadata[1].value,
    settlements: ["Batavia", "Goa"],
    handleLabel: "see nationaal archive",
    archiveDescription:
      "1.04.02 Inventaris van het archief van de Verenigde Oost-Indische Compagnie",
  },
  currentScan: {
    archiveScan: activeScan.archiveScan,
    documentScan: activeScan.documentScan,
    documentScanTotal: selectedDocumentScans.length,
  },
  searchHits: {
    current: Math.max(activeSearchHit, 1),
    total: searchHits.length,
  },
  tags: {
    entityCount: 376,
    eventCount: 0,
  },
  tableOfContents: selectedDocumentScans,
  tableOfContentsDocuments,
  inventoryMetadata,
  inventoryHierarchy,
  entityGroups,
  identifiedEntities,
  entityClassifiedTotal: 19096,
  entityIdentifiedTotal: 18191,
  transcriptLines: [
    "108",
    "Een dito dito beschreven Diverse papieren",
    "rakende de Negorij Vlaardingen",
    "Een dito dito beschreven Cassa Rekeningen en",
    "ordonnantie van de",
    "Negorij Vlaardingen",
    "Een blauw met wit uitgemonstert zijde vaende",
    "van wijlen den welEdelen",
    "Een geel zijde vaendel van den welEd. Achib: Her",
    "jan Dirk van Cloetwijk",
    "Een nieuw vaendel voor de pinnisten en burger",
    "schutterij gegeven door",
    "den geweesen. Capitain der burgerij de Heer",
    "Fredrik willem van Blijdenberg",
    "Eenige waapenb: en goederen volgens",
    "bygevoegde notitie in de burgerwagt",
    "berlstende tot : dagelijks gebruik onder ver,,",
    "antwoording van den wagtmeester Anthonij",
    "Toll:",
    "/onderst ind/ Maccasser in de steede",
    "/was geteekend / voor de overgaaf C: Craane en voor den ontvangst",
    "J:r W:n H:t van Rossum: /inmargine / ons present als gecommitteerdens",
    "/wab geteekend/ J:s L. de Vos en g=n G,,d Biedach",
    "Eerbiedig Berigt",
    "Aan den welEdelen Achtbaaren Heer",
    "Barend Reijke",
  ],
  contentWarning: {
    title: "Content Warning",
    body: "The Dutch East India Company archives and their transcriptions and document descriptions bear harmful and discriminatory language. They also record events, intentions and perspectives that are violent and can cause distress.",
    linkLabel: "Read more about problematic content",
  },
};
