import { StateCreator } from 'zustand'
import { InventoryType } from '../../types/types'

type data = InventoryType | null

interface InventoryState {
  inventories: InventoryType[] | []
  inventoryData: data | null
}
interface InventoryFunctionState {
  setInventory: (inventory: InventoryType) => void
  deleteInventory: (inventoryToDelete: InventoryType) => void
  updateInventory: (inventoryToUpdate: InventoryType) => void
  setInventories: (inventories: InventoryType[]) => void
  setInventoryData: (data: data) => void
}
export type InventoryStateSliceType = InventoryState & InventoryFunctionState

const initialState: InventoryState = {
  inventories: [],
  inventoryData: null
}
export const createInventorySlice: StateCreator<InventoryState & InventoryFunctionState> = (set, get) => ({
  ...initialState,
  setInventory(inventory) {
    set(state => ({ inventories: [...state.inventories, { ...inventory }] }))
  },
  deleteInventory(inventoryToDelete) {
    set(state => ({
      inventories: state.inventories.filter((inventory) => inventory.id !== inventoryToDelete.id),
    }))
  },
  updateInventory(inventoryToUpdate) {
    const inventoryFound = get().inventories.find(inventory => inventory.id === inventoryToUpdate.id)
    if (!inventoryFound) return
    set(state => ({
      ...state, inventories: state.inventories.map(inventory => {
        if (inventory.id === inventoryFound.id) {
          return { ...inventory, ...inventoryToUpdate }
        }
        return inventory
      })
    }))
  },
  setInventories(inventories) {
    set({ inventories })
  },
  setInventoryData(inventoryData) {
    set({ inventoryData })
  },
})
