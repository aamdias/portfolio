import { useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';
const eventName = 'alan-theme-change';
let transitionTimer: ReturnType<typeof setTimeout>;
const subscribe = (callback: () => void) => {
  window.addEventListener(eventName, callback);
  return () => window.removeEventListener(eventName, callback);
};
const getTheme = (): Theme =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme);
  function toggleTheme() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.add('theming');
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('alan-theme', next);
    } catch {
      /* Theme works without storage. */
    }
    window.dispatchEvent(new Event(eventName));
    clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => document.documentElement.classList.remove('theming'), 400);
  }
  return { theme, toggleTheme };
}
