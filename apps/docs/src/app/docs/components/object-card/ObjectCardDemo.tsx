"use client";

import {
  IconCopy,
  IconDownload,
  IconExternalLink,
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

      <ObjectCardBody className="h-[500px] lg:h-[857px]">
        {/* Left panel — properties */}
        <ObjectCardPanel side="left">
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
                    <span className="font-sans text-xs italic leading-[1.2] tracking-[-0.02em] text-zinc-400">
                      {v.dates}
                    </span>
                    <IconExternalLink className="h-4 w-4 shrink-0 text-zinc-400" />
                  </div>
                  <span className="font-serif text-[13px] font-semibold leading-none tracking-[-0.03em] text-zinc-200">
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
            <ObjectCardFooterAction icon={<IconCopy className="h-4 w-4" />}>
              Copy URI
            </ObjectCardFooterAction>
            <ObjectCardFooterAction icon={<IconDownload className="h-4 w-4" />}>
              Export RDF/JSON-LD
            </ObjectCardFooterAction>
          </ObjectCardFooter>
        </ObjectCardPanel>

        {/* Right panel — references */}
        <ObjectCardPanel side="right">
          <span className="font-sans text-sm italic leading-[1.2] tracking-[-0.02em] text-zinc-400">
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
