import { useState, useEffect } from "react";
import { getInventoryApi } from "../services/inventorys";
import { InventoryType } from "../types/types";

export function useInventory () {
    const [inventory, setInventory] = useState<InventoryType[] | [] >([])
    const [loading, setLoading] = useState(true)

    const getProjects = async () => {
        await getInventoryApi()
            .then(res => setInventory(res))
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
        inventory,
        loading
    }
    
}