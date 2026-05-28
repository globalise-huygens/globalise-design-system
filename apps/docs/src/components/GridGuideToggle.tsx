"use client";

import { Grid, GridGuide } from "@globalise/design-system";
import React from "react";
import { SpacingGuideOverlay } from "./SpacingGuideOverlay";

export function GridGuideToggle() {
  const [showGrid, setShowGrid] = React.useState(false);
  const [showRhythm, setShowRhythm] = React.useState(false);
  const [showSpacing, setShowSpacing] = React.useState(false);
  const [isObjectCardOverlayOpen, setIsObjectCardOverlayOpen] =
    React.useState(false);

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (isObjectCardOverlayOpen) {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key === "g") {
        e.preventDefault();
        setShowGrid((v) => !v);
      }

      if ((e.metaKey || e.ctrlKey) && e.key === "r") {
        e.preventDefault();
        setShowRhythm((v) => !v);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isObjectCardOverlayOpen]);

  React.useEffect(() => {
    function handleOverlayOpenChange(event: Event) {
      const customEvent = event as CustomEvent<{ isOpen?: boolean }>;
      setIsObjectCardOverlayOpen(Boolean(customEvent.detail?.isOpen));
    }

    window.addEventListener(
      "object-card-overlay-open-change",
      handleOverlayOpenChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        "object-card-overlay-open-change",
        handleOverlayOpenChange as EventListener,
      );
    };
  }, []);

  React.useEffect(() => {
    if (!isObjectCardOverlayOpen) {
      return;
    }

    setShowGrid(false);
    setShowRhythm(false);
    setShowSpacing(false);
  }, [isObjectCardOverlayOpen]);

  const guidesVisible = !isObjectCardOverlayOpen;

  return (
    <>
      <GridGuide
        visible={guidesVisible && (showGrid || showRhythm)}
        showGrid={showGrid}
        showRhythm={showRhythm}
      />
      <SpacingGuideOverlay visible={guidesVisible && showSpacing} />
      <div
        className={
          guidesVisible
            ? "pointer-events-none fixed inset-x-0 bottom-s16 z-10000"
            : "hidden"
        }
      >
        <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
          <div className="slot-content-band slot-mobile-pad flex justify-end gap-s8">
            <button
              type="button"
              onClick={() => setShowGrid((v) => !v)}
              className="pointer-events-auto bg-brand-turquoise px-s12 py-s8 text-xs font-mono font-medium text-brand-black shadow-lg transition-opacity hover:opacity-80"
              aria-label="Toggle grid columns"
            >
              {showGrid ? "Hide grid" : "Show grid"}
            </button>
            <button
              type="button"
              onClick={() => setShowRhythm((v) => !v)}
              className="pointer-events-auto border border-brand-white/30 bg-brand-black px-s12 py-s8 text-xs font-mono font-medium text-brand-white shadow-lg transition-opacity hover:opacity-80"
              aria-label="Toggle rhythm guide"
            >
              {showRhythm ? "Hide rhythm" : "Show rhythm"}
            </button>
            <button
              type="button"
              onClick={() => setShowSpacing((v) => !v)}
              className="pointer-events-auto border border-brand-white/30 bg-brand-black px-s12 py-s8 text-xs font-mono font-medium text-brand-white shadow-lg transition-opacity hover:opacity-80"
              aria-label="Toggle spacing inspector"
            >
              {showSpacing ? "Hide spacing" : "Show spacing"}
            </button>
          </div>
        </Grid>
      </div>
    </>
  );
}
