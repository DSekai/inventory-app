import { StateCreator } from 'zustand'
import { ProductModalType } from '../../types/types'
// import { useDisclosure } from '@nextui-org/react';


// const { isOpen, onOpen, onClose } = useDisclosure();

export const createProductSlice : StateCreator<ProductModalType> = (set) => ({
  productData: null,
  setProductData(productData) {
    set({productData})
  },

})
