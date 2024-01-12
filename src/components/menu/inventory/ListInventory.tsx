import inventory from '../../../libs/inventory.json'
import { Inventorys } from '../../../types/types';
import { CardInventoryList } from '../../ui/menu/inventory/CardInventoryList';

export const ListInventory = () => {

  const inventorysList : Inventorys[] = inventory 
  
  console.log(inventorysList);
  

  return (
    <div className='inventoryList'>
      {
        inventorysList.length !== 0 ? inventorysList.map(inventory => (
          <CardInventoryList id={inventory.id} title={inventory.title} key={inventory.id}/>
        ))
        : '' // !agregar skeleton
      }
    </div>
  )
}
