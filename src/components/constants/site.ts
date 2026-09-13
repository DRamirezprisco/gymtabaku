export interface ContactInfo {
  phone: string;
  phoneTel: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  emailMailto: string;
  address: string;
  googleMapsUrl: string;
}

export interface DeveloperInfo {
  name: string;
  whatsappUrl: string;
}

export interface SiteConfig {
  name: string;
  slogan: string;
  sloganSecondary: string;
  description: string;
  contact: ContactInfo;
  developer: DeveloperInfo;
}

export const SITE_CONFIG: SiteConfig = {
  name: "GYM TABAKU",
  slogan: "¡Entrena con fuerza. Crece en familia!",
  sloganSecondary: "¡Juntos somos más fuertes!",
  description:
    "Creamos un espacio donde cada persona importa, con un ambiente acogedor. Aquí el ejercicio se vive con confianza y acompañamiento, no solo es motivación sino contar con un equipo comprometido con tu bienestar.",
  contact: {
    phone: "3158361031",
    phoneTel: "tel:3158361031",
    whatsappNumber: "573158361031",
    whatsappUrl: "https://wa.me/573158361031",
    email: "Gymtabaku@gmail.com",
    emailMailto: "mailto:Gymtabaku@gmail.com",
    address: "Dg. 3 #83-02, Kennedy",
    googleMapsUrl: "https://maps.google.com/?q=Dg.+3+%2383-02,+Kennedy",
  },
  developer: {
    name: "Daniela Ramirez",
    whatsappUrl: "https://wa.me/573223139467",
  },
};
