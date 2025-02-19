import { useInView } from "motion/react";
import { useRef } from "react";

const useIsSectionInView = () => {
  const projectRef = useRef(null);
  const isProjectInView = useInView(projectRef, {
    amount: 0.6,
  });
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, {
    amount: 0.7,
  });
  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, {
    amount: 0.7,
  });
  return {
    isProjectInView,
    isAboutInView,
    isExperienceInView,
    projectRef,
    aboutRef,
    experienceRef,
  };
};

export default useIsSectionInView;
