import { DropDownProps } from "../types/types"

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