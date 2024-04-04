import { Button } from "@nextui-org/react"

export const FormEdition = () => {

    const deleteData = () => {
        // aqui se elimina el dato
    }

    const handleClick = () => {
        const confirm = window.confirm('Are you sure?')

        if (confirm) deleteData()

    }
    return (
      <form className="formEdition">
        <div className="formHeader">
          <h2>TITLE</h2>
        </div>
        <div className="formContent">
          <div>
            <h3>Product Name</h3>
            <input id="" name="" type="text" />
          </div>
          <div>
            <h3>Price</h3>
            <input id="" name="" type="text" />
          </div>
          <div>
            <h3>Quantity</h3>
            <input id="" name="" type="text" />
          </div>
          <div>
            <h3>Expiration Date:</h3>
            <input id="" name="" type="text" />
          </div>
          <div>
            <h3>Price</h3>
            <input id="" name="" type="text" />
          </div>
          <div>
            <h3>Price</h3>
            <input id="" name="" type="text" />
          </div>
        </div>
        <div className="formfooter">
          <Button color="danger" onClick={handleClick} size="md"> Delete</Button>
          <Button color="secondary" size="md"> Save</Button>
        </div>
      </form>
    )
}
