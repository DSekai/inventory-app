// import { useRef, useState } from "react"
import { ConfurationIcon } from "../../../assets/img/icons"
import { ButtonOptionInventory } from "../../ui/menu/inventory/ButtonOptionInventory"
// import { ButtonOption } from "../../ui/ButtonOption"
import { DropDownComponent } from "../../ui/DropDownComponent"
import { Table } from "../../ui/Table"
import { productsColumn } from "../../../const.tsx"
import { useProducts } from "../../../hooks/useProducts"
import { ModalProduct } from "../../ui/modals/ModalProduct.tsx"
// import { useInventory } from "../../../hooks/useInventorys"

export const ViewInventory = () => {

  const { products } = useProducts()
  // const {inventory} = useInventory()

  const customStyles = {
    headRow: {
      style: {
        border: 'none',
      },
    },
    headCells: {
      style: {
        color: '#202124',
        fontSize: '14px',
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: 'rgb(225, 244, 244)',
        borderBottomColor: '#FFFFFF',
        borderRadius: '25px',
        outline: '1px solid #FFFFFF',
      },
    },
    pagination: {
      style: {
        border: 'none',
      },
    },
  };


  return (
    <>
      <section className="section-inventory">
        <div className="inventory-options">
          <div className="options-buttons">
            <ButtonOptionInventory />
          </div>
          <div className="actions-button">
            {/* <ButtonOption title="Actions" options={['Delete']} image={<ConfurationIcon />} /> */}
            <DropDownComponent image={<ConfurationIcon />} options={[{ key: 'Edit' }, { key: 'Delete' }]} title="Actions" />
          </div>
        </div>
        {/* <div className="inventory-location">
      </div> */}
        <div className="inventory-items">
          {/* <DropDownComponent options={['1','2']} title="Actions"/> */}
          <Table columns={productsColumn} customStyles={customStyles} data={products} highlightOnHover pagination paginationPerPage={10} pointerOnHover selectableRows title={' '} type="Product"></Table>
        </div>
      </section>
      {
        <ModalProduct/>
      }

    </>
  )
}
