import { Modal } from './Modal'
import { ProductType } from '../../../types/types'
import { Input } from '@nextui-org/react'

interface Props {
  isOpen: boolean
  onClose: () => void
  data: ProductType[]
}

const custom = {
  
    inputWrapper: [
      "h-[40px]"
    ],
    label: [
      "p-0"
    ]
  
}

export const ModalProduct = ({isOpen, onClose, data}: Props) => {
  console.log(data);
  
  const item = data[0]

  console.log(item);
  

  // const input = typeof data.price
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="formContent">
        {
            // test.map((item, index) => (
            //   <div key={index}>
            //     <div className="mb-[1rem] w-full">
            //       <Input classNames={custom} label={item.data} size="sm" type={item.input} variant="bordered"/>
            //     </div>
            //   </div>
            // ))
        }
        <Input classNames={custom} label={'Name'} size="sm" type={'text'} value={item.product_name} variant="bordered"/>
        {/* <Input classNames={custom} label={'Price'} size="sm" type='number' value={data.price} variant="bordered"/> */}
        <Input classNames={custom} label={'Name'} size="sm" type={'text'} variant="bordered"/>
        <Input classNames={custom} label={'Name'} size="sm" type={'text'} variant="bordered"/>
        <Input classNames={custom} label={'Name'} size="sm" type={'text'} variant="bordered"/>
        <Input classNames={custom} label={'Name'} size="sm" type={'text'} variant="bordered"/>

          
      </div>
    </Modal>
  )
}
