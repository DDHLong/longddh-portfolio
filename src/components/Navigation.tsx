import ModeToggle from "./mode-toggle";

const Navigation = () => {
  return (
    <div className="flex flex-col gap-4 col-span-1 items-center text-center lg:items-start lg:text-left">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
        LongDDH
      </h1>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Frontend Developer
      </h2>
      <p className="text-muted-foreground">
        I build beautiful, simple, and user-friendly web applications that
        deliver great experiences.
      </p>
      <ModeToggle />
    </div>
  );
};

export default Navigation;
