import { useTheme } from "@/components/theme-provider";
import ExperienceCard from "./experience-card";
import experienceData from "./experience-data";
import { GlowArea } from "./glow";
import { ArrowRight } from "lucide-react";

const Experience = () => {
  const { theme } = useTheme();
  return (
    <div>
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight lg:hidden block mb-4">
        Experience
      </h2>
      {theme === "dark" ? (
        <GlowArea>
          <ol>
            {experienceData.map((experience) => (
              <ExperienceCard key={experience.title} {...experience} />
            ))}
          </ol>
        </GlowArea>
      ) : (
        <ol>
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </ol>
      )}
      <a
        href="/LongDaoCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold flex items-center gap-1 group bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out w-fit"
      >
        <span>My Full Résumé</span>
        <span className="inline-block">
          <ArrowRight className="w-4 h-4 transition-colors duration-300" />
        </span>
      </a>
    </div>
  );
};

export default Experience;
