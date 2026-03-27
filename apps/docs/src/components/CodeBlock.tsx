interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden border border-white/10">
      <div className="flex items-center justify-between border-b border-white/10 bg-neutral-900 px-4 py-2">
        <span className="text-xs font-mono text-white/40">{language}</span>
      </div>
      <pre className="overflow-x-auto bg-neutral-900 p-4 text-sm">
        <code className="font-mono text-white/80">{code}</code>
      </pre>
    </div>
  );
}
