import { Button, Input, Link, ModalFooter } from "@nextui-org/react"
import { Modal } from "./Modal"
import { useBoundStore } from "../../../store/bound.store"
import { LockIcon, MailIcon } from "../../../assets/img/icons"
import { useAuth } from "../../../hooks/useAuth"
import { toast } from "sonner"
import { SubmitHandler, useForm } from "react-hook-form"
import { LoginType } from "../../../types/types"


export const ModalLogin = () => {
  const {register, handleSubmit} = useForm<LoginType>()

  const {login} = useAuth()

  const isOpen = useBoundStore(state => state.isOpen)
  const onClose = useBoundStore(state => state.onClose)
  const modalType = useBoundStore(state => state.type)
  
  const isOpenType = isOpen && modalType === 'Login'

  const handleSubmitForm: SubmitHandler<LoginType> = async (data) => {
    toast.promise(login(data) , {
      loading: 'Loading...',
      success: () => {
        onClose()
        return `You are logged`;
      },
      error: 'You email or password is not correct' 
    }); 
  }

  return (
    <>
      <Modal backdrop="blur" hideCloseButton={true} isDismissable={false} isKeyboardDismissDisabled={true} isOpen={isOpenType} onClose={onClose} size="xs" title="Login" >
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            autoFocus
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"  />
                  }
            label="Email"
            {...register('email')}
            placeholder="Enter your email"
            variant="bordered"
          />
          <Input
            endContent={
              <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
            label="Password"
            {...register('password')}
            placeholder="Enter your password"
            type="password" variant="bordered"
          />
          <div className="flex py-2 px-1 justify-end">
            {/* <Checkbox
              classNames={{
                      label: "text-small",
                    }}
              isSelected={isChecked}
              name="check"
              onChange={handleCheckboxChange}
            >
              Remember me
            </Checkbox> */}
            <Link color="primary" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
          <ModalFooter>
            {/* <Button color="danger" onPress={onClose} variant="flat">
          Close
        </Button> */}
            <Button color="primary" type="submit" >
              Sign in
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  )
}
