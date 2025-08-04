import Container from "@/components/ui/container";

const useCases = [
  {
    category: "Grains",
    crops: [
      { name: "Rice", color: "bg-amber-100 text-amber-800" },
      { name: "Wheat", color: "bg-yellow-100 text-yellow-800" },
      { name: "Maize", color: "bg-orange-100 text-orange-800" }
    ],
    icon: (
      <svg className="w-12 h-12 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
        {/* Grains SVG */}
        <ellipse cx="8" cy="8" rx="2" ry="1" fill="currentColor"/>
        <ellipse cx="16" cy="8" rx="2" ry="1" fill="currentColor"/>
        <ellipse cx="8" cy="12" rx="2" ry="1" fill="currentColor"/>
        <ellipse cx="16" cy="12" rx="2" ry="1" fill="currentColor"/>
        <ellipse cx="8" cy="16" rx="2" ry="1" fill="currentColor"/>
        <ellipse cx="16" cy="16" rx="2" ry="1" fill="currentColor"/>
        <ellipse cx="12" cy="10" rx="1.5" ry="0.8" fill="currentColor"/>
        <ellipse cx="12" cy="14" rx="1.5" ry="0.8" fill="currentColor"/>
      </svg>
    ),
    benefits: "High yield preservation, uniform drying, extended shelf life",
    dryingTime: "2-3 days",
    color: "from-amber-100 to-yellow-100"
  },
  {
    category: "Fruits",
    crops: [
      { name: "Mangoes", color: "bg-orange-100 text-orange-800" },
      { name: "Bananas", color: "bg-yellow-100 text-yellow-800" },
      { name: "Apples", color: "bg-red-100 text-red-800" }
    ],
    icon: (
      <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
        {/* Fruits SVG */}
        <circle cx="12" cy="10" r="3" fill="currentColor"/>
        <circle cx="8" cy="14" r="2" fill="currentColor"/>
        <circle cx="16" cy="14" r="2" fill="currentColor"/>
        <path d="M12 13 L12 16" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M8 12 L8 15" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M16 12 L16 15" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="12" cy="8" r="0.5" fill="white"/>
        <circle cx="8" cy="12" r="0.5" fill="white"/>
        <circle cx="16" cy="12" r="0.5" fill="white"/>
      </svg>
    ),
    benefits: "Preserves natural flavors, maintains nutritional value, no artificial preservatives",
    dryingTime: "3-4 days",
    color: "from-red-100 to-pink-100"
  },
  {
    category: "Vegetables",
    crops: [
      { name: "Tomatoes", color: "bg-red-100 text-red-800" },
      { name: "Peppers", color: "bg-green-100 text-green-800" },
      { name: "Herbs", color: "bg-emerald-100 text-emerald-800" }
    ],
    icon: (
      <svg className="w-12 h-12 text-green-700" fill="currentColor" viewBox="0 0 24 24">
        {/* Vegetables SVG */}
        <ellipse cx="12" cy="8" rx="2" ry="3" fill="currentColor"/>
        <ellipse cx="8" cy="14" rx="1.5" ry="2" fill="currentColor"/>
        <ellipse cx="16" cy="14" rx="1.5" ry="2" fill="currentColor"/>
        <path d="M12 11 L12 16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 12 L8 15" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M16 12 L16 15" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="12" cy="6" r="0.5" fill="white"/>
        <circle cx="8" cy="12" r="0.5" fill="white"/>
        <circle cx="16" cy="12" r="0.5" fill="white"/>
      </svg>
    ),
    benefits: "Retains color and texture, perfect for culinary use, long shelf life",
    dryingTime: "2-3 days",
    color: "from-green-100 to-emerald-100"
  },
  {
    category: "Spices & Medicinal",
    crops: [
      { name: "Turmeric", color: "bg-yellow-100 text-yellow-800" },
      { name: "Ginger", color: "bg-orange-100 text-orange-800" },
      { name: "Medicinal Herbs", color: "bg-purple-100 text-purple-800" }
    ],
    icon: (
      <svg className="w-12 h-12 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
        {/* Jar SVG for Spices & Medicinal */}
        <rect x="8" y="6" width="8" height="12" rx="1" fill="currentColor"/>
        <rect x="9" y="7" width="6" height="10" rx="0.5" fill="white"/>
        <circle cx="12" cy="9" r="1" fill="currentColor"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
        <circle cx="12" cy="15" r="1" fill="currentColor"/>
        <path d="M10 5 L14 5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M11 4 L13 4" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    ),
    benefits: "Preserves active compounds, maintains potency, pharmaceutical grade quality",
    dryingTime: "3-5 days",
    color: "from-purple-100 to-indigo-100"
  }
];

export default function UseCases() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Use Cases & Applications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our solar dryer is versatile and can handle various types of crops. 
            Each category has specific benefits and optimal drying times for best results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase) => (
            <div key={useCase.category} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${useCase.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  {useCase.icon}
                </div>
                
                {/* Category */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {useCase.category}
                </h3>
                
                {/* Crops */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 text-center">
                    Crops:
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {useCase.crops.map((crop) => (
                      <span 
                        key={crop.name}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${crop.color}`}
                      >
                        {crop.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="mb-4 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Benefits:
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {useCase.benefits}
                  </p>
                </div>
                
                {/* Drying Time */}
                <div className="flex items-center justify-center gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 mt-auto">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    Drying Time: {useCase.dryingTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 