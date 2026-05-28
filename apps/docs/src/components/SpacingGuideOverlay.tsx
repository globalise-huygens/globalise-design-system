"use client";

import React from "react";

type BlockMetric = {
  top: number;
  bottom: number;
  label: string;
  marginTop: number;
  paddingTop: number;
  paddingBottom: number;
  marginBottom: number;
};

type SpacingMarker = {
  top: number;
  gap: number;
};

function rhythmTag(value: number) {
  if (value % 8 === 0) return "8x";
  if (value % 4 === 0) return "4x";
  return "off";
}

function toIntPx(value: string) {
  return Number.parseInt(value.replace("px", ""), 10) || 0;
}

function getBlockMetrics(): BlockMetric[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>("[data-rhythm-block]"),
  )
    .map((node, index) => {
      const rect = node.getBoundingClientRect();
      const style = getComputedStyle(node);
      const explicitLabel = node.getAttribute("data-rhythm-block")?.trim();

      return {
        top: rect.top,
        bottom: rect.bottom,
        label: explicitLabel || `block-${index + 1}`,
        marginTop: toIntPx(style.marginTop),
        paddingTop: toIntPx(style.paddingTop),
        paddingBottom: toIntPx(style.paddingBottom),
        marginBottom: toIntPx(style.marginBottom),
      };
    })
    .filter((item) => item.bottom - item.top > 0)
    .sort((a, b) => a.top - b.top);
}

function getSpacingMarkers(blocks: BlockMetric[]): SpacingMarker[] {
  const markers: SpacingMarker[] = [];

  for (let i = 0; i < blocks.length - 1; i += 1) {
    const current = blocks[i];
    const next = blocks[i + 1];
    const gap = Math.round(next.top - current.bottom);

    if (gap < 0) continue;

    markers.push({
      top: current.bottom + gap / 2,
      gap,
    });
  }

  return markers;
}

export function SpacingGuideOverlay({ visible }: { visible: boolean }) {
  const [blocks, setBlocks] = React.useState<BlockMetric[]>([]);
  const [markers, setMarkers] = React.useState<SpacingMarker[]>([]);

  React.useEffect(() => {
    if (!visible) {
      setBlocks([]);
      setMarkers([]);
      return;
    }

    const update = () => {
      const nextBlocks = getBlockMetrics();
      setBlocks(nextBlocks);
      setMarkers(getSpacingMarkers(nextBlocks));
    };

    update();

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10000"
    >
      {blocks.map((block) => (
        <React.Fragment
          key={`block-${block.label}-${block.top}-${block.bottom}`}
        >
          <div
            className="absolute left-0 right-0 border-t border-brand-vermilion/40"
            style={{ top: `${block.top}px` }}
          />
          <div
            className="absolute left-s16 -translate-y-1/2 border border-brand-vermilion/60 bg-brand-black/90 px-s8 py-s4 text-[11px] leading-4 text-brand-white"
            style={{ top: `${block.top}px` }}
          >
            {block.label} | mt {block.marginTop}px ({rhythmTag(block.marginTop)}
            ) | pt {block.paddingTop}px ({rhythmTag(block.paddingTop)})
          </div>

          <div
            className="absolute left-0 right-0 border-t border-brand-mint/40"
            style={{ top: `${block.bottom}px` }}
          />
          <div
            className="absolute right-s16 -translate-y-1/2 border border-brand-mint/60 bg-brand-black/90 px-s8 py-s4 text-[11px] leading-4 text-brand-white"
            style={{ top: `${block.bottom}px` }}
          >
            pb {block.paddingBottom}px ({rhythmTag(block.paddingBottom)}) | mb{" "}
            {block.marginBottom}px ({rhythmTag(block.marginBottom)})
          </div>
        </React.Fragment>
      ))}

      {markers.map((marker, index) => {
        const follows4 = marker.gap % 4 === 0;
        const follows8 = marker.gap % 8 === 0;

        return (
          <React.Fragment key={`${index}-${marker.top}-${marker.gap}`}>
            <div
              className="absolute left-0 right-0 border-t border-brand-turquoise/70"
              style={{ top: `${marker.top}px` }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-brand-turquoise/80 bg-brand-black/95 px-s8 py-s4 text-[11px] leading-4 text-brand-white"
              style={{ top: `${marker.top}px` }}
            >
              gap {marker.gap}px{" "}
              {follows8 ? "(8x)" : follows4 ? "(4x)" : "(off)"}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
