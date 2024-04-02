import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@nextui-org/react";
import { ButtonOptionType } from "../../types/types";
import { Key } from "react";


export const DropDownComponent = ({ title, options, image, sizeButton='lg', data }: ButtonOptionType) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Detén la propagación solo para el DropDownComponent 
        e.preventDefault()
    }

    const handleActions = (key: Key) => {
        key === 'Delete' || key === 'Edit' ? window.confirm(`Are you sure you want to ${key}`) : key === 'View' ? console.log(data)
         : ''
        
    }

    return (
        <Dropdown  
        classNames={{
          content: "min-w-[100px] bg-stone-100"
        }}>
            <DropdownTrigger>
                <Button size={sizeButton} className="bg-white dark:bg-black"
                    variant="solid" onClick={handleClick}
                >
                    {image}
                    {title}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={options} onAction={(key) => handleActions(key)}>
                {

                    (item) => (
                        <DropdownItem
                            key={item.key}
                            color={item.key === 'Delete' ? 'danger' : 'default'}
                            className={item.key === 'Delete' ? 'text-danger' : ''}
                            >{item.key}</DropdownItem>
                    )
                }

            </DropdownMenu>
        </Dropdown>
    )
}
