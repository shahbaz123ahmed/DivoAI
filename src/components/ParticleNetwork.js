import React, { useEffect, useRef } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let animationFrameId;
    let mouse = { x: null, y: null };

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle settings
    const particleCount = 130;
    const connectionDistance = 150;
    const mouseConnectionDistance = 300;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Mouse interaction (repel slightly and move towards mouse slowly if close)
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseConnectionDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            // Premium magnetic attraction (draws particles towards cursor to form a dense web)
            const force = (mouseConnectionDistance - distance) / mouseConnectionDistance;
            const attractStrength = 1.5; // Smooth pull towards mouse
            
            this.x += forceDirectionX * force * attractStrength;
            this.y += forceDirectionY * force * attractStrength;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 23, 68, 0.6)'; // #FF1744
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw central glow (optional, based on screenshot)
      if (mouse.x != null && mouse.y != null) {
         const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150);
         gradient.addColorStop(0, 'rgba(217, 4, 41, 0.2)'); // #D90429
         gradient.addColorStop(1, 'rgba(217, 4, 41, 0)');
         ctx.fillStyle = gradient;
         ctx.beginPath();
         ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
         ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect particles to each other
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(217, 4, 41, ${opacity * 0.4})`; // #D90429
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (mouse.x != null && mouse.y != null) {
           const dx = particles[i].x - mouse.x;
           const dy = particles[i].y - mouse.y;
           const distance = Math.sqrt(dx * dx + dy * dy);
           if (distance < mouseConnectionDistance) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(mouse.x, mouse.y);
              const opacity = 1 - (distance / mouseConnectionDistance);
              ctx.strokeStyle = `rgba(255, 23, 68, ${opacity * 1})`;
              ctx.lineWidth = 2;
              ctx.stroke();
           }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-10"
      style={{ pointerEvents: 'auto' }}
    />
  );
};

export default ParticleNetwork;
