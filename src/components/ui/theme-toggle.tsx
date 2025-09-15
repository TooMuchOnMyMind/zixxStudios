import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/effects/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full glass hover-glow hover-scale flex items-center justify-center transition-all duration-500"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      data-testid="theme-toggle"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-0'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-500 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
      
      {/* Glow effect based on theme */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          theme === 'light'
            ? 'bg-yellow-500/10 shadow-[0_0_20px_rgba(234,179,8,0.3)]'
            : 'bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
        }`}
      />
    </button>
  );
}