import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-surface text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <TechStack />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
