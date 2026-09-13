export interface ServiceImage {
  src: string;
  alt: string;
}

export interface ServiceItem {
  title: string;
  icon: string;
  subtitle: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
  serviceItemId: string;
  images: ServiceImage[];
}

export interface HomeServiceSummary {
  img: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  url: string;
  active?: boolean;
}

export const SERVICE_DEFAULT_IMAGES: ServiceImage[] = [
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    alt: "Área de peso libre",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    alt: "Entrenamiento funcional",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    alt: "Zona cardio",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    alt: "Clases grupales",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    alt: "Máquinas musculación",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    alt: "Crossfit zone",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    alt: "Spinning room",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    alt: "Área de estiramiento",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    alt: "Boxeo y artes marciales",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    alt: "Entrenamiento personal",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    alt: "Zona VIP",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    alt: "Nutrición y suplementos",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Zonas de entrenamiento",
    icon: "zonas",
    subtitle: "Un espacio para cada parte de tu progreso",
    videoUrl: "/img/services/zonasEntrenamiento.mp4",
    posterUrl: "/img/services/zonasEntrenamiento.webp",
    description:
      "Contamos con zonas de entrenamiento organizadas para facilitar una rutina completa y funcional. Encontrarás espacios destinados a cardio, pesas, abdomen y glúteos, equipados con máquinas funcionales que te permitirán trabajar cada objetivo de manera efectiva.",
    serviceItemId: "zonas",
    images: [{
      src: "/img/services/galleryZonasEntrenamiento/zona1.webp",
      alt: "Área de cardio",
    },
    {
      src: "/img/services/galleryZonasEntrenamiento/zona2.webp",
      alt: "Entrenamiento funcional",
    },
    {
      src: "/img/services/galleryZonasEntrenamiento/zona3.webp",
      alt: "Área de Spinning",
    }, {
      src: "/img/services/galleryZonasEntrenamiento/zona4.webp",
      alt: "Área de pesas",
    }, {
      src: "/img/services/galleryZonasEntrenamiento/zona2.webp",
      alt: "Entrenamiento funcional",
    }, {
      src: "/img/services/galleryZonasEntrenamiento/zona4.webp",
      alt: "Área de pesas",
    }, {
      src: "/img/services/galleryZonasEntrenamiento/zona1.webp",
      alt: "Área de cardio",
    }, {
      src: "/img/services/galleryZonasEntrenamiento/zona3.webp",
      alt: "Área de Spinning",
    }, {
      src: "/img/services/galleryZonasEntrenamiento/zona1.webp",
      alt: "Área de cardio",
    }, {
      src: "/img/services/galleryZonasEntrenamiento/zona4.webp",
      alt: "Área de pesas",
    }, {
      src: "/img/services/galleryZonasEntrenamiento/zona2.webp",
      alt: "Entrenamiento funcional",
    }, {
      src: "/img/services/galleryZonasEntrenamiento/zona3.webp",
      alt: "Área de Spinning",
    }],
  },

  {
    title: "Entrenamientos personalizados",
    icon: "coach",
    subtitle: "Tu meta, nuestro acompañamiento",
    videoUrl: "/img/services/entrenamientosPersonalizados.mp4",
    posterUrl: "/img/services/entrenamientosPersonalizados.webp",
    description:
      "Sabemos que cada cuerpo y cada objetivo son diferentes. Nuestros coaches estarán contigo para orientarte, corregirte y motivarte en el camino, por eso trabajamos contigo para que cada entrenamiento tenga un propósito avanzando con mayor seguridad, constancia y motivación.",
    serviceItemId: "coach",
    images: [{
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos1.webp",
      alt: "Área de cardio",
    },
    {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos2.webp",
      alt: "Entrenadores de planta",
    },
    {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos3.webp",
      alt: "Entrenadores de planta",
    }, {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos4.webp",
      alt: "Entrenadores de planta",
    }, {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos5.jpg",
      alt: "Entrenador Ándres",
    }, {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos6.jpg",
      alt: "Entrenador Jeferson",
    }, {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos7.jpg",
      alt: "Entrenador Jorge",
    }, {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos1.webp",
      alt: "Entrenadores de planta",
    }, {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos2.webp",
      alt: "Entrenadores de planta",
    }, {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos3.webp",
      alt: "Entrenadores de planta",
    }, {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos4.webp",
      alt: "Entrenadores de planta",
    }, {
      src: "/img/services/galleryEntrenamientosPersonalizados/entrenamientos1.webp",
      alt: "Entrenadores de planta",
    }],
  },

  {
    title: "Clases grupales",
    icon: "zumba",
    subtitle: "Muévete, disfruta y comparte la energía",
    videoUrl: "/img/services/clasesGrupales.mp4",
    posterUrl: "/img/services/clasesGrupales.webp",
    description:
      "Nuestras clases grupales de baile son una excelente alternativa para mantenerte activo mientras disfrutas de una experiencia dinámica y motivadora. Todos los lunes y miércoles podrás entrenar al ritmo de la música, mejorar tu condición física y compartir la energía de un grupo que disfruta avanzar junto.",
    serviceItemId: "zumba",
    images: [{
      src: "/img/services/galleryClasesGrupales/grupal1.webp",
      alt: "Área de cardio",
    },
    {
      src: "/img/services/galleryClasesGrupales/grupal3.webp",
      alt: "Entrenamiento funcional",
    },
    {
      src: "/img/services/galleryClasesGrupales/grupal1.webp",
      alt: "Área de Spinning",
    }, {
      src: "/img/services/galleryClasesGrupales/grupal3.webp",
      alt: "Área de pesas",
    }, {
      src: "/img/services/galleryClasesGrupales/grupal2.webp",
      alt: "Entrenamiento funcional",
    }, {
      src: "/img/services/galleryClasesGrupales/grupal1.webp",
      alt: "Área de pesas",
    }, {
      src: "/img/services/galleryClasesGrupales/grupal2.webp",
      alt: "Área de cardio",
    }, {
      src: "/img/services/galleryClasesGrupales/grupal3.webp",
      alt: "Área de Spinning",
    }, {
      src: "/img/services/galleryClasesGrupales/grupal1.webp",
      alt: "Área de cardio",
    }, {
      src: "/img/services/galleryClasesGrupales/grupal3.webp",
      alt: "Área de pesas",
    }, {
      src: "/img/services/galleryClasesGrupales/grupal2.webp",
      alt: "Entrenamiento funcional",
    }, {
      src: "/img/services/galleryClasesGrupales/grupal3.webp",
      alt: "Área de Spinning",
    }],
  },
];

export const HOME_SERVICES: HomeServiceSummary[] = [
  {
    img: "/img/services/zonasEntrenamiento.webp",
    title: "Zonas de Entrenamiento",
    subtitle: "Espacios diseñados para cada objetivo",
    icon: "zonas",
    description:
      "Contamos con áreas independientes para pesas, cardio y glúteo, brindando mayor comodidad y una mejor experiencia.",
    url: "/servicios#zonas",
  },
  {
    img: "/img/services/entrenamientosPersonalizados.webp",
    title: "Entrenadores Personalizados",
    subtitle: "Entrena con apoyo profesional",
    icon: "coach",
    description:
      "Nuestros entrenadores te acompañan durante todo el proceso, guiándote en cada ejercicio para que alcances tus metas de forma segura y efectiva.",
    url: "/servicios#coach",
    active: true,
  },
  {
    img: "/img/services/clasesGrupales.webp",
    title: "Clases Grupales",
    subtitle: "Energía, diversión y comunidad",
    icon: "zumba",
    description:
      "Muévete al ritmo de la música y disfruta de clases dinámicas que combinan ejercicio, diversión y motivación en grupo.",
    url: "/servicios#zumba",
  },
];
