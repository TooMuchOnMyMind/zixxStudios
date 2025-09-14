import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  element: HTMLElement;
  targetX?: number;
  targetY?: number;
  attraction: number;
}

export default function Particles() {
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const particlesContainer = document.getElementById('particles-bg');
    if (!particlesContainer) return;

    const particleCount = window.innerWidth < 768 ? 20 : 35;
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    particlesRef.current = [];

    // Create interactive particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full pointer-events-none transition-all duration-300';
      
      // Randomize particle properties
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.4 + 0.1;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `rgba(255, 255, 255, ${opacity})`;
      particle.style.boxShadow = `0 0 ${size * 3}px rgba(255, 255, 255, ${opacity * 0.5})`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      particlesContainer.appendChild(particle);
      
      // Store particle data
      particlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        element: particle,
        attraction: Math.random() * 0.02 + 0.005
      });
    }

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Animation loop
    const animate = () => {
      const mouse = mouseRef.current;
      
      particlesRef.current.forEach(particle => {
        // Calculate distance to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          // Attract to mouse when close
          const force = (maxDistance - distance) / maxDistance;
          particle.vx += dx * particle.attraction * force;
          particle.vy += dy * particle.attraction * force;
          
          // Increase glow when near mouse
          const glowIntensity = force * 0.8;
          particle.element.style.boxShadow = `0 0 ${15 + glowIntensity * 20}px rgba(255, 255, 255, ${0.3 + glowIntensity * 0.4})`;
        } else {
          // Normal glow
          particle.element.style.boxShadow = `0 0 6px rgba(255, 255, 255, 0.2)`;
        }
        
        // Apply velocity with damping
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundary checks with gentle bounce
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
        }
        
        // Update DOM element
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation and mouse tracking
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Handle window resize
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Recreate particles on resize
        particlesContainer.innerHTML = '';
        particlesRef.current = [];
        
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'absolute rounded-full pointer-events-none transition-all duration-300';
          
          const size = Math.random() * 3 + 1;
          const opacity = Math.random() * 0.4 + 0.1;
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.background = `rgba(255, 255, 255, ${opacity})`;
          particle.style.boxShadow = `0 0 ${size * 3}px rgba(255, 255, 255, ${opacity * 0.5})`;
          particle.style.left = `${x}px`;
          particle.style.top = `${y}px`;
          
          particlesContainer.appendChild(particle);
          
          particlesRef.current.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            element: particle,
            attraction: Math.random() * 0.02 + 0.005
          });
        }
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(resizeTimer);
    };
  }, []);

  return <div id="particles-bg" className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
}