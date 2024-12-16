import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero.tsx";
import Navbar from "./sections/Navbar.tsx";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) setIsLoading(false);
  }, [progress]);

  if (isLoading)
    return (
      <div className="h-lvh w-full bg-[#FAF9F8] text-blue-200">
        Loading . . .
      </div>
    );
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container overflow-x-hidden lg:px-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
