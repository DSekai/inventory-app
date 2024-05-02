import { useEffect } from "react";
import { getInventoriesAPI, postInventoriesAPI } from "../services/inventorys";
import { InventoryType } from "../types/types";
import { useAuth } from "./useAuth";
import { useBoundStore } from "../store/bound.store";

export function useInventories () {
    // const [inventory, setInventory] = useState<InventoryType[] | [] >([])
    const {userState} = useAuth()

    const addInventory = useBoundStore(state => state.setInventory)
    const inventories = useBoundStore(state => state.inventories)
    const setInventories = useBoundStore(state => state.setInventories)

    const getInventory = async () => {
        await getInventoriesAPI()
            .then(res => setInventories(res))
            .catch(error => {throw error})
    }

    const postInventory = async (payLoad: InventoryType) => {
        await postInventoriesAPI(payLoad)
            .then(res => addInventory(res))
            .catch(error => {throw error})
    }

    useEffect(() => {
        getInventory()
    },[userState])

    return {
        inventories,
        postInventory
    }
    
}