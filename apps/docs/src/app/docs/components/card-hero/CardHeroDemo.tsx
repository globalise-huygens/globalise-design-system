import { CardHero } from "@globalise/design-system";

export function CardHeroDemo() {
  return (
    <div className="grid grid-cols-2 gap-2 w-full max-w-lg h-62.5">
      <CardHero
        label="Archive"
        title={"Explore the VOC\nCorrespondence"}
        hoverColor="turquoise"
        className="h-full"
      >
        <div className="w-full h-full bg-parchment-700" />
      </CardHero>
      <CardHero
        label="Video"
        title={"Watch the\nDocumentary"}
        hoverColor="vermilion"
        className="h-full"
      >
        <div className="w-full h-full bg-neutral-700" />
      </CardHero>
    </div>
  );
}
