
// const host = import.meta.env.VITE_API

import { ProductType } from "../types/types";

const getProductApi = async (): Promise<ProductType[]> => {
    try {
        // const productFound = await fetch(`${host}/products`)
        const productFound = await fetch('../../public/ProductsInventory.json')
        
        if(!productFound.ok) throw new Error('Error in fetch products')
        
        return await productFound.json() as ProductType[]

    } catch (error) {
        console.error(error);
        throw error
    }

}

const deleteProductApi = async(data: ProductType[], token: string) => {
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

export {
    getProductApi,
    deleteProductApi
}