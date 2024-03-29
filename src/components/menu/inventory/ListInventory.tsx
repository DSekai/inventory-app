import inventory from '../../../libs/inventory.json'
import { Inventorys } from '../../../types/types';
import { CardInventoryList } from '../../ui/menu/inventory/CardInventoryList';

export const ListInventory = () => {

  const inventorysList : Inventorys[] = inventory   

  return (
    <>
        <h2>Your Inventorys</h2>
      <div className="inventoryList">
        {
          inventorysList.length !== 0 && inventorysList.map(inventory => (
            <CardInventoryList id={inventory.id} title={inventory.title} description={inventory.description} key={inventory.id}/>
          ))
           // !agregar skeleton
        }
      </div>
    </>
  )
}
