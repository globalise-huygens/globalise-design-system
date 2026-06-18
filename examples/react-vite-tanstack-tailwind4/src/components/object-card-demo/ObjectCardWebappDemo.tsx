import {
  cn,
  EntityBadge,
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
} from "@globalise/design-system";
import {
  OBJECT_CARD_EXTERNAL_IDENTIFIERS,
  OBJECT_CARD_PROPERTIES,
  OBJECT_CARD_REFERENCES,
  OBJECT_CARD_VOYAGES,
} from "./data";

export interface ObjectCardWebappDemoProps {
  className?: string;
  onClose?: () => void;
}

export function ObjectCardWebappDemo({
  className,
  onClose,
}: ObjectCardWebappDemoProps) {
  return (
    <ObjectCard className={cn("webapp-object-card", className)}>
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
        <ObjectCardStats>
          <ObjectCardStat>{OBJECT_CARD_VOYAGES.length} Voyages</ObjectCardStat>
          <ObjectCardStat>
            {OBJECT_CARD_REFERENCES.length} References
          </ObjectCardStat>
          <ObjectCardStat>Chamber: Amsterdam</ObjectCardStat>
        </ObjectCardStats>
      </ObjectCardHeader>

      <ObjectCardBody>
        <ObjectCardPanel side="left">
          <ObjectCardSection>
            <ObjectCardPropertyList>
              {OBJECT_CARD_PROPERTIES.map((property) => (
                <ObjectCardProperty
                  key={property.label}
                  label={property.label}
                  value={property.value}
                />
              ))}
            </ObjectCardPropertyList>
          </ObjectCardSection>

          <ObjectCardSection
            title={`Voyages (${OBJECT_CARD_VOYAGES.length})`}
            scrollable
            className="webapp-object-card__voyages"
          >
            <div className="overflow-hidden border-t border-brand-white/20">
              {OBJECT_CARD_VOYAGES.map((voyage, index) => (
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

          <ObjectCardSection title="External Identifiers">
            <div className="flex flex-col gap-s12">
              {OBJECT_CARD_EXTERNAL_IDENTIFIERS.map((identifier) => (
                <ObjectCardExternalLink
                  key={identifier}
                  href="https://example.com"
                >
                  {identifier}
                </ObjectCardExternalLink>
              ))}
            </div>
          </ObjectCardSection>
        </ObjectCardPanel>

        <ReferencePanel
          className="webapp-object-card__references"
          title={`References (${OBJECT_CARD_REFERENCES.length})`}
          items={OBJECT_CARD_REFERENCES}
        />
      </ObjectCardBody>
    </ObjectCard>
  );
}
