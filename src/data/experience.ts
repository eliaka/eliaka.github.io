export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "July 2026—Present",
    title: "Research Scientist Intern",
    company: "Meta FAIR",
    description:
      "Multi-Agent Multimodal Foundations",
    companyUrl: "https://ai.meta.com/",
  },
  {
    date: "Jan 2026—June 2026",
    title: "Visiting Researcher",
    company: "University of Oxford",
    description:
      "British Open-Ended Learning & Discovery Lab",
    companyUrl: "https://bold-lab.ai/",
  },
  {
    date: "Oct 2021—Sep 2022",
    title: "Research Assistant",
    company: "Tübingen AI Center",
    description:
      "Computational Neuroscience & ML",
    // advisor: "Matthias Bethge",
    companyUrl: "https://bethgelab.org/",
  },
  {
    date: "Sep 2020—Nov 2020",
    title: "Research Intern",
    company: "Max Planck Institute for Intelligent Systems",
    description:
      "Haptic Intelligence",
    // advisor: "Katherine Kuchenbecker",
    companyUrl: "https://is.mpg.de/hi",
  },
  {
    date: "May 2017—Apr 2019",
    title: "Student Research Assistant",
    company: "Max Planck Institute for Software Systems",
    description:
      "Programming Languages & Verification",
    // advisor: "Eva Darulova",
    companyUrl: "https://www.mpi-sws.org/research-areas/programming-languages-and-verification/",
  },
];
