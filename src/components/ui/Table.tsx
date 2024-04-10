import { useState } from "react";
import DataTable, { TableProps } from "react-data-table-component";
import { Button } from "@nextui-org/react";

interface Props<T> extends TableProps<T> {
  onDelete: (data:T[]) => Promise<string>
}

export const Table = <T,>({ onDelete,...props}: Props<T>) => {

  const [selectedRows, setSelectedRows] = useState<T[] | []>([]);
  
  const handleChange = (selected: { allSelected: boolean; selectedCount: number; selectedRows: T[] }) => {
    setSelectedRows(selected.selectedRows)
  }

  const handleDelete = () => {
    onDelete(selectedRows).then(data => window.alert(data))
              .catch(() => console.error('error a cambiar'))
    
  }
  
  const contextActions = (

    // <DropDownComponent data={selectedRows} image={<ConfurationIcon />} options={option} title="Actions"/>
    <Button color="danger" onClick={handleDelete} size="lg">Delete</Button>

  )

  return (
    <>
      <DataTable {...props}  contextActions={contextActions} onSelectedRowsChange={handleChange} />
    </>
  )
}