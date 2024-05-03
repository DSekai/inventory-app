import { useEffect } from "react";
import { desactiveInventoryAPI, getInventoriesAPI, patchInventoryApi, postInventoriesAPI } from "../services/inventorys";
import { InventoryType } from "../types/types";
import { useAuth } from "./useAuth";
import { useBoundStore } from "../store/bound.store";

export function useInventories () {
    // const [inventory, setInventory] = useState<InventoryType[] | [] >([])
    const {userState} = useAuth()

    const addInventory = useBoundStore(state => state.setInventory)
    const inventories = useBoundStore(state => state.inventories)
    const setInventories = useBoundStore(state => state.setInventories)
    const deleteInventories = useBoundStore(state => state.deleteInventory)
    const updateInventories = useBoundStore(state => state.updateInventory)

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

    const deleteInventory = async (inventoryID: InventoryType['id']) => {
        await desactiveInventoryAPI(inventoryID)
            .then(res => deleteInventories(res))
            .catch(err => {throw err})
    }

    const updateInventory = async (payLoad: InventoryType) => {
        await patchInventoryApi(payLoad)
            .then(res => {
                updateInventories(res)
            })
    }

    useEffect(() => {
        getInventory()
    },[userState])

    return {
        inventories,
        postInventory,
        deleteInventory,
        updateInventory
    }
    
}