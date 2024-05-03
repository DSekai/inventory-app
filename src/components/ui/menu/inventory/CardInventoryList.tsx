import { Link } from "react-router-dom"
import { OptionsIcon } from "../../../../assets/img/icons"
import { DropDownComponent } from "../../DropDownComponent"
import { InventoryType } from "../../../../types/types"

interface Props {
  inventory: InventoryType
}

export const CardInventoryList = ({inventory}:Props ) => {
    
    return (
      <Link to={`/inventory/${inventory.id}`} >
        <div className="cardInventoryList">
          <header className="">
            <div className="">
              <DropDownComponent data={inventory} image={<OptionsIcon />} options={[{ key: 'View' }, { key: 'Delete' }]} sizeButton="md" type="Inventory" />
            </div>
          </header>
          <div className="description">
            <h2 className="title">{inventory.name}</h2>
            <p>{inventory.description}</p>
          </div>
        </div>
      </Link>
    )
}
