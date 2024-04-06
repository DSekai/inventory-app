import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ButtonOptionType } from "../../types/types";
import { Key } from "react";
import { useBoundStore } from "../../store/bound.store";
// import { ModalProduct } from "./modals/ModalProduct";

export const DropDownComponent = ({ title, options, image, sizeButton = 'lg', data }: ButtonOptionType) => {
  const modalOpen = useBoundStore(state => state.onOpen)
  const dataModal = useBoundStore(state => state.setData)

  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [test, setTest] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Detén la propagación solo para el DropDownComponent 
    e.preventDefault()
  }
  // console.log(data);
  
  
  const handleActions = (key: Key) => {

    switch (key) {
      case 'View':
        dataModal(data)
        modalOpen()
        break;
      case 'Delete':
        window.confirm(`Are you sure you want to ${key}`)
        break
      case 'Edit':
        window.confirm(`Are you sure you want to ${key}`)
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
