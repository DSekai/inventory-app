import { useState } from "react";
import { deleteProductApi, getProductAPI } from "../services/products";
import { InventoryType, ProductType } from "../types/types";

export function useProducts () {
    const [products, setProducts] = useState<ProductType[] | [] >([])
    // const [loading, setLoading] = useState(true)

    const getProduct = async (inventoryID: InventoryType['id']) => {
        await getProductAPI(inventoryID)
            .then(res => setProducts(res))
            .catch(error => console.error(error))
    }

    const deleteProducts = async (data: ProductType[]) => {
        const token = localStorage.getItem('token')
        if(!token) return 'error'
        await deleteProductApi(data, token)
            .then(res => res)
            .catch(error => error.message)
        return 'Eliminated'
    }

    // useEffect(() => {
    //     setLoading(true)
    //     getProduct(inventoryID)
    //         // .catch(err => console.error(err))
    // },[])

    return {
        products,
        // loading,
        deleteProducts,
        getProduct
    }
    
}