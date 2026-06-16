export type HeadingItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type MarkdownBlock =
  | {
      type: "heading";
      id: string;
      level: 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "unordered-list";
      items: string[];
    }
  | {
      type: "ordered-list";
      items: string[];
    }
  | {
      type: "callout";
      tone: "budget" | "pro" | "insight" | "strategy";
      text: string;
    };

const CALLOUT_PREFIXES = [
  { prefix: "Budget tip:", tone: "budget" as const },
  { prefix: "Pro tip:", tone: "pro" as const },
  { prefix: "Key insight:", tone: "insight" as const },
  { prefix: "Money-saving strategy:", tone: "strategy" as const },
];

/**
 * Builds a stable anchor id from a heading string.
 */
export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Extracts all h2 and h3 headings from a markdown string.
 */
export function extractHeadings(markdown: string): HeadingItem[] {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("## ") || line.startsWith("### "))
    .map((line) => {
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^###?\s/, "").trim();

      return {
        id: slugifyHeading(text),
        text,
        level,
      };
    });
}

/**
 * Parses a limited markdown subset tailored to the editorial content on the site.
 */
export function parseMarkdown(markdown: string): MarkdownBlock[] {
  return markdown
    .trim()
    .split(/\n{2,}/)
    .map((rawBlock) => rawBlock.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("## ") || block.startsWith("### ")) {
        const level = block.startsWith("### ") ? 3 : 2;
        const text = block.replace(/^###?\s/, "").trim();

        return {
          type: "heading" as const,
          level,
          text,
          id: slugifyHeading(text),
        };
      }

      const callout = CALLOUT_PREFIXES.find(({ prefix }) => block.startsWith(prefix));
      if (callout) {
        return {
          type: "callout" as const,
          tone: callout.tone,
          text: block,
        };
      }

      const lines = block.split("\n").map((line) => line.trim());
      const unorderedItems = lines.filter((line) => line.startsWith("- "));
      if (unorderedItems.length === lines.length) {
        return {
          type: "unordered-list" as const,
          items: unorderedItems.map((line) => line.replace(/^- /, "")),
        };
      }

      const orderedItems = lines.filter((line) => /^\d+\.\s/.test(line));
      if (orderedItems.length === lines.length) {
        return {
          type: "ordered-list" as const,
          items: orderedItems.map((line) => line.replace(/^\d+\.\s/, "")),
        };
      }

      return {
        type: "paragraph" as const,
        text: lines.join(" "),
      };
    });
}
