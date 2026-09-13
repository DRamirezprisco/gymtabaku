export interface InstagramPost {
  imageUrl: string;
  postUrl: string;
  alt: string;
}

export interface ComparisonItem {
  id: string;
  title: string;
  beforeImg: string;
  afterImg: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    imageUrl: "/img/about/instagram1.webp",
    postUrl: "https://www.instagram.com/p/DIPkQiAgsX8/?stkn=MWMzZm1temFleW00YQ==",
    alt: "Entrenamiento de gimnasio 1",
  },
  {
    imageUrl: "/img/about/instagram2.webp",
    postUrl: "https://www.instagram.com/p/DNCdJztAMQc/?stkn=MTcwZ28yZWFlZjczYw==",
    alt: "Entrenamiento de gimnasio 2",
  },
  {
    imageUrl: "/img/about/instagram3.webp",
    postUrl: "https://www.instagram.com/reel/DaorENagDCm/?stkn=MTNub2Z3aW9wZnpz",
    alt: "Entrenamiento de gimnasio 3",
  },
  {
    imageUrl: "/img/about/instagram4.webp",
    postUrl: "https://www.instagram.com/p/DTQ5p2LlR2z/?stkn=MW1hMXJoZjNkMHZydQ==",
    alt: "Entrenamiento de gimnasio 4",
  },
  {
    imageUrl: "/img/about/instagram5.webp",
    postUrl: "https://www.instagram.com/reel/DbVvhKRAX4D/?stkn=YW5zY2RxdnI0NDgx",
    alt: "Entrenamiento de gimnasio 5",
  },
  {
    imageUrl: "/img/about/instagram6.webp",
    postUrl: "https://www.instagram.com/p/DWDIH3kjMsz/?stkn=MWJkNm50ajY5Z3F3",
    alt: "Entrenamiento de gimnasio 6",
  },
];

export const DEFAULT_COMPARISONS: ComparisonItem[] = [
  {
    id: "instalacionesPp",
    title: "Zona de máquinas",
    beforeImg:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    afterImg:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  },
  {
    id: "zonaBaile",
    title: "Área de clases grupales",
    beforeImg:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    afterImg:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  },
  {
    id: "instalaciones",
    title: "Instalaciones",
    beforeImg:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    afterImg:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  },
];
