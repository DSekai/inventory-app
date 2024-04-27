
// import { useEffect } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Layout } from './components/layouts/Layout'
import { useBoundStore } from './store/bound.store'
import { ModalLogin } from './components/ui/modals/ModalLogin'
import { Toaster } from 'sonner'

export const App = () => {
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
      <Toaster/>
    </>
  )
}

