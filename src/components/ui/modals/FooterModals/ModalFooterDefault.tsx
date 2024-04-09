import { Button } from "@nextui-org/react"

interface Props {
  onClose: () => void
}

export const ModalFooterDefault = ({onClose}:Props) => {
  return (
    <>
      <Button color="danger" onPress={onClose}>
        Close
      </Button>
      <Button color="primary" onPress={onClose}>
        Save
      </Button>
    </>
  )
}
