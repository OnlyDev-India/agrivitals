import Container from "@/components/ui/container";
import { Zap, Shield, Leaf, Wrench, Thermometer } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-green-700" />,
    title: "Solar-Powered Operation",
    description: "Zero electricity costs with 100% solar energy operation.",
  },
  {
    icon: <Thermometer className="w-6 h-6 text-green-700" />,
    title: "Temperature Control System",
    description: "Advanced temperature monitoring and control for optimal drying.",
  },
  {
    icon: <Shield className="w-6 h-6 text-green-700" />,
    title: "Weather-Resistant Design",
    description: "Built to withstand harsh weather conditions and outdoor use.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-green-700" />,
    title: "Easy Installation & Maintenance",
    description: "Simple setup process and minimal maintenance requirements.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-green-700" />,
    title: "Multiple Crop Compatibility",
    description: "Versatile design works with grains, fruits, vegetables, and spices.",
  },

];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="space-y-12">
          {/* Top row - 3 features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.title} className="text-left">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom row - 2 features centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {features.slice(3, 5).map((feature) => (
                <div key={feature.title} className="text-left">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 