import { Code, Mail } from "lucide-react";
import ParallaxContainer from "@/components/effects/parallax-container";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <ParallaxContainer speed={0.3} className="absolute inset-0 overflow-hidden">
        <div className="particles" id="hero-particles">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
      </ParallaxContainer>

      <ParallaxContainer speed={0.1} className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-primary via-gray-200 to-primary bg-clip-text text-transparent animate-glow-pulse">
            Zixx
          </span>
        </h1>
        
        <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Roblox Developer & Digital Creator
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay">
          <button
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg btn-3d focus:outline-none focus:ring-2 focus:ring-ring"
            data-testid="button-view-work"
          >
            <Code className="w-5 h-5 mr-2" />
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center px-6 py-3 glass text-foreground font-semibold rounded-lg btn-3d focus:outline-none focus:ring-2 focus:ring-ring"
            data-testid="button-get-in-touch"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </button>
        </div>
      </ParallaxContainer>
    </section>
  );
}
