"use client";

import { Grid } from "@globalise/design-system";

export function GridColumnPlacementPreview() {
  return (
    <Grid className="mx-auto w-full max-w-shell-max px-shell-margin">
      <div className="col-span-full flex h-s48 items-center justify-center bg-brand-white text-xs text-brand-black">
        <span>col-span-full (full bleed)</span>
      </div>
      <div className="col-span-full flex h-s48 items-center justify-center bg-brand-turquoise text-xs text-brand-black xl:col-start-3 xl:col-span-12">
        <span>col-start-3 col-span-12 (standard content)</span>
      </div>
      <div className="col-span-full flex h-s48 items-center justify-center bg-brand-vermilion text-xs text-brand-black xl:col-start-3 xl:col-span-6">
        <span>col-start-3 col-span-6</span>
      </div>
      <div className="col-span-full flex h-s48 items-center justify-center bg-brand-mint text-xs text-brand-black xl:col-start-9 xl:col-span-6">
        <span>col-start-9 col-span-6</span>
      </div>
    </Grid>
  );
}
