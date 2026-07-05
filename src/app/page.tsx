import { getPortfolioItems } from "@/lib/portfolio";
import { LandingPage } from "@/components/LandingPage";

export default function Home() {
  const portfolioItems = getPortfolioItems();
  return <LandingPage portfolioItems={portfolioItems} />;
}
