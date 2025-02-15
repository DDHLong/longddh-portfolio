import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full min-h-screen bg-background px-60 py-24 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <Navigation />
        <div className="col-span-2" id="projects">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            Projects
          </h2>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
