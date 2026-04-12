/**
 * XENON STUDIOS - Particle Background System
 * Soft floating dots / light dust effect using DOM elements
 */

(function () {
  "use strict";

  const container = document.getElementById("particles-container");
  if (!container) return;

  // Configuration
  const config = {
    particleCount: 30,
    particleMinSize: 1,
    particleMaxSize: 4,
    particleMinSpeed: 0.2,
    particleMaxSpeed: 0.6,
    particleMinOpacity: 0.1,
    particleMaxOpacity: 0.4,
    particleColors: [
      "var(--xenon-color-cyan)",
      "var(--xenon-color-purple)",
    ],
    mouseRadius: 150,
    mouseInfluence: 0.03,
  };

  // State
  let particles = [];
  let animationId = null;
  let mouseX = -1000;
  let mouseY = -1000;

  /**
   * Get random number in range
   */
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Create a particle DOM element
   */
  function createParticleElement() {
    const div = document.createElement("div");
    div.className = "particle-dot";
    div.style.position = "absolute";
    div.style.borderRadius = "50%";
    div.style.pointerEvents = "none";
    div.style.willChange = "transform";
    container.appendChild(div);
    return div;
  }

  /**
   * Particle class
   */
  class Particle {
    constructor() {
      this.element = createParticleElement();
      this.reset();
    }

    reset() {
      this.x = random(0, window.innerWidth);
      this.y = random(0, window.innerHeight);
      this.size = random(config.particleMinSize, config.particleMaxSize);
      this.baseSpeedX = random(config.particleMinSpeed, config.particleMaxSpeed) * (Math.random() > 0.5 ? 1 : -1);
      this.baseSpeedY = random(config.particleMinSpeed, config.particleMaxSpeed) * (Math.random() > 0.5 ? 1 : -1);
      this.speedX = this.baseSpeedX;
      this.speedY = this.baseSpeedY;
      this.color = config.particleColors[Math.floor(Math.random() * config.particleColors.length)];
      this.opacity = random(config.particleMinOpacity, config.particleMaxOpacity);
      this.pulseSpeed = random(0.003, 0.008);
      this.pulsePhase = random(0, Math.PI * 2);

      // Apply initial styles
      this.element.style.width = `${this.size}px`;
      this.element.style.height = `${this.size}px`;
      this.element.style.background = this.color;
    }

    update(time) {
      // Move particle
      this.x += this.speedX;
      this.y += this.speedY;

      // Pulse opacity
      const pulse = 0.5 + 0.5 * Math.sin(time * this.pulseSpeed + this.pulsePhase);
      this.currentOpacity = this.opacity * (0.6 + 0.4 * pulse);

      // Mouse interaction
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.mouseRadius && distance > 0) {
        const force = (config.mouseRadius - distance) / config.mouseRadius;
        this.x += dx * force * config.mouseInfluence;
        this.y += dy * force * config.mouseInfluence;
      }

      // Wrap around edges
      if (this.x < -10) this.x = window.innerWidth + 10;
      if (this.x > window.innerWidth + 10) this.x = -10;
      if (this.y < -10) this.y = window.innerHeight + 10;
      if (this.y > window.innerHeight + 10) this.y = -10;

      // Apply transforms
      this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
      this.element.style.opacity = this.currentOpacity;
    }

    destroy() {
      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }
  }

  /**
   * Initialize particles
   */
  function initParticles() {
    // Clear existing
    particles.forEach(p => p.destroy());
    particles = [];

    const count = window.innerWidth < 768
      ? Math.floor(config.particleCount * 0.5)
      : config.particleCount;

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  /**
   * Animation loop
   */
  let time = 0;
  function animate() {
    time++;

    particles.forEach(particle => {
      particle.update(time);
    });

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
  let resizeTimeout;
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      initParticles();
    }, 300);
  }

  /**
   * Initialize
   */
  function init() {
    // Set container styles
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "0";
    container.style.overflow = "hidden";

    initParticles();

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("resize", handleResize);

    // Start animation
    animate();
  }

  // Start when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
