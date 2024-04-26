import { StateCreator } from 'zustand'
import { UserType } from '../../types/types'

interface UserState {
  user: UserType | null
  state: 'authorize'| 'unAuthorize'| 'pending'
}
interface UserFunctionState {
  setUserState: (user: UserType) => void
  setCheckedState: () => void
}
export type UserStateSliceType = UserState & UserFunctionState

const initialState: UserState = {
  user: null,
  state: 'unAuthorize'
}
export const createUserSlice : StateCreator<UserState & UserFunctionState> = (set) => ({
  ...initialState,
  setUserState(user: UserType) {
    set({user, state: 'authorize'})
  },
  setCheckedState() {
    set({user: null,state: 'pending'})
  },

})
