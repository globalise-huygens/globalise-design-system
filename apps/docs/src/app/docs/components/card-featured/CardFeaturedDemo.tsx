"use client";

import { CardFeatured } from "@globalise/design-system";

export function CardFeaturedDemo() {
  return (
    <div className="w-full h-87.5">
      <CardFeatured
        className="h-full"
        items={[
          {
            color: "var(--brand-turquoise)",
            label: "Collection",
            title: "VOC Archives\nExplored",
            cta: "View collection",
          },
          {
            color: "var(--brand-vermilion)",
            label: "Research",
            title: "Maritime Trade\nRoutes",
            cta: "Read more",
          },
          {
            color: "var(--brand-mint)",
            label: "Education",
            title: "Teaching\nResources",
            cta: "Get started",
          },
        ]}
        defaultExpanded={0}
      />
    </div>
  );
}
