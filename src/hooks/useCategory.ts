import { useState, useEffect } from "react";
import { getCategoryAPI } from "../services/category";
import { CategoryType } from "../types/types";
import { useAuth } from "./useAuth";

export function useCategory() {
    const [category, setCategory] = useState<CategoryType[] | [] >([])
    const [loading, setLoading] = useState(true)
    const {userState} = useAuth()

    const getProjects = async () => {
        await getCategoryAPI()
            .then(res => setCategory(res))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        setLoading(true)
        getProjects()
    },[userState])

    return {
      category,
      loading,
      getProjects
    }
    
}