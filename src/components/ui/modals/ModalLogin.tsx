import { Checkbox, Input, Link } from "@nextui-org/react"
import { Modal } from "./Modal"
import { useBoundStore } from "../../../store/bound.store"
import { ModalFooterLogin } from "./FooterModals/ModalFooterLogin"
import { LockIcon, MailIcon } from "../../../assets/img/icons"

export const ModalLogin = () => {

  const isOpen = useBoundStore(state => state.isOpen)
  const onClose = useBoundStore(state => state.onClose)
  const modalType = useBoundStore(state => state.type)
  
  const isOpenType = isOpen && modalType === 'Login'

  return (
    <>
      <Modal backdrop="blur" childrenFooter={<ModalFooterLogin onClose={onClose}/>} hideCloseButton={true} isDismissable={false} isKeyboardDismissDisabled={true} isOpen={isOpenType} onClose={onClose} size="xs" title="Login" >
        <>
          <Input
            autoFocus
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"  />
                  }
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
          />
          <Input
            endContent={
              <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
          />
          <div className="flex py-2 px-1 justify-between">
            <Checkbox
              classNames={{
                      label: "text-small",
                    }}
            >
              Remember me
            </Checkbox>
            <Link color="primary" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
        </>
      </Modal>
    </>
  )
}
