import { createBrowserRouter } from "react-router-dom"
import { Menu } from "../components/menu/Menu"
import { App } from "../App"
import { ListInventory } from "../components/menu/inventory/ListInventory"
import { ViewInventory } from "../components/menu/inventory/ViewInventory"
import { Inventory } from "../components/menu/inventory/Inventory"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Menu />
      },
      {
        path: '/inventory',
        element: <Inventory />,
        children: [
          {
            index: true,
            element: <ListInventory />
          },
          {
            path: `:id`,
            element: <ViewInventory />
          }
        ]
      },
      {
        path: '*',
        element:<div className="">
          <h1>Page Not Found 404</h1>
        </div>
      }
    ]
  }
]) 
