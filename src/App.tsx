import About from "./components/Section/about";
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
      <div className="w-full min-h-screen px-20 bg-background grid grid-cols-1 lg:grid-cols-3 lg:gap-20 max-w-screen-xl mx-auto">
        <Navigation
          isProjectInView={isProjectInView}
          isAboutInView={isAboutInView}
          isExperienceInView={isExperienceInView}
        />
        <div className="col-span-2 pt-24">
          <section
            ref={aboutRef}
            className="mb-16 md:mb-24 lg:mb-30 lg:scroll-mt-24"
            id="about"
          >
            <About />
          </section>
          <section
            ref={projectRef}
            className="mb-16 md:mb-24 lg:mb-30 lg:scroll-mt-24"
            id="projects"
          >
            <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          </section>
          <section
            ref={experienceRef}
            className="mb-16 md:mb-24 lg:mb-30 lg:scroll-mt-24"
            id="experience"
          >
            <h2 className=" text-3xl font-semibold tracking-tight">
              Experience
            </h2>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
