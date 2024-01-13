import { Inventorys } from "../../../../types/types"
import { ButtonOption } from "../../buttonOption"


export const CardInventoryList = ({ id, title, description }: Inventorys) => {
    return (
        <div className="cardInventoryList">
            <ButtonOption />
            <div className="description">
                <h3>{title}</h3>
                <p>id: {id}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
