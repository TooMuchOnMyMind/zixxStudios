import { Code, Box, Paintbrush, Network } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "Lua Scripting",
      description: "Advanced scripting for game logic and systems",
      icon: <Code className="w-8 h-8" />
    },
    {
      name: "Roblox Studio",
      description: "Expert-level development environment mastery",
      icon: <Box className="w-8 h-8" />
    },
    {
      name: "UI/UX Design",
      description: "Creating intuitive and engaging interfaces",
      icon: <Paintbrush className="w-8 h-8" />
    },
    {
      name: "Networking",
      description: "Multiplayer systems and data management",
      icon: <Network className="w-8 h-8" />
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl lg:text-4xl text-center mb-16 animate-glow-pulse">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-strong rounded-xl p-6 text-center hover-3d animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`skill-${skill.name.toLowerCase().replace('/', '-').replace(' ', '-')}`}
            >
              <div className="text-primary mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
