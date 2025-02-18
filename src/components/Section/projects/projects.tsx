import ProjectCard from "./project-card";
import projects from "./project-data";

const Projects = () => {
  return (
    <div>
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight lg:hidden block mb-4">
        Projects
      </h2>
      <ul className="group/list">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
