import type { ReferencePanelItemData } from "@globalise/design-system";

export interface ObjectCardVoyage {
  dates: string;
  route: string;
  captain: string;
  crew: string;
}

export interface ObjectCardProperty {
  label: string;
  value: string;
}

export const OBJECT_CARD_PROPERTIES: ObjectCardProperty[] = [
  { label: "Built", value: "1703, Amsterdam" },
  { label: "Laid up", value: "1727, Batavia" },
  { label: "Weight", value: "874 tons" },
  { label: "Ship type", value: "Ship" },
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

export const OBJECT_CARD_REFERENCES: ReferencePanelItemData[] = [
  {
    id: "1764-0054-264",
    title: "1764 · Doc 0054 · Scan 264",
    snippet:
      "in 't geheel p:r de prins Eugenius en de taxisboom na Batavia gesonden...",
    metadata: "Archive: NL-HaNA 1.04.02 · Inventory 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 264",
    uri: "https://example.com/reference/1764-0054-264",
  },
  {
    id: "1764-0054-265",
    title: "1764 · Doc 0054 · Scan 265",
    snippet:
      "de prins Eugenius heeft op de reise verscheijde schepen ontmoet en...",
    metadata: "Archive: NL-HaNA 1.04.02 · Inventory 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 265",
    uri: "https://example.com/reference/1764-0054-265",
  },
  {
    id: "1764-0054-266",
    title: "1764 · Doc 0054 · Scan 266",
    snippet:
      "aangaande het schip de prins Eugenius gerapporteerd dat hetzelve in...",
    metadata: "Archive: NL-HaNA 1.04.02 · Inventory 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 266",
    uri: "https://example.com/reference/1764-0054-266",
  },
  {
    id: "1764-0061-14",
    title: "1764 · Doc 0061 · Scan 14",
    snippet:
      "den schipper van de prins Eugenius verklaart dat het schip behouden...",
    metadata: "Archive: NL-HaNA 1.04.02 · Inventory 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0061 page 14",
    uri: "https://example.com/reference/1764-0061-14",
  },
  {
    id: "1765-0012-91",
    title: "1765 · Doc 0012 · Scan 91",
    snippet:
      "de goederen op de prins Eugenius zijn in goede staat te Batavia aangekomen...",
    metadata: "Archive: NL-HaNA 1.04.02 · Inventory 10071",
    href: "#",
    hrefLabel: "Open reference 1765 0012 page 91",
    uri: "https://example.com/reference/1765-0012-91",
  },
  {
    id: "1766-0027-11",
    title: "1766 · Doc 0027 · Scan 11",
    snippet:
      "rapport van de equipage omtrent schade aan mast en tuigage op zee...",
    metadata: "Archive: NL-HaNA 1.04.02 · Inventory 10073",
    href: "#",
    hrefLabel: "Open reference 1766 0027 page 11",
    uri: "https://example.com/reference/1766-0027-11",
  },
  {
    id: "1767-0048-203",
    title: "1767 · Doc 0048 · Scan 203",
    snippet:
      "uittreksel betreffende de reis van Texel naar Batavia met vertraging...",
    metadata: "Archive: NL-HaNA 1.04.02 · Inventory 10076",
    href: "#",
    hrefLabel: "Open reference 1767 0048 page 203",
    uri: "https://example.com/reference/1767-0048-203",
  },
];
