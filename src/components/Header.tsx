import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { servicesData } from "@/data/servicesData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      // We're on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // We're on another page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  const goToHome = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const textColorClass = isScrolled ? "text-white" : "text-white";
  const projectTextColor = isScrolled ? "text-gray-800" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-sm"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex text-xl items-center cursor-pointer" onClick={goToHome}>
            <span className="text-white font-automove">Project</span>
            <span className="text-red-600 font-automove">D</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateToSection("inicio")}
              className={`font-medium hover:text-red-600 transition-colors ${textColorClass}`}
            >
              Inicio
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`font-medium hover:text-red-600 transition-colors flex items-center gap-1 ${textColorClass}`}
                >
                  Servicios
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-[60] min-w-[200px]">
                <DropdownMenuItem
                  onClick={() => navigateToSection("servicios")}
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                >
                  Ver todos los servicios
                </DropdownMenuItem>
                {servicesData.map((service) => (
                  <DropdownMenuItem
                    key={service.slug}
                    onClick={() => navigate(`/servicio/${service.slug}`)}
                    className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                  >
                    {service.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => navigateToSection("galeria")}
              className={`font-medium hover:text-red-600 transition-colors ${textColorClass}`}
            >
              Galería
            </button>
            <button
              onClick={() => navigateToSection("testimonios")}
              className={`font-medium hover:text-red-600 transition-colors ${textColorClass}`}
            >
              Testimonios
            </button>
            <button
              onClick={() => navigateToSection("contacto")}
              className="bg-red-700 text-white px-6 py-2.5 rounded-lg hover:bg-red-900 transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={`h-0.5 w-full transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <div
                className={`h-0.5 w-full transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <div
                className={`h-0.5 w-full transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-4 p-4 border border-gray-200">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => navigateToSection("inicio")}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium"
              >
                Inicio
              </button>
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-gray-700 hover:text-gray-900 transition-colors duration-200 text-left py-3 font-medium hover:bg-gray-100 rounded-lg px-3 flex items-center justify-between"
                >
                  Servicios
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-red-700 pl-4">
                    <button
                      onClick={() => {
                        navigateToSection("servicios");
                        setIsMobileServicesOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 py-3 text-base font-semibold hover:bg-gray-100 rounded px-3"
                    >
                      Ver todos los servicios
                    </button>
                    {servicesData.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => {
                          navigate(`/servicio/${service.slug}`);
                          setIsMobileServicesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 py-3 text-base hover:bg-gray-100 rounded px-3"
                      >
                        <div className="font-medium">{service.title}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => navigateToSection("galeria")}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium"
              >
                Galería
              </button>
              <button
                onClick={() => navigateToSection("testimonios")}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left py-3 font-medium"
              >
                Testimonios
              </button>
              <button
                onClick={() => navigateToSection("contacto")}
                className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors text-center mt-2 font-medium"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
