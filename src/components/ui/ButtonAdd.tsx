import { Button } from '@nextui-org/react'
import { PlusIcon } from '../../assets/img/icons'
import { useBoundStore } from '../../store/bound.store'

export const ButtonAdd = () => {
  const modalOpen = useBoundStore(state => state.onOpen)
  const setType = useBoundStore(state => state.setType)

  const handleAction = () => {
    setType('Inventory')
    modalOpen()
    
  }
  return (
    <div className="flex gap-4 items-center fixed bottom-12 z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Button className='text-white' color="success" endContent={<PlusIcon/>} onPress={handleAction} size='lg'>
        Add new Inventory
      </Button>    
    </div>
  )
}
