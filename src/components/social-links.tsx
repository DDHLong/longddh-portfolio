import { Github, Linkedin, SquareUserRound } from "lucide-react";

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/DDHLong",
    icon: Github,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/longddh",
    icon: Linkedin,
  },
  {
    name: "Personal Blog",
    href: "https://lucipherblog.netlify.app/",
    icon: SquareUserRound,
  },
];

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      {socialLinks.map((link) => (
        <a key={link.name} href={link.href} target="_blank">
          <link.icon className="w-6 h-6 text-muted-foreground hover:text-primary" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
