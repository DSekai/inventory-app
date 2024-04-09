import { Modal as ModalUI, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalProps } from "@nextui-org/react";

interface Props extends ModalProps{
  children: JSX.Element
  childrenFooter: JSX.Element
  title: string
}

export const Modal = ({ children, childrenFooter, title, ...props}: Props) => {

  return (
    <ModalUI
      {...props}
    >
      <ModalContent>
        {
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
            <ModalFooter>
              {childrenFooter}
            </ModalFooter>
          </>
        }
      </ModalContent>
    </ModalUI>
  )
}
