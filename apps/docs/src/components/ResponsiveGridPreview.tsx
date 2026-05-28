"use client";

import {
  getShellGridModel,
  Grid,
  useShellColumnCount,
} from "@globalise/design-system";

export function ResponsiveGridPreview() {
  const columnCount = useShellColumnCount();
  const model = getShellGridModel(columnCount);
  const label = model.label[0].toUpperCase() + model.label.slice(1);

  return (
    <div className="flex flex-col gap-s8">
      <p className="font-mono text-xs text-brand-black/70">
        {label}: {columnCount} columns, content band columns {model.start}-
        {model.end}
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
