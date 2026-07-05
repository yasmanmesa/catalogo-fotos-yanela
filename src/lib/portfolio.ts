import fs from "fs";
import path from "path";
import type { PortfolioCategory, PortfolioItem } from "./types";

const CATEGORIES: PortfolioCategory[] = ["women", "couples", "family"];
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;
const PORTFOLIO_DIR = path.join(process.cwd(), "public", "portfolio");

function altFromFilename(filename: string, category: PortfolioCategory): string {
  const base = filename.replace(/\.[^.]+$/, "");
  if (base.startsWith("katia")) return "Katia — portrait photography";
  if (base.startsWith("valentina")) return "Valentina — portrait photography";
  if (base.startsWith("david_valeria")) return "David & Valeria — couple session";

  const labels: Record<PortfolioCategory, string> = {
    women: "Portrait photography",
    couples: "Couple session",
    family: "Family session",
  };
  return labels[category];
}

function naturalSort(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

export function getPortfolioItems(): PortfolioItem[] {
  const items: PortfolioItem[] = [];

  for (const category of CATEGORIES) {
    const dir = path.join(PORTFOLIO_DIR, category);
    if (!fs.existsSync(dir)) continue;

    const files = fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXT.test(file))
      .sort(naturalSort);

    for (const file of files) {
      items.push({
        id: `${category}-${file.replace(/\.[^.]+$/, "")}`,
        category,
        src: `/portfolio/${category}/${file}`,
        alt: altFromFilename(file, category),
      });
    }
  }

  return items;
}
