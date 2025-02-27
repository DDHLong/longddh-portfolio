import { Link } from "./Section/about";

const Footer = () => {
  return (
    <footer className="max-w-md mb-12 text-sm text-slate-500 lg:mb-24">
      <p className="text-sm text-muted-foreground">
        Inspired by{" "}
        <Link href="https://brittanychiang.com/">Brittany Chiang</Link>'s
        portfolio website with a touch of my personal style and code of my own.
        Built with React, TypeScript,{" "}
        <Link href="https://tailwindcss.com/">TailwindCSS</Link> and{" "}
        <Link href="https://ui.shadcn.com/">shadcn/ui</Link>.
      </p>
    </footer>
  );
};

export default Footer;
