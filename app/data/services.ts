// app/data/services.ts
import {
  Server,
  Database,
  Layout,
  Code,
  Mail,
  Zap,
  Monitor,
  Globe,
  Cloud,
  ServerCogIcon,
  CheckCircle,
  Headphones,
  Shield,
  Settings,
  Network,
  Cpu,
  Users,
  RefreshCcw,
  Box,
  Folder,
  ArrowUpWideNarrow,
  Eye,
  CreditCard,
  BarChart2,
  HardDrive,
  Key,
  ArrowUpCircle,
  Calendar,
  FileText,
  UserCheck,
  Lock,
  Video,
} from "lucide-react";
import type { Category, Service } from "~/types/services";

// Categorías para el filtrado
export const categories: Category[] = [
  { id: "hosting", name: "Hosting Web" },
  { id: "servidores", name: "Servidores" },
  { id: "email", name: "Email Corporativo" },
  { id: "desarrollo", name: "Desarrollo Web" },
];

// Datos de servicios
export const services: Service[] = [
  {
    id: "cloud-wordpress",
    title: "Cloud WordPress",
    image: "/services/wordpress-hosting.png",
    description:
      "Optimiza tu experiencia en WordPress con nuestro hosting administrado. Con herramientas avanzadas, seguridad de primer nivel y un rendimiento excepcional.",
    icon: Layout,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    url: "/servicios/cloud-wordpress",
    price: "Desde $14,000/mes",
    category: "hosting",
    featured: true,
    features: [
      "Optimización específica para WP",
      "Caché LiteSpeed integrado",
      "Entorno PHP optimizado",
      "Migración gratuita",
      "Staging incluido",
    ],
    sections: {
      benefits: [
        {
          title: "Velocidad superior",
          description:
            "Hasta 10x más rápido que hosting compartido tradicional gracias a nuestras optimizaciones específicas para WordPress.",
          icon: Zap,
        },
        {
          title: "Seguridad avanzada",
          description:
            "Protección multicapa con firewall dedicado, detección de malware y copias de seguridad automáticas.",
          icon: Shield,
        },
        {
          title: "Soporte especializado",
          description:
            "Equipo técnico especializado en WordPress disponible 24/7 para resolver cualquier consulta.",
          icon: Headphones,
        },
        {
          title: "Actualizaciones automáticas",
          description:
            "WordPress Core, temas y plugins se actualizan automáticamente manteniendo tu sitio seguro.",
          icon: CheckCircle,
        },
      ],
      detailedFeatures: [
        {
          title: "Gestión de temas y plugins",
          description:
            "Instala, activa y actualiza temas y plugins desde el panel con un solo clic, con compatibilidad garantizada.",
          icon: Code,
        },
        {
          title: "Bases de datos optimizadas",
          description:
            "MySQL gestionado y optimizado para WordPress, con mantenimiento periódico y limpieza de revisiones.",
          icon: Database,
        },
        {
          title: "Entorno de staging",
          description:
            "Crea un clon de tu sitio en un entorno seguro para pruebas y validación antes de lanzar cambios en producción.",
          icon: Server,
        },
        {
          title: "Backups programados",
          description:
            "Copia tu sitio (archivos y DB) de forma diaria o bajo demanda, almacena en local o en la nube y restaura con facilidad.",
          icon: RefreshCcw,
        },
        {
          title: "CDN global",
          description:
            "Distribuye tu contenido estático mediante nuestra CDN integrada para acelerar la entrega en todo el mundo.",
          icon: Globe,
        },
      ],
    },
  },
  {
    id: "hosting-sd-plesk",
    title: "Hosting SD Plesk",
    description:
      "Alojamiento web con Plesk Obsidian, interfaz intuitiva y herramientas avanzadas de desarrollo para gestionar tus sitios web fácilmente.",
    icon: Code,
    color: "bg-gradient-to-br from-indigo-500 to-gray-600",
    image: "/services/hosting-plesk.png",
    url: "/servicios/hosting-sd-plesk",
    price: "Desde $45,000/anual",
    category: "hosting",
    featured: false,
    features: [
      "Panel Plesk Obsidian",
      "Docker integrado",
      "Git y DevOps tools",
      "Node.js y Python soporte",
      "Firewall avanzado",
    ],
    // NUEVAS SECCIONES AGREGADAS
    sections: {
      benefits: [
        {
          title: "Panel Plesk avanzado",
          description:
            "Interfaz moderna y potente con herramientas profesionales para desarrolladores y administradores web.",
          icon: Settings,
        },
        {
          title: "LiteSpeed",
          description:
            "Reduce el tiempo de carga de las páginas, mejorar la experiencia del usuario y ayudar a aumentar el tráfico y las conversiones del sitio web",
          icon: Zap,
        },
        {
          title: "DevOps integrado",
          description:
            "Git, CI/CD y herramientas de desarrollo integradas para flujos de trabajo profesionales.",
          icon: Network,
        },
        {
          title: "Multi-Tecnología",
          description:
            "Soporte nativo para PHP, Node.js, Python y más tecnologías en un solo panel.",
          icon: Cpu,
        },
      ],
      detailedFeatures: [
        {
          title: "Administración de Sitios Web",
          description:
            "Crea, clona y gestiona dominios y subdominios con un clic, y ajusta parámetros de PHP, límites de memoria y versiones de manera instantánea.",
          icon: Code,
        },
        {
          title: "Gestión de Bases de Datos",
          description:
            "Administra MySQL desde la interfaz de Plesk, crea usuarios y backups, y accede a phpMyAdmin integrado para consultas avanzadas.",
          icon: Database,
        },
        {
          title: "Seguridad Avanzada",
          description:
            "Protege tus sitios con ModSecurity, WAF integrado y cortafuegos de aplicaciones web configurables desde el panel.",
          icon: Shield,
        },
        {
          title: "Backups Automatizados",
          description:
            "Programa copias de seguridad diarias o semanales (local y remoto), recupera archivos o bases de datos con un solo clic.",
          icon: RefreshCcw,
        },
        {
          title: "Acceso Multiusuario",
          description:
            "Configuración de roles y permisos para equipos: delega administrador, desarrollador o acceso lector para cada proyecto.",
          icon: Users,
        },
      ],
      techSpecs: [
        {
          category: "Panel de Control",
          specs: [
            { name: "Versión", value: "Plesk Obsidian" },
            { name: "Interfaz", value: "Web responsive" },
            { name: "API", value: "REST API completa" },
            { name: "CLI", value: "Línea de comandos" },
          ],
        },
        {
          category: "Tecnologías Soportadas",
          specs: [
            { name: "PHP", value: "7.4, 8.0, 8.1, 8.2, 8.3, 8.4" },
            { name: "Node.js", value: "16.x, 18.x, 20.x, 21.x, 22.x, 24.x" },
            { name: "Laravel", value: "3.8, 3.9, 3.10" },
            { name: "Python", value: "3.8, 3.9, 3.10" },
            { name: "Bases de datos", value: "MySQL" },
          ],
        },
        {
          category: "DevOps y Desarrollo",
          specs: [
            { name: "Git", value: "Integración completa" },
            { name: "SSL", value: "Let's Encrypt + Custom" },
            { name: "Backups", value: "Automáticos + Manuales" },
          ],
        },
      ],
    },
  },
  {
    id: "hosting-plesk",
    title: "Hosting Plesk",
    description:
      "Alojamiento web con Plesk Obsidian, interfaz intuitiva y herramientas avanzadas de desarrollo para gestionar tus sitios web fácilmente.",
    icon: Code,
    image: "/services/hosting-plesk.png",
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    url: "/servicios/hosting-plesk",
    price: "Desde $14,000/mes",
    category: "hosting",
    featured: true,
    features: [
      "Panel Plesk Obsidian",
      "Docker integrado",
      "Git y DevOps tools",
      "Node.js y Python soporte",
      "Firewall avanzado",
    ],
    sections: {
      benefits: [
        {
          title: "Panel Plesk avanzado",
          description:
            "Interfaz moderna y potente con herramientas profesionales para desarrolladores y administradores web.",
          icon: Settings,
        },
        {
          title: "LiteSpeed",
          description:
            "Reduce el tiempo de carga de las páginas, mejorar la experiencia del usuario y ayudar a aumentar el tráfico y las conversiones del sitio web",
          icon: Zap,
        },
        {
          title: "DevOps integrado",
          description:
            "Git, CI/CD y herramientas de desarrollo integradas para flujos de trabajo profesionales.",
          icon: Network,
        },
        {
          title: "Multi-Tecnología",
          description:
            "Soporte nativo para PHP, Node.js, Python y más tecnologías en un solo panel.",
          icon: Cpu,
        },
      ],
      detailedFeatures: [
        {
          title: "Administración de Sitios Web",
          description:
            "Crea, clona y gestiona dominios y subdominios con un clic, y ajusta parámetros de PHP, límites de memoria y versiones de manera instantánea.",
          icon: Code,
        },
        {
          title: "Gestión de Bases de Datos",
          description:
            "Administra MySQL desde la interfaz de Plesk, crea usuarios y backups, y accede a phpMyAdmin integrado para consultas avanzadas.",
          icon: Database,
        },
        {
          title: "Seguridad Avanzada",
          description:
            "Protege tus sitios con ModSecurity, WAF integrado y cortafuegos de aplicaciones web configurables desde el panel.",
          icon: Shield,
        },
        {
          title: "Backups Automatizados",
          description:
            "Programa copias de seguridad diarias o semanales (local y remoto), recupera archivos o bases de datos con un solo clic.",
          icon: RefreshCcw,
        },
        {
          title: "Acceso Multiusuario",
          description:
            "Configuración de roles y permisos para equipos: delega administrador, desarrollador o acceso lector para cada proyecto.",
          icon: Users,
        },
      ],
      techSpecs: [
        {
          category: "Panel de Control",
          specs: [
            { name: "Versión", value: "Plesk Obsidian" },
            { name: "Interfaz", value: "Web responsive" },
            { name: "API", value: "REST API completa" },
            { name: "CLI", value: "Línea de comandos" },
          ],
        },
        {
          category: "Tecnologías Soportadas",
          specs: [
            { name: "PHP", value: "7.4, 8.0, 8.1, 8.2, 8.3, 8.4" },
            { name: "Node.js", value: "16.x, 18.x, 20.x, 21.x, 22.x, 24.x" },
            { name: "Laravel", value: "3.8, 3.9, 3.10" },
            { name: "Python", value: "3.8, 3.9, 3.10" },
            { name: "Bases de datos", value: "MySQL" },
          ],
        },
        {
          category: "DevOps y Desarrollo",
          specs: [
            { name: "Git", value: "Integración completa" },
            { name: "SSL", value: "Let's Encrypt + Custom" },
            { name: "Backups", value: "Automáticos + Manuales" },
          ],
        },
      ],
    },
  },
  {
    id: "hosting-cpanel",
    title: "Hosting cPanel",
    description:
      "Controla fácilmente tu alojamiento web con el panel de control más popular del mercado, con herramientas como el administrador de archivos, base de datos y correo.",
    icon: Server,
    image: "/services/hosting-cpanel.png",
    color: "bg-gradient-to-br from-blue-800 to-orange-500",
    url: "/servicios/hosting-cpanel",
    price: "Desde $14,000/mes",
    category: "hosting",
    featured: true,
    features: [
      "SSD NVMe ultrarrápido",
      "Copias de seguridad semanales",
      "Certificados SSL gratuitos",
      "Soporte técnico estándar",
      "Dominio gratis el primer año",
    ],
    sections: {
      benefits: [
        {
          title: "Interfaz Intuitiva",
          description:
            "Accede y gestiona todos los aspectos de tu hosting desde un panel claro y fácil de usar.",
          icon: Server,
        },
        {
          title: "Gestión de Archivos",
          description:
            "Sube, edita y organiza tus archivos web directamente desde el Administrador de Archivos integrado.",
          icon: Folder,
        },
        {
          title: "Email Profesional",
          description:
            "Crea y administra cuentas de correo, alias y filtros de forma sencilla.",
          icon: Mail,
        },
        {
          title: "Instalador One-Click",
          description:
            "Accede a Softaculous para instalar WordPress, Joomla, Magento y más con un solo clic.",
          icon: Box,
        },
        {
          title: "Dominios y DNS",
          description:
            "Registra dominios, configura zonas DNS y gestiona tus registros desde el mismo panel.",
          icon: Globe,
        },
      ],
      detailedFeatures: [
        {
          title: "Administrador de Archivos Web",
          description:
            "Carga, edita permisos y organiza tus archivos sin necesidad de usar FTP externo.",
          icon: Folder,
        },
        {
          title: "phpMyAdmin Integrado",
          description:
            "Crea y gestiona bases de datos MySQL con acceso directo a phpMyAdmin para consultas avanzadas.",
          icon: Database,
        },
        {
          title: "Instalador de Aplicaciones",
          description:
            "Softaculous con más de 400 scripts para desplegar CMS, blogs, foros y tiendas online al instante.",
          icon: Box,
        },
        {
          title: "Backups Semanales",
          description:
            "Copias de seguridad automáticas cada semana y restaura archivos o bases de datos.",
          icon: RefreshCcw,
        },
        {
          title: "Certificados SSL",
          description:
            "Activa SSL gratuitos con Let's Encrypt o instala tu propio certificado personalizado en segundos.",
          icon: Shield,
        },
      ],
    },
  },
  {
    id: "hosting-sd-cpanel",
    title: "Hosting SD cPanel",
    description:
      "Controla fácilmente tu alojamiento web con el panel de control más popular del mercado, con herramientas como el administrador de archivos, base de datos y correo.",
    icon: Server,
    image: "/services/hosting-cpanel.png",
    color: "bg-gradient-to-br from-blue-800 to-orange-500",
    url: "/servicios/hosting-sd-cpanel",
    price: "Desde $50,000/anual",
    category: "hosting",
    featured: false,
    features: [
      "SSD NVMe ultrarrápido",
      "Copias de seguridad semanales",
      "Certificados SSL gratuitos",
      "Soporte técnico estándar",
    ],
    sections: {
      benefits: [
        {
          title: "Interfaz Intuitiva",
          description:
            "Accede y gestiona todos los aspectos de tu hosting desde un panel claro y fácil de usar.",
          icon: Server,
        },
        {
          title: "Gestión de Archivos",
          description:
            "Sube, edita y organiza tus archivos web directamente desde el Administrador de Archivos integrado.",
          icon: Folder,
        },
        {
          title: "Email Profesional",
          description:
            "Crea y administra cuentas de correo, alias y filtros de forma sencilla.",
          icon: Mail,
        },
        {
          title: "Instalador One-Click",
          description:
            "Accede a Softaculous para instalar WordPress, Joomla, Magento y más con un solo clic.",
          icon: Box,
        },
        {
          title: "Dominios y DNS",
          description:
            "Registra dominios, configura zonas DNS y gestiona tus registros desde el mismo panel.",
          icon: Globe,
        },
      ],
      detailedFeatures: [
        {
          title: "Administrador de Archivos Web",
          description:
            "Carga, edita permisos y organiza tus archivos sin necesidad de usar FTP externo.",
          icon: Folder,
        },
        {
          title: "phpMyAdmin Integrado",
          description:
            "Crea y gestiona bases de datos MySQL con acceso directo a phpMyAdmin para consultas avanzadas.",
          icon: Database,
        },
        {
          title: "Instalador de Aplicaciones",
          description:
            "Softaculous con más de 400 scripts para desplegar CMS, blogs, foros y tiendas online al instante.",
          icon: Box,
        },
        {
          title: "Backups Semanales",
          description:
            "Copias de seguridad automáticas cada semana y restaura archivos o bases de datos.",
          icon: RefreshCcw,
        },
        {
          title: "Certificados SSL",
          description:
            "Activa SSL gratuitos con Let's Encrypt o instala tu propio certificado personalizado en segundos.",
          icon: Shield,
        },
      ],
    },
  },
  {
    id: "hosting-empresarial",
    title: "Hosting Empresarial",
    description:
      "Soluciones de alojamiento para empresas con altos requisitos de rendimiento, seguridad avanzada y recursos dedicados para tus aplicaciones críticas.",
    icon: Monitor,
    image: "/services/hosting-empresarial.png",
    color: "bg-gradient-to-br from-gray-700 to-gray-900",
    url: "/servicios/hosting-empresarial",
    price: "Desde $220,000/anual",
    category: "hosting",
    featured: false,
    features: [
      "Recursos garantizados",
      "Alta disponibilidad",
      "Firewall dedicado",
      "Consultor personal asignado",
      "Monitoreo 24/7",
    ],
    sections: {
      benefits: [
        {
          title: "Recursos Garantizados",
          description:
            "CPU, RAM y almacenamiento dedicados para un rendimiento constante incluso bajo cargas elevadas.",
          icon: Cpu,
        },
        {
          title: "Alta Disponibilidad",
          description:
            "Infraestructura redundante y failover automático para mantener tus servicios siempre online.",
          icon: CheckCircle,
        },
        {
          title: "Seguridad Avanzada",
          description:
            "Firewall dedicado, IDS/IPS y escaneo continuo de vulnerabilidades para proteger tus datos.",
          icon: Shield,
        },
        {
          title: "Consultoría Personalizada",
          description:
            "Asesor técnico dedicado que te ayuda a optimizar tu arquitectura y resolver cualquier incidente.",
          icon: Users,
        },
        {
          title: "Monitoreo 24/7",
          description:
            "Supervisión proactiva con alertas en tiempo real y respuesta inmediata ante anomalías.",
          icon: Eye,
        },
      ],
      detailedFeatures: [
        {
          title: "SLA 99.9% Uptime",
          description:
            "Garantizamos la disponibilidad de tus servicios con compensaciones si no cumplimos el nivel acordado.",
          icon: CheckCircle,
        },
        {
          title: "Almacenamiento NVMe",
          description:
            "Discos de estado sólido NVMe de última generación que ofrecen velocidades de lectura/escritura hasta 6 veces más rápidas que los SSD tradicionales.",
          icon: Database,
        },
        {
          title: "Backups georedundantes",
          description:
            "Realizamos 3 copias de seguridad semanales almacenadas en múltiples centros de datos para una recuperación total.",
          icon: RefreshCcw,
        },
        {
          title: "Escalabilidad bajo demanda",
          description:
            "Aumenta CPU y RAM al instante según las necesidades de tu negocio sin tiempos de espera.",
          icon: ArrowUpWideNarrow,
        },
        {
          title: "Optimización de Rendimiento",
          description:
            "Análisis y ajuste continuo del rendimiento con herramientas avanzadas de monitoreo y optimización de recursos en tiempo real.",
          icon: Zap,
        },
        {
          title: "Monitoreo Proactivo",
          description:
            "Supervisión 24/7 de recursos, servicios y aplicaciones con alertas instantáneas y resolución automática de incidentes.",
          icon: Eye,
        },
      ],
    },
  },
  {
    id: "reseller-hosting",
    title: "Reseller Hosting cPanel",
    description:
      "Solución completa para revendedores de hosting con cPanel/WHM, marca blanca personalizable y soporte técnico 24/7 para tus clientes.",
    icon: Globe,
    image: "/services/hosting-reseller.png",
    color: "bg-gradient-to-br from-gray-900 to-blue-700",
    url: "/servicios/reseller-cpanel",
    price: "Desde $40,000/mes",
    category: "hosting",
    featured: false,
    features: [
      "WHM incluido",
      "Cuentas ilimitadas",
      "WHMCS opcional",
      "Marca blanca",
      "Recursos escalables",
    ],
    sections: {
      benefits: [
        {
          title: "Marca blanca total",
          description:
            "Personaliza tu panel con tu logo, colores y dominio propio para ofrecer un servicio 100% a tu nombre.",
          icon: Settings,
        },
        {
          title: "Gestión centralizada",
          description:
            "Administra todas las cuentas de tus clientes desde un único WHM con control granular de recursos.",
          icon: Server,
        },
        {
          title: "Recursos de cuentas ilimitadas",
          description:
            "Crea y distribuye cuentas de hosting sin límite, ajustando cuotas de disco y ancho de banda a cada cliente.",
          icon: Users,
        },
        {
          title: "Soporte 24/7",
          description:
            "Asistencia permanente para ti y tus clientes, con tiempos de respuesta ágiles y resolución eficaz.",
          icon: Headphones,
        },
        {
          title: "Facturación integrada",
          description:
            "Integra WHMCS opcional para automatizar altas, bajas, renovaciones y cobros de tus planes.",
          icon: CreditCard,
        },
      ],
      detailedFeatures: [
        {
          title: "Creación automática de cuentas",
          description:
            "Automatiza el provisioning de nuevas cuentas con parámetros predefinidos y plantillas de hosting.",
          icon: RefreshCcw,
        },
        {
          title: "Branding personalizado",
          description:
            "Modifica textos, logos y estilos CSS de cPanel/WHM para reforzar tu identidad de marca.",
          icon: Globe,
        },
        {
          title: "Módulo WHMCS ready",
          description:
            "Instalación opcional de WHMCS y módulos preconfigurados para la facturación y gestión de clientes.",
          icon: CreditCard,
        },
        {
          title: "Monitorización y reportes",
          description:
            "Obtén métricas de uso de CPU, RAM, disco y tráfico con gráficos y alertas automáticas.",
          icon: BarChart2,
        },
        {
          title: "Seguridad avanzada",
          description:
            "Firewall dedicado, brute-force protection y copias de seguridad para garantizar la continuidad.",
          icon: Shield,
        },
      ],
    },
  },
  {
    id: "reseller-hosting-plesk",
    title: "Reseller Hosting Plesk",
    description:
      "Solución completa para revendedores de hosting con Plesk Obsidian, marca blanca personalizable y soporte técnico 24/7 para tus clientes.",
    icon: Globe,
    image: "/services/hosting-reseller.png",
    color: "bg-gradient-to-br from-purple-500 to-blue-700",
    url: "/servicios/reseller-plesk",
    price: "Desde $40,000/mes",
    category: "hosting",
    featured: false,
    features: [
      "Plesk Obsidian incluido",
      "Cuentas ilimitadas",
      "WHMCS opcional",
      "Marca blanca",
      "Recursos escalables",
    ],
    sections: {
      benefits: [
        {
          title: "Marca blanca total",
          description:
            "Personaliza el panel de Plesk con tu logo, dominio y estilos para una experiencia 100% propia.",
          icon: Settings,
        },
        {
          title: "Gestión centralizada",
          description:
            "Administra todas las suscripciones de tus clientes desde un único panel Plesk con plantillas predefinidas.",
          icon: Server,
        },
        {
          title: "Recursos de cuentas ilimitadas",
          description:
            "Crea cuentas de hosting sin límite y asigna recursos (CPU, RAM, disco) de forma granular.",
          icon: Users,
        },
        {
          title: "Soporte 24/7",
          description:
            "Asistencia técnica permanente para resolver incidencias de tus clientes con rapidez.",
          icon: Headphones,
        },
        {
          title: "Facturación integrada",
          description:
            "Integración opcional con WHMCS para automatizar altas, renovaciones y cobros de tus planes.",
          icon: CreditCard,
        },
      ],
      detailedFeatures: [
        {
          title: "Plesk Obsidian completo",
          description:
            "Accede a todas las funciones de Plesk Obsidian: Git, Node.js, Laravel y más herramientas DevOps.",
          icon: Layout,
        },
        {
          title: "Automatización de suscripciones",
          description:
            "Configura planes y plantillas en Plesk para crear cuentas automáticamente con los parámetros deseados.",
          icon: RefreshCcw,
        },
        {
          title: "Instalador One-Click",
          description:
            "Utiliza Plesk Application Vault, WP Toolkit, Softaculous para desplegar WordPress, Joomla y otras aplicaciones en un clic.",
          icon: Box,
        },
        {
          title: "Monitorización y reportes",
          description:
            "Visualiza métricas de uso de recursos, tráfico y estado de servicios en dashboards integrados.",
          icon: BarChart2,
        },
        {
          title: "Seguridad avanzada",
          description:
            "Implementa ModSecurity, fail2ban, Imunify360  y cortafuegos de aplicaciones web directamente desde Plesk.",
          icon: Shield,
        },
      ],
    },
  },
  {
    id: "vps-hosting",
    title: "VPS Hosting",
    description:
      "Servidores Virtuales Privados con recursos garantizados, acceso root completo y escalabilidad inmediata para mayor control y rendimiento.",
    icon: Database,
    image: "/services/vps-hosting.png",
    color: "bg-gradient-to-br from-purple-500 to-indigo-700",
    url: "/servicios/vps-hosting",
    price: "Desde $35,000/mes",
    category: "servidores",
    featured: true,
    features: [
      "CPU y RAM garantizados",
      "SSD NVMe ultrarrápido",
      "Escalamiento vertical",
      "Panel de control incluido",
      "Backups automáticos",
    ],
    sections: {
      benefits: [
        {
          title: "Infraestructura Premium",
          description:
            "Servidores montados en centros de datos de primera categoría para garantizar máximo rendimiento y disponibilidad.",
          icon: Cloud,
        },
        {
          title: "Private Networks",
          description:
            "Redes privadas aisladas para comunicación segura y de baja latencia entre tus instancias.",
          icon: Globe,
        },
        {
          title: "Cloud Firewalls",
          description:
            "Reglas de firewall a nivel de servidor para controlar tráfico entrante y saliente.",
          icon: Shield,
        },
        {
          title: "Backups & Snapshots",
          description:
            "Crea snapshots instantáneos o programados de tu disco para una recuperación rápida.",
          icon: RefreshCcw,
        },
        {
          title: "IPv4 & IPv6",
          description:
            "Asignación de IP pública dual-stack con un Primary IPv4 y un Primary IPv6 opcionales.",
          icon: Key,
        },
        {
          title: "Elección de Ubicación",
          description:
            "Despliega tu servidor en el centro de datos que más convenga a tu público.",
          icon: ArrowUpCircle,
        },
      ],
      detailedFeatures: [
        {
          title: "Escalamiento Vertical",
          description: "Añade CPU o RAM al instante sin migraciones complejas.",
          icon: ArrowUpCircle,
        },
        {
          title: "Block Storage Volumes",
          description:
            "Adjunta volúmenes de discos adicionales de forma dinámica para almacenar datos persistentes.",
          icon: Database,
        },
        {
          title: "Monitoreo en Tiempo Real",
          description:
            "Dashboard con métricas de CPU, RAM, disco y red para optimizar tu entorno.",
          icon: BarChart2,
        },
        {
          title: "Snapshots a Demanda",
          description:
            "Crea y restaura copias punto en el tiempo de tus discos en segundos.",
          icon: RefreshCcw,
        },
        {
          title: "API & CLI",
          description:
            "Automatiza la gestión de instancias y redes mediante nuestra API REST y CLI.",
          icon: Settings,
        },
        {
          title: "Seguridad Avanzada",
          description:
            "Protección DDoS básica y actualizaciones automáticas de seguridad.",
          icon: Shield,
        },
      ],
    },
  },
  {
    id: "servidores-dedicados",
    title: "Servidores Dedicados",
    description:
      "Soluciones de alto rendimiento con servidores dedicados, ideales para aplicaciones críticas y cargas de trabajo intensivas, con soporte técnico especializado.",
    icon: ServerCogIcon,
    image: "/services/servidores-dedicados.png",
    color: "bg-gradient-to-br from-blue-500 to-blue-800",
    url: "/servicios/servidores-dedicados",
    price: "Desde $82,000/mes",
    category: "servidores",
    featured: true,
    features: [
      "Hardware de última generación",
      "Recursos dedicados",
      "Configuración personalizada",
      "Soporte técnico estándar",
      "Monitoreo proactivo",
    ],
    sections: {
      benefits: [
        {
          title: "Infraestructura Premium",
          description:
            "Servidores alojados en centros de datos de primera categoría para máxima fiabilidad y rendimiento.",
          icon: Cloud,
        },
        {
          title: "Private Networks",
          description:
            "Red privada aislada para interconectar tus servidores dedicados y VPS de forma segura.",
          icon: Globe,
        },
        {
          title: "Cloud Firewalls",
          description:
            "Definición de reglas de firewall personalizadas para proteger tus sistemas críticos.",
          icon: Shield,
        },
        {
          title: "Backups & Snapshots",
          description:
            "Copias automáticas y snapshots bajo demanda de todo tu servidor.",
          icon: RefreshCcw,
        },
        {
          title: "IPv4 & IPv6",
          description:
            "Asignación dual-stack de IPs públicas para máxima compatibilidad de red.",
          icon: Key,
        },
        {
          title: "Selección de Ubicación",
          description:
            "Elige la región de tu servidor según las necesidades de tu latencia y cumplimiento.",
          icon: ArrowUpCircle,
        },
      ],
      detailedFeatures: [
        {
          title: "Almacenamiento RAID10 SSD",
          description:
            "Discos SSD configurados en RAID10 para alta velocidad de lectura/escritura y redundancia.",
          icon: Database,
        },
        {
          title: "Redundancia de Red",
          description:
            "Conectividad a través de múltiples carriers para minimizar riesgos de corte.",
          icon: Globe,
        },
        {
          title: "SLA 99.99%",
          description:
            "Compensaciones y monitoreo constante para garantizar alta disponibilidad.",
          icon: CheckCircle,
        },
        {
          title: "Snapshots & Volúmenes",
          description:
            "Gestiona volúmenes adicionales y snapshots con nuestra interfaz o API.",
          icon: RefreshCcw,
        },
        {
          title: "Monitoreo 24/7",
          description:
            "Alertas y reportes en tiempo real para anticipar y resolver incidencias.",
          icon: Eye,
        },
        {
          title: "Consultoría Dedicada",
          description:
            "Ingeniero de soporte asignado para optimizar tu arquitectura y procesos.",
          icon: Headphones,
        },
      ],
    },
  },
  {
    id: "vps-n8n",
    title: "VPS con N8N",
    description:
      "Servidores optimizados para N8N, la potente plataforma de automatización de flujos de trabajo sin código para integraciones y automatizaciones.",
    icon: Zap,
    color: "bg-gradient-to-br from-red-600 to-blue-600",
    url: "/servicios/vps-n8n",
    image:"/services/vps-n8n.png",
    price: "Desde $40,000/mes",
    category: "servidores",
    featured: false,
    features: [
      "N8N preinstalado",
      "Configuración optimizada",
      "Actualizaciones automáticas",
      "Monitoreo específico",
      "Alta disponibilidad opcional",
    ],
  },
  {
    id: "microsoft365",
    title: "Microsoft 365",
    description:
      "Correo corporativo premium con Microsoft 365, incluyendo herramientas de productividad y colaboración en la nube para empresas de cualquier tamaño.",
    icon: Mail,
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    url: "/servicios/microsoft365",
    image: "/services/microsoft365.png",
    price: "Desde $90,000/anual",
    category: "email",
    featured: true,
    features: [
      "Exchange Online",
      "Office 365 completo",
      "Teams integrado",
      "OneDrive 1TB",
      "Soporte Premium",
    ],
    sections: {
      benefits: [
        {
          title: "Productividad Integral",
          description:
            "Accede a las aplicaciones de Office (Word, Excel, PowerPoint) siempre actualizadas y disponibles en la nube.",
          icon: Zap,
        },
        {
          title: "Colaboración en Tiempo Real",
          description:
            "Edita documentos simultáneamente con tu equipo y mantén conversaciones y reuniones desde Teams.",
          icon: Users,
        },
        {
          title: "Correo Corporativo Seguro",
          description:
            "Buzones de Exchange Online con 50 GB de almacenamiento y protección contra spam y malware.",
          icon: Shield,
        },
        {
          title: "Almacenamiento en la Nube",
          description:
            "1 TB de OneDrive por usuario para guardar, compartir y sincronizar archivos desde cualquier dispositivo.",
          icon: Cloud,
        },
        {
          title: "Soporte Premium 24/7",
          description:
            "Asistencia especializada para resolver cualquier incidencia de configuración o uso de la plataforma.",
          icon: Headphones,
        },
      ],
      detailedFeatures: [
        {
          title: "Centro de Administración",
          description:
            "Panel centralizado para gestionar licencias, usuarios, grupos y políticas de seguridad de tu organización.",
          icon: FileText,
        },
        {
          title: "Políticas de Retención y Archivado",
          description:
            "Configura retención de correos y archivado automático para cumplir normativas legales y de cumplimiento.",
          icon: Calendar,
        },
        {
          title: "Protección Avanzada de Datos",
          description:
            "Prevención de pérdida de datos (DLP), cifrado de correo y acceso condicional basado en identidad.",
          icon: Shield,
        },
        {
          title: "Movilidad Administrada",
          description:
            "Gestiona y protege dispositivos móviles con Mobile Device Management y acceso seguro a datos corporativos.",
          icon: UserCheck,
        },
        {
          title: "Integración con Apps",
          description:
            "Conecta fácilmente otras aplicaciones de negocio via Power Automate, Power Apps y Graph API.",
          icon: Zap,
        },
        {
          title: "Informes y Analíticas",
          description:
            "Obtén reportes de uso, actividad y cumplimiento para auditar y optimizar tu entorno.",
          icon: BarChart2,
        },
      ],
    },
  },
  {
    id: "google-workspace",
    title: "Google Workspace",
    description:
      "Solución de correo empresarial con Google Workspace, integración con todas las herramientas de Google y almacenamiento en la nube escalable.",
    icon: Cloud,
    color: "bg-gradient-to-br from-blue-600 to-blue-900",
    url: "/servicios/google-workspace",
    image: "/services/google-workspace.png",
    price: "Desde $90,000/anual",
    category: "email",
    featured: false,
    features: [
      "Gmail profesional",
      "Google Drive",
      "Meet y Chat",
      "Docs, Sheets, Slides",
      "Administración centralizada",
    ],
    sections: {
      benefits: [
        {
          title: "Gmail Profesional",
          description:
            "Correo con tu dominio, bandejas de 30 GB y protección contra spam y phishing.",
          icon: Mail,
        },
        {
          title: "Almacenamiento Escalable",
          description:
            "Google Drive con espacio compartido y posibilidad de ampliar según tus necesidades.",
          icon: Folder,
        },
        {
          title: "Colaboración en Tiempo Real",
          description:
            "Edita documentos, hojas y presentaciones simultáneamente con tu equipo.",
          icon: FileText,
        },
        {
          title: "Videoconferencias y Chat",
          description:
            "Reúnete con Google Meet y comunica con Chat, todo integrado en tu flujo de trabajo.",
          icon: Video,
        },
        {
          title: "Administración Centralizada",
          description:
            "Controla usuarios, grupos y políticas desde un panel intuitivo de administración.",
          icon: Users,
        },
        {
          title: "Seguridad Empresarial",
          description:
            "Protección avanzada con DLP, MFA y gestión de dispositivos móviles.",
          icon: Shield,
        },
      ],
      detailedFeatures: [
        {
          title: "Consola de Administración",
          description:
            "Gestiona usuarios, licencias y políticas de seguridad desde un único dashboard.",
          icon: Settings,
        },
        {
          title: "Gestión de Dispositivos",
          description:
            "Aplica controles de seguridad en móviles y ordenadores corporativos.",
          icon: UserCheck,
        },
        {
          title: "Retención y Vault",
          description:
            "Configura políticas de retención de correo y archivado legal con Google Vault.",
          icon: Lock,
        },
        {
          title: "Automatización y Scripts",
          description:
            "Crea flujos de trabajo personalizados con Google Apps Script y AppSheet.",
          icon: Zap,
        },
        {
          title: "Informes y Auditoría",
          description:
            "Accede a reportes de uso, actividad y cumplimiento para auditorías internas.",
          icon: FileText,
        },
        {
          title: "API & SDKs",
          description:
            "Integra Workspace con tus aplicaciones mediante APIs y bibliotecas oficiales.",
          icon: Zap,
        },
      ],
    },
  },
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    description:
      "Creamos soluciones web a medida con tecnologías como WordPress, Node.js y Angular, adaptándonos a tus necesidades para un resultado optimizado.",
    icon: Code,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    url: "/desarrollo-web",
    price: "Proyectos personalizados",
    category: "desarrollo",
    featured: true,
    features: [
      "Diseño personalizado",
      "SEO optimizado",
      "Responsive design",
      "Integraciones API",
      "Soporte post-lanzamiento",
    ],
  },
];
