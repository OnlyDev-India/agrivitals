import Container from "@/components/ui/container";
import { 
  Download, 
  Settings, 
  Shield, 
  BarChart3, 
  Wrench, 
  CheckCircle, 
  AlertTriangle,
  Thermometer,
  Wind,
  Sun,
  Package,
  Clock,
  Users,
  Award,
  FileText,
  Play,
  Star,
  Zap,
  Leaf,
  Truck
} from "lucide-react";

const specifications = [
  {
    category: "Physical Dimensions",
    items: [
      { label: "Length", value: "3.2 meters", icon: <Package className="w-4 h-4" /> },
      { label: "Width", value: "2.1 meters", icon: <Package className="w-4 h-4" /> },
      { label: "Height", value: "2.8 meters", icon: <Package className="w-4 h-4" /> },
      { label: "Weight", value: "450 kg", icon: <Package className="w-4 h-4" /> }
    ]
  },
  {
    category: "Solar System",
    items: [
      { label: "Solar Panel Capacity", value: "2.5 kW", icon: <Sun className="w-4 h-4" /> },
      { label: "Panel Efficiency", value: "22%", icon: <Sun className="w-4 h-4" /> },
      { label: "Battery Backup", value: "8 hours", icon: <Zap className="w-4 h-4" /> },
      { label: "Operating Temperature", value: "40-80°C", icon: <Thermometer className="w-4 h-4" /> }
    ]
  },
  {
    category: "Performance",
    items: [
      { label: "Drying Capacity", value: "500 kg/day", icon: <BarChart3 className="w-4 h-4" /> },
      { label: "Drying Time", value: "8-12 hours", icon: <Clock className="w-4 h-4" /> },
      { label: "Energy Efficiency", value: "90% savings", icon: <Zap className="w-4 h-4" /> },
      { label: "Moisture Reduction", value: "85-95%", icon: <Wind className="w-4 h-4" /> }
    ]
  },
  {
    category: "Safety & Compliance",
    items: [
      { label: "Safety Standards", value: "ISO 9001:2015", icon: <Shield className="w-4 h-4" /> },
      { label: "Electrical Rating", value: "IP65 Protection", icon: <Shield className="w-4 h-4" /> },
      { label: "Warranty", value: "3 years", icon: <Award className="w-4 h-4" /> },
      { label: "Certification", value: "BIS Certified", icon: <CheckCircle className="w-4 h-4" /> }
    ]
  }
];

const installationSteps = [
  {
    step: 1,
    title: "Site Assessment",
    description: "Our team evaluates your location for optimal solar exposure and accessibility.",
    duration: "1-2 hours",
    icon: <Settings className="w-6 h-6" />
  },
  {
    step: 2,
    title: "Foundation Preparation",
    description: "Level concrete foundation installation for stable mounting.",
    duration: "1 day",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    step: 3,
    title: "Assembly & Mounting",
    description: "Professional assembly and secure mounting of all components.",
    duration: "1 day",
    icon: <Package className="w-6 h-6" />
  },
  {
    step: 4,
    title: "Electrical Connection",
    description: "Safe electrical wiring and solar panel connection.",
    duration: "4-6 hours",
    icon: <Zap className="w-6 h-6" />
  },
  {
    step: 5,
    title: "Testing & Calibration",
    description: "Comprehensive testing and temperature calibration.",
    duration: "2-3 hours",
    icon: <CheckCircle className="w-6 h-6" />
  }
];

const maintenanceSchedule = [
  {
    frequency: "Daily",
    tasks: [
      "Clean solar panels with soft cloth",
      "Check temperature readings",
      "Inspect for any visible damage"
    ]
  },
  {
    frequency: "Weekly",
    tasks: [
      "Deep clean ventilation system",
      "Check battery charge levels",
      "Inspect electrical connections"
    ]
  },
  {
    frequency: "Monthly",
    tasks: [
      "Professional panel cleaning",
      "System performance check",
      "Update firmware if available"
    ]
  },
  {
    frequency: "Quarterly",
    tasks: [
      "Comprehensive system inspection",
      "Replace air filters",
      "Calibrate temperature sensors"
    ]
  },
  {
    frequency: "Annually",
    tasks: [
      "Full system maintenance",
      "Component replacement check",
      "Professional service visit"
    ]
  }
];

const safetyGuidelines = [
  {
    category: "Electrical Safety",
    guidelines: [
      "Always disconnect power before maintenance",
      "Use only certified electrical components",
      "Keep electrical panels dry and clean",
      "Never touch live electrical parts"
    ]
  },
  {
    category: "Operational Safety",
    guidelines: [
      "Wear protective gear during operation",
      "Maintain proper ventilation",
      "Keep children away from hot surfaces",
      "Follow temperature limits strictly"
    ]
  },
  {
    category: "Emergency Procedures",
    guidelines: [
      "Know emergency shutdown procedures",
      "Keep fire extinguisher nearby",
      "Have emergency contact numbers ready",
      "Regular safety training for operators"
    ]
  }
];

const performanceData = [
  {
    metric: "Energy Savings",
    value: "90%",
    comparison: "vs traditional electric dryers",
    icon: <Zap className="w-8 h-8 text-green-600" />
  },
  {
    metric: "Drying Efficiency",
    value: "85-95%",
    comparison: "moisture reduction rate",
    icon: <Wind className="w-8 h-8 text-blue-600" />
  },
  {
    metric: "ROI Timeline",
    value: "12-18 months",
    comparison: "payback period",
    icon: <BarChart3 className="w-8 h-8 text-purple-600" />
  },
  {
    metric: "Lifespan",
    value: "15+ years",
    comparison: "expected operational life",
    icon: <Clock className="w-8 h-8 text-orange-600" />
  }
];

const competitorComparison = [
  {
    feature: "Energy Source",
    agrivitals: "Solar Power",
    traditional: "Electric/Coal",
    advantage: "Renewable & Free"
  },
  {
    feature: "Operating Cost",
    agrivitals: "₹50-100/day",
    traditional: "₹500-800/day",
    advantage: "90% Cost Savings"
  },
  {
    feature: "Environmental Impact",
    agrivitals: "Zero Emissions",
    traditional: "High Carbon Footprint",
    advantage: "Eco-Friendly"
  },
  {
    feature: "Maintenance",
    agrivitals: "Minimal",
    traditional: "Regular & Expensive",
    advantage: "Low Maintenance"
  },
  {
    feature: "Drying Quality",
    agrivitals: "Consistent & Natural",
    traditional: "Variable Quality",
    advantage: "Better Preservation"
  }
];

const brochures = [
  {
    title: "Product Brochure",
    description: "Complete product overview with specifications and features",
    size: "2.4 MB",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Installation Guide",
    description: "Step-by-step installation instructions and requirements",
    size: "1.8 MB",
    icon: <Settings className="w-5 h-5" />
  },
  {
    title: "Maintenance Manual",
    description: "Comprehensive maintenance schedule and procedures",
    size: "3.1 MB",
    icon: <Wrench className="w-5 h-5" />
  },
  {
    title: "Safety Guidelines",
    description: "Complete safety protocols and emergency procedures",
    size: "1.2 MB",
    icon: <Shield className="w-5 h-5" />
  }
];

export default function ProductDetails() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Solar Dryer <span className="text-green-600 dark:text-green-400">Technical Details</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical specifications, installation guides, and performance data 
            for our advanced solar drying technology.
          </p>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {spec.category}
                </h3>
                <div className="space-y-4">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-green-600 dark:text-green-400">
                          {item.icon}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Installation Guide
          </h2>
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {installationSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {step.step}
                  </div>
                  
                  {/* Step card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="text-center">
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Maintenance Instructions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Maintenance Schedule
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceSchedule.map((schedule, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {schedule.frequency}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {schedule.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Safety Guidelines
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {safetyGuidelines.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.guidelines.map((guideline, guidelineIndex) => (
                    <li key={guidelineIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Data */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceData.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {metric.metric}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.comparison}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Comparison with Traditional Methods
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <div className="font-semibold text-gray-900 dark:text-white">Feature</div>
              <div className="font-semibold text-green-600 dark:text-green-400 text-center">Agrivitals Solar</div>
              <div className="font-semibold text-gray-600 dark:text-gray-300 text-center">Traditional</div>
              <div className="font-semibold text-blue-600 dark:text-blue-400 text-center">Advantage</div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              {competitorComparison.map((comparison, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-6">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {comparison.feature}
                  </div>
                  <div className="text-center text-green-600 dark:text-green-400 font-medium">
                    {comparison.agrivitals}
                  </div>
                  <div className="text-center text-gray-600 dark:text-gray-300">
                    {comparison.traditional}
                  </div>
                  <div className="text-center text-blue-600 dark:text-blue-400 font-medium">
                    {comparison.advantage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Downloadable Brochures */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Download Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brochures.map((brochure, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    {brochure.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {brochure.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {brochure.size}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {brochure.description}
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our technical team for detailed consultation and custom installation planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo Video
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
} 