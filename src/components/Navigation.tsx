import { useState } from "react";
import ModeToggle from "./mode-toggle";
import NavItem from "./NavItem/nav-item";

const navItems = [
  { title: "About", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "contact" },
];

const Navigation = () => {
  return (
    <div className="flex flex-col gap-4 col-span-1 items-center text-center lg:items-start lg:text-left">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
        LongDDH
      </h1>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Frontend Developer
      </h2>
      <p className="text-muted-foreground max-w-xs">
        I build beautiful and simple web applications that deliver great
        experiences.
      </p>
      <ModeToggle />
      <ul className="w-max hidden lg:flex flex-col gap-4">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
