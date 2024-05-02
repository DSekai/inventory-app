import { StateCreator } from 'zustand'
import { InventoryType } from '../../types/types'

interface InventoryState {
  inventories: InventoryType[] | []
}
interface InventoryFunctionState {
  setInventory: (inventory: InventoryType) => void
  setInventories: (inventories: InventoryType[]) => void
}
export type InventoryStateSliceType = InventoryState & InventoryFunctionState

const initialState: InventoryState = {
  inventories: [],
}
export const createInventorySlice : StateCreator<InventoryState & InventoryFunctionState> = (set) => ({
  ...initialState,
  setInventory(inventory) {
    set(state => ({inventories:[...state.inventories, {...inventory}]}))
  },

  setInventories(inventories) {
    set({inventories})
  },
})
