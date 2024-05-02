import { TableColumn } from "react-data-table-component";
import { ProductType } from "./types/types";
import { DropDownComponent } from "./components/ui/DropDownComponent";
import { OptionsIcon } from "./assets/img/icons";

// export const inventorysColumn: TableColumn<InventoryType>[] = [
//     {
//         name: 'Title',
//         selector: row => row.name,
//         sortable: true
//     }
// ]

export const productsColumn: TableColumn<ProductType>[] = [
    {
        name: 'ID',
        selector: row => row.id ?? '',
        sortable: true,
        omit: true
    },
    {
        name: 'Product',
        selector: row => row.name ?? '',
        sortable: true
    },
    {
        name: 'Price',
        selector: row => row.price ?? '',
        sortable: true
    },
    {
        name: 'Quantity',
        selector: row => row.quantity ?? '',
        sortable: true
    },
    {
        name: 'Expiration Date',
        selector: row => row.date_expire ?? '',
        sortable: true
    },
    {
        name: 'Category',
        selector: row => row.category.name ?? '',
        
        sortable: true
    },
    {
        name: 'CategoryID',
        selector: row => row.category.id,
        omit: true
    },
    {
        cell: row => <DropDownComponent data={row} image={<OptionsIcon />} options={[{ key: 'View' }, { key: 'Delete' }]} sizeButton="md" type="Product" />,
        // allowOverflow: true,
        // button: true,
        // width: '50px'
    }
]