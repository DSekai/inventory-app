import { SubmitHandler, useForm } from 'react-hook-form'
import { useBoundStore } from '../../../store/bound.store'
import { Modal } from './Modal'
import { Button, Input, ModalFooter } from '@nextui-org/react'
import { InventoryType } from '../../../types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../../../validations/inventorySchema'
import { toast } from 'sonner'
import {useInventories} from '../../../hooks/useInventories'

const custom = {
  
    inputWrapper: [
      "h-[47px]"
    ],
    label: [
      // "py-1"
    ]
  
}

export const ModalInventory = () => {

  const {register, handleSubmit, formState: {errors}, } = useForm<InventoryType>({resolver: zodResolver(schema)}) 
  
  const {postInventory, updateInventory} = useInventories()

  // const data = useBoundStore(state => state.data)
  const isOpen = useBoundStore(state => state.isOpen)
  const onClose = useBoundStore(state => state.onClose)
  const modalType = useBoundStore(state => state.type)
  const dataInventory = useBoundStore(state => state.inventoryData)
  const setData = useBoundStore(state => state.setInventoryData)


  const isOpenType = isOpen && modalType === 'Inventory'
  
  const handleSubmitForm: SubmitHandler<InventoryType> = (data) => {
    if(!dataInventory){
      toast.promise(postInventory(data), {
        loading: 'Upload...',
        success: () => {
          onClose()
          // window.location.reload()
          return 'Inventory created'
        },
        error: 'Error'
      }) 
    }else {
      data.id = dataInventory.id
      toast.promise(updateInventory(data), {
        loading: 'Updating...',
        success: () => {
          onClose()
          return 'Inventory Updated'
        },
        error: 'Error'
      })
    }
    
  }

  const handleClose = () => {
    setData(null)
    onClose()
  }
  
  return (
    <Modal isOpen={isOpenType} onClose={handleClose} size='xs' title={'Product'}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="formContent">
          <Input classNames={custom} defaultValue={dataInventory?.name} errorMessage={errors.name?.message} isInvalid={!!errors.name?.message} label={'Name'} {...register('name')} size="sm" type={'text'} variant="bordered"/>
          <Input classNames={custom} defaultValue={dataInventory?.description} errorMessage={errors.description?.message} isInvalid={!!errors.description?.message} label={'Description'} {...register('description')} size="sm" type={'text'} variant="bordered"/>
        </div>
        <ModalFooter>
          <Button color="danger" onPress={handleClose}>
            Close
          </Button>
          <Button color="primary" type='submit'>
            Save
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}
