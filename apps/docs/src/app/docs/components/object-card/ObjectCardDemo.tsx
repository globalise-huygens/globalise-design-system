"use client";

import {
  IconCopy,
  IconDownload,
  ObjectCard,
  ObjectCardBadge,
  ObjectCardBody,
  ObjectCardExternalLink,
  ObjectCardFooter,
  ObjectCardFooterAction,
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
  ObjectCardViewMore,
} from "@globalise/design-system";

const voyages = [
  {
    dates: "19 Jan 1710 – 8 Aug 1710",
    route: "Texel (NL) → Jakarta (ID)",
    captain: "Capt. Klaas Nanningsz. Sanderus",
    crew: "~230 crew",
  },
  {
    dates: "19 Jan 1710 – 8 Aug 1710",
    route: "Jakarta (ID) → Texel (NL)",
    captain: "Capt. Pieter Oosterdorp",
    crew: "~230 crew",
  },
  {
    dates: "19 Jan 1710 – 8 Aug 1710",
    route: "Texel (NL) → Jakarta (ID)",
    captain: "Capt. Jan Berger",
    crew: "~230 crew",
  },
];

const references = [
  {
    title: "p.264",
    snippet: (
      <>
        in &apos;t geheel p:r de <strong>prins Eugenius</strong> en de taxisboom
        na...
      </>
    ),
    archiveId: "NL-HaNA 1.04.02 · 10070_0054 · 264",
  },
  {
    title: "p.264",
    snippet: (
      <>
        in &apos;t geheel p:r de <strong>prins Eugenius</strong> en de taxisboom
        na...
      </>
    ),
    archiveId: "NL-HaNA 1.04.02 · 10070_0054 · 264",
  },
  {
    title: "p.264",
    snippet: (
      <>
        in &apos;t geheel p:r de <strong>prins Eugenius</strong> en de taxisboom
        na...
      </>
    ),
    archiveId: "NL-HaNA 1.04.02 · 10070_0054 · 264",
  },
  {
    title: "p.264",
    snippet: (
      <>
        in &apos;t geheel p:r de <strong>prins Eugenius</strong> en de taxisboom
        na...
      </>
    ),
    archiveId: "NL-HaNA 1.04.02 · 10070_0054 · 264",
  },
];

export function ObjectCardDemo() {
  return (
    <ObjectCard>
      <ObjectCardHeader onClose={() => {}}>
        <ObjectCardBadge type="ship">Ship</ObjectCardBadge>
        <ObjectCardTitle>Prins Eugenius</ObjectCardTitle>
        <ObjectCardStats>
          <ObjectCardStat>7 Voyages</ObjectCardStat>
          <ObjectCardStat>1,234 References</ObjectCardStat>
          <ObjectCardStat>Chamber: Amsterdam</ObjectCardStat>
        </ObjectCardStats>
      </ObjectCardHeader>

      <ObjectCardBody className="h-[500px] lg:h-[600px]">
        {/* Left panel — properties */}
        <ObjectCardPanel side="left" className="gap-12">
          <ObjectCardSection title="General Properties">
            <ObjectCardPropertyList>
              <ObjectCardProperty label="Built" value="1703, Amsterdam" />
              <ObjectCardProperty label="Laid up" value="1727, Batavia" />
              <ObjectCardProperty label="Weight" value="874 tons" />
              <ObjectCardProperty label="Ship type" value="Ship" />
            </ObjectCardPropertyList>
          </ObjectCardSection>

          <ObjectCardSection title="Voyages (7)">
            <div className="flex flex-col gap-2">
              {voyages.map((v, i) => (
                <ObjectCardListItem key={i}>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs text-zinc-400 leading-4">
                      {v.dates}
                    </span>
                  </div>
                  <span className="font-serif text-xs font-semibold leading-3 text-zinc-200">
                    {v.route}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs text-zinc-400 leading-3">
                      {v.captain}
                    </span>
                    <span className="font-sans text-xs text-zinc-400 leading-3">
                      {v.crew}
                    </span>
                  </div>
                </ObjectCardListItem>
              ))}
            </div>
            <ObjectCardViewMore />
          </ObjectCardSection>

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
            <ObjectCardFooterAction icon={<IconCopy className="h-3.5 w-3.5" />}>
              Copy URI
            </ObjectCardFooterAction>
            <ObjectCardFooterAction
              icon={<IconDownload className="h-2.5 w-2.5" />}
            >
              Export RDF/JSON-LD
            </ObjectCardFooterAction>
          </ObjectCardFooter>
        </ObjectCardPanel>

        {/* Right panel — references */}
        <ObjectCardPanel side="right">
          <span className="font-sans text-sm text-zinc-400 leading-4">
            References (1,234)
          </span>
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
                  src="https://placehold.co/120x80/404040/808080?text=scan"
                  alt="Manuscript scan"
                />
              }
            />
          ))}
        </ObjectCardPanel>
      </ObjectCardBody>
    </ObjectCard>
  );
}
