export interface HeaderCoaches {
  name: string;
  role: string;
  img: string;
  imgHover: string;
}

export interface DescriptionCoaches {
  tittle: string;
  subTittle: string;
  description: string;
  description2: string;
  description3: string;
  img: string;
  wallpaperSrc?: string;
  video?: string;
}

export interface GalleryCoaches {
  img: string;
  alt: string;
}

export interface Coach {
  header: HeaderCoaches;
  description: DescriptionCoaches;
  gallery: GalleryCoaches[];
}

export interface CoachPreview {
  img: string;
  name: string;
  experiencia: string;
}

export const COACHES_DATA: Coach[] = [
  {
    header: {
      name: "Andres Sanchez",
      role: "Personal Trainer",
      img: "/img/coach/coachAndresSF.png",
      imgHover: "/img/coach/coachAndresSF.png",
    },
    description: {
      tittle: "Andres Sanchez",
      subTittle: "Personal Trainer · 5 años de experiencia",
      description:
        "Más que entrenarte, busco acompañarte en el camino hacia una vida más saludable y activa. Mi empatía, liderazgo y cercanía permiten entender que cada persona tiene un ritmo, unas capacidades y unos desafíos diferentes.",
      description2:
        "Mi acompañamiento parte de conocer tus objetivos y condición física para crear un entrenamiento adaptado a ti, cuidando cada movimiento, corrigiendo tu técnica y haciendo seguimiento de tus avances.",
      description3:
        "Tu proceso es único. Mi compromiso es acompañarte en cada paso.",
      img: "/img/coach/coachDescriptionAndres.jpg",
      video: "/img/coach/coach1.mp4",
    },
    gallery: [
      {
        img: "/img/coach/coaches1.webp",
        alt: "Andres Sanchez",
      },
      {
        img: "/img/coach/coaches2.webp",
        alt: "Andres Sanchez",
      },
      {
        img: "/img/coach/coaches3.webp",
        alt: "Andres Sanchez",
      },
      {
        img: "/img/coach/coaches4.webp",
        alt: "Andres Sanchez",
      },
    ],
  },
  {
    header: {
      name: "Jorge Rodriguez",
      role: "Personal Trainer",
      img: "/img/coach/coachJorgeSF.png",
      imgHover: "/img/coach/coachJorgeSF.png",
    },
    description: {
      tittle: "Jorge Rodriguez",
      subTittle: "Personal Trainer · 2 años de experiencia",
      description:
        "Más que entrenarte, Jorge busca acompañarte en el camino hacia una vida más saludable y activa. Su empatía, liderazgo y cercanía le permiten entender que cada persona tiene un ritmo, unas capacidades y unos desafíos diferentes.",
      description2:
        "Su acompañamiento parte de conocer tus objetivos y condición física para crear un entrenamiento adaptado a ti, cuidando cada movimiento, corrigiendo tu técnica y haciendo seguimiento de tus avances.",
      description3:
        "“Tu proceso es único. Mi compromiso es acompañarte en cada paso.”",
      img: "/img/coach/coachDescriptionJorge.jpg",
      video: "/img/coach/coach2.mp4",
    },
    gallery: [
      {
        img: "/img/coach/coaches1.webp",
        alt: "Jorge Rodriguez",
      },
      {
        img: "/img/coach/coaches2.webp",
        alt: "Jorge Rodriguez",
      },
      {
        img: "/img/coach/coaches3.webp",
        alt: "Jorge Rodriguez",
      },
      {
        img: "/img/coach/coaches4.webp",
        alt: "Jorge Rodriguez",
      },
    ],
  },
  {
    header: {
      name: "Jeferson Danilo",
      role: "Entrenador Personalizado",
      img: "/img/coach/coachJeferSF.png",
      imgHover: "/img/coach/coachJeferSF.png",
    },
    description: {
      tittle: "Jeferson Danilo",
      subTittle: "Entrenador Personalizado · 3 años de experiencia",
      description:
        "Más que entrenarte, Jeferson busca acompañarte en el camino hacia una vida más saludable y activa. Su empatía, liderazgo y cercanía le permiten entender que cada persona tiene un ritmo, unas capacidades y unos desafíos diferentes.",
      description2:
        "Su acompañamiento parte de conocer tus objetivos y condición física para crear un entrenamiento adaptado a ti, cuidando cada movimiento, corrigiendo tu técnica y haciendo seguimiento de tus avances.",
      description3:
        "“Tu proceso es único. Mi compromiso es acompañarte en cada paso.”",
      img: "/img/coach/coachDescriptionJefer.jpg",
      video: "/img/coach/coach3.mp4",
    },
    gallery: [
      {
        img: "/img/coach/coaches1.webp",
        alt: "Jeferson Danilo",
      },
      {
        img: "/img/coach/coaches2.webp",
        alt: "Jeferson Danilo",
      },
      {
        img: "/img/coach/coaches3.webp",
        alt: "Jeferson Danilo",
      },
      {
        img: "/img/coach/coaches4.webp",
        alt: "Jeferson Danilo",
      },
    ],
  },
  {
    header: {
      name: "Jairo Rodriguez",
      role: "Instructor de Clases Grupales",
      img: "/img/coach/coachJairoSF.webp",
      imgHover: "/img/coach/coachJairoSF.webp",
    },
    description: {
      tittle: "Jairo Rodriguez",
      subTittle: "Instructor de Clases Grupales · 4 años de experiencia",
      description:
        "Con energía, alegría y mucho ritmo, transforma cada clase en un momento para disfrutar, moverse y compartir. Su cercanía con los alumnos crea un ambiente donde todos pueden sentirse cómodos, sin importar su nivel o experiencia.",
      description2:
        "Sus clases combinan música, movimiento y diversión para ayudarte a mantenerte activo mientras enjoys del entrenamiento en compañía.",
      description3:
        "“Aquí vienes a moverte, disfrutar y contagiarte de nuestra energía.”",
      img: "/img/coach/coachDescriptionJairo.webp",
      video: undefined,
    },
    gallery: [
      {
        img: "/img/coach/coaches1.webp",
        alt: "Jairo Rodriguez",
      },
      {
        img: "/img/coach/coaches2.webp",
        alt: "Jairo Rodriguez",
      },
      {
        img: "/img/coach/coaches3.webp",
        alt: "Jairo Rodriguez",
      },
      {
        img: "/img/coach/coaches4.webp",
        alt: "Jairo Rodriguez",
      },
    ],
  },
  {
    header: {
      name: "Ewduar Lopez",
      role: "Profesor de Baile",
      img: "/img/coach/coachAndresSF.png",
      imgHover: "/img/coach/coachAndresSF.png",
    },
    description: {
      tittle: "Ewduar Lopez",
      subTittle: "Profesor de Baile · 5 años de experiencia",
      description:
        "Con energía, alegría y mucho ritmo, transforma cada clase en un momento para disfrutar, moverse y compartir. Su cercanía con los alumnos crea un ambiente donde todos pueden sentirse cómodos, sin importar su nivel o experiencia.",
      description2:
        "Sus clases combinan música, movimiento y diversión para ayudarte a mantenerte activo mientras disfrutas del entrenamiento en compañía.",
      description3:
        "“Aquí vienes a moverte, disfrutar y contagiarte de nuestra energía.”",
      img: "/img/coach/coachDescriptionAndres.webp",
      video: undefined
    },
    gallery: [
      {
        img: "/img/coach/coaches1.webp",
        alt: "Ewduar Lopez",
      },
      {
        img: "/img/coach/coaches2.webp",
        alt: "Ewduar Lopez",
      },
      {
        img: "/img/coach/coaches3.webp",
        alt: "Ewduar Lopez",
      },
      {
        img: "/img/coach/coaches4.webp",
        alt: "Ewduar Lopez",
      },
    ],
  },
];

export const HOME_COACHES: CoachPreview[] = [
  {
    img: "/img/coach/coachJorge.webp",
    name: "Jorge Perez",
    experiencia: "2 años",
  },
  {
    img: "/img/coach/coachAndres.webp",
    name: "Andres Cardona",
    experiencia: "5 años",
  },
  {
    img: "/img/coach/coachJefer.webp",
    name: "Jeferson Jimenez",
    experiencia: "3 años",
  },
  {
    img: "/img/coach/coachJairo.webp",
    name: "Indio Fit",
    experiencia: "4 años",
  },
  {
    img: "/img/coach/coach3.webp",
    name: "Ewduar Rondon",
    experiencia: "2 años",
  },
];

export const COACH_BENEFITS: string[] = [
  "Seguimiento constante.",
  "Corrección de técnica y postura.",
  "Rutinas adaptadas a tus objetivos.",
  "Motivación y apoyo durante todo el proceso.",
  "Atención cercana y personalizada.",
];
