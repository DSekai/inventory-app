import { TableColumn } from "react-data-table-component";
import { InventoryType, ProductType } from "./types/types";
import { DropDownComponent } from "./components/ui/DropDownComponent";
import { OptionsIcon } from "./assets/img/icons";

export const inventorysColumn: TableColumn<InventoryType>[] = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true
    }
]

export const productsColumn: TableColumn<ProductType>[] = [
    {
        name: 'ID',
        selector: row => row.product_id ?? '',
        sortable: true
    },
    {
        name: 'Product',
        selector: row => row.product_name ?? '',
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
        selector: row => row.expiration_date ?? '',
        sortable: true
    },
    {
        name: 'Category',
        selector: row => row.category ?? '',
        sortable: true
    },
    {
        name: 'Location',
        selector: row => row.location ?? '',
        sortable: true
    },
    {
        cell: row => <DropDownComponent data={row} options={[{ key: 'View' }, { key: 'Delete' }]} image={<OptionsIcon />} sizeButton="md" />,
        // allowOverflow: true,
        // button: true,
        // width: '50px'
    }
]