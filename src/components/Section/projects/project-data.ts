import portfolio from "@/assets/projects-image/portfolio.webp";
import drcloud from "@/assets/projects-image/drcloud.webp";
import vpbanks from "@/assets/projects-image/vpbanks.webp";

const projects = [
  {
    title: "Portfolio v1",
    description:
      "My first portfolio website built with React and Tailwind CSS. It's a simple portfolio website that showcases my projects, skills and a little bit of my drawing skills (which is not much).",
    image: portfolio,
    link: "https://longddh.netlify.app",
    skills: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    title: "Dr.Cloud",
    description:
      "A clinic management website for scheduling appointments and managing patient records. In this project I explore the world of Backend development with DotNet and learn how to build a Restful API.",
    image: drcloud,
    link: "https://drcloud.vn",
    skills: ["React", "React Native", "DotNet", "MySQL", "SCSS"],
  },
  {
    title: "VPBank Securities",
    description:
      "A website for visualizing stock market data and facilitating stock trading. Working on this project marked my first experience in a large team environment, providing valuable insights into team collaboration and cross-functional communication in building complex applications.",
    image: vpbanks,
    link: "https://www.vpbanks.com.vn/",
    skills: ["React", "Redux", "Ant Design", "Web socket"],
  },
];

export default projects;
