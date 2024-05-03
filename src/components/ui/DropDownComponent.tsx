import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ButtonOptionType, InventoryType, ProductType } from "../../types/types";
import { Key } from "react";
import { useBoundStore } from "../../store/bound.store";
import { useInventories } from "../../hooks/useInventories";

export const DropDownComponent = ({ title, options, image, sizeButton = 'lg', data, type }: ButtonOptionType) => {
  const modalOpen = useBoundStore(state => state.onOpen)
  const dataProductModal = useBoundStore(state => state.setProductData)
  const dataInventoryModal = useBoundStore(state => state.setInventoryData)
  const setType = useBoundStore(state => state.setType)
  const {deleteInventory} = useInventories()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Detén la propagación solo para el DropDownComponent 
    e.preventDefault()
  }
  
  
  const handleActions = (key: Key) => {

    switch (key) {
      // case 'View':
      //   setType('Product')
      //   dataProductModal(data as ProductType)
      //   modalOpen()
      //   break;
      case 'Delete':
        if (type === 'Inventory' && window.confirm(`Are you sure you want to delete ${data?.name}?`)) {
          if(data) deleteInventory(data?.id);
      }
        break
      case 'View':
        if(type === 'Product') {
          setType('Product')
          dataProductModal(data as ProductType)
          modalOpen()
        }
        if(type === 'Inventory'){
          setType("Inventory")
          dataInventoryModal(data as InventoryType)
          modalOpen()
        }
        break
      default:
        break;
    }
  }

  return (
    <>
      <Dropdown
        classNames={{
          content: "min-w-[100px] bg-stone-100"
        }}
      >
        <DropdownTrigger>
          <Button className="bg-white dark:bg-black" onClick={handleClick}
            size={sizeButton} variant="solid"
          >
            {image}
            {title}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={options} onAction={(data) => handleActions(data)}>
          {

            (item) => (
              <DropdownItem
                className={item.key === 'Delete' ? 'text-danger' : ''}
                color={item.key === 'Delete' ? 'danger' : 'default'}
                key={item.key}
              >{item.key}</DropdownItem>
            )
          }

        </DropdownMenu>
      </Dropdown>
      {
        // isOpen && (
        //   <ModalProduct data={data} isOpen={isOpen} onClose={onClose}/>
        // )
      }
    </>
  )
}
