import { Link } from "react-router-dom"
import { Inventorys } from "../../../../types/types"
import { ButtonOption } from "../../ButtonOption"


export const CardInventoryList = ({ id, title, description }: Inventorys) => {
    return (
        <div className="cardInventoryList">
            <ButtonOption />
            <Link to={ `/inventory/id=${id}` }>
                <div className="description">
                    <h3>{title}</h3>
                    <p>id: {id}</p>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    )
}
