import { useRef, useState } from "react"
// import { OptionsIcon } from "../../assets/img/icons"
import { useDropDown } from "../../hooks/useDropDown";
import { ButtonOptionType } from "../../types/types";

export const ButtonOption = ({ title, options, image }:ButtonOptionType) => {

    const  [ openOptions, setOpenOptions ]  = useState(false)
    const ref = useRef<HTMLButtonElement>(null);

    useDropDown({ref, setOpenOptions})

    const isActiveOptions = openOptions ? 'dropDown active' : 'dropDown'

    return (
        <button className="optionButton" ref={ref} onClick={() => setOpenOptions(prev => !prev) }>
            <div className="titleButton" >
                {image}
                {title}
            </div>
            <div className={isActiveOptions}>
                <div className="options">
                    {
                        options.map(option => (
                            <a key={option} className="edit">{option}</a>
                        ))
                    }
                </div>
            </div>
        </button>
    )
}