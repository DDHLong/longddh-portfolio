import ExperienceCard from "./experience-card";
import experienceData from "./experience-data";
import { GlowArea } from "./glow";

const Experience = () => {
  return (
    <div>
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight lg:hidden block mb-4">
        Experience
      </h2>
      <GlowArea className="">
        <ol>
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </ol>
      </GlowArea>
    </div>
  );
};

export default Experience;
