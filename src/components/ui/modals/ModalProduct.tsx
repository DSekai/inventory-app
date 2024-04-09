import { useBoundStore } from '../../../store/bound.store'
import { Modal } from './Modal'
import { Input, Select, SelectItem } from '@nextui-org/react'
import { ModalFooterDefault } from './FooterModals/ModalFooterDefault'

const custom = {
  
    inputWrapper: [
      "h-[47px]"
    ],
    label: [
      // "py-1"
    ]
  
}

export const ModalProduct = () => {

  const data = useBoundStore(state => state.data)
  const isOpen = useBoundStore(state => state.isOpen)
  const onClose = useBoundStore(state => state.onClose)
  const modalType = useBoundStore(state => state.type)


  const isOpenType = isOpen && modalType === 'Product'

  const dateFormated = data?.expiration_date.split(/[-/]/).reverse().join("-")

  const category = [{id:'algo'}, {id:'otro'}, {id:'Clothing'}]
  
  return (
    <Modal childrenFooter={<ModalFooterDefault onClose={onClose}/>} isOpen={isOpenType} onClose={onClose} size='xs' title={'Product'}>
      <div className="formContent">
        <Input classNames={custom} defaultValue={data?.product_name} label={'Name'} size="sm"  type={'text'} variant="bordered"/>
        <div className="number">
          <Input classNames={custom} defaultValue={data?.price.toString()} label={'Price'} size="sm" type='number' variant="bordered"/>
          <Input classNames={custom} defaultValue={data?.quantity.toString()} label={'Quantity'} size="sm" type={'text'} variant="bordered"/>
        </div>
        <Input classNames={custom} defaultValue={dateFormated} label={'Expire Date'} size="sm" type={'date'} variant="bordered"/>
        <Select defaultSelectedKeys={[data?.category ?? '']} label='Category' variant='bordered'>
          {category.map((categ) => (
            <SelectItem key={categ.id} value={categ.id}>
              {categ.id}
            </SelectItem>
          ))}
        </Select>
        <Input classNames={custom} defaultValue={data?.location} label={'Location'} size="sm" type={'text'} variant="bordered"/>
      </div>
    </Modal>
  )
}
