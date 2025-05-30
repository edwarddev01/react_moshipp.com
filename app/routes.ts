import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  // parent route
  index("./routes/home.tsx"),
  route("servicios", "./routes/services.tsx"),
  route("servicios/:serviceId", "./routes/services.$serviceId.tsx"),
  route("desarrollo-web", "./routes/desarrollo-web.tsx"),
  route("nosotros", "./routes/about.tsx"),
  route("dominios", "./routes/domains.tsx"),
  route("contacto", "./routes/contact.tsx"),
  route("terminos-de-servicio", "./routes/terms.tsx"),
  route("politica-de-privacidad", "./routes/privacy.tsx"),
    //[
    // child routes
    //index("./routes/home.tsx"),
   // route("settings", "./routes/home.tsx"),
 // ]
//),
] satisfies RouteConfig;
