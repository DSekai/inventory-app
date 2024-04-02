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

//#endregion

//#region Hooks

export interface DropDownProps {
    ref: RefObject<HTMLButtonElement>
    setOpenOptions: Dispatch<SetStateAction<boolean>>
}
//#endregion

//#region MOCK-DATA

// export interface ProductType {
//     id:         number;
//     first_name: string;
//     last_name:  string;
//     email:      string;
//     gender:     Gender;
//     ip_address: string;
// }

// enum Gender {
//     Agender = "Agender",
//     Bigender = "Bigender",
//     Female = "Female",
//     Genderfluid = "Genderfluid",
//     Genderqueer = "Genderqueer",
//     Male = "Male",
//     NonBinary = "Non-binary",
//     Polygender = "Polygender",
// }


export interface ProductType {
    title:        string;
    id:           string;
    description?: string;
}


//#endregion