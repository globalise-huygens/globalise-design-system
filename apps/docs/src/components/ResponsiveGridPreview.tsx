"use client";

import { Grid } from "@globalise/design-system";
import React from "react";

function getGridModel(columnCount: number) {
  if (columnCount >= 16) {
    return { start: 3, end: 14, label: "Desktop" };
  }

  if (columnCount >= 8) {
    return { start: 2, end: 7, label: "Tablet" };
  }

  return { start: 1, end: columnCount, label: "Mobile" };
}

export function ResponsiveGridPreview() {
  const [columnCount, setColumnCount] = React.useState(16);

  React.useEffect(() => {
    const updateColumnCount = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const rawValue = rootStyles.getPropertyValue("--shell-cols").trim();
      const parsed = Number.parseInt(rawValue, 10);
      if (Number.isFinite(parsed) && parsed > 0) {
        setColumnCount(parsed);
      }
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);

    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  const model = getGridModel(columnCount);

  return (
    <div className="flex flex-col gap-s8">
      <p className="font-mono text-xs text-brand-black/70">
        {model.label}: {columnCount} columns, content band columns {model.start}
        -{model.end}
      </p>
      <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
        {Array.from({ length: columnCount }).map((_, i) => (
          <div
            key={i}
            className={`flex h-20 items-center justify-center text-xs font-mono ${
              i + 1 < model.start || i + 1 > model.end
                ? "bg-brand-white text-brand-black"
                : "bg-brand-turquoise text-brand-black"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </Grid>
    </div>
  );
}
