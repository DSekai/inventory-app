import { InventoryIcon } from "../../../assets/img/icons"

export const CardMenu = () => {
  return (
    <a href={'/inventory'}>
      <div className="CardMenu">
        <h3>Inventory</h3>
        <InventoryIcon />
        <p>View your inventory or create a new one</p>
      </div>
    </a>
  )
}
