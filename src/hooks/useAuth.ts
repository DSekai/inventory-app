import { loginApi, loginAuthApi } from "../services/login"
import { useBoundStore } from "../store/bound.store"
import { LoginType } from "../types/types"

export const useAuth = () => {
  const saveLogin = useBoundStore(state => state.setUserState )
  const pending = useBoundStore(state => state.setCheckedState)

  const userState = useBoundStore(state => state.state)

  const login = async (payLoad: LoginType) => {
    pending()
    await loginApi(payLoad)
          .then(res => {
            localStorage.setItem('tokenAPI', res.token),
            saveLogin(res.user)
          })
          .catch(error => {throw error})
  }

  const authLogin = async () => {
    await loginAuthApi()
            .then(res => {
              localStorage.setItem('tokenAPI', res.token),
              saveLogin(res.user)
            })
            .catch(error => {
              localStorage.removeItem('tokenAPI')
              throw error})
  }
  return {
    login,
    authLogin,
    userState
  }
}
