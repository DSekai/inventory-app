import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  useDisclosure
} from "@nextui-org/react";
import { ButtonOptionType } from "../../types/types";
import { Key, useState } from "react";
import { ModalProduct } from "./modals/ModalProduct";

export const DropDownComponent = ({ title, options, image, sizeButton = 'lg', data=[] }: ButtonOptionType) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [test, setTest] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Detén la propagación solo para el DropDownComponent 
    e.preventDefault()
  }
  console.log(data);
  

  const handleActions = (key: Key) => {
    key === 'Delete' || key === 'Edit' ? window.confirm(`Are you sure you want to ${key}`) : key === 'View' ? console.log(data)
      : ''

    if (key === 'View') {
      setTest(!test)
      onOpen()
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
        test && (
          <ModalProduct data={data} isOpen={isOpen} onClose={onClose}/>
        )
      }
    </>
  )
}
