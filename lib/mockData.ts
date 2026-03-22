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
    id: "echoes-of-hampi",
    title: "Echoes of Hampi",
    kannadaTitle: "ಹಂಪಿಯ ಪ್ರತಿಧ್ವನಿ",
    category: "Heritage",
    description: "A visual study of forgotten empires.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1kk86122dq7lK7ac20SIIVbwwl_zhw1HLUbSnK0nzCzvU1hWDlVxprTxuwa2rwdt2P7AFrCwb5aX5Xj93NfpPetkxNvvXvANlHMMlwOmghb4NpzsS7ubDmMyJBelfdNkvEmZBqo4bNXtf863Xn7OtTjb60s0MqHTJQJHjQxT49l2YXapMiUGKa4W74DvEeENxnqPqI32Bju3kqn4wMtEzICxNDwaZ9GuGspd1Q6wTtGMCpWzGKsDhg7O__ai--xshzo51-43uow",
    isFeatured: true,
  },
  {
    id: "silent-peaks",
    title: "Silent Peaks",
    kannadaTitle: "ಮೌನ ಶಿಖರಗಳು",
    category: "Nature",
    description: "A breathtaking cinematic journey through the Western Ghats, capturing the unseen wildlife and mystical fog-covered peaks.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQL_7kKDgF5_YEmII_1XvXM3k-HDVFnqV4U1n2vt3D_glzVSyLlrZHabSxnQR0fztqwxlgWaDy8UAJU8-HmIWGEDoVdZUb2J4t8wNXPBubgvNCnhYHtleiGUYZTBh6HIEPBClOTagKhYfJrD1i-ge03wUCQAb7_eAroc7KSqmacnWPsNcnBjX-l_0QSspz6kCDui3kEFyug-dnDNdNLz7X9gzk9V4yKx7QsxUjBLC1RUkCd2x3xnPHJnN4E7OVoPcSbNdUAgBI4w",
    isFeatured: true,
  },
  {
    id: "silicon-shadows",
    title: "Silicon Shadows",
    kannadaTitle: "ಸಿಲಿಕಾನ್ ನೆರಳುಗಳು",
    category: "Tech",
    description: "Humanity & Code. A deep dive into the technology heart of India.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOkLHgRHeIxue4nQ62tyjZJugEHVqBNt3efwNEfv0QPaxsXmHXOdplXE90yc83om9QVBy530EIraw03WXhEdjjWmGs2s5nx0b1FFY3lSvqZK-uiSd4G7tgENBpzo0clOcq-1X4aQ9WIEaCQQbkP8Xd9tLc4kcykgBKFwvF5TofEo9mxn8xtUYAHErK7r3z2VJzdqv8JkH-7p4MoLKUzpEAQGjUdMP9zazJOGcz-p3S9PbAi0diyMwAWHPb1CikOURyAu_4ZTvAxg",
    isFeatured: false,
  },
  {
    id: "neon-pulse",
    title: "Neon Pulse",
    kannadaTitle: "ನಿಯಾನ್ ನಾಡಿ",
    category: "City Spotlight",
    description: "A rapid-paced, high-energy documentary showcasing the modern pulse of Karnataka's fastest-growing cities.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPizh-qfgKnSM_hZ4rWELRKKxauYg8s9C_UXS39RlTIL9J3gTESgJmAdqY0ytXFTtbyME8LKJGje-dVUl1ww6l9veMUlTw3HfhKfE2qGICV663gGqe2e3sPRGxBqZwJkyXMwB4O5Ou6ygn4INZLwO3y43kUL6SfjmCyox2ZvVA7MZ6Hlu3a5zQ9EMcQyRpWdj_Qla3mTvObg_V0n_kMxqGKN-6NTReiOwZCoX0fHF-XVcBXV8BFB_7OLHqR6MjzTDwrubAxjD_0g",
    isFeatured: false,
  },
  {
    id: "human-condition",
    title: "The Human Condition",
    kannadaTitle: "ಮಾನವ ಸ್ಥಿತಿ",
    category: "Society",
    description: "A cultural exploration of empathy, daily struggles, and human connection.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpCxZ9Yaaw58MDUABMnRJShSKeUywzHR2QamYaR13g9xUsWrUsi0rgcaCbz6mqUpzxK_ULntl30XgqLGubezogCaydZNnKcEHL8ecgnFD2SIguxQ2-Fn8X4cocayFhMjX76dZ55z33hGUqNx78-XLW8Sq7Lw7TLtcb23kp0ZleYrdwI_pcVBPydWuTC3r3Ra27Dvf5Q7B5e5FmvEVvdEQ5LzEJE4CLl_7MH4htWtHViwnrvCeHkQN1u6ucFnzFhn5knikUNTXtvA",
    isFeatured: false,
  },
  {
    id: "path-to-enlightenment",
    title: "Path to Enlightenment",
    kannadaTitle: "ಜ್ಞಾನೋದಯದ ದಾರಿ",
    category: "Yatra",
    description: "A 4000km Pilgrimage Film.",
    featuredImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2LKfMzpvNhy54cRfx9aztJ2TYEJrJAWAdN6Ux7QD6QsWKIqmGT7jkPhBwKpsQJJfZo8N8jQFDdSTLZau86u7wzqWbPdQfAzGS128-4BnlWmVN1PQkz_gJyarj0DqAqAe76nDMRwrhS4i7ibhVrG1Al_KkvhrdZQG8RZ1gvYs_OBaKNm81qmM4wnxfQai2zPlynvI60bGhaGrCfjSIN_7dlUUTmiZtXzDqLLdkDz87SF1wFw6EivUiWqXNJI_Go62-jn32B2B0pQ",
    isFeatured: true,
  }
];

export const gearList = [
  { name: "ARRI Alexa Mini LF", category: "Primary A-Cam", usage: "Main cinematic capture unit" },
  { name: "Sony Venice 2", category: "B-Cam", usage: "Low-light & anamorphic scenes" },
  { name: "Atlas Orion Anamorphic", category: "Lenses", usage: "Vintage cinematic flares" },
  { name: "DJI Inspire 3", category: "Aerial", usage: "High-speed sweeping landscapes" }
];
