import Hero from "./_components/hero";
import Features from "./_components/features";
import ProductOverview from "./_components/product-overview";
import HowItWorks from "./_components/how-it-works";
import UseCases from "./_components/use-cases";
import FAQ from "./_components/faq";
import Footer from "@/components/common/footer";

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
