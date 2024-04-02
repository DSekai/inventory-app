import { TableColumn } from "react-data-table-component";
import { ProductType } from "./types/types";

export const product: TableColumn<ProductType>[] = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true
    },
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true
    },
    {
        name: 'Description',
        selector: row => row.description ?? '',
        sortable: true
    },
]