import type { ReferencePanelItemData } from "@/index";
import type { ReactNode } from "react";

export interface ObjectCardVoyage {
  dates: string;
  route: string;
  captain: string;
  crew: string;
}

export interface ObjectCardProperty {
  label: string;
  value?: string;
  prefix?: string;
  entityLabel?: string;
  type?: "place" | "ship";
}

export const OBJECT_CARD_PROPERTIES: ObjectCardProperty[] = [
  { label: "Built", prefix: "1703, ", entityLabel: "Amsterdam", type: "place" },
  { label: "Laid up", prefix: "1727, ", entityLabel: "Batavia", type: "place" },
  { label: "Weight", value: "874 tons" },
  { label: "Ship type", entityLabel: "Ship", type: "ship" },
];

export const OBJECT_CARD_EXTERNAL_IDENTIFIERS = [
  "DAS ship1203",
  "vocsite.nl/schepen/10327",
];

export const OBJECT_CARD_VOYAGES: ObjectCardVoyage[] = [
  {
    dates: "12 Nov 1703 - 3 Jul 1704",
    route: "Texel (NL) -> Jakarta (ID)",
    captain: "Capt. Klaas Nanningsz. Sanderus",
    crew: "~230 crew",
  },
  {
    dates: "14 Sep 1706 - 18 Apr 1707",
    route: "Jakarta (ID) -> Texel (NL)",
    captain: "Capt. Pieter Oosterdorp",
    crew: "~218 crew",
  },
  {
    dates: "8 Feb 1709 - 22 Oct 1709",
    route: "Texel (NL) -> Jakarta (ID)",
    captain: "Capt. Jan Berger",
    crew: "~224 crew",
  },
  {
    dates: "5 Mar 1715 - 2 Nov 1715",
    route: "Texel (NL) -> Jakarta (ID)",
    captain: "Capt. Hendrik Mulder",
    crew: "~215 crew",
  },
  {
    dates: "12 Jun 1718 - 14 Jan 1719",
    route: "Jakarta (ID) -> Texel (NL)",
    captain: "Capt. Willem de Vries",
    crew: "~198 crew",
  },
  {
    dates: "3 Feb 1721 - 9 Sep 1721",
    route: "Texel (NL) -> Jakarta (ID)",
    captain: "Capt. Gerrit Jansen",
    crew: "~221 crew",
  },
  {
    dates: "7 Aug 1724 - 4 Mar 1725",
    route: "Jakarta (ID) -> Texel (NL)",
    captain: "Capt. Thomas Bakker",
    crew: "~205 crew",
  },
];

export const OBJECT_CARD_REFERENCE_SEEDS: ReferencePanelItemData[] = [
  {
    id: "1764-0054-264",
    title: "1764 · Doc 0054 · Scan 264",
    snippet:
      "in 't geheel p:r de prins Eugenius en de taxisboom na Batavia gesonden...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 264",
    uri: "https://example.com/reference/1764-0054-264",
  },
  {
    id: "1764-0054-265",
    title: "1764 · Doc 0054 · Scan 265",
    snippet:
      "de prins Eugenius heeft op de reise verscheijde schepen ontmoet en...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 265",
    uri: "https://example.com/reference/1764-0054-265",
  },
  {
    id: "1764-0054-266",
    title: "1764 · Doc 0054 · Scan 266",
    snippet:
      "aangaande het schip de prins Eugenius gerapporteerd dat hetzelve in...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 266",
    uri: "https://example.com/reference/1764-0054-266",
  },
  {
    id: "1764-0061-14",
    title: "1764 · Doc 0061 · Scan 14",
    snippet:
      "den schipper van de prins Eugenius verklaart dat het schip behouden...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0061 page 14",
    uri: "https://example.com/reference/1764-0061-14",
  },
  {
    id: "1765-0012-91",
    title: "1765 · Doc 0012 · Scan 91",
    snippet:
      "de goederen op de prins Eugenius zijn in goede staat te Batavia aangekomen...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10071",
    href: "#",
    hrefLabel: "Open reference 1765 0012 page 91",
    uri: "https://example.com/reference/1765-0012-91",
  },
  {
    id: "1765-0012-92",
    title: "1765 · Doc 0012 · Scan 92",
    snippet:
      "met het schip prins Eugenius zijn diverse kisten zijde overgebracht...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10071",
    href: "#",
    hrefLabel: "Open reference 1765 0012 page 92",
    uri: "https://example.com/reference/1765-0012-92",
  },
  {
    id: "1766-0027-11",
    title: "1766 · Doc 0027 · Scan 11",
    snippet:
      "rapport van de equipage omtrent schade aan mast en tuigage op zee...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10073",
    href: "#",
    hrefLabel: "Open reference 1766 0027 page 11",
    uri: "https://example.com/reference/1766-0027-11",
  },
  {
    id: "1766-0027-12",
    title: "1766 · Doc 0027 · Scan 12",
    snippet:
      "de kamer Amsterdam verzoekt nadere opgave van lading en bemanning...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10073",
    href: "#",
    hrefLabel: "Open reference 1766 0027 page 12",
    uri: "https://example.com/reference/1766-0027-12",
  },
  {
    id: "1767-0048-203",
    title: "1767 · Doc 0048 · Scan 203",
    snippet:
      "uittreksel betreffende de reis van Texel naar Batavia met vertraging...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10076",
    href: "#",
    hrefLabel: "Open reference 1767 0048 page 203",
    uri: "https://example.com/reference/1767-0048-203",
  },
  {
    id: "1767-0048-204",
    title: "1767 · Doc 0048 · Scan 204",
    snippet:
      "verklaring van de stuurman over verlies van proviand gedurende storm...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10076",
    href: "#",
    hrefLabel: "Open reference 1767 0048 page 204",
    uri: "https://example.com/reference/1767-0048-204",
  },
];

export const OBJECT_CARD_REFERENCE_COUNT = 1234;

export function createObjectCardReferences(
  thumbnail?: ReactNode,
): ReferencePanelItemData[] {
  return Array.from({ length: OBJECT_CARD_REFERENCE_COUNT }, (_, index) => {
    const seed =
      OBJECT_CARD_REFERENCE_SEEDS[index % OBJECT_CARD_REFERENCE_SEEDS.length];
    const scanNumber = 264 + index;
    const year = 1764 + Math.floor(index / 250);
    const documentNumber = String(50 + (index % 75)).padStart(4, "0");

    return {
      ...seed,
      id: `${year}-${documentNumber}-${scanNumber}`,
      title: `${year} · Doc ${documentNumber} · Scan ${scanNumber}`,
      hrefLabel: `Open reference ${year} ${documentNumber} page ${scanNumber}`,
      uri: `https://example.com/reference/${year}-${documentNumber}-${scanNumber}`,
      metadata: `NL-HaNA 1.04.02 · Inventory ${10070 + (index % 16)}`,
      thumbnail,
    };
  });
}
