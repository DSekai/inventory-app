import { useState, useEffect } from "react";
import { deleteProductApi, getProductApi } from "../services/products";
import { ProductType } from "../types/types";

export function useProducts () {
    const [products, setProducts] = useState<ProductType[] | [] >([])
    const [loading, setLoading] = useState(true)

    const getProduct = async () => {
        await getProductApi()
            .then(res => setProducts(res))
            // .then(res => console.log(res)
            // )
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }

    const deleteProducts = async (data: ProductType[]) => {
        const token = localStorage.getItem('token')
        if(!token) return 'error'
        await deleteProductApi(data, token)
            .then(res => res)
            .catch(error => error.message)
        return 'Eliminated'
    }

    useEffect(() => {
        setLoading(true)
        getProduct()
            // .catch(err => console.error(err))
    },[])

    return {
        products,
        loading,
        deleteProducts
    }
    
}