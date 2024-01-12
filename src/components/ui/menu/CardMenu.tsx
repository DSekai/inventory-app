import { Link } from "react-router-dom"
import { InventoryIcon } from "../../../assets/img/icons"

export const CardMenu = () => {
  return (
    <Link to={'/inventory'} >
      <div className="CardMenu">
        <h3>Inventory</h3>
        <InventoryIcon />
        <p>View your inventory or create a new one.</p>
      </div>
    </Link>
  )
}
