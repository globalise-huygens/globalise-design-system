"use client";

import { CardFeatured, type CardFeaturedItem } from "@globalise/design-system";
import React from "react";

const featuredItems: CardFeaturedItem[] = [
  {
    color: "var(--brand-parchment)",
    label: "Collection",
    title: "New collection:\nWomen & Family in\nColonial Contexts",
    cta: "Explore the collection",
    darkBackground: false,
  },
  {
    color: "var(--brand-turquoise)",
    label: "Event",
    title: "Globalise Conference 2026",
    cta: "Learn more",
    darkBackground: false,
  },
  {
    color: "var(--brand-parchment)",
    label: "Article",
    title: "Reading VOC documents critically",
    cta: "Read article",
    darkBackground: false,
  },
  {
    color: "var(--brand-vermilion)",
    label: "Collection",
    title: "Lives and labour in the VOC world",
    cta: "Explore",
    darkBackground: false,
  },
];

export function HomeFeatured() {
  return (
    <CardFeatured
      items={featuredItems}
      defaultExpanded={0}
      className="min-h-76 lg:min-h-100"
    />
  );
}
