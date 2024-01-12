import { Inventorys } from "../../../../types/types"


export const CardInventoryList = ({id, title, description} : Inventorys) => {
  return (
    <div className="cardInventoryList">
        <h3>{ title }</h3>
        <p>id: { id }</p>
        <p>{ description }</p>
    </div>
  )
}
