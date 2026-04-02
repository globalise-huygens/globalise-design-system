import { CardGlance } from "@globalise/design-system";

export function CardGlanceDemo() {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row w-full lg:min-h-96">
      <CardGlance
        heading="2020"
        subtitle="Project launch"
        description="Globalise was launched as a long-term research initiative to improve access to Dutch colonial archives through digital infrastructure and interdisciplinary collaboration."
        cta="Learn about the project"
        color="parchment"
      />
      <CardGlance
        heading="Archives"
        subtitle="Core collections"
        description="The platform brings together large-scale archival material from the Dutch East India Company, connecting documents across repositories and research datasets."
        cta="Explore the collections"
        color="vermilion"
      />
      <CardGlance
        heading="Research"
        subtitle="Digital innovation"
        description="Globalise develops tools for enriched metadata, entity linking and thematic exploration, supporting new computational and historical research methods."
        cta="How the platform works"
        color="turquoise"
      />
      <CardGlance
        heading="Access"
        subtitle="Global audience"
        description="Designed for scholars, educators and wider publics, the platform supports multilingual discovery and critical engagement with complex colonial histories."
        cta="Start exploring"
        color="mint"
      />
    </div>
  );
}
