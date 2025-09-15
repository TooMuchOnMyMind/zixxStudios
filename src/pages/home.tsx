import { useState, useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import AnimatedBackground from "@/components/effects/animated-background";
import Particles from "@/components/effects/particles";
import PageLoader from "@/components/effects/page-loader";
import SectionTransition from "@/components/effects/section-transition";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageLoader 
        isLoading={isLoading} 
        onComplete={() => setShowContent(true)}
      />
      
      {showContent && (
        <>
          <AnimatedBackground />
          <Particles />
          <Navbar />
          <main>
            <SectionTransition>
              <Hero />
            </SectionTransition>
            <SectionTransition delay={200}>
              <About />
            </SectionTransition>
            <SectionTransition delay={300}>
              <Projects />
            </SectionTransition>
            <SectionTransition delay={400}>
              <Skills />
            </SectionTransition>
            <SectionTransition delay={500}>
              <Contact />
            </SectionTransition>
          </main>
          <SectionTransition delay={600}>
            <Footer />
          </SectionTransition>
        </>
      )}
    </div>
  );
}
