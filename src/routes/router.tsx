import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../components/layouts/Layout"
import { Menu } from "../components/menu/Menu"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
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
