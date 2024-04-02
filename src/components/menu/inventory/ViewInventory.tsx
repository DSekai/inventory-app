// import { useRef, useState } from "react"
import { ConfurationIcon } from "../../../assets/img/icons"
import { ButtonOptionInventory } from "../../ui/menu/inventory/ButtonOptionInventory"
import { ButtonOption } from "../../ui/ButtonOption"
import data from '../../../libs/inventory.json'
import { DropDownComponent } from "../../ui/DropDownComponent"
import { Table } from "../../ui/Table"
import { product } from "../../../const"

export const ViewInventory = () => {

  return (
    <section className="section-inventory">
      <div className="inventory-options">
        <div className="options-buttons">
          <ButtonOptionInventory />
        </div>
        <div className="actions-button">
          {/* <ButtonOption title="Actions" options={['Delete']} image={<ConfurationIcon />} /> */}
          <DropDownComponent options={[{key:'Edit'},{key:'Delete'}, {key: 'View'}]} title="Actions" image={<ConfurationIcon />}/>
        </div>
      </div>
      <div className="inventory-location">
            <div className=""></div>
      </div>
      <div className="inventory-items">
        {/* <DropDownComponent options={['1','2']} title="Actions"/> */}
          <Table columns={product} data={data} title='Products' ></Table>
      </div>
    </section>
  )
}
