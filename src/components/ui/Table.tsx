import { useState } from "react";
import DataTable, { TableProps } from "react-data-table-component";
import { Button } from "@nextui-org/react";
import { ProductType } from "../../types/types";
import { useProducts } from "../../hooks/useProducts";

// interface Props extends TableProps<ProductType>{
//   onDelete: (data:ProductType[]) => Promise<void>
// }

export const Table = ({...props}: TableProps<ProductType>) => {
  const { deleteProducts } = useProducts()

  const [selectedRows, setSelectedRows] = useState<ProductType[] | []>([]);
  
  const handleChange = (selected: { allSelected: boolean; selectedCount: number; selectedRows: ProductType[] }) => {
    setSelectedRows(selected.selectedRows)
  }

  const handleDelete = () => {
    deleteProducts(selectedRows).then(data => window.alert(data))
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