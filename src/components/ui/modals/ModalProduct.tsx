import { useBoundStore } from '../../../store/bound.store'
import { Modal } from './Modal'
import { Input } from '@nextui-org/react'

const custom = {
  
    inputWrapper: [
      "h-[40px]"
    ],
    label: [
      "p-0"
    ]
  
}

export const ModalProduct = () => {

  const data = useBoundStore(state => state.data)
  const isOpen = useBoundStore(state => state.isOpen)
  const onClose = useBoundStore(state => state.onClose)


  const dateFormated = data?.expiration_date.split(/[-/]/).reverse().join("-")
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="formContent">
        <Input classNames={custom} defaultValue={data?.product_name} label={'Name'} size="sm"  type={'text'} variant="bordered"/>
        <Input classNames={custom} defaultValue={data?.price.toString()} label={'Price'} size="sm" type='number' variant="bordered"/>
        <Input classNames={custom} defaultValue={data?.quantity.toString()} label={'Quantity'} size="sm" type={'text'} variant="bordered"/>
        <Input classNames={custom} defaultValue={dateFormated} label={'Expire Date'} size="sm" type={'date'} variant="bordered"/>
        <Input classNames={custom} defaultValue={'VER SI SE PUEDE PONER UNDROPDOWN'} label={'Name'} size="sm" type={'text'} variant="bordered"/>
        <Input classNames={custom} defaultValue={data?.location} label={'Name'} size="sm" type={'text'} variant="bordered"/>
      </div>
    </Modal>
  )
}
