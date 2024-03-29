import { Dispatch, ReactNode, RefObject, SetStateAction } from "react"

//#region Inventorys

export interface Inventorys {
    id: string
    title: string
    description?: string
}
//#endregion

//#region UI

interface Option {
    key: string
}

type ButtonSize = 'lg' | 'sm' | 'md' 

export interface ButtonOptionType {
    title?: string
    options: Option[]
    image?: ReactNode
    sizeButton?: ButtonSize
}

//#region Hooks

export interface DropDownProps {
    ref: RefObject<HTMLButtonElement>
    setOpenOptions: Dispatch<SetStateAction<boolean>>
}
//#endregion
