const About = () => {
  return (
    <div>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:hidden block mb-4">
        About
      </h2>
      <div className="text-lg text-muted-foreground">
        <p className="mb-4">
          I'm a software engineer with a passion for crafting pixel-perfect,
          user-friendly interfaces that blend clean design with robust code. My
          goal is to create products that excite users, just as I feel excited
          while building them. Furthermore, I ensure they remain high-performing
          and easy to use.
        </p>
        <p className="mb-4">
          Currently, I'm a Middle Front-End Engineer at{" "}
          <Link href="https://fptsoftware.com/" target="_blank">
            Fpt Software
          </Link>
          , a leading global outsourcing software company. I contribute to
          projects in various industries, including telecommunications, banking,
          and more. I deliver high-quality UI components and ensure they are
          best practices.
        </p>
        <p className="mb-4">
          Before that, I've had the opportunity to work in many different
          environments, from{" "}
          <Link href="https://perfin.io/" target="_blank">
            startups
          </Link>{" "}
          to{" "}
          <Link href="https://www.vpbanks.com.vn/" target="_blank">
            large corporations
          </Link>
          . This diversity has allowed me to develop a wide range of skills and
          a deep understanding of different business needs.
        </p>
        <p className="mb-4">
          In my free time, I enjoy hanging out with my girlfriend, going around
          Ha Noi, and playing board games with her.
        </p>
      </div>
    </div>
  );
};

export default About;

const Link = ({ href, children, ...props }: React.ComponentProps<"a">) => {
  return (
    <a
      href={href}
      target="_blank"
      className="font-medium text-primary hover:text-sky-400 focus-visible:text-sky-400"
      {...props}
    >
      {children}
    </a>
  );
};
