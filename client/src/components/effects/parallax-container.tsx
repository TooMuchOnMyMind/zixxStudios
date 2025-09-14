import { useEffect, useRef } from "react";

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxContainer({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const updateTransform = () => {
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const scrollTop = window.pageYOffset;
      const rate = scrollTop * -speed;
      
      // Only apply transform when element is in viewport or near it
      if (rect.bottom >= -200 && rect.top <= window.innerHeight + 200) {
        container.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    updateTransform();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}