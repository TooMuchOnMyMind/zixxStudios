import { useEffect } from "react";

export default function Particles() {
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles-bg');
      if (!particlesContainer) return;

      const particleCount = window.innerWidth < 768 ? 30 : 50;
      
      // Clear existing particles
      particlesContainer.innerHTML = '';
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'fixed w-0.5 h-0.5 bg-white/30 rounded-full animate-particle-float pointer-events-none';
        
        // Random position and animation delay
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        particlesContainer.appendChild(particle);
      }
    };

    // Create particles on mount
    createParticles();

    // Handle window resize
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(createParticles, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return <div id="particles-bg" className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
}
