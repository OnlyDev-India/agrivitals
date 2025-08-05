import Container from "@/components/ui/container";
import { Sun, Wind, Package, Droplets, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Sun className="w-8 h-8 text-white" />,
    title: "Solar Panels Collect Energy",
    description:
      "High-efficiency solar panels capture sunlight and convert it into thermal energy.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Wind className="w-8 h-8 text-white" />,
    title: "Air is Heated and Circulated",
    description:
      "The collected solar energy heats air which is then circulated through the system.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: <Package className="w-8 h-8 text-white" />,
    title: "Crops are Placed in Drying Chambers",
    description:
      "Fresh crops are loaded into specially designed drying chambers.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <Droplets className="w-8 h-8 text-white" />,
    title: "Moisture is Removed Efficiently",
    description:
      "Warm air circulates through the crops, removing moisture gradually and evenly.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    title: "Dried Crops are Ready for Storage",
    description:
      "Perfectly dried crops are ready for long-term storage and preservation.",
    color: "from-green-500 to-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-green-950"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our solar dryer uses a simple yet effective process to preserve your
            crops naturally. Here's how the magic happens:
          </p>
        </div>

        {/* Step-by-step process */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-green-500 transform -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-green-500 text-green-600 font-bold text-sm z-10">
                  {index + 1}
                </div>

                {/* Step card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual flow diagram */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6 md:mb-8 text-center">
            Visual Flow Diagram
          </h3>

          {/* Desktop Flow Diagram */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Flow diagram */}
              <div className="flex items-center justify-between">
                {/* Solar Panel */}
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Sun className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Solar Panel
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-blue-400 mx-4 relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>

                {/* Heater */}
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Wind className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Air Heater
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 mx-4 relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                {/* Drying Chamber */}
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Package className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Drying Chamber
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-green-400 to-purple-400 mx-4 relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
                </div>

                {/* Moisture Removal */}
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Droplets className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Moisture Removal
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-green-500 mx-4 relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                {/* Final Product */}
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Dried Crops
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Flow Diagram */}
          <div className="lg:hidden">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center flex-col gap-6">
                  <div className="flex items-center">
                    {/* Step Icon */}
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      {step.icon}
                    </div>

                    {/* Step Content */}
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {/* Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-green-600 dark:text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
