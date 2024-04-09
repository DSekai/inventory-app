
// import { useEffect } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Layout } from './components/layouts/Layout'
import { useBoundStore } from './store/bound.store'
import { ModalLogin } from './components/ui/modals/ModalLogin'

export const App = () => {
  // useEffect(() => {
  //   const setBodyClass = (matches: boolean) => {
  //     document.body.className = matches ? 'light text-foreground bg-background' : 'dark text-foreground bg-background';
  //   }

  //   if (typeof window !== 'undefined') {
  //     const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  //     setBodyClass(mediaQueryList.matches);

  //     const listener = (event: MediaQueryListEvent) => {
  //       setBodyClass(event.matches);
  //     }

  //     mediaQueryList.addEventListener('change', listener);
  //     return () => mediaQueryList.removeEventListener('change', listener);
  //   }
  // }, []);
  const token = window.localStorage.getItem('token')
  const setType = useBoundStore(state => state.setType)
  const onOpen = useBoundStore(state => state.onOpen)

  useEffect(() => {
    if(!token) {
      setType('Login')
      onOpen()
    }
  }, [])
  return (
    <>
      <ModalLogin />
      <Layout/>
    </>
  )
}

