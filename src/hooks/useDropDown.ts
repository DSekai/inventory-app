import { Dispatch, RefObject, SetStateAction } from "react"

interface DropDownProps {
    ref: RefObject<HTMLDivElement>
    setOpenOptions: Dispatch<SetStateAction<boolean>>
}

export const useDropDown = ({ref, setOpenOptions}: DropDownProps) => {
    //* useEffect with problems for rendering previus hooks
    const handleClickOutSide = (event : MouseEvent) => {
        if(ref.current && !ref.current.contains(event.target as Node)) {
            setOpenOptions(false)
        }
    }

    document.addEventListener('mousedown', handleClickOutSide)
    return () => {
        document.removeEventListener('mousedown',handleClickOutSide)
    }
   
}