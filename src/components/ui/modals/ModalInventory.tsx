import { SubmitHandler, useForm } from 'react-hook-form'
import { useBoundStore } from '../../../store/bound.store'
import { Modal } from './Modal'
import { Button, Input, ModalFooter } from '@nextui-org/react'
import { InventoryType } from '../../../types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../../../validations/inventorySchema'
import { toast } from 'sonner'
import { postInventoriesAPI } from '../../../services/inventorys'
import React, { useMemo } from 'react'

const custom = {
  
    inputWrapper: [
      "h-[47px]"
    ],
    label: [
      // "py-1"
    ]
  
}

export const ModalInventory = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<InventoryType>({resolver: zodResolver(schema)})  

  // const data = useBoundStore(state => state.data)
  const isOpen = useBoundStore(state => state.isOpen)
  const onClose = useBoundStore(state => state.onClose)
  const modalType = useBoundStore(state => state.type)


  const isOpenType = isOpen && modalType === 'Inventory'
  
  const handleSubmitForm: SubmitHandler<InventoryType> = (data) => {
    toast.promise(postInventoriesAPI(data), {
      loading: 'Upload...',
      success: () => {
        onClose()
        return 'Inventory created'
      },
      error: 'Error'
    })
    
  }
  console.log(errors.description?.message);
  
  
  if(errors){

    if(errors.description) toast.error(errors.description?.message)
    
    if(errors.name)toast.error(errors.name?.message)
  }


  
  return (
    <Modal isOpen={isOpenType} onClose={onClose} size='xs' title={'Product'}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="formContent">
          <Input classNames={custom} label={'Name'} {...register('name')} size="sm" type={'text'} variant="bordered"/>
          {/* {errors.name?.message && <p className='text-red-600'>{errors.name.message}</p>} */}
          <Input classNames={custom} label={'Description'} {...register('description')} size="sm" type={'text'} variant="bordered"/>
        </div>
        <ModalFooter>
          <Button color="danger" onPress={onClose}>
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
