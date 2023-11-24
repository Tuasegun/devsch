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
  understandWeb?: string[];
  interfaceIntro?: string[];
  semantics?: string[];
  introtojavascript?: string[];
  tooling?: string[];
  framework?: string[];
  apiIntro?: string[];
  outlineReview?: string[];
  webdevIntro?: string[];
  jsIntro?: string[]
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
  outlineReview:[
    "Understanding the web",
    "Introduction to web development.",
    "Aspects of web development."
  ],
  webdevIntro: [
    "Introduction to HTML (hyper-text markup language) elements and attributes.",
     "Introduction to CSS (cascading style sheets) properties and property values.",
    "Box Modelling in CSS",
    "Hands on practical on media query and responsive designs.",
    "CSS positioning, Flex properties , and Display properties.",
    "CSS grid , Transition and Animation properties.",
    "Introduction to TailwindCSS and practical on web responsive outlines using tailwindcss."
  ],
  jsIntro: [
    "Javascript syntax, scopes, variables & values.",
    "Introduction to value types.",
    "Arrays and Objects; Array Methods and Object Methods.",
    "DOM operations; DOM events and event-listeners.",
    "Asynchronous operations in javascript.",
    "Introduction to NPM (Node Package Manager).",
    "Web Fetch API (Application programming interface).",
    "Introduction to git and repositories."
  ],
  framework:[
    "Introduction to react.js",
    "Components and component types.",
    "Props and hooks in react (usestate, useEffect, usequery, useMemo, useContext). etc",
    "React routing",
    "Form and form validations.",
    "Rendering data in react.",
    "Conditional statements using ternary operators.",
    "Asynchronous operations in react.",
    "Further practical projects on react.",
    "Project deployment (netlify / vercel )."
]
};

// understandWeb: [
//   " How The Web Work",
//   " Understanding the front-end vs back-end",
// ],
// interfaceIntro: [
//   "Introduction to HTML basics ",
//   "Introduction to CSS basics",
//   "Responsive Design and Media Queries ",
//   " Forms and Validations",
//   "Conventions and Best Practices ",
//   "Making Layouts:",
//   "Box Model",
//   "Positioning",
//   "Flex Box",
//   "CSS Grid",
// ],
// semantics: [
//   " The need for accessibility in our modern world.",
//   "Tools to test accessibility.",
//   "Correctly labelling elements ( forms, images, etc)",
//   "Why you should build  for  multiple browsers.",
//   "Handling browser errors in CSS.",
//   "Media queries.",
// ],

// introtojavascript: [
//   " JS: Syntax, variables.",
//   "JS: Loops, array, function.",
//   "JS: DOM.",
//   "JS:NPM.",
// ],
// tooling: [
//   " Git & Github.",
//   "Netlify & Heroku.",
//   "Gulp.",
//   "SASS & postCSS",
//   "Webpack.",
// ],
// framework: [
//   "React: Components.",
//   "React: Props & hooks.",
//   "  React: Routing.",
//   "   React: Forms.",
// ],
// apiIntro: [
//   "What are APIs and PostMan/Insomia?",
//   " How to consume public APIs.",
//   "How to consume private APIs.",
// ],