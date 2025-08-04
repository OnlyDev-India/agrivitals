"use client"
import Container from "@/components/ui/container";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does installation take?",
    answer: "Installation typically takes 1-2 days depending on the model and site conditions. Our team handles everything from site preparation to final testing. Basic models can be installed in a single day, while larger systems may require 2 days for optimal setup and calibration."
  },
  {
    question: "What crops can be dried?",
    answer: "Our solar dryer is compatible with a wide range of crops including grains (rice, wheat, maize), fruits (mangoes, bananas, apples), vegetables (tomatoes, peppers, herbs), and spices (turmeric, ginger, medicinal herbs). Each crop has specific drying parameters for optimal results."
  },
  {
    question: "How much maintenance is required?",
    answer: "Maintenance is minimal and straightforward. Monthly cleaning of solar panels, quarterly inspection of ventilation systems, and annual professional service check. The system is designed for durability with weather-resistant materials requiring minimal upkeep."
  },
  {
    question: "What's the warranty period?",
    answer: "We offer a comprehensive 3-year warranty covering all major components including solar panels, drying chambers, and ventilation systems. Extended warranty options are available up to 5 years. All warranty claims include free parts and labor."
  },
  {
    question: "How does it work in cloudy weather?",
    answer: "The system is designed to work efficiently even in cloudy conditions. Solar panels still generate energy from diffused sunlight, and the insulated design helps maintain drying temperatures. For extended cloudy periods, the system can operate at reduced capacity while maintaining quality."
  },
  {
    question: "What's the expected ROI?",
    answer: "Most farmers see a return on investment within 12-18 months. Savings come from eliminated electricity costs (90% reduction), reduced post-harvest losses (up to 40% improvement), and higher crop quality commanding premium prices. The system typically pays for itself in 1-2 harvest seasons."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get answers to the most common questions about our solar dryer technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
} 