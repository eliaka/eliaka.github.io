export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "Oct 2022—Present",
    institution: "Helmholtz Munich & University of Tübingen",
    degree: "PhD in Machine Learning",
    advisor: "Eric Schulz & Matthias Bethge",
  },
  {
    year: "Oct 2019—Feb 2022",
    institution: "University of Tübingen",
    degree: "MSc in Computer Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "Oct 2015—Sep 2019",
    institution: "Saarland University",
    degree: "BSc in Computer Science",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
