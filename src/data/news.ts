export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "January 2025",
    title: "",
    description: "Our paper was on the cover of Nature Machine Intelligence.",
    link: "https://www.nature.com/natmachintell/volumes/7/issues/1",
  },
  {
    date: "January 2025",
    title: "",
    description: "Our paper on Visual Cognition in Multimodal Large Language Models was published on Nature Machine Intelligence.",
    link: "https://www.nature.com/articles/s42256-024-00963-y",
  },
  {
    date: "August 2024",
    title: "Summer School",
    description: "I attended the MIT Brains, Minds & Machines Summer School in Woods Hole, MA.",
    link: "https://cbmm.mit.edu/summer-school",
  },
  {
    date: "June 2024",
    title: "Workshop",
    description: "I gave a talk at the Generative AI in Social Science Research Workshop in London School of Economics.",
    link: "https://blogs.lse.ac.uk/impactofsocialsciences/2024/09/20/how-is-generative-ai-changing-social-science/#:~:text=The%20Generative%20AI%20in%20Social,LSE's%20Research%20Impact%20Support%20Fund.",
  },
  {
    date: "June 2024",
    title: "Invited Talk",
    description: "I gave an invited talk at the Experimental Psychology Department 2024 in University College London.",
    link: "https://blogs.lse.ac.uk/impactofsocialsciences/2024/09/20/how-is-generative-ai-changing-social-science/#:~:text=The%20Generative%20AI%20in%20Social,LSE's%20Research%20Impact%20Support%20Fund.",
  },
  {
    date: "July 2023",
    title: "Summer School",
    description: "I attended the International Computer Vision Summer School in Sicily.",
    link: "https://iplab.dmi.unict.it/icvss2023/Home",
  },
];
