import { useRef, useState } from "react"
import { OptionsIcon } from "../../assets/img/icons"
import { useDropDown } from "../../hooks/useDropDown";

export const ButtonOption = () => {

    const  [ openOptions, setOpenOptions ]  = useState(false)
    const ref = useRef<HTMLDivElement>(null);

    useDropDown({ref, setOpenOptions})

    const isActiveOptions = openOptions ? 'dropDown active' : 'dropDown'

    return (
        <div className="optionButton" ref={ref}>
            <div onClick={() => setOpenOptions(prev => !prev) }>
                <OptionsIcon />
            </div>
            <div className={isActiveOptions}>
                <div className="options">
                    <a className="edit">Edit</a>
                    <a className="delete">Delete</a>
                </div>
            </div>
        </div>
    )
}