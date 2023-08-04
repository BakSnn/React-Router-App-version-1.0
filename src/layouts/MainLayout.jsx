import { Outlet } from "react-router-dom"
import Menu from "../components/Routing/Menu"

const MainLayout = () => {
  return (
    <>
    <Menu/>
    <Outlet></Outlet>
    </>
  )
}

export default MainLayout