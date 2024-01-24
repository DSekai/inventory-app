import { Dispatch, ReactNode, RefObject, SetStateAction } from "react"

//#region Inventorys

export interface Inventorys {
    id: string
    title: string
    description?: string
}
//#endregion

//#region UI

export interface ButtonOptionType {
    title?: string
    options: string[]
    image?: ReactNode
}

//#region Hooks

export interface DropDownProps {
    ref: RefObject<HTMLButtonElement>
    setOpenOptions: Dispatch<SetStateAction<boolean>>
}
//#endregion
