import { useState } from "react";
import DataTable, { TableProps } from "react-data-table-component";

export const Table = <T,>(props: TableProps<T>) => {

  const [selectedRows, setSelectedRows] = useState(false);
  const [toggledClearRows, setToggleClearRows] = useState(false);

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows)
    
  }

  const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows)
  }
  console.log(selectedRows);

  return (
    <DataTable {...props} selectableRows onSelectedRowsChange={handleChange}/>
  )
}
