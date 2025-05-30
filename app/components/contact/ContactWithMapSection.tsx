// app/pages/contact/components/ContactWithMapSection.tsx
import React, { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  MapPin,
  CheckCircle,
  AlertCircle,
  X,
  Loader2,
} from "lucide-react";
import { useRecaptcha } from "~/context/RecaptchaContext";

// Importar el hook global de reCAPTCHA


// Configuración de la API
const API_CONFIG = {
  baseURL: 'http://localhost:5000',
  endpoints: {
    contact: '/api/contact'
  }
};

// Schema de validación (sin cambios)
const contactSchema = z.object({
  name: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres")
    .regex(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/, "El nombre solo puede contener letras"),
  email: z.string()
    .email("Correo electrónico inválido")
    .max(255, "El email no puede exceder 255 caracteres"),
  message: z.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres"),
  subject: z.string()
    .min(5, "El asunto debe tener al menos 5 caracteres")
    .max(200, "El asunto no puede exceder 200 caracteres"),
  service: z.string().optional(),
  privacy: z.boolean().refine(val => val === true, {
    message: "Debes aceptar la política de privacidad"
  })
});

type ContactFormData = z.infer<typeof contactSchema>;

// Tipos para la respuesta de la API
interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Componente de notificación (sin cambios)
interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ type, message, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const iconColor = type === 'success' ? 'text-green-400' : 'text-red-400';
  const Icon = type === 'success' ? CheckCircle : AlertCircle;

  return (
    <div className={`fixed top-4 right-4 max-w-md w-full ${bgColor} border ${textColor} px-4 py-3 rounded-lg shadow-lg z-50 transition-all duration-300`}>
      <div className="flex items-start">
        <Icon className={`h-5 w-5 ${iconColor} mr-3 mt-0.5 flex-shrink-0`} />
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className={`ml-3 ${iconColor} hover:opacity-70 transition-opacity`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ContactWithMapSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{type: 'success' | 'error'; message: string} | null>(null);
  
  // Usar el hook global de reCAPTCHA en lugar del local
  const { isReady, executeRecaptcha } = useRecaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange'
  });

  // Función para mostrar notificaciones (sin cambios)
  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  // Función para enviar el formulario (sin cambios)
  const onSubmit = async (data: ContactFormData) => {
    if (!isReady) {
      showNotification('error', 'Sistema de seguridad no está listo. Intenta nuevamente.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Ejecutar reCAPTCHA v3 usando el hook global
      const token = await executeRecaptcha('contact_form');
      
      if (!token) {
        throw new Error('No se pudo verificar la seguridad del formulario');
      }

      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.contact}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim().toLowerCase(),
          subject: data.subject.trim(),
          message: data.message.trim(),
          service: data.service || '',
          token: token,
        }),
      });

      const responseData: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Error al enviar el mensaje');
      }

      // Éxito
      reset();
      showNotification('success', 'Mensaje enviado exitosamente. Te contactaremos pronto.');

    } catch (error) {
      console.error('Error al enviar formulario:', error);
      
      let errorMessage = 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      showNotification('error', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = isValid && !isSubmitting && isReady;

  return (
    <>
      {/* Notificación */}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl flex-wrap flex mx-auto">
            {/* Formulario de contacto */}
            <div className="bg-white md:w-2/3 dark:bg-gray-800 md:rounded-tl-xl md:rounded-none rounded-xl md:rounded-bl-xl shadow-xl overflow-hidden mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-blue-600 dark:bg-blue-700 text-white p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:h-5 before:w-1 before:bg-white">
                    Información de contacto
                  </h3>
                  <p className="mb-8 text-blue-100">
                    ¿Tienes alguna pregunta sobre nuestros servicios? Nuestro
                    equipo está listo para ayudarte a encontrar la solución
                    perfecta para tu presencia online.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-700 dark:bg-blue-800 p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-200">Email</p>
                        <a
                          href="mailto:info@moshipp.com"
                          className="text-white hover:text-blue-200 transition-colors"
                        >
                          info@moshipp.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-700 dark:bg-blue-800 p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-200">
                          WhatsApp
                        </p>
                        <a
                          href="https://wa.me/573506027870"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors"
                        >
                          +57 350 602 7870
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-700 dark:bg-blue-800 p-3 rounded-full">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-200">
                          Horario de Atención
                        </p>
                        <p className="text-white">Lunes a Sabado: 8am - 6pm</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-700 dark:bg-blue-800 p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-200">
                          Ubicación
                        </p>
                        <p className="text-white">Lorica, Córdoba, Colombia</p>
                      </div>
                    </div>
                  </div>

                  {/* Redes sociales */}
                  <div className="mt-10 pt-8 border-t border-blue-800">
                    <p className="text-sm font-medium mb-4 text-blue-200">
                      Síguenos en redes sociales
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/moshipp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 dark:bg-blue-800 p-2 rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                        aria-label="Síguenos en Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      
                      <a
                        href="https://www.instagram.com/moshipp_com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 dark:bg-blue-800 p-2 rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                        aria-label="Síguenos en Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/moshipp-s-a-s/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 dark:bg-blue-800 p-2 rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                        aria-label="Síguenos en LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/5 p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:h-5 before:w-1 before:bg-blue-600 dark:before:bg-blue-500">
                    Envíanos un mensaje
                  </h3>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Nombre completo *
                        </label>
                        <input
                          {...register('name')}
                          id="name"
                          type="text"
                          autoComplete="name"
                          className={`w-full px-4 py-3 border ${
                            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors`}
                          placeholder="Tu nombre completo"
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email *
                        </label>
                        <input
                          {...register('email')}
                          id="email"
                          type="email"
                          autoComplete="email"
                          className={`w-full px-4 py-3 border ${
                            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors`}
                          placeholder="tu@email.com"
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Asunto *
                      </label>
                      <input
                        {...register('subject')}
                        id="subject"
                        type="text"
                        className={`w-full px-4 py-3 border ${
                          errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors`}
                        placeholder="¿Sobre qué quieres consultarnos?"
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Servicio de interés
                      </label>
                      <select
                        {...register('service')}
                        id="service"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                        disabled={isSubmitting}
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="hosting-cpanel">Hosting cPanel</option>
                        <option value="hosting-wordpress">Hosting WordPress</option>
                        <option value="hosting-plesk">Hosting Plesk</option>
                        <option value="hosting-empresarial">Hosting Empresarial</option>
                        <option value="reseller">Reseller Hosting</option>
                        <option value="vps">Servidores VPS</option>
                        <option value="correo">Correo Corporativo</option>
                        <option value="desarrollo">Desarrollo Web</option>
                        <option value="otros">Otros servicios</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Mensaje *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={5}
                        className={`w-full px-4 py-3 border ${
                          errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors resize-vertical`}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center h-5">
                        <input
                          {...register('privacy')}
                          id="privacy"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 dark:border-gray-600 rounded"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="ml-3 text-xs">
                        <label
                          htmlFor="privacy"
                          className="text-gray-600 dark:text-gray-300"
                        >
                          Acepto la{" "}
                          <Link
                            to="/politica-de-privacidad"
                            className="text-blue-600 dark:text-blue-600 hover:underline"
                            target="_blank"
                          >
                            política de privacidad
                          </Link>{" "}
                          y el tratamiento de mis datos personales. *
                        </label>
                        {errors.privacy && (
                          <p className="mt-1 text-sm text-red-600" role="alert">{errors.privacy.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Información de reCAPTCHA v3 */}
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Este sitio está protegido por reCAPTCHA y se aplican la{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Política de Privacidad
                      </a>{" "}
                      y los{" "}
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Términos de Servicio
                      </a>{" "}
                      de Google.
                    </div>

                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center ${
                        isFormValid
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-2 h-5 w-5" />
                          <span>Enviando...</span>
                        </>
                      ) : !isReady ? (
                        <>
                          <Loader2 className="animate-spin mr-2 h-5 w-5" />
                          <span>Cargando seguridad...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar mensaje</span>
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Mapa e información de ubicación */}
            <div className="relative md:w-1/3 w-full h-96 md:h-auto md:rounded-tr-xl md:rounded-none rounded-xl md:rounded-br-xl shadow-xl overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.0294786206046!2d-75.8241742!3d9.241661599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2f9ffbe7b279%3A0xe1922fc8cf9ac963!2sMoshipp%20-%20Hosting%20y%20dominios!5e0!3m2!1ses-419!2sco!4v1747835603961!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                loading="lazy"
                title="Ubicación de Moshipp en Lorica, Córdoba"
                className="border-0 relative z-10"
              />
              {/* Capa oscura para dark mode */}
              <div className="hidden dark:block absolute inset-0 bg-gray-900/50 pointer-events-none z-20" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactWithMapSection;