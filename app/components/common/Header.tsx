import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Server,
  Code,
  Users,
  MessageCircle,
  ExternalLink,
  Shield,
  HelpCircle,
  Headphones,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MegaMenu from "./MegaMenu";
import MobileSideMenu from "./MobileSideMenu";
import SupportMenu from "./SupportMenu";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menús al cambiar de página
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isServicesOpen && !target.closest("nav")) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isServicesOpen]);

  // Detectar cambios en el tema y actualizar el estado
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    checkDarkMode();
    const observer = new MutationObserver(() => checkDarkMode());
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const logoSrc = isDarkMode
    ? "/common/moshipp-white.png"
    : "/common/moshipp-logo-black.png";

  const getNavLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    return `flex items-center text-sm font-medium transition rounded-md px-3 py-2 ${
      isActive
        ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
    }`;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 flex-shrink-0 group"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={logoSrc}
                  alt="Moshipp"
                  className="h-12 transition-transform duration-300 transform group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = target.src.includes("white")
                      ? "/common/moshipp-logo-black.png"
                      : "/common/moshipp-white.png";
                  }}
                />
                <div className="absolute top-0 -left-full w-full h-full bg-white/20 dark:bg-white/10 skew-x-12 transition-transform duration-700 transform group-hover:translate-x-full" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-2">
              <Link to="/" className={getNavLinkClasses("/")}>
                <Home className="h-4 w-4 mr-1.5" />
                <span>Inicio</span>
              </Link>

              {/* Servicios con MegaMenu */}
              <div className="">
                <button
                  className={getNavLinkClasses("/servicios")}
                  onClick={() => {
                    setIsServicesOpen(!isServicesOpen);
                    setIsSupportOpen(false);
                  }}
                >
                  <Server className="h-4 w-4 mr-1.5" />
                  <span>Servicios</span>
                  <ChevronDown
                    className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <MegaMenu
                  isOpen={isServicesOpen}
                  onClose={() => setIsServicesOpen(false)}
                />
              </div>

              {/* Soporte con menú dropdown */}
              <div className="">
                <button
                 className={getNavLinkClasses("/soporte")}
                  
                  onClick={() => {
                    setIsSupportOpen(!isSupportOpen);
                    setIsServicesOpen(false);
                  }}
                >
                  <Headphones className="h-4 w-4 mr-1.5" />
                  <span>Soporte</span>
                  <ChevronDown
                    className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${
                      isSupportOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <SupportMenu
                  isOpen={isSupportOpen}
                  onClose={() => setIsSupportOpen(false)}
                />
              </div>

              <Link
                to="/desarrollo-web"
                className={getNavLinkClasses("/desarrollo-web")}
              >
                <Code className="h-4 w-4 mr-1.5" />
                <span>Desarrollo Web</span>
              </Link>

              

              <Link to="/contacto" className={getNavLinkClasses("/contacto")}>
                <MessageCircle className="h-4 w-4 mr-1.5" />
                <span>Contacto</span>
              </Link>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-3">
              {/* <LanguageSelector /> */}
              <ThemeToggle />
              <a
                href="https://clientes.moshipp.com/clientarea.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors duration-200"
              >
                <Shield className="h-4 w-4 mr-1.5" />
                <span>Área de Clientes</span>
                <ExternalLink className="h-3.5 w-3.5 ml-1.5 opacity-70" />
              </a>
            </div>

            {/* Mobile toggle */}
            <div className="flex md:hidden items-center space-x-3">
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">
                  {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                </span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <MobileSideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentPath={location.pathname}
      />
    </>
  );
};

export default Header;
