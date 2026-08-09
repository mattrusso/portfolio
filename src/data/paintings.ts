import painting001 from "../assets/paintings/image-001.jpeg";
import painting001Thumb from "../assets/paintings/image-001.webp";
import painting002 from "../assets/paintings/image-002.jpeg";
import painting002Thumb from "../assets/paintings/image-002.webp";
import painting003 from "../assets/paintings/image-003.jpeg";
import painting003Thumb from "../assets/paintings/image-003.webp";
import painting004 from "../assets/paintings/image-004.jpeg";
import painting004Thumb from "../assets/paintings/image-004.webp";
import painting005 from "../assets/paintings/image-005.jpeg";
import painting005Thumb from "../assets/paintings/image-005.webp";
import painting006 from "../assets/paintings/image-006.jpeg";
import painting006Thumb from "../assets/paintings/image-006.webp";
import painting007 from "../assets/paintings/image-007.jpeg";
import painting007Thumb from "../assets/paintings/image-007.webp";
import painting008 from "../assets/paintings/image-008.jpeg";
import painting008Thumb from "../assets/paintings/image-008.webp";
import painting009 from "../assets/paintings/image-009.jpeg";
import painting009Thumb from "../assets/paintings/image-009.webp";
import painting010 from "../assets/paintings/image-010.jpeg";
import painting010Thumb from "../assets/paintings/image-010.webp";
import painting011 from "../assets/paintings/image-011.jpeg";
import painting011Thumb from "../assets/paintings/image-011.webp";
import painting012 from "../assets/paintings/image-012.jpeg";
import painting012Thumb from "../assets/paintings/image-012.webp";
import painting013 from "../assets/paintings/image-013.jpeg";
import painting013Thumb from "../assets/paintings/image-013.webp";
import painting014 from "../assets/paintings/image-014.jpeg";
import painting014Thumb from "../assets/paintings/image-014.webp";
import painting015 from "../assets/paintings/image-015.jpeg";
import painting015Thumb from "../assets/paintings/image-015.webp";
import painting016 from "../assets/paintings/image-016.jpeg";
import painting016Thumb from "../assets/paintings/image-016.webp";
import painting017 from "../assets/paintings/image-017.jpeg";
import painting017Thumb from "../assets/paintings/image-017.webp";
import painting018 from "../assets/paintings/image-018.jpeg";
import painting018Thumb from "../assets/paintings/image-018.webp";
import painting019 from "../assets/paintings/image-019.jpeg";
import painting019Thumb from "../assets/paintings/image-019.webp";

export type Painting = {
  id: string;
  title: string;
  material: string;
  year: number;
  dimensions: {
    height: number;
    width: number;
    unit: "cm" | "in";
  };
  asset: {
    thumbnail: string;
    image: string;
    alt: string;
  };
};

export const paintings: Painting[] = [
  {
    id: "001",
    title: "Untitled",
    material: "Oil on linen",
    year: 2025,
    dimensions: {
      height: 60,
      width: 80,
      unit: "cm",
    },
    asset: {
      thumbnail: painting001Thumb,
      image: painting001,
      alt: "Painting of a man reclining with a crow",
    },
  },
  {
    id: "002",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2024,
    dimensions: {
      height: 36,
      width: 24,
      unit: "in",
    },
    asset: {
      thumbnail: painting002Thumb,
      image: painting002,
      alt: "Painting of a man and a fruit",
    },
  },
  {
    id: "003",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2024,
    dimensions: {
      height: 48,
      width: 36,
      unit: "in",
    },
    asset: {
      thumbnail: painting003Thumb,
      image: painting003,
      alt: "Painting of two men and a vista",
    },
  },
  {
    id: "004",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2026,
    dimensions: {
      height: 60,
      width: 50,
      unit: "cm",
    },
    asset: {
      thumbnail: painting004Thumb,
      image: painting004,
      alt: "Painting of a man at a table with flowers and a candle behind him",
    },
  },
  {
    id: "005",
    title: "Untitled",
    material: "Oil on linen",
    year: 2026,
    dimensions: {
      height: 80,
      width: 60,
      unit: "cm",
    },
    asset: {
      thumbnail: painting005Thumb,
      image: painting005,
      alt: "Painting of a man in front of a landscape",
    },
  },
  {
    id: "006",
    title: "Untitled",
    material: "Oil on linen",
    year: 2025,
    dimensions: {
      height: 60,
      width: 80,
      unit: "cm",
    },
    asset: {
      thumbnail: painting006Thumb,
      image: painting006,
      alt: "Painting of a man looking over his shoulder with water, a boat, and trees behind him",
    },
  },
  {
    id: "007",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2026,
    dimensions: {
      height: 60,
      width: 80,
      unit: "cm",
    },
    asset: {
      thumbnail: painting007Thumb,
      image: painting007,
      alt: "Painting of a man sitting at a table in front of plants and the night sky",
    },
  },
  {
    id: "008",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2024,
    dimensions: {
      height: 40,
      width: 30,
      unit: "in",
    },
    asset: {
      thumbnail: painting008Thumb,
      image: painting008,
      alt: "Painting of a man looking back over his shoulder in front of a landscape with a lake",
    },
  },
  {
    id: "009",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2024,
    dimensions: {
      height: 24,
      width: 18,
      unit: "in",
    },
    asset: {
      thumbnail: painting009Thumb,
      image: painting009,
      alt: "Painting of a man looking back over his shoulder in front of a field and some flowers",
    },
  },
  {
    id: "010",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2025,
    dimensions: {
      height: 12,
      width: 9,
      unit: "in",
    },
    asset: {
      thumbnail: painting010Thumb,
      image: painting010,
      alt: "Painting of a man",
    },
  },
  {
    id: "011",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2023,
    dimensions: {
      height: 18,
      width: 14,
      unit: "in",
    },
    asset: {
      thumbnail: painting011Thumb,
      image: painting011,
      alt: "Painting of a man and flowers, in front of a vase with a lemon",
    },
  },
  {
    id: "012",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2023,
    dimensions: {
      height: 18,
      width: 14,
      unit: "in",
    },
    asset: {
      thumbnail: painting012Thumb,
      image: painting012,
      alt: "Painting of a man",
    },
  },
  {
    id: "013",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2025,
    dimensions: {
      height: 30,
      width: 24,
      unit: "cm",
    },
    asset: {
      thumbnail: painting013Thumb,
      image: painting013,
      alt: "Painting of a man",
    },
  },
  {
    id: "014",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2023,
    dimensions: {
      height: 24,
      width: 18,
      unit: "in",
    },
    asset: {
      thumbnail: painting014Thumb,
      image: painting014,
      alt: "Painting of a man in a hat",
    },
  },
  {
    id: "015",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2023,
    dimensions: {
      height: 20,
      width: 16,
      unit: "in",
    },
    asset: {
      thumbnail: painting015Thumb,
      image: painting015,
      alt: "Painting of a man holding his hand against his cheek",
    },
  },
  {
    id: "016",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2024,
    dimensions: {
      height: 24,
      width: 18,
      unit: "in",
    },
    asset: {
      thumbnail: painting016Thumb,
      image: painting016,
      alt: "Painting of a man holding his hand against his head",
    },
  },
  {
    id: "017",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2024,
    dimensions: {
      height: 24,
      width: 18,
      unit: "in",
    },
    asset: {
      thumbnail: painting017Thumb,
      image: painting017,
      alt: "Painting of a man looking over his shoulder",
    },
  },
  {
    id: "018",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2024,
    dimensions: {
      height: 12,
      width: 9,
      unit: "in",
    },
    asset: {
      thumbnail: painting018Thumb,
      image: painting018,
      alt: "Painting of a man in a hat surrounded by flowers",
    },
  },
  {
    id: "019",
    title: "Untitled",
    material: "Oil on canvas",
    year: 2024,
    dimensions: {
      height: 24,
      width: 18,
      unit: "in",
    },
    asset: {
      thumbnail: painting019Thumb,
      image: painting019,
      alt: "Painting of a man prone, looking up, with mountains in the background",
    },
  },
];
