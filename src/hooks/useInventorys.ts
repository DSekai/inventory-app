import { useState, useEffect } from "react";
import { getInventoriesAPI } from "../services/inventorys";
import { InventoryType } from "../types/types";
import { useAuth } from "./useAuth";

export function useInventory () {
    const [inventory, setInventory] = useState<InventoryType[] | [] >([])
    const [loading, setLoading] = useState(true)
    const {userState} = useAuth()
    const getProjects = async () => {
        await getInventoriesAPI()
            .then(res => setInventory(res))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        setLoading(true)
        getProjects()
    },[userState])

    return {
        inventory,
        loading
    }
    
}