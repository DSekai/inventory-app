
// import { useEffect } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Layout } from './components/layouts/Layout'
import { useBoundStore } from './store/bound.store'
import { ModalLogin } from './components/ui/modals/ModalLogin'
import { Toaster } from 'sonner'
import { useAuth } from './hooks/useAuth'

export const App = () => {
  const token = window.localStorage.getItem('tokenAPI')
  const setType = useBoundStore(state => state.setType)
  const onOpen = useBoundStore(state => state.onOpen)
  const {authLogin} = useAuth()

  useEffect(() => {
    if(!token) {
      setType('Login')
      onOpen()
    } else{
      authLogin()
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

