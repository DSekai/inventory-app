import { Dispatch, RefObject, SetStateAction } from "react"

//#region Inventorys

export interface Inventorys {
    id: string
    title: string
    description?: string
}
//#endregion

//#region Hooks

export interface DropDownProps {
    ref: RefObject<HTMLDivElement>
    setOpenOptions: Dispatch<SetStateAction<boolean>>
}
//#endregion
