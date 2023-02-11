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
    "Introduction To CSS 3.",
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
    ]
};
