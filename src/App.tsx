import About from "./components/Section/about";
import { ThemeProvider } from "./components/theme-provider";
import useIsSectionInView from "./hooks/useIsSectionInView";
import Experience from "./components/Section/experience/experience";
import Projects from "./components/Section/projects/projects";
import Footer from "./components/footer";
import Navigation from "./components/nav";

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
      <div className="w-full min-h-screen px-6 lg:px-20 bg-background grid grid-cols-1 lg:grid-cols-3 lg:gap-20 max-w-screen-xl mx-auto">
        <Navigation
          isProjectInView={isProjectInView}
          isAboutInView={isAboutInView}
          isExperienceInView={isExperienceInView}
        />
        <div className="col-span-2 lg:pt-24">
          {[
            { ref: aboutRef, id: "about", Component: About },
            { ref: experienceRef, id: "experience", Component: Experience },
            { ref: projectRef, id: "projects", Component: Projects },
          ].map(({ ref, id, Component }) => (
            <section
              key={id}
              ref={ref}
              className="mb-16 md:mb-24 lg:mb-30 lg:scroll-mt-24"
              id={id}
            >
              <Component />
            </section>
          ))}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
