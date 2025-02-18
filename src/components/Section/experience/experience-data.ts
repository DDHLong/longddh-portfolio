export interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
  link: string;
}

const experienceData: ExperienceCardProps[] = [
  {
    title: "Software Engineer",
    company: "FPT Software",
    date: "Apr 2024 - Present",
    description:
      "Build, style and ship high-quality websites for a wide range of clients including SK Telecom, LG, ADIB Bank, etc. Provide leadership to some projects and share knowledge between team members. Working in a fast-paced environment with members of different nationalities.",
    skills: ["React", "TypeScript", "Next.js", "CI/CD", "TailwindCSS"],
    link: "https://fptsoftware.com",
  },
  {
    title: "Middle Frontend Developer",
    company: "Euroland IR Company",
    date: "Jan 2023 - Apr 2024",
    description:
      "Maintained and added new feature to a product-ready application. Worked with OpenAI and AI agent to build a chatbot for the website.",
    skills: ["React", "TypeScript", "TailwindCSS", "JavaScript"],
    link: "https://www.euroland.com/",
  },
  {
    title: "Junior Frontend Developer",
    company: "VPBank Securities JSC",
    date: "Jan 2022 - Jan 2023",
    description:
      "Collaborated with business analysts and designers to understand business requirements and translate them into technical solutions. Integrated visualization libraries and optimized website performance.",
    skills: ["React", "Next.js", "Ant Design", "Highcharts", "TradingView"],
    link: "https://vpbanks.com.vn/",
  },
  {
    title: "Full Stack Developer",
    company: "Perfin, JSC",
    date: "Jan 2021 - Jan 2022",
    description:
      "Developed, maintained and delivered solutions for a startup. Learning both frontend (web, mobile) and backend while building a real product.",
    skills: [
      "React",
      "Next.js",
      "TailwindCSS",
      "React Native",
      "DotNet",
      "MySQL",
    ],
    link: "https://perfin.io/",
  },
];

export default experienceData;
