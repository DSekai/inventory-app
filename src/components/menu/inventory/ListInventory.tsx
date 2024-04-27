import { useInventory } from '../../../hooks/useInventorys';
import { CardInventoryList } from '../../ui/menu/inventory/CardInventoryList';
import { CardSkeleton } from '../../ui/Skeletons';

export const ListInventory = () => {
  const {inventory} = useInventory()
  return (
    <>
      <h2>Your Inventorys</h2>
      <div className="inventoryList">
        {
          inventory.length !== 0 ? inventory.map(inventory => (
            <CardInventoryList description={inventory.description}
              id={inventory.id} key={inventory.id} title={inventory.name}
            />
          )) : Array(3).fill(null).map((_,index) => <CardSkeleton key={index}/>)
        }
      </div>
    </>
  )
}
