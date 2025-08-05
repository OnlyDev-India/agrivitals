"use client";
import { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Product", href: "/product" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "#faq" },
];

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Handle initial scroll to section on page load (only on home page)
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const targetSection = hash.substring(1);
        setTimeout(() => {
          scrollToSection(targetSection);
        }, 100);
      }
    }

    // Handle scroll spy (only on home page)
    const handleScroll = () => {
      // Only run scroll spy on home page
      if (pathname !== "/") {
        return;
      }

      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (href: string, sectionId: string) => {
    setIsOpen(false);

    // Check if it's an external page link
    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    // Handle internal section links
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate to home with hash
      if (pathname !== "/") {
        router.push(`/${href}`);
        return;
      }

      // If we're on home page, scroll to section
      setActiveSection(sectionId);
      router.push(`/${href}`);
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-white"
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
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Agrivitals
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.startsWith("#")
                ? item.href.substring(1)
                : "";
              let isActive = false;

                if (item.href.startsWith("/")) {
                  isActive = pathname === item.href;
                } else if (item.href.startsWith("#")) {
                  // For section links, only show active on home page
                  isActive = pathname === "/" && activeSection === sectionId;
                }

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, sectionId)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="py-4 space-y-2">
              {navItems.map((item) => {
                const sectionId = item.href.startsWith("#")
                  ? item.href.substring(1)
                  : "";
                let isActive = false;
                if (item.href.startsWith("/")) {
                  isActive = pathname === item.href;
                } else if (item.href.startsWith("#")) {
                  // For section links, only show active on home page
                  isActive = pathname === "/" && activeSection === sectionId;
                }

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, sectionId)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
