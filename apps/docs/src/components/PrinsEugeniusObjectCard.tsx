"use client";

import {
  EntityBadge,
  IconShowMore,
  IconCopy,
  IconDownload,
  IconEntityShip,
  ObjectCard,
  ObjectCardAction,
  ObjectCardBody,
  ObjectCardExternalLink,
  ObjectCardFooter,
  ObjectCardHeader,
  ObjectCardPanel,
  ObjectCardProperty,
  ObjectCardPropertyList,
  ObjectCardSection,
  ObjectCardStat,
  ObjectCardStats,
  ObjectCardTitle,
  type ReferencePanelItemData,
  ReferencePanel,
  ReferencePanelItem,
} from "@globalise/design-system";
import Image from "next/image";
import { useState } from "react";

const voyages = [
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

const INITIAL_VOYAGE_COUNT = 3;

function ManuscriptScan() {
  return (
    <Image
      className="h-full w-full object-cover"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80'%3E%3Crect width='120' height='80' fill='%23404040'/%3E%3Ctext x='60' y='44' text-anchor='middle' fill='%23808080' font-family='sans-serif' font-size='11'%3Escan%3C/text%3E%3C/svg%3E"
      alt="Manuscript scan"
      width={120}
      height={80}
    />
  );
}

const references: ReferencePanelItemData[] = [
  {
    id: "1764-0054-264",
    title: "1764 · 0054 · p.264",
    snippet:
      "in 't geheel p:r de prins Eugenius en de taxisboom na Batavia gesonden...",
    metadata: "NL-HaNA 1.04.02 · 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 264",
    uri: "https://example.com/reference/1764-0054-264",
    thumbnail: <ManuscriptScan />,
  },
  {
    id: "1764-0054-265",
    title: "1764 · 0054 · p.265",
    snippet:
      "de prins Eugenius heeft op de reise verscheijde schepen ontmoet en...",
    metadata: "NL-HaNA 1.04.02 · 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 265",
    uri: "https://example.com/reference/1764-0054-265",
    thumbnail: <ManuscriptScan />,
  },
  {
    id: "1764-0054-266",
    title: "1764 · 0054 · p.266",
    snippet:
      "aangaande het schip de prins Eugenius gerapporteerd dat hetzelve in...",
    metadata: "NL-HaNA 1.04.02 · 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 266",
    uri: "https://example.com/reference/1764-0054-266",
    thumbnail: <ManuscriptScan />,
  },
  {
    id: "1764-0061-14",
    title: "1764 · 0061 · p.14",
    snippet:
      "den schipper van de prins Eugenius verklaart dat het schip behouden...",
    metadata: "NL-HaNA 1.04.02 · 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0061 page 14",
    uri: "https://example.com/reference/1764-0061-14",
    thumbnail: <ManuscriptScan />,
  },
  {
    id: "1765-0012-91",
    title: "1765 · 0012 · p.91",
    snippet:
      "de goederen op de prins Eugenius zijn in goede staat te Batavia aangekomen...",
    metadata: "NL-HaNA 1.04.02 · 10071",
    href: "#",
    hrefLabel: "Open reference 1765 0012 page 91",
    uri: "https://example.com/reference/1765-0012-91",
    thumbnail: <ManuscriptScan />,
  },
  {
    id: "1765-0012-92",
    title: "1765 · 0012 · p.92",
    snippet:
      "met het schip prins Eugenius zijn diverse kisten zijde overgebracht...",
    metadata: "NL-HaNA 1.04.02 · 10071",
    href: "#",
    hrefLabel: "Open reference 1765 0012 page 92",
    uri: "https://example.com/reference/1765-0012-92",
    thumbnail: <ManuscriptScan />,
  },
  {
    id: "1766-0027-11",
    title: "1766 · 0027 · p.11",
    snippet:
      "rapport van de equipage omtrent schade aan mast en tuigage op zee...",
    metadata: "NL-HaNA 1.04.02 · 10073",
    href: "#",
    hrefLabel: "Open reference 1766 0027 page 11",
    uri: "https://example.com/reference/1766-0027-11",
    thumbnail: <ManuscriptScan />,
  },
  {
    id: "1766-0027-12",
    title: "1766 · 0027 · p.12",
    snippet:
      "de kamer Amsterdam verzoekt nadere opgave van lading en bemanning...",
    metadata: "NL-HaNA 1.04.02 · 10073",
    href: "#",
    hrefLabel: "Open reference 1766 0027 page 12",
    uri: "https://example.com/reference/1766-0027-12",
    thumbnail: <ManuscriptScan />,
  },
  {
    id: "1767-0048-203",
    title: "1767 · 0048 · p.203",
    snippet:
      "uittreksel betreffende de reis van Texel naar Batavia met vertraging...",
    metadata: "NL-HaNA 1.04.02 · 10076",
    href: "#",
    hrefLabel: "Open reference 1767 0048 page 203",
    uri: "https://example.com/reference/1767-0048-203",
    thumbnail: <ManuscriptScan />,
  },
  {
    id: "1767-0048-204",
    title: "1767 · 0048 · p.204",
    snippet:
      "verklaring van de stuurman over verlies van proviand gedurende storm...",
    metadata: "NL-HaNA 1.04.02 · 10076",
    href: "#",
    hrefLabel: "Open reference 1767 0048 page 204",
    uri: "https://example.com/reference/1767-0048-204",
    thumbnail: <ManuscriptScan />,
  },
];

export interface PrinsEugeniusObjectCardProps {
  onClose?: () => void;
  className?: string;
}

export function PrinsEugeniusObjectCard({
  onClose,
  className,
}: PrinsEugeniusObjectCardProps) {
  const [showAllVoyages, setShowAllVoyages] = useState(false);
  const visibleVoyages = showAllVoyages
    ? voyages
    : voyages.slice(0, INITIAL_VOYAGE_COUNT);
  const hiddenCount = voyages.length - INITIAL_VOYAGE_COUNT;

  return (
    <ObjectCard className={className}>
      <ObjectCardHeader onClose={onClose}>
        <EntityBadge
          type="ship"
          icon={<IconEntityShip className="h-s12 w-s12" />}
        >
          Ship
        </EntityBadge>
        <ObjectCardTitle>Prins Eugenius</ObjectCardTitle>
        <ObjectCardStats>
          <ObjectCardStat>7 Voyages</ObjectCardStat>
          <ObjectCardStat>1,234 References</ObjectCardStat>
          <ObjectCardStat>Chamber: Amsterdam</ObjectCardStat>
        </ObjectCardStats>
      </ObjectCardHeader>

      <ObjectCardBody>
        <ObjectCardPanel side="left">
          <ObjectCardSection sticky>
            <ObjectCardPropertyList>
              <ObjectCardProperty label="Built" value="1703, Amsterdam" />
              <ObjectCardProperty label="Laid up" value="1727, Batavia" />
              <ObjectCardProperty label="Weight" value="874 tons" />
              <ObjectCardProperty label="Ship type" value="Ship" />
            </ObjectCardPropertyList>
          </ObjectCardSection>

          <ObjectCardSection title="Voyages (7)" scrollable>
            <div className="overflow-hidden border-t border-brand-white/20">
              {visibleVoyages.map((voyage, index) => (
                <ReferencePanelItem
                  key={index}
                  title={voyage.route}
                  metadata={
                    <span className="flex flex-wrap items-center justify-between gap-x-s12 gap-y-s4">
                      <span>{voyage.dates}</span>
                      <span>{voyage.captain}</span>
                      <span>{voyage.crew}</span>
                    </span>
                  }
                  href="#"
                  hrefLabel={`Open voyage ${voyage.route}`}
                  hrefType="internal"
                  uri={`https://example.com/voyage/prins-eugenius-${index + 1}`}
                />
              ))}
            </div>
          </ObjectCardSection>

          <ObjectCardAction
            variant="more"
            icon={<IconShowMore className="h-s12 w-s12" />}
            onPress={() => setShowAllVoyages((isShowingAll) => !isShowingAll)}
          >
            {showAllVoyages ? "Show less" : `More Voyages (${hiddenCount})`}
          </ObjectCardAction>

          <ObjectCardSection title="External Identifiers">
            <div className="flex flex-col gap-s12">
              <ObjectCardExternalLink href="https://example.com">
                DAS ship1203
              </ObjectCardExternalLink>
              <ObjectCardExternalLink href="https://example.com">
                vocsite.nl/schepen/10327
              </ObjectCardExternalLink>
            </div>
          </ObjectCardSection>

          <ObjectCardFooter>
            <ObjectCardAction icon={<IconCopy className="h-s12 w-s12" />}>
              Copy URI
            </ObjectCardAction>
            <ObjectCardAction icon={<IconDownload className="h-s12 w-s12" />}>
              Export RDF/JSON-LD
            </ObjectCardAction>
          </ObjectCardFooter>
        </ObjectCardPanel>

        <ReferencePanel title="References (1,234)" items={references} />
      </ObjectCardBody>
    </ObjectCard>
  );
}
