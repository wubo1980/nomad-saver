import type { ReactNode } from "react";

import { parseMarkdown } from "@/lib/markdown";

type ArticleBodyProps = {
  markdown: string;
};

/**
 * Converts a limited subset of inline markdown into React nodes.
 */
function renderInlineMarkdown(text: string): ReactNode[] {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-slate-950">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

/**
 * Maps callout tone names to their card styles.
 */
function getCalloutClassName(tone: "budget" | "pro" | "insight" | "strategy") {
  switch (tone) {
    case "budget":
      return "border-emerald-200 bg-emerald-50";
    case "pro":
      return "border-amber-200 bg-amber-50";
    case "insight":
      return "border-sky-200 bg-sky-50";
    case "strategy":
      return "border-violet-200 bg-violet-50";
    default:
      return "border-emerald-200 bg-emerald-50";
  }
}

/**
 * Renders article markdown with editorial typography and callouts.
 */
export function ArticleBody({ markdown }: ArticleBodyProps) {
  const blocks = parseMarkdown(markdown);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          if (block.level === 2) {
            return (
              <h2
                key={`${block.id}-${index}`}
                id={block.id}
                className="scroll-mt-28 font-display text-3xl tracking-tight text-slate-950 md:text-[2rem]"
              >
                {block.text}
              </h2>
            );
          }

          return (
            <h3
              key={`${block.id}-${index}`}
              id={block.id}
              className="scroll-mt-28 font-display text-2xl tracking-tight text-slate-950"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "unordered-list") {
          return (
            <ul key={`ul-${index}`} className="space-y-3 pl-6 text-lg leading-8 text-slate-700">
              {block.items.map((item) => (
                <li key={item} className="list-disc">
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "ordered-list") {
          return (
            <ol key={`ol-${index}`} className="space-y-3 pl-6 text-lg leading-8 text-slate-700">
              {block.items.map((item) => (
                <li key={item} className="list-decimal">
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "callout") {
          return (
            <div
              key={`callout-${index}`}
              className={`rounded-[24px] border px-5 py-4 text-base leading-8 text-slate-700 ${getCalloutClassName(
                block.tone,
              )}`}
            >
              {renderInlineMarkdown(block.text)}
            </div>
          );
        }

        return (
          <p key={`paragraph-${index}`} className="text-lg leading-8 text-slate-700">
            {renderInlineMarkdown(block.text)}
          </p>
        );
      })}
    </div>
  );
}
