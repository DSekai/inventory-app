import { Link } from "react-router-dom"
import { Inventorys } from "../../../../types/types"
import { ButtonOption } from "../../ButtonOption"
import { OptionsIcon } from "../../../../assets/img/icons"
import { DropDownComponent } from "../../DropDownComponent"


export const CardInventoryList = ({ id, title, description }: Inventorys) => {
    return (
        <Link to={`/inventory/id=${id}`}>

        <div className="cardInventoryList">
            <header className="optionButton">
                {/* <ButtonOption options={['Edit', 'Delete']} image={<OptionsIcon />} /> */}
                <DropDownComponent options={[{key:'Edit'}, {key:'Delete'}]} image={<OptionsIcon/>} sizeButton="md" />
            </header>
                <div className="description">
                    <h3>{title}</h3>
                    <p>id: {id}</p>
                    <p>{description}</p>
                </div>
        </div>
        </Link>
    )
}
