import Container from "@/components/ui/container";
import { Star, ArrowRight, Plus } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background with wavy patterns and gradient */}
      <div className="absolute inset-0">
        {/* Green border accents on left and right */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-200 to-green-300 opacity-60"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-green-200 to-green-300 opacity-60"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Revolutionize Your Farming with{" "}
                <span className="text-green-600 dark:text-green-400">
                  Solar-Powered
                </span>{" "}
                Crop Drying
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Preserve harvest quality, reduce post-harvest losses, and
                increase profits with our innovative solar drying technology.
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {" "}
                  60% faster drying, 90% energy savings.
                </span>
              </p>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-10 h-10 bg-white rounded-full border-2 border-green-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              <div className="w-10 h-10 bg-white rounded-full border-2 border-green-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </div>
              <div className="w-10 h-10 bg-white rounded-full border-2 border-green-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            {/* Main farmer image with solar dryer */}
            <div className="relative">
              <div className="absolute top-[35%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-60 bg-gradient-to-br from-[#7CB255] to-[#BDD9AE]"></div>
              <div className="w-full h-96 rounded-full relative overflow-hidden">
                {/* Farmer with solar dryer */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 relative z-10">
                    <img
                      src="product.png"
                      alt="Solar Dryer Product"
                      className="w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] object-contain z-0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards - exactly like the image */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Agrivitals
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Solar Technology
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-600 dark:text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Solar Dryer
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    90% Energy Savings
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Plus className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Rajesh Kumar
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Farmer
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
