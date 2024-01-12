import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
// import { View } from "./View"

export const Layout = () => {
  return (
    <div className="layout">
      <Header/>
      <div className="content">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
