(() => {
  const storageKey = 'datadisplay.appearance';
  const palette = document.getElementById('dark-palette');
  const chrome = document.getElementById('dark-chrome');
  const media = { system: palette.media, light: 'not all', dark: 'all' };
  let mode;
  let select;

  function apply(value) {
    mode = value === 'light' || value === 'dark' ? value : 'system';
    // Im Systemmodus reagiert die Media Query direkt auf Änderungen am Gerät.
    palette.media = media[mode];
    chrome.media = media[mode];
    if (select) select.value = mode;
  }

  let saved = null;
  try {
    saved = window.localStorage.getItem(storageKey);
  } catch {
    // Der Browser kann den Zugriff auf den lokalen Speicher beschränken.
  }
  apply(saved);

  document.addEventListener('DOMContentLoaded', () => {
    select = document.getElementById('appearance-mode');
    select.value = mode;
    select.closest('label').hidden = false;
    select.addEventListener('change', () => {
      apply(select.value);
      try {
        if (mode === 'system') window.localStorage.removeItem(storageKey);
        else window.localStorage.setItem(storageKey, mode);
      } catch {
        // Die Auswahl gilt in diesem Fall für die geöffnete Seite.
      }
    });
  });

  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) apply(event.newValue);
  });
})();
