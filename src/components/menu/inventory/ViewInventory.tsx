// import { useRef, useState } from "react"
import { ConfurationIcon } from "../../../assets/img/icons"
import { ButtonOptionInventory } from "../../ui/menu/inventory/ButtonOptionInventory"
import { ButtonOption } from "../../ui/ButtonOption"

 
export const ViewInventory = () => {
  return (
    <section className="section-inventory">
      <div className="inventory-options">
        <div className="options-buttons">
          <ButtonOptionInventory/>
        </div>
        <div className="actions-button">
          <ButtonOption title="Actions" options={['Delete']} image={<ConfurationIcon/>}/>
        </div>
      </div>
      <div className="inventory-location">

      </div>
      <div className="inventory-items">

      </div>
    </section>
  )
}
