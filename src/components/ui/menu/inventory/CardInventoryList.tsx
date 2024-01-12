import { Inventorys } from "../../../../types/types"


export const CardInventoryList = ({id, title} : Inventorys) => {
  return (
    <div className="">
        <h3>{title}</h3>
        <p>id: {id}</p>
    </div>
  )
}
