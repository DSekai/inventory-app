import { Button, Checkbox, Input, Link, ModalFooter } from "@nextui-org/react"
import { Modal } from "./Modal"
import { useBoundStore } from "../../../store/bound.store"
import { LockIcon, MailIcon } from "../../../assets/img/icons"
import { FormEvent } from "react"
import { useAuth } from "../../../hooks/useAuth"

export const ModalLogin = () => {

  const {login} = useAuth()

  const isOpen = useBoundStore(state => state.isOpen)
  const onClose = useBoundStore(state => state.onClose)
  const modalType = useBoundStore(state => state.type)
  
  const isOpenType = isOpen && modalType === 'Login'

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const data = Object.fromEntries(new window.FormData(e.target as HTMLFormElement));
    const fields = new window.FormData(e.target as HTMLFormElement)
    const email = (fields.get('email') ?? '')  as string
    const password = (fields.get('password') ?? '') as string
    // console.log(email,password);
    // console.log(e.target.);
    
    login({email, password}) 
    
  }

  return (
    <>
      <Modal backdrop="blur" hideCloseButton={true} isDismissable={false} isKeyboardDismissDisabled={true} isOpen={isOpenType} onClose={onClose} size="xs" title="Login" >
        <form onSubmit={handleSubmit}>
          <Input
            autoFocus
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"  />
                  }
            label="Email"
            name="email"
            placeholder="Enter your email"
            variant="bordered"
          />
          <Input
            endContent={
              <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
            label="Password"
            name="password"
            placeholder="Enter your password"
            type="password" variant="bordered"
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
