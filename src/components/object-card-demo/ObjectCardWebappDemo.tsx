import {
  cn,
  EntityBadge,
  EntityTag,
  IconCopy,
  IconDownload,
  IconArrowRight,
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
  ReferencePanelList,
} from "@/index";
import * as React from "react";
import {
  createObjectCardReferences,
  OBJECT_CARD_EXTERNAL_IDENTIFIERS,
  OBJECT_CARD_PROPERTIES,
  OBJECT_CARD_REFERENCE_COUNT,
  OBJECT_CARD_VOYAGES,
} from "./data";

export interface ObjectCardWebappDemoProps {
  className?: string;
  onClose?: () => void;
}

function LinkedPropertyValue({
  value,
  prefix,
  entityLabel,
  type,
}: {
  value?: string;
  prefix?: string;
  entityLabel?: string;
  type?: "place" | "ship";
}) {
  if (!type || !entityLabel) {
    return value;
  }

  return (
    <span className="webapp-object-card__property-entity">
      {prefix && <span>{prefix}</span>}
      <EntityTag href="#" type={type}>
        {entityLabel}
      </EntityTag>
    </span>
  );
}

function ScanThumbnail() {
  return <div className="webapp-object-card__scan-thumbnail">scan</div>;
}

function renderVoyageRoute(route: string) {
  const [from, to] = route.split("->").map((part) => part.trim());

  if (!from || !to) {
    return route;
  }

  return (
    <span className="webapp-object-card__voyage-title">
      <span>{from}</span>
      <IconArrowRight
        aria-hidden="true"
        className="webapp-object-card__voyage-route-icon"
      />
      <span>{to}</span>
    </span>
  );
}

export function ObjectCardWebappDemo({
  className,
  onClose,
}: ObjectCardWebappDemoProps) {
  const tabIdPrefix = React.useId();
  const voyagesTabId = `${tabIdPrefix}-tab-voyages`;
  const referencesTabId = `${tabIdPrefix}-tab-references`;
  const voyagesPanelId = `${tabIdPrefix}-panel-voyages`;
  const referencesPanelId = `${tabIdPrefix}-panel-references`;
  const [activeMobilePanel, setActiveMobilePanel] = React.useState<
    "voyages" | "references"
  >("voyages");
  const [propertiesExpanded, setPropertiesExpanded] = React.useState(false);
  const references = React.useMemo(
    () => createObjectCardReferences(<ScanThumbnail />),
    [],
  );

  const isVoyagesPanelActive = activeMobilePanel === "voyages";
  const isReferencesPanelActive = activeMobilePanel === "references";

  return (
    <ObjectCard className={cn("webapp-object-card", className)}>
      <ObjectCardHeader
        onClose={onClose}
        actions={
          <>
            <ObjectCardAction
              aria-label="Copy URI"
              icon={<IconCopy className="showcase-icon" />}
            />
            <ObjectCardAction
              aria-label="Download RDF/JSON-LD"
              icon={<IconDownload className="showcase-icon" />}
            />
          </>
        }
      >
        <EntityBadge
          type="ship"
          icon={<IconEntityShip className="showcase-icon-small" />}
        >
          Ship
        </EntityBadge>
        <ObjectCardTitle>Prins Eugenius</ObjectCardTitle>
        <div className="webapp-object-card__header-meta">
          <ObjectCardStats>
            <ObjectCardStat>
              {OBJECT_CARD_VOYAGES.length} Voyages
            </ObjectCardStat>
            <ObjectCardStat>
              {OBJECT_CARD_REFERENCE_COUNT.toLocaleString()} References
            </ObjectCardStat>
            <ObjectCardStat>Chamber: Amsterdam</ObjectCardStat>
          </ObjectCardStats>
          <div className="webapp-object-card__external-links">
            {OBJECT_CARD_EXTERNAL_IDENTIFIERS.map((identifier) => (
              <ObjectCardExternalLink key={identifier} href="#">
                {identifier}
              </ObjectCardExternalLink>
            ))}
          </div>
        </div>
      </ObjectCardHeader>

      <ObjectCardBody>
        <ObjectCardPanel
          side="left"
          className="webapp-object-card__properties-panel"
        >
          <ObjectCardSection
            className={cn(
              "webapp-object-card__properties",
              propertiesExpanded && "webapp-object-card__properties--expanded",
            )}
          >
            <ObjectCardPropertyList>
              {OBJECT_CARD_PROPERTIES.map((property, index) => (
                <ObjectCardProperty
                  key={property.label}
                  className={
                    index > 1 ? "webapp-object-card__property-extra" : undefined
                  }
                  label={property.label}
                  value={
                    <LinkedPropertyValue
                      value={property.value}
                      prefix={property.prefix}
                      entityLabel={property.entityLabel}
                      type={property.type}
                    />
                  }
                />
              ))}
            </ObjectCardPropertyList>

            <button
              type="button"
              className="webapp-object-card__properties-toggle"
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
          className="webapp-object-card__mobile-segments"
          role="tablist"
          aria-label="Object card sections"
        >
          <button
            type="button"
            role="tab"
            id={voyagesTabId}
            aria-selected={isVoyagesPanelActive}
            aria-controls={voyagesPanelId}
            className="webapp-object-card__mobile-segment"
            data-active={isVoyagesPanelActive ? "true" : "false"}
            onClick={() => setActiveMobilePanel("voyages")}
          >
            Voyages ({OBJECT_CARD_VOYAGES.length})
          </button>
          <button
            type="button"
            role="tab"
            id={referencesTabId}
            aria-selected={isReferencesPanelActive}
            aria-controls={referencesPanelId}
            className="webapp-object-card__mobile-segment"
            data-active={isReferencesPanelActive ? "true" : "false"}
            onClick={() => setActiveMobilePanel("references")}
          >
            References ({OBJECT_CARD_REFERENCE_COUNT.toLocaleString()})
          </button>
        </div>

        <ObjectCardPanel
          side="left"
          id={voyagesPanelId}
          role="tabpanel"
          aria-labelledby={voyagesTabId}
          className={cn(
            "webapp-object-card__mobile-tab-panel webapp-object-card__mobile-tab-panel--voyages",
            isVoyagesPanelActive &&
              "webapp-object-card__mobile-tab-panel--active",
          )}
        >
          <ObjectCardSection className="webapp-object-card__properties webapp-object-card__properties--desktop">
            <ObjectCardPropertyList>
              {OBJECT_CARD_PROPERTIES.map((property) => (
                <ObjectCardProperty
                  key={`desktop-${property.label}`}
                  label={property.label}
                  value={
                    <LinkedPropertyValue
                      value={property.value}
                      prefix={property.prefix}
                      entityLabel={property.entityLabel}
                      type={property.type}
                    />
                  }
                />
              ))}
            </ObjectCardPropertyList>
          </ObjectCardSection>

          <ObjectCardSection
            title={`Voyages (${OBJECT_CARD_VOYAGES.length})`}
            scrollable
            className="webapp-object-card__voyages"
          >
            <ReferencePanelList className="webapp-object-card__voyage-list">
              {OBJECT_CARD_VOYAGES.map((voyage, index) => (
                <ReferencePanelItem
                  key={`${voyage.route}-${voyage.dates}`}
                  className="webapp-object-card__voyage-item"
                  title={renderVoyageRoute(voyage.route)}
                  metadata={
                    <span className="webapp-object-card__voyage-metadata">
                      <span>{voyage.dates}</span>
                      <span className="webapp-object-card__voyage-metadata-row">
                        <span className="webapp-object-card__voyage-captain">
                          {voyage.captain}
                        </span>
                        <span className="webapp-object-card__voyage-crew">
                          {voyage.crew}
                        </span>
                      </span>
                    </span>
                  }
                  href="#"
                  hrefLabel={`Open voyage ${voyage.route}`}
                  hrefType="internal"
                  uri={`https://example.com/voyage/prins-eugenius-${index + 1}`}
                />
              ))}
            </ReferencePanelList>
          </ObjectCardSection>
        </ObjectCardPanel>

        <ReferencePanel
          id={referencesPanelId}
          role="tabpanel"
          aria-labelledby={referencesTabId}
          className={cn(
            "webapp-object-card__references webapp-object-card__mobile-tab-panel webapp-object-card__mobile-tab-panel--references",
            isReferencesPanelActive &&
              "webapp-object-card__mobile-tab-panel--active",
          )}
          title={`References (${OBJECT_CARD_REFERENCE_COUNT.toLocaleString()})`}
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
