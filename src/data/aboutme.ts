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
    `<p>I’m a final year PhD student in the Computer Science Department at the University of Tübingen (where I am also an <a href='https://imprs.is.mpg.de/'>IMPRS-IS</a> scholar) and the <a href='https://hcai-munich.com/'>Helmholtz Institute for Human-Centered AI</a>. I am fortunate to be advised by <a href='https://hcai-munich.com/eric.html/'>Eric Schulz</a> and <a href='https://bethgelab.org/'>Matthias Bethge</a>.</p>\n 
    <p>My research lies in the intersection of cognitive science and machine learning. In particular, I’m interested in understanding how LLMs behave as social, collaborative agents and how we can design systems that effectively interact, adapt, and communicate in dynamic environments.</p>\n
    <p>Prior to my PhD, I graduated from the University of Tübingen and Saarland University in Germany, with a MSc and BSc in Computer Science.</p>\n
    <p>In my free time, I like drawing (recently got into designing logos and journal covers), playing tennis, and watching The Traitors (my favourite one is the UK version).</p>\n`,
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
