import { inventoryAPI } from "../api/inventory.api";
import { handleErrorExepcion } from "../common/utils/handleErrors";
import { LoginResponseType, LoginType } from "../types/types";

export const loginApi = (payLoad: LoginType) => inventoryAPI.post<LoginResponseType>('/auth/login', {data: payLoad})
  .then(response => {
    return response.data
  }).catch(error => {
    throw handleErrorExepcion(error)
  })