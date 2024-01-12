import { createBrowserRouter } from "react-router-dom"
import { Menu } from "../components/menu/Menu"
import { App } from "../App"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Menu/>
            },
            {
                path: '*',
                element:
                    <div className="">
                        <h1>Page Not Found 404</h1>
                    </div>
            }
        ]
    }
]) 
