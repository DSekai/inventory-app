import { Button } from "@nextui-org/react"

interface Props {
  onClose: () => void
}

export const ModalFooterLogin = ({onClose}: Props) => {
  return (
    <>
      {/* <Button color="danger" onPress={onClose} variant="flat">
        Close
      </Button> */}
      <Button color="primary" onPress={onClose}>
        Sign in
      </Button>
    </>
  )
}
