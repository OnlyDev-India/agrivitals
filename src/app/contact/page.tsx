import Contact from "./_components/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Agrivitals for solar dryer inquiries, support, and sales. Contact our agricultural technology experts for personalized solutions and quotes.",
  keywords: [
    "contact agrivitals",
    "solar dryer support",
    "agricultural technology contact",
    "farmer support",
    "solar dryer sales",
    "agricultural equipment contact",
    "crop drying support"
  ],
  openGraph: {
    title: "Contact Agrivitals - Solar Dryer Support & Sales",
    description: "Get in touch with Agrivitals for solar dryer inquiries, support, and sales. Contact our agricultural technology experts.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Agrivitals - Solar Dryer Support & Sales",
    description: "Get in touch with Agrivitals for solar dryer inquiries and support.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
} 