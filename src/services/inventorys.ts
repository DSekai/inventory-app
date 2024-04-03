
// const host = import.meta.env.VITE_API

import { InventoryType } from "../types/types";

const getInventoryApi = async (): Promise<InventoryType[]> => {
    try {
        // const productFound = await fetch(`${host}/products`)
        const inventoryFound = await fetch('../../public/inventory.json')
        
        if(!inventoryFound.ok) throw new Error('Error in fetch products')
        
        return await inventoryFound.json() as InventoryType[]

    } catch (error) {
        console.error(error);
        throw error
    }

}

export {
    getInventoryApi
}