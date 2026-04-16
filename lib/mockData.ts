export type Project = {
  id: string;
  title: string;
  kannadaTitle: string;
  category: string;
  description: string;
  featuredImg: string;
  videoUrl?: string;
  isFeatured: boolean;
  narrative?: string;
  specs?: {
    camera: string;
    lens: string;
    ratio: string;
  };
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "srirangapatna-series",
    title: "The Srirangapatna Series",
    kannadaTitle: "ಶ್ರೀರಂಗಪಟ್ಟಣ ಸರಣಿ",
    category: "Military Heritage",
    description: "A definitive digital deep-dive into the 18th-century island fortress. 15+ episodes documenting the Delhi Gate, Underground Armoury, and Tipu Sultan's Lal Mahal.",
    featuredImg: "https://img.youtube.com/vi/clga7SPzx2Q/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=clga7SPzx2Q",
    isFeatured: true,
    narrative: "Documenting the island fortress of Srirangapatna required a blend of architectural precision and cinematic mood. We focused on the unseen spaces—the dungeons and armories that whisper 18th-century secrets.",
    specs: { camera: "ARRI Alexa Mini LF", lens: "Atlas Orion Anamorphic", ratio: "2.39:1" }
  },
  {
    id: "surapura-dynasty",
    title: "The Surapura Dynasty",
    kannadaTitle: "ಸುರಪುರ ರಾಜವಂಶ",
    category: "Royal History",
    description: "A magnum opus of 46+ episodes tracing the Nayaka Dynasty's resistance against colonial powers, featuring exclusive interviews with Raja Krishnappa Nayaka.",
    featuredImg: "https://img.youtube.com/vi/TvZAU1pEoGU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=TvZAU1pEoGU",
    isFeatured: true,
    narrative: "The Surapura project is a tribute to the resilient Nayaka kings. With 46+ episodes, it stands as one of the most comprehensive digital records of a minor dynasty's major impact on Deccan history.",
    specs: { camera: "Sony Venice 2", lens: "Zeiss Supreme Primes", ratio: "1.85:1" }
  },
  {
    id: "tiger-conservation-bandipur",
    title: "Apex Predators of Bandipur",
    kannadaTitle: "ಬಂಡೀಪುರ ಹುಲಿ ಸಂರಕ್ಷಣೆ",
    category: "Wildlife Advocacy",
    description: "Exclusive field interviews with biologist Dr. Sanjay Gubbi covering tiger conservation and human-animal conflict in the Bandipur and Kabini forests.",
    featuredImg: "https://img.youtube.com/vi/YAIzMGyWB2E/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YAIzMGyWB2E",
    isFeatured: false,
    narrative: "Wildlife advocacy requires patience and a silent presence. Filming the tigers of Bandipur with Dr. Sanjay Gubbi allowed us to document the invisible lines between conservation and conflict.",
    specs: { camera: "RED V-RAPTOR", lens: "Canon CN-E Primes", ratio: "1.78:1" }
  },
  {
    id: "melkote-spiritual",
    title: "Melkote: Spiritual Landscape",
    kannadaTitle: "ಮೇಲುಕೋಟೆ ದರ್ಶನ",
    category: "Cultural Archive",
    description: "A serene cinematic exploration capturing the ancient temples, spiritual traditions, and the daily rituals of the profoundly historic Melkote region.",
    featuredImg: "https://img.youtube.com/vi/WWmaDl_l76Q/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=WWmaDl_l76Q",
    isFeatured: false,
    narrative: "Melkote is a place where time slows down. We captured the morning rituals and the architectural symmetry of the temples to provide a meditative digital experience.",
    specs: { camera: "Sony Alpha 1", lens: "G-Master Primes", ratio: "1.85:1" }
  },
  {
    id: "tulunadu-coastal",
    title: "The Tulunadu Coast",
    kannadaTitle: "ತುಳುನಾಡು ಪರಂಪರೆ",
    category: "Coastal Heritage",
    description: "Documenting the vibrant, esoteric coastal traditions, indigenous art forms, and rich maritime history of the Tulunadu belt.",
    featuredImg: "https://img.youtube.com/vi/UCx2-sIvdlY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=UCx2-sIvdlY",
    isFeatured: false,
    narrative: "The coastal belt of Tulunadu offers a unique visual palette. From Yakshagana to the shores of the Arabian Sea, this series explores the spirit of the shore.",
    specs: { camera: "ARRI Alexa 35", lens: "Cooke S7/i", ratio: "2.39:1" }
  },
  {
    id: "chikkalluru-jatra-2026",
    title: "Chikkalluru Jatra 2026",
    kannadaTitle: "ಚಿಕ್ಕಲ್ಲೂರು ಜಾತ್ರೆ ೨೦೨೬",
    category: "Upcoming Special",
    description: "An upcoming exclusive socio-cultural documentation of the monumental Siddappaji Jatra, capturing millions of devotees in raw 4K.",
    featuredImg: "https://img.youtube.com/vi/clga7SPzx2Q/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=clga7SPzx2Q",
    isFeatured: true,
    narrative: "Preparing for 2026. The Chikkalluru Jatra is one of the largest spiritual gatherings in Karnataka, and we are deploying 4K rigs to capture its raw magnitude.",
    specs: { camera: "DJI Ronin 4D", lens: "DL Mount Primes", ratio: "2.1:1" }
  }
];

export const gearList = [
  { name: "ARRI Alexa Mini LF", category: "Primary A-Cam", usage: "Main cinematic capture unit" },
  { name: "Sony Venice 2", category: "B-Cam", usage: "Low-light & anamorphic scenes" },
  { name: "Atlas Orion Anamorphic", category: "Lenses", usage: "Vintage cinematic flares" },
  { name: "DJI Inspire 3", category: "Aerial", usage: "High-speed sweeping landscapes" }
];
