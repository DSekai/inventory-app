import { useInventory } from '../../../hooks/useInventorys';
import { ButtonAdd } from '../../ui/ButtonAdd';
import { CardInventoryList } from '../../ui/menu/inventory/CardInventoryList';
import { ModalInventory } from '../../ui/modals/ModalInventory';
import { CardSkeleton } from '../../ui/Skeletons';

export const ListInventory = () => {
  const { inventory } = useInventory()
  return (
    <>
      <h2>Your Inventories</h2>
      <div className="inventoryList">
        {
          inventory.length !== 0 ? 
          (
            <>
              {inventory.map((inventory) => (
                <CardInventoryList
                  description={inventory.description}
                  id={inventory.id}
                  key={inventory.id}
                  name={inventory.name}
                />
              ))}
              <ButtonAdd />
            </>
          ) : (
            Array(3)
              .fill(null)
              .map((_, index) => <CardSkeleton key={index} />)
          )
        }
        <ModalInventory/>
      </div>
    </>
  )
}
