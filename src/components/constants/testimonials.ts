export interface TestimonialItem {
  image: string;
  name: string;
  text: string;
  stars: number;
}

export interface EventImage {
  src: string;
  alt: string;
}

export interface EventItem {
  id: string;
  name: string;
  featured: EventImage;
  thumbnails: EventImage[];
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    image: "/img/testimonios/testimonio1.webp",
    name: "Maria Rodriguez",
    text: "En solo 4 meses logré bajar 4 kg de forma saludable y constante. Lo que más me gustó fue el acompañamiento de los profesores y el ambiente tan familiar del gimnasio. Hoy me siento con más energía, confianza y motivación para seguir avanzando",
    stars: 3,
  },
  {
    image: "/img/testimonios/testimonio2.webp",
    name: "Andres Martinez",
    text: "No buscaba resultados rápidos, buscaba un cambio real. En 4 meses logré bajar 4 kg, sentirme más saludable y recuperar la confianza en mí mismo. Lo mejor ha sido contar con un equipo que siempre está dispuesto a apoyar y motivar",
    stars: 5,
  },
  {
    image: "/img/testimonios/testimonio3.webp",
    name: "Carolina Perez",
    text: "Más que perder kg, gané salud, disciplina y confianza. Cada entrenamiento me acercó a mis objetivos y me hizo sentir mejor conmigo, baje mas de 10 kg y hoy me siento bien",
    stars: 4,
  },
  {
    image: "/img/testimonios/testimonio4.webp",
    name: "Ewduar Gomez",
    text: "Entrar al gimnasio fue una de las mejores decisiones que tomé este año. En 4 meses bajé 4 kg, mejoré mi resistencia y recuperé hábitos que había dejado de lado. Cada entrenamiento me acercó un poco más a mis metas.",
    stars: 5,
  },
  {
    image: "/img/testimonios/testimonio5.webp",
    name: "Daniela Ramirez",
    text: "Logré bajar 4 kg de manera saludable y mejorar mi condición física. El acompañamiento de los entrenadores y el ambiente del gimnasio fueron clave para mantener la constancia. Hoy me siento más fuerte, con más energía y motivada para seguir avanzando",
    stars: 4,
  },
];

export const COMMUNITY_EVENTS: EventItem[] = [
  {
    id: "DiaDelAmor",
    name: "Día del Amor y la Amistad",
    featured: {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
      alt: "Celebración Día del Amor y la Amistad",
    },
    thumbnails: [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        alt: "Entrenamiento en pareja",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        alt: "Actividad grupal",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        alt: "Integración",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        alt: "Competencia amistosa",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        alt: "Premiación y sonrisas",
      },
    ],
  },
  {
    id: "DiaDelaMadre",
    name: "Día de la Madre",
    featured: {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      alt: "Especial Día de la Madre",
    },
    thumbnails: [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        alt: "Clase funcional mamás",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        alt: "Sesión cardio especial",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        alt: "Momentos en familia",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        alt: "Entrenamiento compartido",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        alt: "Celebración y detalles",
      },
    ],
  },
  {
    id: "Halloween",
    name: "Halloween Fitness",
    featured: {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      alt: "Fiesta de Disfraces y Entrenamiento",
    },
    thumbnails: [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        alt: "Disfraces y pesas",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        alt: "Clase temática de miedo",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        alt: "Reto fitness extremo",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        alt: "Compañerismo deportivo",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        alt: "Foto oficial de disfraces",
      },
    ],
  },
  {
    id: "navidad",
    name: "Cierre de Año y Navidad",
    featured: {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      alt: "Celebración Navideña y Logros Anuales",
    },
    thumbnails: [
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        alt: "Brindis fitness",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        alt: "Último entreno del año",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        alt: "Reconocimientos a atletas",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        alt: "Desafío de fin de año",
      },
      {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        alt: "Familia Tabaku unida",
      },
    ],
  },
];
