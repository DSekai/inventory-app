// import { useRef, useState } from "react"
import { ConfurationIcon } from "../../../assets/img/icons"
import { ButtonOptionInventory } from "../../ui/menu/inventory/ButtonOptionInventory"
import { ButtonOption } from "../../ui/ButtonOption"
import { useReactTable } from "@tanstack/react-table"
import data from '../../../libs/MOCK_DATA.json'


export const ViewInventory = () => {

  useReactTable({ data, columns })

  return (
    <section className="section-inventory">
      <div className="inventory-options">
        <div className="options-buttons">
          <ButtonOptionInventory />
        </div>
        <div className="actions-button">
          <ButtonOption title="Actions" options={['Delete']} image={<ConfurationIcon />} />
        </div>
      </div>
      <div className="inventory-location">

      </div>
      <div className="inventory-items">
        <table>
          <thead>
            <tr>

            </tr>
          </thead>
          <tbody>
            <tr>

            </tr>
          </tbody>
          <tfoot>
            <tr>

            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
