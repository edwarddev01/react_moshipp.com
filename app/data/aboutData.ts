// app/pages/about/data/aboutData.ts
import {
  Clock,
  Shield,
  Zap,
  Server,
  Users,
  Target,
  Award,
  Heart,
  MessageSquare,
  DollarSign,
} from "lucide-react";

// Datos del equipo
export const teamMembers = [
  {
    id: 1,
    name: "Jesus Medina Hoyos",
    role: "Fundador & CEO",
    description:
      "Responsable de la gestión de servidores y de brindar soporte técnico a clientes, asegurando un servicio de calidad superior.",
    image: "/avatars/avatar.avif",
  },
  {
    id: 2,
    name: "Juan Mangones Ramirez",
    role: "Director de Tecnología",
    description:
      "Especialista en arquitectura de servidores y optimización de rendimiento, encargada de mantener nuestros sistemas funcionando al máximo nivel.",
    image: "/avatars/avatar.avif",
  },
  {
    id: 3,
    name: "Juan Anaya Martinez",
    role: "Soporte Técnico",
    description:
      "Experto en resolución de problemas técnicos y atención al cliente, disponible 24/7 para asegurar la mejor experiencia de usuario.",
    image: "/avatars/avatar.avif",
  },
  {
    id: 4,
    name: "Edward Diaz Padilla",
    role: "Asesor Comercial",
    description:
      "Encargado de la atención al cliente y ventas, siempre dispuesto a ayudar a nuestros clientes a encontrar la mejor solución para sus necesidades.",
    image: "/avatars/avatar.avif",
  },
  {
    id: 5,
    name: "Diana Sanchez Padilla",
    role: "Recursos Humanos",
    description:
      "Responsable del desarrollo organizacional, gestión del talento humano y cultura empresarial, asegurando un ambiente laboral óptimo para brindar el mejor servicio a nuestros clientes.",
    image: "/avatars/avatar.avif",
  },
];

// Datos de valores
export const values = [
  {
    id: 1,
    title: "Confiabilidad",
    description:
      "Nos comprometemos a mantener un servicio estable, con un tiempo de actividad óptimo y copias de seguridad regulares para garantizar la tranquilidad de nuestros clientes.",
    icon: Shield,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/50",
  },
  {
    id: 2,
    title: "Innovación",
    description:
      "Constantemente buscamos nuevas formas de mejorar nuestros servicios, adoptando las últimas tecnologías para ofrecer soluciones cada vez más eficientes.",
    icon: Zap,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/50",
  },
  {
    id: 3,
    title: "Cliente primero",
    description:
      "El éxito de nuestros clientes es nuestro éxito. Ofrecemos soporte técnico disponible 24/7 y nos aseguramos de que cada interacción sea positiva y resolutiva.",
    icon: Heart,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/50",
  },
];

// Datos de ventajas
export const advantages = [
  {
    id: 1,
    title: "Velocidad superior",
    description:
      "Servidores optimizados que garantizan tiempos de carga rápidos para mejorar la experiencia de sus visitantes y el SEO de su sitio.",
    icon: Zap,
    color: "text-blue-300",
  },
  {
    id: 2,
    title: "Seguridad avanzada",
    description:
      "Protección contra malware, firewalls avanzados y copias de seguridad regulares para mantener sus datos seguros.",
    icon: Shield,
    color: "text-blue-300",
  },
  {
    id: 3,
    title: "Soporte 24/7",
    description:
      "Equipo técnico disponible en todo momento para resolver sus dudas y brindar asistencia inmediata cuando lo necesite.",
    icon: MessageSquare,
    color: "text-blue-300",
  },
  {
    id: 4,
    title: "Precios competitivos",
    description:
      "Planes flexibles y asequibles diseñados para adaptarse a las necesidades y presupuestos de cada cliente.",
    icon: DollarSign,
    color: "text-blue-300",
  },
];

// Testimonios
export const testimonials = [
  {
    id: 1,
    content:
      "Moshipp ha sido mi proveedor de hosting desde hace más de un año, y no puedo estar más contento. Su servicio es rápido, seguro y confiable, y el equipo de soporte técnico siempre está ahí cuando los necesito.",
    author: "Carlos Rodríguez",
    role: "Desarrollador web",
    avatar: "/avatars/avatar.avif",
  },
  {
    id: 2,
    content:
      "Estaba buscando un servicio de hosting flexible y asequible, y Moshipp superó todas mis expectativas. Su plataforma fácil de usar y su equipo de soporte técnico excepcional me han ayudado a llevar mi negocio al siguiente nivel.",
    author: "Ana Martínez",
    role: "Propietaria de tienda online",
    avatar: "/avatars/avatar.avif",
  },
  {
    id: 3,
    content:
      "Desde que migré mi sitio web a Moshipp, he notado una gran mejora en la velocidad y la seguridad de mi sitio. Estoy muy contento con su servicio, y lo recomendaría a cualquier persona que busque un hosting de calidad superior.",
    author: "Juan Pérez",
    role: "Blogger de tecnología",
    avatar: "/avatars/avatar.avif",
  },
];
