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
    date: "Oct 2021–Sep 2022",
    title: "Research Assistant",
    company: "Tübingen AI Center",
    description:
      "Computational Neuroscience and ML lab",
    advisor: "Matthias Bethge",
    // companyUrl: "https://deepmind.com",
  },
  {
    date: "Sep 2020–Nov 2020",
    title: "Research Assistant",
    company: "Max Planck Institute for Intelligent Systems",
    description:
      "Haptic Intelligence department",
    advisor: "Katherine Kuchenbecker",
    // companyUrl: "https://google.com",
  },
  {
    date: "May 2017 – Apr 2019",
    title: "Student Research Assistant",
    company: "Max Planck Institute for Software Systems",
    description:
      "Programming Analysis and Verification group",
    advisor: "Eva Darulova",
    // companyUrl: "https://google.com",
  },
];
