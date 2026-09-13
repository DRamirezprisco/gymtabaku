export interface NavItem {
  name: string;
  url: string;
  key: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Nosotros",
    url: "/nosotros",
    key: "nosotros",
  },
  {
    name: "Servicios",
    url: "/servicios",
    key: "servicios",
  },

  {
    name: "Profesores",
    url: "/profesores",
    key: "profesores",
  },
  {
    name: "Horarios",
    url: "/horarios",
    key: "horarios",
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
