import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

type Section = "projects" | "about" | "experience";

const useIsSectionInView = () => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  // Create refs for each section
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);

  // Track inView state for each section
  const isProjectInView = useInView(projectRef, { amount: 0.3 });
  const isAboutInView = useInView(aboutRef, { amount: 0.3 });
  const isExperienceInView = useInView(experienceRef, { amount: 0.3 });

  // Update active section based on which one is in view
  useEffect(() => {
    if (isProjectInView) {
      setActiveSection("projects");
    } else if (isAboutInView) {
      setActiveSection("about");
    } else if (isExperienceInView) {
      setActiveSection("experience");
    } else {
      setActiveSection(null);
    }
  }, [isProjectInView, isAboutInView, isExperienceInView]);

  return {
    activeSection,
    projectRef,
    aboutRef,
    experienceRef,
  };
};

export default useIsSectionInView;
