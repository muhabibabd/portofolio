"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div
      className="prose prose-invert max-w-none
      prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-[var(--fg)]
      prose-h1:text-3xl prose-h1:sm:text-4xl prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-[var(--line)]
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[var(--line)] prose-h2:pb-2
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-[var(--fg-2)] prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
      prose-li:text-[var(--fg-2)] prose-li:text-sm sm:prose-li:text-base
      prose-strong:text-[var(--fg)] prose-strong:font-semibold
      prose-blockquote:border-l-2 prose-blockquote:border-[var(--line-strong)] prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:text-[var(--fg-2)] prose-blockquote:italic
      prose-code:text-[var(--fg)] prose-code:font-mono prose-code:text-xs prose-code:bg-[var(--bg-raised)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none prose-code:border prose-code:border-[var(--line)] prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-[var(--bg-raised)] prose-pre:border prose-pre:border-[var(--line)] prose-pre:rounded-none prose-pre:p-4
      prose-a:text-[var(--fg)] prose-a:underline prose-a:underline-offset-4 prose-a:decoration-[var(--line-strong)] hover:prose-a:decoration-[var(--fg)] prose-a:transition-colors
      prose-table:border-collapse prose-th:border-b prose-th:border-[var(--line)] prose-th:text-[var(--fg)] prose-th:font-mono prose-th:text-xs prose-td:border-b prose-td:border-[var(--line)] prose-td:text-[var(--fg-2)] prose-td:text-xs sm:prose-td:text-sm
    "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
