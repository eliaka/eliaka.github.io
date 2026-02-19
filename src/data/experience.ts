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
    date: "Jan 2026—Present",
    title: "Visiting Researcher",
    company: "University of Oxford",
    description:
      "Foerster Lab for AI Research (FLAIR)",
    companyUrl: "https://foersterlab.com/",
  },
  {
    date: "Oct 2021—Sep 2022",
    title: "Research Assistant",
    company: "Tübingen AI Center",
    description:
      "Computational Neuroscience and ML Lab",
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
      "Programming Languages and Verification",
    // advisor: "Eva Darulova",
    companyUrl: "https://www.mpi-sws.org/research-areas/programming-languages-and-verification/",
  },
];
