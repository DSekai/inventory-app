import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ModalType } from '../types/types'
import { createUiSlice } from './ui/ui.slice'
import { UserStateSliceType, createUserSlice } from './ui/user.slice'

// import { createAuthSlice, type AuthSlice } from './ui/ui.slice'

// export const useBoundStore = create<AuthSlice>()((...a) => ({
//   ...createAuthSlice(...a)
// }))

type Slices = ModalType & UserStateSliceType

export const useBoundStore = create<Slices>()(
  devtools(
    (...a) => ({
      // ...createAuthSlice(...a),
      ...createUserSlice(...a),
      ...createUiSlice(...a)
    })
  )
)