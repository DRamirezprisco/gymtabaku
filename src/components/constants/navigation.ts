export interface NavItem {
  name: string;
  url: string;
  key: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Servicios",
    url: "/servicios",
    key: "servicios",
  },
  {
    name: "Nosotros",
    url: "/nosotros",
    key: "nosotros",
  },
  {
    name: "Horarios",
    url: "/horarios",
    key: "horarios",
  },
  {
    name: "Profesores",
    url: "/profesores",
    key: "profesores",
  },
  {
    name: "Testimonios",
    url: "/testimonios",
    key: "testimonios",
  },
  {
    name: "Contactanos",
    url: "/contactanos",
    key: "contactanos",
  },
];
