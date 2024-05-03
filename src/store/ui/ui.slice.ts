import { StateCreator } from 'zustand'
import { ModalType, Modals } from '../../types/types'
// import { useDisclosure } from '@nextui-org/react';


// const { isOpen, onOpen, onClose } = useDisclosure();

export const createUiSlice : StateCreator<ModalType> = (set) => ({
  isOpen: false,
  type: null,
  onOpen() {
    set({isOpen: true})
  },
  onClose() {
    set({isOpen: false})
  },
  setType(type:Modals){
    set({type})
  },
})
