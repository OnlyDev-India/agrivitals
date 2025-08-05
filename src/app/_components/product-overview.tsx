import Container from "@/components/ui/container";
import { Sun, Wind, Zap, Clock, Scale, Leaf } from "lucide-react";

const specs = [
  {
    icon: <Scale className="w-6 h-6 text-green-600" />,
    title: "Capacity",
    value: "100-500kg per batch",
    description: "Flexible capacity for different farm sizes"
  },
  {
    icon: <Clock className="w-6 h-6 text-green-600" />,
    title: "Drying Time",
    value: "2-4 days",
    description: "Depending on crop type and moisture content"
  },
  {
    icon: <Sun className="w-6 h-6 text-green-600" />,
    title: "Energy Source",
    value: "100% Solar Powered",
    description: "Zero electricity costs, completely sustainable"
  },
  {
    icon: <Wind className="w-6 h-6 text-green-600" />,
    title: "Ventilation",
    value: "Natural Air Flow",
    description: "Optimized for consistent drying"
  }
];

const components = [
  {
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
    title: "Solar Panels",
    description: "High-efficiency panels that capture maximum sunlight"
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: "Drying Chamber",
    description: "Insulated chamber with optimal temperature control"
  },
  {
    icon: <Wind className="w-8 h-8 text-green-500" />,
    title: "Ventilation System",
    description: "Natural airflow system for consistent drying"
  }
];

export default function ProductOverview() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                What is a Solar Dryer?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A solar dryer is an innovative agricultural technology that uses the sun's energy to dry crops naturally. 
                Unlike traditional drying methods that rely on electricity or fossil fuels, our solar dryer harnesses 
                renewable solar energy to preserve your harvest efficiently and sustainably.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                The Agrivitals Solar Dryer combines advanced solar technology with smart ventilation systems to 
                provide consistent, high-quality drying results while reducing your energy costs to zero.
              </p>
            </div>

            {/* Key Components */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Key Components
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {components.map((component) => (
                  <div key={component.title} className="text-center space-y-3">
                    <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      {component.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {component.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Technical Specs */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs.map((spec) => (
                  <div key={spec.title} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {spec.title}
                        </h4>
                        <p className="text-lg font-bold text-green-600 dark:text-green-400">
                          {spec.value}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 pl-13">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Image */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Product Image
              </h3>
              <div className="flex items-center justify-center">
                <img 
                  src="product.png" 
                  alt="Agrivitals Solar Dryer" 
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 