/* 主题控制 */
(function() {
  function getEffectiveTheme() {
    const saved = localStorage.getItem('theme') || 'system';
    if (saved === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return saved;
  }
  
  function apply() {
    document.documentElement.dataset.theme = getEffectiveTheme();
  }
  
  apply();
  
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  if (mq.addEventListener) {
    mq.addEventListener('change', () => {
      if ((localStorage.getItem('theme') || 'system') === 'system') apply();
    });
  }
  
  window.__reapplyTheme = apply;
  window.__getEffectiveTheme = getEffectiveTheme;
})();