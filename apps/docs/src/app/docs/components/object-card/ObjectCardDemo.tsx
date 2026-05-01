"use client";

import {
  IconAdd,
  IconCopy,
  IconDownload,
  IconShip,
  ObjectCard,
  ObjectCardAction,
  ObjectCardBadge,
  ObjectCardBody,
  ObjectCardExternalLink,
  ObjectCardFooter,
  ObjectCardHeader,
  ObjectCardListItem,
  ObjectCardPanel,
  ObjectCardProperty,
  ObjectCardPropertyList,
  ObjectCardReferenceItem,
  ObjectCardSection,
  ObjectCardStat,
  ObjectCardStats,
  ObjectCardTitle,
} from "@globalise/design-system";
import { useState } from "react";

const voyages = [
  {
    dates: "12 Nov 1703 – 3 Jul 1704",
    route: "Texel (NL) → Jakarta (ID)",
    captain: "Capt. Klaas Nanningsz. Sanderus",
    crew: "~230 crew",
  },
  {
    dates: "14 Sep 1706 – 18 Apr 1707",
    route: "Jakarta (ID) → Texel (NL)",
    captain: "Capt. Pieter Oosterdorp",
    crew: "~218 crew",
  },
  {
    dates: "8 Feb 1709 – 22 Oct 1709",
    route: "Texel (NL) → Jakarta (ID)",
    captain: "Capt. Jan Berger",
    crew: "~224 crew",
  },
  {
    dates: "5 Mar 1715 – 2 Nov 1715",
    route: "Texel (NL) → Jakarta (ID)",
    captain: "Capt. Hendrik Mulder",
    crew: "~215 crew",
  },
  {
    dates: "12 Jun 1718 – 14 Jan 1719",
    route: "Jakarta (ID) → Texel (NL)",
    captain: "Capt. Willem de Vries",
    crew: "~198 crew",
  },
  {
    dates: "3 Feb 1721 – 9 Sep 1721",
    route: "Texel (NL) → Jakarta (ID)",
    captain: "Capt. Gerrit Jansen",
    crew: "~221 crew",
  },
  {
    dates: "7 Aug 1724 – 4 Mar 1725",
    route: "Jakarta (ID) → Texel (NL)",
    captain: "Capt. Thomas Bakker",
    crew: "~205 crew",
  },
];

const INITIAL_VOYAGE_COUNT = 3;

const references = [
  {
    title: "p.264",
    snippet: "in 't geheel p:r de prins Eugenius en de taxisboom na...",
    archiveId: "NL-HaNA 1.04.02 · 10070_0054 · 264",
  },
  {
    title: "p.264",
    snippet: "in 't geheel p:r de prins Eugenius en de taxisboom na...",
    archiveId: "NL-HaNA 1.04.02 · 10070_0054 · 264",
  },
  {
    title: "p.264",
    snippet: "in 't geheel p:r de prins Eugenius en de taxisboom na...",
    archiveId: "NL-HaNA 1.04.02 · 10070_0054 · 264",
  },
  {
    title: "p.264",
    snippet: "in 't geheel p:r de prins Eugenius en de taxisboom na...",
    archiveId: "NL-HaNA 1.04.02 · 10070_0054 · 264",
  },
];

export function ObjectCardDemo() {
  const [showAllVoyages, setShowAllVoyages] = useState(false);
  const visibleVoyages = showAllVoyages
    ? voyages
    : voyages.slice(0, INITIAL_VOYAGE_COUNT);
  const hiddenCount = voyages.length - INITIAL_VOYAGE_COUNT;

  return (
    <ObjectCard>
      <ObjectCardHeader onClose={() => {}}>
        <ObjectCardBadge
          type="ship"
          icon={<IconShip className="h-3.5 w-3.5" />}
        >
          Ship
        </ObjectCardBadge>
        <ObjectCardTitle>Prins Eugenius</ObjectCardTitle>
        <ObjectCardStats>
          <ObjectCardStat>7 Voyages</ObjectCardStat>
          <ObjectCardStat>1,234 References</ObjectCardStat>
          <ObjectCardStat>Chamber: Amsterdam</ObjectCardStat>
        </ObjectCardStats>
      </ObjectCardHeader>

      <ObjectCardBody className="h-125 lg:h-150">
        {/* Left panel — properties */}
        <ObjectCardPanel side="left">
          <ObjectCardSection>
            <ObjectCardPropertyList>
              <ObjectCardProperty label="Built" value="1703, Amsterdam" />
              <ObjectCardProperty label="Laid up" value="1727, Batavia" />
              <ObjectCardProperty label="Weight" value="874 tons" />
              <ObjectCardProperty label="Ship type" value="Ship" />
            </ObjectCardPropertyList>
          </ObjectCardSection>

          <ObjectCardSection title="Voyages (7)" scrollable>
            <div className="flex flex-col gap-2">
              {visibleVoyages.map((v, i) => (
                <ObjectCardListItem key={i} href="#">
                  <span className="font-sans text-xs text-zinc-400 leading-4 pr-5">
                    {v.dates}
                  </span>
                  <span className="font-serif text-xs font-semibold leading-3 text-zinc-200">
                    {v.route}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] leading-[1.2] text-zinc-400">
                      {v.captain}
                    </span>
                    <span className="font-sans text-[11px] leading-[1.2] text-zinc-400">
                      {v.crew}
                    </span>
                  </div>
                </ObjectCardListItem>
              ))}
            </div>
          </ObjectCardSection>

          <ObjectCardAction
            variant="more"
            icon={<IconAdd className="h-3 w-3" />}
            onPress={() => setShowAllVoyages((v) => !v)}
          >
            {showAllVoyages ? "Show less" : `More Voyages (${hiddenCount})`}
          </ObjectCardAction>

          <ObjectCardSection title="External Identifiers">
            <div className="flex flex-col gap-3">
              <ObjectCardExternalLink href="https://example.com">
                DAS ship1203
              </ObjectCardExternalLink>
              <ObjectCardExternalLink href="https://example.com">
                vocsite.nl/schepen/10327
              </ObjectCardExternalLink>
            </div>
          </ObjectCardSection>

          <ObjectCardFooter>
            <ObjectCardAction icon={<IconCopy className="h-3.5 w-3.5" />}>
              Copy URI
            </ObjectCardAction>
            <ObjectCardAction icon={<IconDownload className="h-2.5 w-2.5" />}>
              Export RDF/JSON-LD
            </ObjectCardAction>
          </ObjectCardFooter>
        </ObjectCardPanel>

        {/* Right panel — references */}
        <ObjectCardPanel side="right">
          <ObjectCardSection title="References (1,234)">
            {references.map((r, i) => (
              <ObjectCardReferenceItem
                key={i}
                title={r.title}
                snippet={r.snippet}
                archiveId={r.archiveId}
                href="#"
                image={
                  <img
                    className="h-full w-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80'%3E%3Crect width='120' height='80' fill='%23404040'/%3E%3Ctext x='60' y='44' text-anchor='middle' fill='%23808080' font-family='sans-serif' font-size='11'%3Escan%3C/text%3E%3C/svg%3E"
                    alt="Manuscript scan"
                  />
                }
              />
            ))}
          </ObjectCardSection>
        </ObjectCardPanel>
      </ObjectCardBody>
    </ObjectCard>
  );
}
