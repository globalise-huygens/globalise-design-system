"use client";

import { GridGuide } from "@globalise/design-system";
import React from "react";

export function GridGuideToggle() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "g") {
        e.preventDefault();
        setVisible((v) => !v);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <GridGuide visible={visible} />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="fixed bottom-4 right-4 z-10000 rounded bg-brand-turquoise px-3 py-1.5 text-xs font-mono font-medium text-black shadow-lg transition-opacity hover:opacity-80"
        aria-label="Toggle grid guide"
      >
        {visible ? "Hide grid" : "Show grid"}
      </button>
    </>
  );
}
