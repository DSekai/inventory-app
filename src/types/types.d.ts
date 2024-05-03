import { Dispatch, ReactNode, RefObject, SetStateAction } from "react"

//#region Inventorys

export interface InventoryType {
    id: string
    name: string
    description?: string
}
//#endregion

//#region UI

interface Option {
    key: string
}

type ButtonSize = 'lg' | 'sm' | 'md' 

export interface ButtonOptionType {
    options: Option[]
    data: ProductType | InventoryType
    type: 'Inventory' | 'Product'
    image?: ReactNode
    title?: string
    sizeButton?: ButtonSize
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

export interface ProductType {
    id:      string;
    name:    string;
    price:           number;
    quantity:        number;
    date_expire: string;
    category:        CategoryType;
}

export interface LocationType {
    location_id: string
    location: string
}

export interface CategoryType {
    id: string
    name: string
}
//#endregion

export interface LoginType {
    email: string
    password: string
}

export interface UserType {
    id: string
    email: string
    name: string
    emailVerify: boolean
    activate: boolean
}

export interface LoginResponseType {
    user: UserType
    token: string
}
//#region Modal

// type ProductType = ProductType | null | InventoryType
type Modals = 'Product' | 'Login' | 'Inventory' | null

export interface ModalType {
    isOpen: boolean
    type: Modals
    onOpen: () => void
    onClose: () => void
    setType: (modals:Modals) => void
}

export interface ProductModalType {
    productData: ProductType | null
    setProductData: (data: ProductType) => void
}

export interface InventoryModalType {
    inventoryData: InventoryType | null
    setInventoryData: (data: InventoryType) => void
}
//#endregion


//#region Errors
export interface ErrorResponse {
    message: string | string[]
    error: string
    statusCode: number
  }
//#endregion