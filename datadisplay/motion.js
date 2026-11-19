(() => {
  const layers = document.querySelectorAll('.parallax-layer');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let ticking = false;
  const update = () => {
    layers.forEach(layer => {
      if (reducedMotion.matches) {
        layer.style.removeProperty('--parallax-offset');
        return;
      }
      const scene = layer.closest('.parallax-scene, .feature-card, section') || layer.parentElement;
      const rect = scene.getBoundingClientRect();
      const distance = Math.max(-260, Math.min(260, innerHeight * .55 - (rect.top + rect.height * .4)));
      layer.style.setProperty('--parallax-offset', `${distance * Number(layer.dataset.depth)}px`);
    });
    document.querySelectorAll('[data-scene]').forEach(scene => {
      const rect = scene.getBoundingClientRect();
      const distance = Math.max(-350, Math.min(350, innerHeight * .5 - (rect.top + rect.height * .5)));
      scene.querySelectorAll('[data-scene-layer]').forEach(layer => {
        if (reducedMotion.matches) layer.style.removeProperty('--scene-y');
        else layer.style.setProperty('--scene-y', `${distance * Number(layer.dataset.sceneLayer)}px`);
      });
    });
    ticking = false;
  };
  const schedule = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  reducedMotion.addEventListener('change', schedule);
  document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { link.closest('details').open = false; }));
  schedule();
})();
