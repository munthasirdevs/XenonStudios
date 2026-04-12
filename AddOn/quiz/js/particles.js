/**
 * XENON STUDIOS - Particle Background System
 * Soft floating dots / light dust effect
 */

(function () {
    'use strict';

    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Configuration
    const config = {
        particleCount: 60,
        particleMinSize: 0.5,
        particleMaxSize: 2.5,
        particleMinSpeed: 0.15,
        particleMaxSpeed: 0.4,
        particleOpacity: 0.4,
        particleColors: [
            'rgba(0, 242, 255,',    // Cyan
            'rgba(112, 0, 255,',    // Purple
            'rgba(217, 176, 255,',  // Glow
            'rgba(255, 255, 255,'   // White
        ],
        connectionDistance: 120,
        connectionOpacity: 0.08,
        mouseRadius: 150,
        mouseInfluence: 0.02
    };

    // State
    let particles = [];
    let animationId = null;
    let mouseX = -1000;
    let mouseY = -1000;

    /**
     * Resize canvas to match window
     */
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    /**
     * Particle class
     */
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = config.particleMinSize + Math.random() * (config.particleMaxSize - config.particleMinSize);
            this.speedX = (Math.random() - 0.5) * (config.particleMaxSpeed - config.particleMinSpeed) + config.particleMinSpeed;
            this.speedY = (Math.random() - 0.5) * (config.particleMaxSpeed - config.particleMinSpeed) + config.particleMinSpeed;
            this.color = config.particleColors[Math.floor(Math.random() * config.particleColors.length)];
            this.opacity = config.particleOpacity * (0.3 + Math.random() * 0.7);
            this.pulseSpeed = 0.005 + Math.random() * 0.01;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        update(time) {
            // Move particle
            this.x += this.speedX;
            this.y += this.speedY;

            // Pulse opacity
            this.currentOpacity = this.opacity * (0.5 + 0.5 * Math.sin(time * this.pulseSpeed + this.pulsePhase));

            // Mouse interaction
            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < config.mouseRadius) {
                const force = (config.mouseRadius - distance) / config.mouseRadius;
                this.x += dx * force * config.mouseInfluence;
                this.y += dy * force * config.mouseInfluence;
            }

            // Wrap around edges
            if (this.x < -10) this.x = canvas.width + 10;
            if (this.x > canvas.width + 10) this.x = -10;
            if (this.y < -10) this.y = canvas.height + 10;
            if (this.y > canvas.height + 10) this.y = -10;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color + this.currentOpacity + ')';
            ctx.fill();
        }
    }

    /**
     * Draw connections between nearby particles
     */
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.connectionDistance) {
                    const opacity = config.connectionOpacity * (1 - distance / config.connectionDistance);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 242, 255, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    /**
     * Initialize particles
     */
    function initParticles() {
        particles = [];
        const count = window.innerWidth < 768 ? Math.floor(config.particleCount * 0.5) : config.particleCount;

        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    /**
     * Animation loop
     */
    let time = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        time++;

        // Update and draw particles
        particles.forEach(particle => {
            particle.update(time);
            particle.draw();
        });

        // Draw connections
        drawConnections();

        animationId = requestAnimationFrame(animate);
    }

    /**
     * Handle mouse movement
     */
    function handleMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    function handleMouseLeave() {
        mouseX = -1000;
        mouseY = -1000;
    }

    /**
     * Handle touch movement (mobile)
     */
    function handleTouchMove(e) {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    }

    function handleTouchEnd() {
        mouseX = -1000;
        mouseY = -1000;
    }

    /**
     * Handle window resize
     */
    function handleResize() {
        resize();
        initParticles();
    }

    /**
     * Initialize
     */
    function init() {
        resize();
        initParticles();

        // Event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        window.addEventListener('resize', handleResize);

        // Start animation
        animate();
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
