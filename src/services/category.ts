
import { inventoryAPI } from "../api/inventory.api";
import { handleErrorExepcion } from "../common/utils/handleErrors";
import { CategoryType } from "../types/types";

export const getCategoryAPI = () => inventoryAPI.get<CategoryType[]>(`/category/all`)
  .then(response => {
    return response.data
  }).catch(error => {
    throw handleErrorExepcion(error)
  })