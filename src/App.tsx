import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/theme-provider";
import useIsSectionInView from "./hooks/useIsSectionInView";

function App() {
  const {
    isProjectInView,
    isAboutInView,
    isExperienceInView,
    projectRef,
    aboutRef,
    experienceRef,
  } = useIsSectionInView();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full min-h-screen bg-background px-60 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <Navigation
          isProjectInView={isProjectInView}
          isAboutInView={isAboutInView}
          isExperienceInView={isExperienceInView}
        />
        <div className="col-span-2">
          <div ref={aboutRef} className="col-span-2 h-screen py-24" id="about">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
              About
            </h2>
          </div>
          <div
            ref={projectRef}
            className="col-span-2 h-screen py-24"
            id="projects"
          >
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
              Projects
            </h2>
          </div>
          <div
            ref={experienceRef}
            className="col-span-2 h-screen py-24"
            id="experience"
          >
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
              Experience
            </h2>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
