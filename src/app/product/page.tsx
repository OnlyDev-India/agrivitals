import ProductDetails from "./_components/product-details";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
  description: "Explore the technical specifications, features, and benefits of Agrivitals solar dryer. Learn about installation, maintenance, and performance data for optimal crop preservation.",
  keywords: [
    "solar dryer specifications",
    "agricultural dryer features",
    "crop drying technology",
    "solar dryer installation",
    "agricultural equipment",
    "crop preservation technology",
    "solar dryer maintenance",
    "farmer equipment"
  ],
  openGraph: {
    title: "Agrivitals Solar Dryer - Product Specifications & Features",
    description: "Explore the technical specifications, features, and benefits of Agrivitals solar dryer. Learn about installation, maintenance, and performance data.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrivitals Solar Dryer - Product Specifications & Features",
    description: "Explore the technical specifications and features of our solar dryer.",
  },
};

export default function ProductPage() {
  return (
    <main>
      <ProductDetails />
    </main>
  );
} 