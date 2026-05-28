interface ColorSwatchItem {
  name: string;
  variable: string;
  hex: string;
  textLight: boolean;
}

export function ColorSwatch({ colors }: { colors: ColorSwatchItem[] }) {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {colors.map((color) => (
        <div key={color.variable} className="flex flex-col gap-2">
          <div
            className="h-20 border border-brand-white/10"
            style={{ backgroundColor: color.hex }}
          />
          <div className="flex flex-col">
            <span className="text-sm font-sans font-medium text-brand-white">
              {color.name}
            </span>
            <span className="text-xs font-mono text-brand-white/50">
              {color.hex}
            </span>
            <span className="text-xs font-mono text-brand-white/30">
              {color.variable}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

interface ColorScaleStep {
  step: string;
  hex: string;
}

export function ColorScale({
  name,
  prefix,
  colors,
}: {
  name: string;
  prefix: string;
  colors: ColorScaleStep[];
}) {
  return (
    <div className="my-6">
      <div className="flex overflow-hidden border border-brand-white/10">
        {colors.map((color) => (
          <div key={color.step} className="flex-1 flex flex-col">
            <div className="h-12" style={{ backgroundColor: color.hex }} />
            <div className="bg-neutral-900 px-1 py-1 text-center">
              <span className="text-[10px] font-mono text-brand-white/50 block">
                {color.step}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs font-mono text-brand-white/30">
        --{prefix}-50 through --{prefix}-900
      </p>
    </div>
  );
}

export function FontPreview() {
  return (
    <div className="my-6 space-y-6">
      <div className="border border-brand-white/10 p-6">
        <p className="text-xs font-mono text-brand-white/40 mb-3">
          Noto Serif · Headers & Editorial
        </p>
        <p className="font-serif font-medium text-4xl leading-10 tracking-[-0.03em] text-brand-white">
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
      <div className="border border-brand-white/10 p-6">
        <p className="text-xs font-mono text-brand-white/40 mb-3">
          Noto Sans · Body & UI
        </p>
        <p className="font-sans text-base leading-6 tracking-[-0.02em] text-brand-white">
          The quick brown fox jumps over the lazy dog. GLOBALISE unlocks
          handwritten sources from the Dutch East India Company (VOC) archives
          through Handwritten Text Recognition, linguistic enrichment, and
          semantic annotation.
        </p>
      </div>
    </div>
  );
}
