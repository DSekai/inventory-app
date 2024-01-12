import inventory from '../../../libs/inventory.json'
import { Inventorys } from '../../../types/types';

export const ListInventory = () => {

  const inventorysList : Inventorys[] = inventory 
  
  console.log(inventorysList);
  

  return (
    <div className='inventoryList'>
      {
        inventorysList.length !== 0 ? inventorysList.map(inventory => (
          <div key={inventory.id} className="">
              
          </div>
        ))
        : ''
      }
    </div>
  )
}
