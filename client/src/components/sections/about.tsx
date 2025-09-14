import { User } from "lucide-react";
import ParallaxContainer from "@/components/effects/parallax-container";

export default function About() {
  const stats = [
    { value: "50+", label: "Projects" },
    { value: "3+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl lg:text-4xl text-center mb-16 animate-glow-pulse">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ParallaxContainer speed={0.2} className="order-2 lg:order-1 animate-slide-in-left">
            <div className="glass-strong rounded-2xl p-6 lg:p-8 hover-3d">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Welcome to my portfolio! I'm a passionate Roblox developer with expertise in creating immersive gaming experiences and innovative digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in game development started with a curiosity for creating virtual worlds that bring people together. Today, I specialize in Lua scripting, game mechanics, and user experience design.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 glass rounded-lg hover-3d-flip"
                    data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxContainer>
          
          <ParallaxContainer speed={-0.1} className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div 
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full glass-strong flex items-center justify-center text-6xl lg:text-7xl text-primary animate-pulse-glow hover-scale"
                data-testid="avatar-container"
              >
                <User className="w-16 h-16 lg:w-20 lg:h-20" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-float"></div>
            </div>
          </ParallaxContainer>
        </div>
      </div>
    </section>
  );
}
