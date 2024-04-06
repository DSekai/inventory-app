import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ModalType } from '../types/types'
import { createUiSlice } from './ui/ui.slice'


// import { createAuthSlice, type AuthSlice } from './ui/ui.slice'

// export const useBoundStore = create<AuthSlice>()((...a) => ({
//   ...createAuthSlice(...a)
// }))

// type Slices = AuthSlice & PostsSlice & UiSlice

export const useBoundStore = create<ModalType>()(
  devtools(
    (...a) => ({
      // ...createAuthSlice(...a),
      // ...createPostSlice(...a),
      ...createUiSlice(...a)
    })
  )
)