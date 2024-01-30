
import { useEffect } from 'react'
import './App.css'
import { Layout } from './components/layouts/Layout'

export const App = () => {
  useEffect(() => {
    const setBodyClass = (matches: boolean) => {
      document.body.className = matches ? 'light text-foreground bg-background' : 'dark text-foreground bg-background';
    }

    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      setBodyClass(mediaQueryList.matches);

      const listener = (event: MediaQueryListEvent) => {
        setBodyClass(event.matches);
      }

      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    }
  }, []);
  return (
    <>
      <Layout/>
    </>
  )
}

