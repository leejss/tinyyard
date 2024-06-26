import dayjs from "dayjs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const foramtDate = (date: string | undefined | Date) => {
  if (!date) return "unknown";
  const PATTERN = "YYYY/MM/DD";
  return dayjs(date).format(PATTERN);
};

export const parseMarkdown = async (raw: string) => {
  const html = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeShiki, {
      // or `theme` for a single theme
      // themes: {
      //   light: "vitesse-light",
      //   dark: "vitesse-dark",
      // },
      theme: "houston",
    })
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(raw);

  return String(html);
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
