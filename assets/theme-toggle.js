(() => {
  const root = document.documentElement;
  const key = 'slotly-color-theme';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'dark' || saved === 'yellow') root.dataset.theme = saved;
  } catch (_) { /* Theme switching also works without browser storage. */ }

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    const updateLabel = () => {
      const label = root.dataset.theme === 'dark'
        ? 'מעבר לערכה הצהובה'
        : 'מעבר לערכה הכהה';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
    };
    updateLabel();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'yellow' : 'dark';
      updateLabel();
      try { localStorage.setItem(key, root.dataset.theme); } catch (_) {}
    });
  });
})();
