import { useEffect, useState } from "react";

interface PageLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export default function PageLoader({ isLoading, onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => {
            onComplete?.();
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  if (!isLoading && !fadeOut) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center glass-strong transition-opacity duration-800 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
            <div 
              className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin"
              style={{ animation: 'spin 1s linear infinite' }}
            ></div>
            <div className="absolute inset-2 rounded-full bg-primary/10 animate-pulse"></div>
          </div>
          <h2 className="font-heading text-2xl font-bold text-primary animate-glow-pulse">
            Zixx
          </h2>
        </div>
        
        <div className="w-64 mx-auto">
          <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2 animate-fade-in-delay">
            {progress < 30 ? 'Initializing...' : 
             progress < 60 ? 'Loading portfolio...' :
             progress < 90 ? 'Preparing experience...' : 'Welcome!'}
          </p>
        </div>
      </div>
    </div>
  );
}