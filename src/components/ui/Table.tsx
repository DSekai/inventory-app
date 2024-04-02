import { useState } from "react";
import DataTable, { TableProps } from "react-data-table-component";
import { DropDownComponent } from "./DropDownComponent";
import { ConfurationIcon }  from "../../assets/img/icons"
import { ProductType } from "../../types/types";

export const Table = <T extends ProductType>(props: TableProps<T>) => {

  const [selectedRows, setSelectedRows] = useState<ProductType[] | [] >([]);

  const contextActions = (

    <DropDownComponent data={selectedRows} options={[{key:'Edit'},{key:'Delete'}, {key: 'View'}]} title="Actions" image={<ConfurationIcon />}/>

  )

  const handleChange = (selected: { allSelected: boolean; selectedCount: number; selectedRows: T[] }) => {
    setSelectedRows(selected.selectedRows)
  }
  

  return (
    <>
      <DataTable {...props} selectableRows onSelectedRowsChange={handleChange} contextActions={contextActions} />
    </>
  )
}