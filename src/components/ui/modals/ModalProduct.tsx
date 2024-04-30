import { useEffect } from 'react'
import { useCategory } from '../../../hooks/useCategory'
import { useBoundStore } from '../../../store/bound.store'
import { Modal } from './Modal'
import { Button, Input, ModalFooter, Select, SelectItem } from '@nextui-org/react'

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

  const {category, getProjects} = useCategory()


  const isOpenType = isOpen && modalType === 'Product'

  // const dateFormated = data?.date_expire.split(/[-/]/).reverse().join("-")
  const dateFormated = data?.date_expire

  // const category = [{id:'algo'}, {id:'otro'}, {id:'Clothing'}]

  const searchCategory = async() => getProjects()

  useEffect(() => {
    searchCategory()
    console.log(category);
    console.log(data);
    
  },[]) 
  
  return (
    <Modal isOpen={isOpenType} onClose={onClose} size='xs' title={'Product'}>
      <div className="formContent">
        <Input classNames={custom} defaultValue={data?.name} label={'Name'} size="sm"  type={'text'} variant="bordered"/>
        <div className="number">
          <Input classNames={custom} defaultValue={data?.price.toString()} label={'Price'} size="sm" type='number' variant="bordered"/>
          <Input classNames={custom} defaultValue={data?.quantity.toString()} label={'Quantity'} size="sm" type={'text'} variant="bordered"/>
        </div>
        <Input classNames={custom} defaultValue={dateFormated} label={'Expire Date'} size="sm" type={'date'} variant="bordered"/>
        <Select defaultSelectedKeys={[data?.category.id ?? '']} label='Category' variant='bordered'>
          {category.map((categ) => (
            <SelectItem key={categ.id} value={categ.id}>
              {categ.name}
            </SelectItem>
          ))}
        </Select>
        {/* <Input classNames={custom} defaultValue={data?.location} label={'Location'} size="sm" type={'text'} variant="bordered"/> */}
      </div>
      <ModalFooter>
        <Button color="danger" onPress={onClose}>
          Close
        </Button>
        <Button color="primary" onPress={onClose}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  )
}
