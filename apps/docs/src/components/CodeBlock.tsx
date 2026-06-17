"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="my-6 overflow-hidden border border-brand-white/10">
      <div className="flex items-center justify-between border-b border-brand-white/10 bg-neutral-900 px-4 py-2">
        <span className="text-xs font-mono text-brand-white/40">
          {language}
        </span>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex h-s28 items-center justify-center border border-brand-white/10 px-s8 font-sans text-[10px] uppercase leading-3 text-brand-white/65 transition-colors hover:border-brand-white/25 hover:bg-brand-white/5 hover:text-brand-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto bg-neutral-900 p-4 text-sm">
        <code className="font-mono text-brand-white/80">{code}</code>
      </pre>
    </div>
  );
}
