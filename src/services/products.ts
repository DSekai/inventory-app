
// const host = import.meta.env.VITE_API

import { inventoryAPI } from "../api/inventory.api";
import { handleErrorExepcion } from "../common/utils/handleErrors";
import { ProductType } from "../types/types";

export const getProductAPI = (inventoryID: string) => inventoryAPI.get<ProductType[]>(`/product/all/${inventoryID}`)
  .then(response => {
    return response.data
  }).catch(error => {
    throw handleErrorExepcion(error)
  })

export const deleteProductApi = async(data: ProductType[], token: string) => {
    try {
        const response = await fetch('',{
            method: 'DELETE',
            headers: {
                'ContentType': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) throw new Error('Error in fetch Products')

        return true
    } catch (error) {
        console.error(error)
        throw error
    }
}