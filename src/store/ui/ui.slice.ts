import { StateCreator } from 'zustand'
import { ModalType } from '../../types/types'
// import { useDisclosure } from '@nextui-org/react';


// const { isOpen, onOpen, onClose } = useDisclosure();

export const createUiSlice : StateCreator<ModalType> = (set) => ({
  isOpen: false,
  onOpen() {
    set({isOpen: true})
  },
  onClose() {
    set({isOpen: false})
  },

  data: null,
  setData(data) {
    set({data})
  },

})
