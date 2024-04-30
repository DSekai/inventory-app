import { Link } from "react-router-dom"
import { OptionsIcon } from "../../../../assets/img/icons"
import { DropDownComponent } from "../../DropDownComponent"
import { InventoryType } from "../../../../types/types"


export const CardInventoryList = ({ id, name, description }: InventoryType) => {

    return (
      <Link to={`/inventory/${id}`} >
        <div className="cardInventoryList">
          <header className="">
            <div className="">
              <DropDownComponent data={null} image={<OptionsIcon />} options={[{ key: 'Edit' }, { key: 'Delete' }]} sizeButton="md" />
            </div>
          </header>
          <div className="description">
            <h2 className="title">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
}
