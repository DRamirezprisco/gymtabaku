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
    whatsappNumber: "573223139467",
    whatsappUrl: "https://wa.me/573158361031",
    email: "Gymtabaku@gmail.com",
    emailMailto: "mailto:Gymtabaku@gmail.com",
    address: "Cra. 82a #6-16, Kennedy",
    googleMapsUrl: "https://www.google.com/maps/place/Cra.+82a+%236+-16,+Bogot%C3%A1/@4.6386727,-74.1554122,18z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9c3b4ae06ac1:0x4a2b97ca35ee20d2!8m2!3d4.6386711!4d-74.1546467!16s%2Fg%2F11yjgqxnsq?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  developer: {
    name: "Daniela Ramirez",
    whatsappUrl: "https://wa.me/573223139467",
  },
};

export const getWhatsAppMessageUrl = (message: string) => {
  const cleanNumber = SITE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(message)}`;
};

export const COURTESY_CLASS_WA_URL = getWhatsAppMessageUrl(
  "¡Hola Gym Tabaku! 👋 Quiero mi clase de cortesía"
);
