import { Modal as ModalUI, ModalContent, ModalHeader, ModalBody, ModalProps } from "@nextui-org/react";

interface Props extends ModalProps{
  children: React.ReactNode
  // childrenFooter: JSX.Element
  title: string
}

export const Modal = ({ children, title, ...props}: Props) => {

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
          </>
        }
      </ModalContent>
    </ModalUI>
  )
}
