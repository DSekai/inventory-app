import { inventoryAPI } from "../api/inventory.api"
import { handleErrorExepcion } from "../common/utils/handleErrors"
import { InventoryType } from "../types/types"

export const getInventoriesAPI = () => inventoryAPI.get<InventoryType[]>('/inventories/all')
  .then(response => {
    return response.data
  }).catch(error => {
    throw handleErrorExepcion(error)
  })

export const postInventoriesAPI = (payLoad:InventoryType) => inventoryAPI.post('inventories', payLoad)
  .then(response => (response.data))
  .catch(error => {throw handleErrorExepcion(error)})