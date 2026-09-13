// src/utils/scrollReveal.ts
export function initScrollReveal() {
  const elements = document.querySelectorAll<HTMLElement>(
    "[data-reveal]:not(.is-revealed), [data-reveal-group]:not(.is-revealed)"
  );
  if (!elements.length) return;

  // Si el usuario prefiere movimiento reducido o IntersectionObserver no está soportado, revelar de inmediato
  if (
    typeof window !== "undefined" &&
    (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window))
  ) {
    elements.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add("is-revealed");
          observer.unobserve(target);

          // Si el elemento es un grupo o está dentro de un contenedor data-reveal-group, activar todos en cascada
          const groupParent = target.closest<HTMLElement>("[data-reveal-group]");
          if (target.hasAttribute("data-reveal-group")) {
            const groupChildren = target.querySelectorAll<HTMLElement>("[data-reveal]");
            groupChildren.forEach((child) => {
              child.classList.add("is-revealed");
              observer.unobserve(child);
            });
          } else if (groupParent && !groupParent.classList.contains("is-revealed")) {
            groupParent.classList.add("is-revealed");
            observer.unobserve(groupParent);
            const groupChildren = groupParent.querySelectorAll<HTMLElement>("[data-reveal]");
            groupChildren.forEach((child) => {
              child.classList.add("is-revealed");
              observer.unobserve(child);
            });
          }
        }
      });
    },
    {
      root: null,
      // -25% en el margen inferior: el elemento no arranca apenas toca el borde inferior,
      // sino cuando ya ha subido aproximadamente hacia la mitad/tercio central de la pantalla
      rootMargin: "0px 0px -25% 0px",
      threshold: 0.1,
    }
  );

  elements.forEach((el) => {
    const delay = el.getAttribute("data-reveal-delay");
    if (delay && !el.style.transitionDelay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const duration = el.getAttribute("data-reveal-duration");
    if (duration && !el.style.transitionDuration) {
      el.style.transitionDuration = duration.endsWith("s") || duration.endsWith("ms") ? duration : `${duration}ms`;
    }

    observer.observe(el);
  });

  // Al llegar al final de la página, revelar cualquier elemento restante que quede cerca del borde inferior
  const handleScrollBottom = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed), [data-reveal-group]:not(.is-revealed)").forEach((el) => {
        el.classList.add("is-revealed");
        observer.unobserve(el);
      });
    }
  };
  window.addEventListener("scroll", handleScrollBottom, { passive: true });
}

// Ejecutar en carga de página y en transiciones de Astro
if (typeof document !== "undefined") {
  document.addEventListener("astro:page-load", initScrollReveal);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollReveal);
  } else {
    initScrollReveal();
  }
}
