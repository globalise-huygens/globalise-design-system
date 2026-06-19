"use client";

import {
  EntityBadge,
  EntityTag,
  IconArrowRight,
  IconCopy,
  IconDownload,
  IconEntityShip,
  ObjectCard,
  ObjectCardAction,
  ObjectCardBody,
  ObjectCardExternalLink,
  ObjectCardHeader,
  ObjectCardPanel,
  ObjectCardProperty,
  ObjectCardPropertyList,
  ObjectCardSection,
  ObjectCardStat,
  ObjectCardStats,
  ObjectCardTitle,
  ReferencePanel,
  ReferencePanelItem,
  type ReferencePanelItemData,
} from "@globalise/design-system";
import Image from "next/image";
import * as React from "react";

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

const shipProperties: Array<{ label: string; value: React.ReactNode }> = [
  {
    label: "Built",
    value: (
      <>
        1703,{" "}
        <EntityTag type="place" href="#">
          Amsterdam
        </EntityTag>
      </>
    ),
  },
  {
    label: "Laid up",
    value: (
      <>
        1727,{" "}
        <EntityTag type="place" href="#">
          Batavia
        </EntityTag>
      </>
    ),
  },
  {
    label: "Weight",
    value: "874 tons",
  },
  {
    label: "Ship type",
    value: (
      <EntityTag type="ship" href="#">
        Ship
      </EntityTag>
    ),
  },
];

function renderVoyageRoute(route: string) {
  const [from, to] = route.split("->").map((part) => part.trim());

  if (!from || !to) {
    return route;
  }

  return (
    <span className="inline-flex items-center gap-s8">
      <span>{from}</span>
      <IconArrowRight className="h-s12 w-s12 text-brand-white/70" />
      <span>{to}</span>
    </span>
  );
}

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

const referenceSeeds: ReferencePanelItemData[] = [
  {
    id: "1764-0054-264",
    title: "1764 · Doc 0054 · Scan 264",
    snippet:
      "in 't geheel p:r de prins Eugenius en de taxisboom na Batavia gesonden...",
    metadata: "NL-HaNA 1.04.02 · Inventory 10070",
    href: "#",
    hrefLabel: "Open reference 1764 0054 page 264",
    uri: "https://example.com/reference/1764-0054-264",
    thumbnail: <ManuscriptScan />,
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
    thumbnail: <ManuscriptScan />,
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
    thumbnail: <ManuscriptScan />,
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
    thumbnail: <ManuscriptScan />,
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
    thumbnail: <ManuscriptScan />,
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
    thumbnail: <ManuscriptScan />,
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
    thumbnail: <ManuscriptScan />,
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
    thumbnail: <ManuscriptScan />,
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
    thumbnail: <ManuscriptScan />,
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
    thumbnail: <ManuscriptScan />,
  },
];

const referenceCount = 1234;

const references: ReferencePanelItemData[] = Array.from(
  { length: referenceCount },
  (_, index) => {
    const seed = referenceSeeds[index % referenceSeeds.length];
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
    };
  },
);

export interface PrinsEugeniusObjectCardProps {
  onClose?: () => void;
  className?: string;
}

export function PrinsEugeniusObjectCard({
  onClose,
  className,
}: PrinsEugeniusObjectCardProps) {
  const tabIdPrefix = React.useId();
  const voyagesTabId = `${tabIdPrefix}-tab-voyages`;
  const referencesTabId = `${tabIdPrefix}-tab-references`;
  const voyagesPanelId = `${tabIdPrefix}-panel-voyages`;
  const referencesPanelId = `${tabIdPrefix}-panel-references`;
  const [activeMobilePanel, setActiveMobilePanel] = React.useState<
    "voyages" | "references"
  >("voyages");
  const [propertiesExpanded, setPropertiesExpanded] = React.useState(false);

  const isVoyagesPanelActive = activeMobilePanel === "voyages";
  const isReferencesPanelActive = activeMobilePanel === "references";

  return (
    <ObjectCard className={className}>
      <ObjectCardHeader
        onClose={onClose}
        actions={
          <>
            <ObjectCardAction
              aria-label="Copy URI"
              icon={<IconCopy className="h-s16 w-s16" />}
            />
            <ObjectCardAction
              aria-label="Download RDF/JSON-LD"
              icon={<IconDownload className="h-s16 w-s16" />}
            />
          </>
        }
      >
        <EntityBadge
          type="ship"
          icon={<IconEntityShip className="h-s12 w-s12" />}
        >
          Ship
        </EntityBadge>
        <ObjectCardTitle>Prins Eugenius</ObjectCardTitle>
        <div className="flex flex-wrap items-center gap-x-s16 gap-y-s8">
          <ObjectCardStats>
            <ObjectCardStat>7 Voyages</ObjectCardStat>
            <ObjectCardStat>
              {references.length.toLocaleString()} References
            </ObjectCardStat>
            <ObjectCardStat>Chamber: Amsterdam</ObjectCardStat>
          </ObjectCardStats>
          <div className="docs-object-card__external-links">
            <ObjectCardExternalLink href="https://example.com">
              DAS ship1203
            </ObjectCardExternalLink>
            <ObjectCardExternalLink href="https://example.com">
              vocsite.nl/schepen/10327
            </ObjectCardExternalLink>
          </div>
        </div>
      </ObjectCardHeader>

      <ObjectCardBody>
        <ObjectCardPanel
          side="left"
          className="docs-object-card__properties-panel"
        >
          <ObjectCardSection
            className={`docs-object-card__properties ${propertiesExpanded ? "docs-object-card__properties--expanded" : ""}`}
          >
            <ObjectCardPropertyList>
              {shipProperties.map((property, index) => (
                <ObjectCardProperty
                  key={property.label}
                  className={
                    index > 1 ? "docs-object-card__property-extra" : undefined
                  }
                  label={property.label}
                  value={property.value}
                />
              ))}
            </ObjectCardPropertyList>

            <button
              type="button"
              className="docs-object-card__properties-toggle"
              aria-expanded={propertiesExpanded}
              onClick={() => setPropertiesExpanded((current) => !current)}
            >
              {propertiesExpanded
                ? "Show fewer properties"
                : "Show all properties"}
            </button>
          </ObjectCardSection>
        </ObjectCardPanel>

        <div
          className="docs-object-card__mobile-segments"
          role="tablist"
          aria-label="Object card sections"
        >
          <button
            type="button"
            role="tab"
            id={voyagesTabId}
            aria-selected={isVoyagesPanelActive}
            aria-controls={voyagesPanelId}
            className="docs-object-card__mobile-segment"
            data-active={isVoyagesPanelActive ? "true" : "false"}
            onClick={() => setActiveMobilePanel("voyages")}
          >
            Voyages ({voyages.length})
          </button>
          <button
            type="button"
            role="tab"
            id={referencesTabId}
            aria-selected={isReferencesPanelActive}
            aria-controls={referencesPanelId}
            className="docs-object-card__mobile-segment"
            data-active={isReferencesPanelActive ? "true" : "false"}
            onClick={() => setActiveMobilePanel("references")}
          >
            References ({references.length.toLocaleString()})
          </button>
        </div>

        <ObjectCardPanel
          side="left"
          id={voyagesPanelId}
          role="tabpanel"
          aria-labelledby={voyagesTabId}
          className={`docs-object-card__mobile-tab-panel docs-object-card__mobile-tab-panel--voyages ${isVoyagesPanelActive ? "docs-object-card__mobile-tab-panel--active" : ""}`}
        >
          <ObjectCardSection className="docs-object-card__properties docs-object-card__properties--desktop">
            <ObjectCardPropertyList>
              {shipProperties.map((property) => (
                <ObjectCardProperty
                  key={`desktop-${property.label}`}
                  label={property.label}
                  value={property.value}
                />
              ))}
            </ObjectCardPropertyList>
          </ObjectCardSection>

          <ObjectCardSection
            title={`Voyages (${voyages.length})`}
            scrollable
            className="docs-object-card__voyages"
          >
            <div className="overflow-hidden border-t border-brand-white/20">
              {voyages.map((voyage, index) => (
                <ReferencePanelItem
                  key={`${voyage.route}-${voyage.dates}`}
                  title={renderVoyageRoute(voyage.route)}
                  metadata={
                    <span className="flex flex-col gap-y-s4">
                      <span>{voyage.dates}</span>
                      <span className="flex items-center justify-between gap-x-s12">
                        <span className="min-w-0">{voyage.captain}</span>
                        <span className="shrink-0">{voyage.crew}</span>
                      </span>
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
        </ObjectCardPanel>

        <ReferencePanel
          id={referencesPanelId}
          role="tabpanel"
          aria-labelledby={referencesTabId}
          className={`docs-object-card__references docs-object-card__mobile-tab-panel docs-object-card__mobile-tab-panel--references ${isReferencesPanelActive ? "docs-object-card__mobile-tab-panel--active" : ""}`}
          title={`References (${references.length.toLocaleString()})`}
          items={references}
          progressiveLoading
          initialVisibleCount={24}
          loadMoreStep={24}
          autoLoadMore
        />
      </ObjectCardBody>
    </ObjectCard>
  );
}
