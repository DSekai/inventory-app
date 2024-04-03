
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

export {
    getProductApi
}