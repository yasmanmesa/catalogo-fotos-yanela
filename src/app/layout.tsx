import type { Metadata } from "next";
import { LocaleProvider } from "@/context/LocaleContext";
import { LandingPage } from "@/components/LandingPage";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yanela Hernández — фотограф · Беларусь",
  description:
    "Индивидуальные портреты, пары, корпоратив и мероприятия. Фотосессии для женщин в Беларуси.",
  openGraph: {
    title: "Yanela Hernández — Photographer",
    description: "Individual portraits, couples, corporate & events · Belarus",
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
