export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  // {
  //   year: "2024",
  //   conference: "NeurIPS",
  //   title: "Scalable Causal Discovery in High-Dimensional Time Series",
  //   authors: "Jane Smith, Sarah Johnson, Yue Zhang",
  //   paperUrl: "https://arxiv.org/abs/2409.15476",
  //   codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
  //   //bibtex: "https://arxiv.org/abs/2409.15476.bib",
  //   tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   award: "🏆 Best Paper Award",
  //   // if you have an image in public/images, you can use it like this:
  //   // imageUrl: "/images/publication-image.jpg"
  // },
  {
    year: "2023 (Under review)",
    conference: "Nature Human Behaviour",
    title: "Playing repeated games with large language models",
    authors: "Elif Akata, Lion Schulz, Julian Coda-Forno, Seong Joon Oh, Matthias Bethge, Eric Schulz",
    paperUrl: "https://arxiv.org/abs/2305.16867",
    codeUrl: "https://github.com/eliaka/repeatedgames",
    imageUrl: "/repeatedgames_mini.png"
  },
  {
    year: "2025",
    conference: "Nature Machine Intelligence",
    title: "Visual cognition in multimodal large language models",
    authors: "Luca M. Schulze Buschoff*, Elif Akata*, Matthias Bethge, Eric Schulz",
    paperUrl: "https://www.nature.com/articles/s42256-024-00963-y",
    codeUrl: "https://github.com/lsbuschoff/multimodal",
    imageUrl: "/visualcognition_mini.png"
  },
  {
    year: "2024",
    conference: "arXiv",
    title: "Centaur: a foundation model of human cognition",
    authors: "Marcel Binz, Elif Akata, Matthias Bethge, Franziska Brändle, Fred Callaway, Julian Coda-Forno, Peter Dayan, Can Demircan, Maria K. Eckstein, Noémi Éltető et al.",
    paperUrl: "https://arxiv.org/abs/2410.20268",
    codeUrl: "https://github.com/marcelbinz/Llama-3.1-Centaur-70B/tree/main",
    imageUrl: "/centaur_mini.png"
  },
];
