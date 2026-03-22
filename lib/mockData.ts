export type Project = {
  id: string;
  title: string;
  kannadaTitle: string;
  category: "Heritage" | "Nature" | "Yatra" | "City Spotlight" | "Society";
  description: string;
  featuredImg: string;
  videoUrl?: string;
  isFeatured: boolean;
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "shadows-of-the-ghats",
    title: "Shadows of the Ghats",
    kannadaTitle: "ಘಟ್ಟಗಳ ನೆರಳು",
    category: "Nature",
    description: "A breathtaking cinematic journey through the Western Ghats, capturing the unseen wildlife and mystical fog-covered peaks.",
    featuredImg: "https://images.unsplash.com/photo-1518182170546-076616fdcbca?auto=format&fit=crop&q=80",
    isFeatured: true,
  },
  {
    id: "echoes-of-mysuru",
    title: "Echoes of Mysuru",
    kannadaTitle: "ಮೈಸೂರಿನ ಪ್ರತಿಧ್ವನಿ",
    category: "Heritage",
    description: "Exploring the hidden corridors of Amba Vilas Palace and the untold stories of the Wadiyar dynasty.",
    featuredImg: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80",
    isFeatured: true,
  },
  {
    id: "urban-rhythms",
    title: "Urban Rhythms",
    kannadaTitle: "ನಗರದ ಲಯ",
    category: "City Spotlight",
    description: "A rapid-paced, high-energy documentary showcasing the modern pulse of Karnataka's fastest-growing cities.",
    featuredImg: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80",
    isFeatured: false,
  },
  {
    id: "sacred-yatra",
    title: "The Sacred Yatra",
    kannadaTitle: "ಪವಿತ್ರ ಯಾತ್ರೆ",
    category: "Yatra",
    description: "Trailing the ancient pilgrimage routes of South India through immersive storytelling and aerial cinematography.",
    featuredImg: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80",
    isFeatured: false,
  }
];
