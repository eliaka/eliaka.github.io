export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Elif Akata",
  title: "Ph.D. Student",
  institution: "Helmholtz Munich & University of Tübingen",
  // Note that links work in the description
  description:
    "I'm a <a href='https://hcai-munich.com/'>PhD student</a> working at the intersection of cognitive science and machine learning. My research focuses on understanding how LLMs behave as social, collaborative agents and how we can design systems that effectively interact, adapt, and communicate in dynamic environments.",
  email: "elif.akata@helmholtz-munich.de",
  imageUrl:
    "/aboutme-img.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=T__E730AAAAJ&hl=en&oi=ao",
  githubUsername: "eliaka",
  linkedinUsername: "elifakata",
  twitterUsername: "elifakata",
  // blogUrl: "https://",
  cvUrl: "/cv.pdf",
  institutionUrl: "https://www.helmholtz-munich.de/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
