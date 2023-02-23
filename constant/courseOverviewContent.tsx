export interface CourseOverviewInterface {
  price: string;
  courseDuration: string;
  admission: string;
  installment: string;
  weekly: string;
  hourly: string;
  internship: string;
  internshipDuration: string;
  understandWeb: string[];
  interfaceIntro: string[];
  understandWeb2: string[];
  interfaceDevelopment: string[];
  semantics: string[];
  semantics2: string[];
  introtojavascript: string[];
  tooling: string[];
  framework: string[];
  apiIntro: string[];
}

export const CourseOverviewContents: CourseOverviewInterface = {
  price: "NGN 70,000",
  courseDuration: "12 weeks",
  admission: "70% on Admission",
  installment: "30% after 1 month",
  weekly: "2 times a week",
  hourly: "2 Hours per session",
  internship: "Guaranteed Internship",
  internshipDuration: "6 Weeks",
  understandWeb: [
    " How The Web Work",
    " Understanding the front-end vs back-end",
  ],
  interfaceIntro: [
    " Introduction To HTML ",
    "Introduction To CSS 3 Responsive web design.",
    "Responsive Web Design Basics.",
    "Basics of CSS Grid",
    "Introduction To HTML",
    "Introduction To CSS 3. ",
    "Responsive Web Design Basics",
    "Basics of CSS Grid",
    "Introduction To HTML ",
    "Introduction To CSS 3.",
    "Basics of CSS Grid",
  ],
  understandWeb2: [
    " How The Web Work",
    " Understanding the front-end vs back-end",
  ],
  interfaceDevelopment: [
    "Introduction To HTML .",
    "Introduction To CSS 3. Responsive Web Design. Basics of CSS Grid.",
    "Responsive web design basics.",
  ],
  semantics: [
    " Why you should build  for  multiple browsers.",
    "Handling browser errors in CSS.",
    "Media queries.",
  ],
  semantics2: [
    "  The need for accessibility in our modern world.",
    "Tools to test accessibility.",
    "Correctly labelling elements ( forms, images, etc)",
  ],
  introtojavascript: [
    " JS: Syntax, variables.",
    "JS: Loops, array, function.",
    "JS: DOM.",
    "JS:NPM.",
  ],
  tooling: [
    " Git & Github.",
    "Netlify & Heroku.",
    "Gulp.",
    "SASS & postCSS",
    "Webpack.",
  ],
  framework: [
    "React: Components.",
    "React: Props & hooks.",
    "  React: Routing.",
    "   React: Forms.",
  ],
  apiIntro: [
    "What are APIs and PostMan/Insomia?",
    " How to consume public APIs.",
    "How to consume private APIs.",
  ],
};
