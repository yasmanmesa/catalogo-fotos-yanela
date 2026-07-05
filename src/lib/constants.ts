import type { PortfolioCategory, PortfolioItem } from "./types";

const WOMEN_FILES = [
  "katia_1.jpg",
  "katia_2.jpg",
  "katia_3.jpg",
  "katia_4.jpg",
  "katia_5.jpg",
  "katia_6.jpg",
  "valentina_1.jpg",
  "valentina_2.jpg",
  "valentina_3.jpg",
  "valentina_4.jpg",
  "valentina_5.jpg",
  "valentina_6.jpg",
  "valentina_7.jpg",
  "valentina_8.jpg",
] as const;

const COUPLES_FILES = [
  "david_valeria_1.jpeg",
  "david_valeria_2.jpeg",
  "david_valeria_3.jpeg",
  "david_valeria_4.jpeg",
  "david_valeria_5.jpeg",
  "david_valeria_6.jpeg",
  "david_valeria_7.jpeg",
  "david_valeria_8.jpeg",
  "david_valeria_9.jpeg",
  "david_valeria_10.jpeg",
  "david_valeria_11.jpeg",
  "david_valeria_12.jpeg",
  "david_valeria_13.jpeg",
  "david_valeria_14.jpeg",
  "david_valeria_15.jpeg",
  "david_valeria_16.jpeg",
  "david_valeria_17.jpeg",
  "david_valeria_18.jpeg",
  "david_valeria_19.jpeg",
  "david_valeria_20.jpeg",
  "david_valeria_21.jpeg",
  "david_valeria_22.jpeg",
  "david_valeria_23.jpeg",
  "david_valeria_24.jpeg",
  "david_valeria_25.jpeg",
  "david_valeria_26.jpeg",
  "david_valeria_27.jpeg",
  "david_valeria_28.jpeg",
  "david_valeria_29.jpeg",
  "david_valeria_30.jpeg",
  "david_valeria_31.jpeg",
  "david_valeria_32.jpeg",
  "david_valeria_33.jpeg",
] as const;

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

function makePortfolioItems(
  category: PortfolioCategory,
  files: readonly string[],
): PortfolioItem[] {
  return files.map((file) => ({
    id: file.replace(/\.[^.]+$/, ""),
    category,
    src: `/portfolio/${category}/${file}`,
    alt: altFromFilename(file, category),
  }));
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  ...makePortfolioItems("women", WOMEN_FILES),
  ...makePortfolioItems("couples", COUPLES_FILES),
];

export const FRAME_COUNT = 12;

export const ABOUT_PHOTO_SRC = "/about/yanela.jpg";
