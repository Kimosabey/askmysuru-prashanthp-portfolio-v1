export type Project = {
  id: string;
  title: string;
  kannadaTitle: string;
  category: string;
  description: string;
  featuredImg: string;
  videoUrl?: string;
  isFeatured: boolean;
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "srirangapatna-series",
    title: "The Srirangapatna Series",
    kannadaTitle: "ಶ್ರೀರಂಗಪಟ್ಟಣ ಸರಣಿ",
    category: "Military Heritage",
    description: "A definitive digital deep-dive into the 18th-century island fortress. 15+ episodes documenting the Delhi Gate, Underground Armoury, and Tipu Sultan's Lal Mahal.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcRkML4Y6jPCVzbN_RnzTurZeHJzamTw7jM303h4Y5onWCnIoQ1GjvD82eCxiseH2bqidX11lXAy4mxbKKkz1E8pCn9yPjQaP4652-69v2TX-34dIXtmIInov_0_S9Uz-LNGQIUvkumtFJlkQFCWGc0Q0yNFG8r3waaIHX424Lm4UFR9-D53uMNL8IhTJsJw8DRjmB9vCDOTGzJJ4k489AHv0qkDvFq4uNIvKNRbrwYjT1VJp27GXMvF12qrLXKfMzq5bfA4KCgQ",
    isFeatured: true,
  },
  {
    id: "surapura-dynasty",
    title: "The Surapura Dynasty",
    kannadaTitle: "ಸುರಪುರ ರಾಜವಂಶ",
    category: "Royal History",
    description: "A magnum opus of 46+ episodes tracing the Nayaka Dynasty's resistance against colonial powers, featuring exclusive interviews with Raja Krishnappa Nayaka.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO549CDqtKk4CLiaW3SSiy4Mk3OAGeElA0xkycALowXOYvWOTvrJa3zOgj_21iVapTEL5Pkk7glBvzFo95wwshBxpXHTO-36N2e1L9K9mphf3p04_Go580uR3b3JMJRfPfWCZmYmwrNNLU79hLfTY0K5sE7jput42tktnVblFjtW8N0J5bj3GQ5qs7Y6-wbI7YaapaxLaErVNNcQAQFpfokJqf1WESBgNubK0Di9eYlvh4NwIEPDoc3xtq0Y65tv-Q2As_8KxWFw",
    isFeatured: true,
  },
  {
    id: "tiger-conservation-bandipur",
    title: "Apex Predators of Bandipur",
    kannadaTitle: "ಬಂಡೀಪುರ ಹುಲಿ ಸಂರಕ್ಷಣೆ",
    category: "Wildlife Advocacy",
    description: "Exclusive field interviews with biologist Dr. Sanjay Gubbi covering tiger conservation and human-animal conflict in the Bandipur and Kabini forests.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGkA2m0WEEwPz5lFb_CjUtyMRq6VibvDGMh1720B-xhMAuOyOUff02KXi82qx_PbXiJAjs9qKTGCjUZwAHtmT4-SN2uQ84PXoJtCHrK0n80zK6zYM0ibsXUqi7DSMjA2DwNrPUf6fQ_2SY2RAkBOEpv5-sfn8ZYD_k0flaBbHo7YRVGao5OKisgazus2-tVitvz6ageCCCZ-OGq4-BjKSgkIcovZ0rYdZLb8OXyoBzjJchAuN8BM1BzLmbw3RoxUYbCip8sYLGBA",
    isFeatured: false,
  },
  {
    id: "melkote-spiritual",
    title: "Melkote: Spiritual Landscape",
    kannadaTitle: "ಮೇಲುಕೋಟೆ ದರ್ಶನ",
    category: "Cultural Archive",
    description: "A serene cinematic exploration capturing the ancient temples, spiritual traditions, and the daily rituals of the profoundly historic Melkote region.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1kk86122dq7lK7ac20SIIVbwwl_zhw1HLUbSnK0nzCzvU1hWDlVxprTxuwa2rwdt2P7AFrCwb5aX5Xj93NfpPetkxNvvXvANlHMMlwOmghb4NpzsS7ubDmMyJBelfdNkvEmZBqo4bNXtf863Xn7OtTjb60s0MqHTJQJHjQxT49l2YXapMiUGKa4W74DvEeENxnqPqI32Bju3kqn4wMtEzICxNDwaZ9GuGspd1Q6wTtGMCpWzGKsDhg7O__ai--xshzo51-43uow",
    isFeatured: false,
  },
  {
    id: "tulunadu-coastal",
    title: "The Tulunadu Coast",
    kannadaTitle: "ತುಳುನಾಡು ಪರಂಪರೆ",
    category: "Coastal Heritage",
    description: "Documenting the vibrant, esoteric coastal traditions, indigenous art forms, and rich maritime history of the Tulunadu belt.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpCxZ9Yaaw58MDUABMnRJShSKeUywzHR2QamYaR13g9xUsWrUsi0rgcaCbz6mqUpzxK_ULntl30XgqLGubezogCaydZNnKcEHL8ecgnFD2SIguxQ2-Fn8X4cocayFhMjX76dZ55z33hGUqNx78-XLW8Sq7Lw7TLtcb23kp0ZleYrdwI_pcVBPydWuTC3r3Ra27Dvf5Q7B5e5FmvEVvdEQ5LzEJE4CLl_7MH4htWtHViwnrvCeHkQN1u6ucFnzFhn5knikUNTXtvA",
    isFeatured: false,
  },
  {
    id: "chikkalluru-jatra-2026",
    title: "Chikkalluru Jatra 2026",
    kannadaTitle: "ಚಿಕ್ಕಲ್ಲೂರು ಜಾತ್ರೆ ೨೦೨೬",
    category: "Upcoming Special",
    description: "An upcoming exclusive socio-cultural documentation of the monumental Siddappaji Jatra, capturing millions of devotees in raw 4K.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPizh-qfgKnSM_hZ4rWELRKKxauYg8s9C_UXS39RlTIL9J3gTESgJmAdqY0ytXFTtbyME8LKJGje-dVUl1ww6l9veMUlTw3HfhKfE2qGICV663gGqe2e3sPRGxBqZwJkyXMwB4O5Ou6ygn4INZLwO3y43kUL6SfjmCyox2ZvVA7MZ6Hlu3a5zQ9EMcQyRpWdj_Qla3mTvObg_V0n_kMxqGKN-6NTReiOwZCoX0fHF-XVcBXV8BFB_7OLHqR6MjzTDwrubAxjD_0g",
    isFeatured: true,
  }
];


export const gearList = [
  { name: "ARRI Alexa Mini LF", category: "Primary A-Cam", usage: "Main cinematic capture unit" },
  { name: "Sony Venice 2", category: "B-Cam", usage: "Low-light & anamorphic scenes" },
  { name: "Atlas Orion Anamorphic", category: "Lenses", usage: "Vintage cinematic flares" },
  { name: "DJI Inspire 3", category: "Aerial", usage: "High-speed sweeping landscapes" }
];
