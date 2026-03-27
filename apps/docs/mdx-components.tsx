import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="scroll-m-20 font-serif font-medium text-5xl leading-tight tracking-[-0.03em] mb-6"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="scroll-m-20 font-serif font-medium text-3xl leading-tight tracking-[-0.03em] mt-12 mb-4 first:mt-0"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="scroll-m-20 font-serif font-medium text-2xl leading-tight tracking-[-0.03em] mt-8 mb-3"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="font-sans text-base font-normal leading-7 tracking-[-0.02em] text-white/80 not-first:child:mt-4"
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="my-4 ml-6 list-disc text-white/80 font-sans" {...props} />
    ),
    ol: (props) => (
      <ol
        className="my-4 ml-6 list-decimal text-white/80 font-sans"
        {...props}
      />
    ),
    li: (props) => <li className="mt-2 leading-7" {...props} />,
    a: (props) => (
      <a
        className="text-brand-turquoise underline underline-offset-4 hover:text-turquoise-300"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="relative bg-white/10 px-[0.4rem] py-[0.2rem] font-mono text-sm text-brand-turquoise"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-6 overflow-x-auto bg-neutral-900 border border-white/10 p-4 text-sm"
        {...props}
      />
    ),
    hr: () => <hr className="my-8 border-white/10" />,
    blockquote: (props) => (
      <blockquote
        className="mt-6 border-l-2 border-brand-turquoise pl-6 italic text-white/70 font-serif"
        {...props}
      />
    ),
    table: (props) => (
      <div className="my-6 w-full overflow-x-auto">
        <table className="w-full text-sm" {...props} />
      </div>
    ),
    th: (props) => (
      <th
        className="border border-white/10 px-4 py-2 text-left font-sans font-semibold text-white/90"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="border border-white/10 px-4 py-2 font-sans text-white/70"
        {...props}
      />
    ),
    ...components,
  };
}
