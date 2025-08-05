import Hero from "./_components/hero";
import Features from "./_components/features";
import ProductOverview from "./_components/product-overview";
import HowItWorks from "./_components/how-it-works";
import UseCases from "./_components/use-cases";
import FAQ from "./_components/faq";
import Footer from "@/components/common/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Agrivitals revolutionary solar dryer technology for farmers. Preserve crops naturally with our eco-friendly, energy-efficient solar drying system. Reduce post-harvest losses and increase profits.",
  keywords: [
    "solar dryer",
    "agricultural technology",
    "crop preservation",
    "post-harvest technology",
    "sustainable farming",
    "solar energy",
    "food drying",
    "farmer technology",
    "agricultural innovation",
    "crop storage",
    "organic drying",
    "eco-friendly farming",
    "solar dryer for farmers",
    "crop drying technology"
  ],
  openGraph: {
    title: "Agrivitals - Revolutionary Solar Dryer for Farmers",
    description: "Revolutionary solar dryer technology for farmers. Preserve crops naturally with our eco-friendly, energy-efficient solar drying system.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrivitals - Revolutionary Solar Dryer for Farmers",
    description: "Revolutionary solar dryer technology for farmers. Preserve crops naturally.",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ProductOverview />
      <HowItWorks />
      <UseCases />
      <FAQ />
      <Footer />
    </main>
  );
}
