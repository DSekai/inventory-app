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

export interface ButtonOptionType <T>{
    title?: string
    options: Option[]
    image?: ReactNode
    sizeButton?: ButtonSize
    data?: T[]
}

type TableType = 'Product' | 'Inventory'

export interface TablePropsType {
    tableType: TableType
}

//#endregion

//#region Hooks

export interface DropDownProps {
    ref: RefObject<HTMLButtonElement>
    setOpenOptions: Dispatch<SetStateAction<boolean>>
}
//#endregion

//#region MOCK-DATA
export interface InventoryType {
    title:        string;
    id:           string;
    description?: string;
}

export interface ProductType {
    product_id:      string;
    product_name:    string;
    price:           number;
    quantity:        number;
    expiration_date: string;
    category:        CategoryType['category'];
    location:        LocationType['location'];
}

export interface LocationType {
    location_id: string
    location: string
}

export interface CategoryType {
    category_id: string
    category: string
}
//#endregion

export interface LoginType {
    email: string
    password: string
}

export interface UserType {
    id: string
    first_name: string
    last_name: string
    email: string
}