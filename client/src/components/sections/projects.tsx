import { Gamepad, Rocket, Puzzle, Users, Car, Wand } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "adventure-rpg",
      title: "Adventure RPG",
      description: "An immersive RPG experience with custom combat systems, quests, and character progression.",
      icon: <Gamepad className="w-8 h-8" />,
      tags: ["Lua", "Roblox Studio"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      id: "space-simulator",
      title: "Space Simulator",
      description: "A realistic space exploration game with physics-based movement and planetary systems.",
      icon: <Rocket className="w-8 h-8" />,
      tags: ["Physics", "3D Modeling"],
      gradient: "from-accent/30 to-accent/10"
    },
    {
      id: "puzzle-platform",
      title: "Puzzle Platform",
      description: "A mind-bending puzzle game with unique mechanics and progressively challenging levels.",
      icon: <Puzzle className="w-8 h-8" />,
      tags: ["Game Logic", "UI Design"],
      gradient: "from-muted/30 to-muted/10"
    },
    {
      id: "social-hub",
      title: "Social Hub",
      description: "A virtual social space where players can interact, customize avatars, and participate in activities.",
      icon: <Users className="w-8 h-8" />,
      tags: ["Networking", "Social Features"],
      gradient: "from-primary/15 to-primary/5"
    },
    {
      id: "racing-championship",
      title: "Racing Championship",
      description: "High-speed racing game with realistic car physics and competitive multiplayer modes.",
      icon: <Car className="w-8 h-8" />,
      tags: ["Physics Engine", "Multiplayer"],
      gradient: "from-accent/25 to-accent/5"
    },
    {
      id: "magic-academy",
      title: "Magic Academy",
      description: "A magical world where players learn spells, attend classes, and embark on mystical adventures.",
      icon: <Wand className="w-8 h-8" />,
      tags: ["Story Design", "Animation"],
      gradient: "from-muted/25 to-muted/5"
    }
  ];

  const handleProjectClick = (projectId: string) => {
    // Placeholder for project details modal or navigation
    console.log(`Viewing project: ${projectId}`);
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl lg:text-4xl text-center mb-16 animate-glow-pulse">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-strong rounded-2xl overflow-hidden hover-3d-card group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`project-card-${project.id}`}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      data-testid={`tag-${tag.toLowerCase().replace(' ', '-')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  data-testid={`button-view-project-${project.id}`}
                >
                  View Project
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
