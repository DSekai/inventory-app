import inventory from '../../../libs/inventory.json'
import { Inventorys } from '../../../types/types';
import { CardInventoryList } from '../../ui/menu/inventory/CardInventoryList';
import { CardSkeleton } from '../../ui/Skeletons';

export const ListInventory = () => {

  const inventorysList: Inventorys[] = inventory

  return (
    <>
      <h2>Your Inventorys</h2>
      <div className="inventoryList">
        {
          inventorysList.length !== 0 ? inventorysList.map(inventory => (
            <CardInventoryList description={inventory.description}
              id={inventory.id} key={inventory.id} title={inventory.title}
            />
          )) : Array(3).fill(null).map((_,index) => <CardSkeleton key={index}/>)
        }
      </div>
    </>
  )
}
