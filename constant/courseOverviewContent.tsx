export interface CourseOverviewInterface {
  price: string;
  discountPrice: string;
  courseDuration: string;
  admission: string;
  installment: string;
  weekly: string;
  hourly: string;
  internship: string;
  internshipDuration: string;
  understandWeb: string[];
  interfaceIntro: string[];
  semantics: string[];
  introtojavascript: string[];
  tooling: string[];
  framework: string[];
  apiIntro: string[];
}

export const CourseOverviewContents: CourseOverviewInterface = {
  price: "₦200,000",
  discountPrice: "₦120,000",
  courseDuration: "4 Months",
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
    "Introduction to HTML basics ",
    "Introduction to CSS basics",
    "Responsive Design and Media Queries ",
    " Forms and Validations",
    "Conventions and Best Practices ",
    "Making Layouts:",
    "Box Model",
    "Positioning",
    "Flex Box",
    "CSS Grid",
  ],
  semantics: [
    " The need for accessibility in our modern world.",
    "Tools to test accessibility.",
    "Correctly labelling elements ( forms, images, etc)",
    "Why you should build  for  multiple browsers.",
    "Handling browser errors in CSS.",
    "Media queries.",
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
