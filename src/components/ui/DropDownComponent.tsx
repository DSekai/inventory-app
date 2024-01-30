import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@nextui-org/react";
import { ButtonOptionType } from "../../types/types";


export const DropDownComponent = ({ title, options, image, sizeButton='lg' }: ButtonOptionType) => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button size={sizeButton} className="bg-white dark:bg-black"
                    variant="solid"
                >
                    {image}
                    {title}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={options}>
                {

                    (item) => (
                        <DropdownItem 
                            key={item.key}
                            color={item.key === 'Delete' ? 'danger' : 'default'}
                            className={item.key === 'Delete' ? 'text-danger' : ''}>{item.key}</DropdownItem>
                    )
                }

            </DropdownMenu>
        </Dropdown>
    )
}
