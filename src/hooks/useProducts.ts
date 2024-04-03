import { useState, useEffect } from "react";
import { getProductApi } from "../services/products";
import { ProductType } from "../types/types";

export function useProducts () {
    const [products, setProducts] = useState<ProductType[] | [] >([])
    const [loading, setLoading] = useState(true)

    const getProjects = async () => {
        await getProductApi()
            .then(res => setProducts(res))
            // .then(res => console.log(res)
            // )
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        setLoading(true)
        getProjects()
            // .catch(err => console.error(err))
    },[])

    return {
        products,
        loading
    }
    
}