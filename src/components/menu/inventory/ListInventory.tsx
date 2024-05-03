import { useInventories } from '../../../hooks/useInventories';
import { ButtonAdd } from '../../ui/ButtonAdd';
import { CardInventoryList } from '../../ui/menu/inventory/CardInventoryList';
import { ModalInventory } from '../../ui/modals/ModalInventory';
import { CardSkeleton } from '../../ui/Skeletons';

export const ListInventory = () => {
  const { inventories } = useInventories()
  return (
    <>
      <h2>Your Inventories</h2>
      <div className="inventoryList">
        {
          inventories.length !== 0 ? 
          (
            <>
              <ButtonAdd />
              {inventories.map((inventory) => (
                <CardInventoryList
                  inventory={inventory}
                  key={inventory.id}
                />
              ))}
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
