
// import { useEffect } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Layout } from './components/layouts/Layout'
import { useBoundStore } from './store/bound.store'
import { ModalLogin } from './components/ui/modals/ModalLogin'
import { Toaster } from 'sonner'
import { useAuth } from './hooks/useAuth'

export const App = () => {
  const setType = useBoundStore(state => state.setType)
  const onOpen = useBoundStore(state => state.onOpen)
  const {authLogin, userState} = useAuth()

  useEffect(() => {    
    authLogin().then().catch(() => {
      if(userState !== 'authorize') {
        setType('Login')
        onOpen()
      }
      
    })
  }, [])
  return (
    <>
      <ModalLogin />
      <Layout/>
      <Toaster/>
    </>
  )
}

