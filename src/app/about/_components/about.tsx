import Container from "@/components/ui/container";
import { Award, Users, Leaf, Target, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    number: "8+",
    label: "Years of Innovation",
    description: "Leading solar drying technology"
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    number: "500+",
    label: "Happy Farmers",
    description: "Across 15+ states in India"
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    number: "50,000+",
    label: "Tons Dried",
    description: "Sustainable crop preservation"
  },
  {
    icon: <Award className="w-8 h-8 text-green-600" />,
    number: "15+",
    label: "Awards Won",
    description: "Recognition for innovation"
  }
];

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    image: "/team/rajesh.jpg",
    bio: "Agricultural engineer with 15+ years in sustainable farming technology. PhD from IIT Delhi.",
    expertise: ["Solar Technology", "Agricultural Innovation", "Business Strategy"]
  },
  {
    name: "Priya Sharma",
    role: "Head of R&D",
    image: "/team/priya.jpg",
    bio: "Renewable energy expert with focus on rural development. Former scientist at CSIR.",
    expertise: ["Renewable Energy", "Rural Development", "Product Design"]
  },
  {
    name: "Amit Patel",
    role: "Operations Director",
    image: "/team/amit.jpg",
    bio: "Supply chain specialist with deep understanding of agricultural logistics and farmer needs.",
    expertise: ["Supply Chain", "Farmer Relations", "Quality Control"]
  },
  {
    name: "Dr. Meera Singh",
    role: "Technical Lead",
    image: "/team/meera.jpg",
    bio: "Mechanical engineer specializing in solar thermal systems and agricultural machinery.",
    expertise: ["Mechanical Engineering", "Solar Thermal", "System Design"]
  }
];

const achievements = [
  {
    year: "2023",
    title: "National Innovation Award",
    description: "Recognized by Ministry of Agriculture for sustainable farming solutions"
  },
  {
    year: "2022",
    title: "Best Rural Technology",
    description: "Awarded by FICCI for impactful rural development technology"
  },
  {
    year: "2021",
    title: "ISO 9001:2015 Certified",
    description: "Quality management system certification for manufacturing excellence"
  },
  {
    year: "2020",
    title: "Startup India Recognition",
    description: "Featured in government's flagship startup initiative"
  }
];

export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-green-600 dark:text-green-400">Agrivitals</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing agricultural practices through innovative solar drying technology, 
            empowering farmers to preserve their harvests sustainably and profitably.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To eliminate post-harvest losses and empower farmers with sustainable, 
              cost-effective drying solutions that preserve crop quality while reducing 
              environmental impact and energy costs.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Reduce post-harvest losses by up to 40%
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Cut energy costs by 90% compared to traditional methods
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Improve crop quality and market value
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To become the leading provider of sustainable agricultural technology in India, 
              creating a future where every farmer has access to affordable, eco-friendly 
              solutions that maximize their harvest potential.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Sustainability Goals</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Carbon Neutral by 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span>100% Renewable Energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-600" />
                  <span>1M+ Farmers by 2030</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span>Zero Waste Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 text-center mb-4 font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                      {achievement.year}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of farmers who have already revolutionized their harvest preservation 
            with our solar drying technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200">
              Get Started Today
            </button>
            <button className="px-8 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg font-semibold transition-colors duration-200">
              Contact Our Team
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
} 