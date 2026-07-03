import type { Metadata } from "next";
import { LocaleProvider } from "@/context/LocaleContext";
import { LandingPage } from "@/components/LandingPage";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yanela Hernández — фотограф · Беларусь",
  description:
    "Фотосессии для женщин, пар и семей. Фотограф в Беларуси.",
  openGraph: {
    title: "Yanela Hernández — Photography",
    description: "Photography for women, couples & families · Belarus",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
