import ModeToggle from "./mode-toggle";
import NavItem from "./NavItem/nav-item";

const Navigation = ({
  isProjectInView,
  isAboutInView,
  isExperienceInView,
}: {
  isProjectInView: boolean;
  isAboutInView: boolean;
  isExperienceInView: boolean;
}) => {
  return (
    <div className="flex flex-col gap-4 col-span-1 items-center text-center lg:items-start lg:text-left lg:sticky lg:top-0 lg:max-h-screen pt-12 lg:pt-24">
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
        <NavItem title="About" href="about" isActive={isAboutInView} />
        <NavItem
          title="Experience"
          href="experience"
          isActive={isExperienceInView}
        />
        <NavItem title="Projects" href="projects" isActive={isProjectInView} />
      </ul>
    </div>
  );
};

export default Navigation;
