import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = () => {
  return (
    <div className="layout">
        <Header/>
        <div className="sidebar">
            <p>sidebar</p>
        </div>
        <div className="content">
            <p>content</p>
        </div>
        <Footer/>
    </div>
  )
}
