import { Modal as ModalUI, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface Props {
  isOpen: boolean
  onClose: () => void
  size?: sizes
  children: JSX.Element
}

type sizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";

export const Modal = ({ isOpen, onClose, size = 'xs', children }: Props) => {

  // const test = [
  //   {
  //     data: 'Product Name',
  //     input: 'text'
  //   },
  //   {
  //     data: 'Product Name',
  //     input: 'number'
  //   },
  // ]

  return (
    <ModalUI
      isOpen={isOpen}
      onClose={onClose}
      size={size}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose} variant="light">
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalUI>
  )
}
