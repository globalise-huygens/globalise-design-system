import { CardGlance } from "@globalise/design-system";

export function CardGlanceDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
      <CardGlance
        heading="2020"
        subtitle="Project launch"
        description="GLOBALISE started unlocking VOC archives through HTR."
        cta="Read more"
        color="turquoise"
      />
      <CardGlance
        heading="4.7M+"
        subtitle="Pages digitised"
        description="Handwritten pages processed with text recognition."
        cta="Explore archive"
        color="vermilion"
      />
    </div>
  );
}
