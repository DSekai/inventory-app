import { OptionsIcon } from "../../assets/img/icons"

export const ButtonOption = () => {
    return (
        <div className="optionButton">
            <OptionsIcon />
            <div className="dropDown">
                <div className="options">
                    <p className="edit">Edit</p>
                    <p className="delete">Delete</p>
                </div>
            </div>
        </div>
    )
}