import About from "./_components/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Agrivitals' mission to revolutionize agricultural technology. Discover our team, values, and commitment to sustainable farming solutions.",
  keywords: [
    "about agrivitals",
    "agricultural technology company",
    "sustainable farming",
    "solar dryer company",
    "farmer technology",
    "agricultural innovation"
  ],
  openGraph: {
    title: "About Agrivitals - Agricultural Technology Innovation",
    description: "Learn about Agrivitals' mission to revolutionize agricultural technology. Discover our team, values, and commitment to sustainable farming solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Agrivitals - Agricultural Technology Innovation",
    description: "Learn about Agrivitals' mission to revolutionize agricultural technology.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
} 