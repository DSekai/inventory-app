import { Dispatch, RefObject, SetStateAction } from "react"

// Inventorys

export interface Inventorys {
    id: string
    title: string
    description?: string
}


// Hooks

export interface DropDownProps {
    ref: RefObject<HTMLDivElement>
    setOpenOptions: Dispatch<SetStateAction<boolean>>
}
