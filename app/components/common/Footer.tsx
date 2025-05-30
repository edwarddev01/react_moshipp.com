// app/components/common/Footer.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Clock,
  ChevronRight,
  Shield,
  Users,
  Database,
  ExternalLink,
  MessageCircle,
  Linkedin,
  CreditCard,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar cambios en el tema y actualizar el estado
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    // Verificar inmediatamente al montar
    checkDarkMode();

    // Crear un observer para detectar cambios en la clase del HTML
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          checkDarkMode();
        }
      });
    });

    // Iniciar observación
    observer.observe(document.documentElement, { attributes: true });

    // Limpiar observer al desmontar
    return () => observer.disconnect();
  }, []);

  // Determinar qué logo usar basado en el modo oscuro
  const logoSrc = isDarkMode
    ? "/common/moshipp-white.png"
    : "/common/moshipp-logo-black.png";

  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } pt-16 pb-8`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-5">
              <img src={logoSrc} alt="Moshipp" className="h-12 w-auto" />
            </div>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } mb-5 leading-relaxed`}
            >
              Brindamos soluciones de hosting y desarrollo web profesionales con
              tecnología de última generación para impulsar tu presencia online
              y llevar tu negocio al siguiente nivel.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/moshipp/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                } transition-colors`}
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/moshipp_com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                } transition-colors`}
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/moshipp-s-a-s/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "text-gray-400 hover:text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3
              className={`text-xl font-bold mb-5 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1 before:h-5 before:w-1 before:bg-blue-600`}
            >
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/hosting-cpanel"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Hosting cPanel
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/wordpress-hosting"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Hosting WordPress
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/vps-hosting"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  VPS
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/microsoft365"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Microsoft 365
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3
              className={`text-xl font-bold mb-5 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1 before:h-5 before:w-1 before:bg-blue-600`}
            >
              Servicios
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/servicios/hosting-plesk"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Hosting Plesk
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/hosting-empresarial"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Hosting Empresarial
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/reseller-cpanel"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Reseller cPanel
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/reseller-plesk"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Reseller Plesk
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/vps-n8n"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  VPS con N8N
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/google-workspace"
                  className={`${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:translate-x-1 transition-all duration-200 flex items-center`}
                >
                  <ChevronRight className="h-3 w-3 mr-2 text-blue-600" />
                  Google Workspace
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3
              className={`text-xl font-bold mb-5 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1 before:h-5 before:w-1 before:bg-blue-600`}
            >
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-gray-200"
                  } p-2 rounded-full mr-3`}
                >
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    } mb-1`}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@moshipp.com"
                    className={`${
                      isDarkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    } transition-colors`}
                  >
                    info@moshipp.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-gray-200"
                  } p-2 rounded-full mr-3`}
                >
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    } mb-1`}
                  >
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/573506027870"
                    className={`${
                      isDarkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    } transition-colors`}
                  >
                    +57 350 602 7870
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-gray-200"
                  } p-2 rounded-full mr-3`}
                >
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    } mb-1`}
                  >
                    Horario de atención
                  </p>
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    Lunes a Sabado: 8am - 6pm
                  </span>
                </div>
              </li>
            </ul>

            {/* Métodos de pago */}
            <div className="mt-6">
               <h3
              className={`text-xl font-bold mb-5 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1 before:h-5 before:w-1 before:bg-blue-600`}
            >
              Métodos de pago
            </h3>
              <div className="flex gap-2 flex-wrap">
                {/* Visa */}
                <div className="dark:bg-[#25326F] w-[60px] h-[60px] bg-blue-600 hover:cursor-pointer px-2 py-6 flex justify-center items-center rounded-[4px]">
                  <img title="Visa" src="/payment/payment-method-1.svg" className="w-full" alt="Visa"  />
                </div>
                
                {/* Mastercard */}
                <div className="dark:bg-[#25326F] w-[60px] h-[60px] bg-blue-600 px-2 hover:cursor-pointer  py-6 flex justify-center items-center rounded-[4px]">
                  <img title="MasterCard" src="/payment/payment-method-2.svg" className="w-full max-w-10" alt="MasterCard"  />
                </div>
                
                {/* Wompi */}
                <div className="dark:bg-[#25326F] w-[60px] hover:cursor-pointer h-[60px] bg-blue-600 px-2 py-6 flex justify-center items-center rounded-[4px]">
                  <img title="Nequi" src="/payment/nequi.png" className="w-full max-w-10" alt="Nequi"  />
                </div>
                
                {/* PayPal */}
                <div className="dark:bg-[#25326F] w-[60px] hover:cursor-pointer h-[60px] bg-blue-600 px-2 py-6 flex justify-center items-center rounded-[4px]">
                  <img title="PayPal" src="/payment/payment-method-4.svg" className="w-full max-w-8" alt="Paypal"  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          } pt-8`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              } text-sm mb-4 md:mb-0`}
            >
              &copy; {currentYear} Moshipp. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/terminos-de-servicio"
                className={`${
                  isDarkMode
                    ? "text-gray-500 hover:text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } text-sm transition-colors`}
              >
                Términos y condiciones
              </Link>
              <Link
                to="/politica-de-privacidad"
                className={`${
                  isDarkMode
                    ? "text-gray-500 hover:text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } text-sm transition-colors`}
              >
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;