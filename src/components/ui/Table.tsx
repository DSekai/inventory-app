import { useState } from "react";
import DataTable, { TableProps } from "react-data-table-component";
import { DropDownComponent } from "./DropDownComponent";
import { ConfurationIcon }  from "../../assets/img/icons"
import { TableType } from "../../types/types";
// import { ProductType } from "../../types/types";

interface Props<T> extends TableProps<T> {
  type: TableType
}

export const Table = <T,>({type, ...props}: Props<T>) => {

  const [selectedRows, setSelectedRows] = useState<T[] | []>([]);


  const optionsMap = {
    'Product': [{key:'Edit'}, {key:'Delete'}, {key: 'View'}],
    'Inventory': [{key:'Edit'}, {key:'Delete'}],
    'default': []
  };
  
  const option = optionsMap[type] || optionsMap['default'];
  

  
  const handleChange = (selected: { allSelected: boolean; selectedCount: number; selectedRows: T[] }) => {
    setSelectedRows(selected.selectedRows)
  }
  
  const contextActions = (

    <DropDownComponent data={selectedRows} image={<ConfurationIcon />} options={option} title="Actions"/>

  )

  return (
    <>
      <DataTable {...props}  contextActions={contextActions} onSelectedRowsChange={handleChange} />
    </>
  )
}