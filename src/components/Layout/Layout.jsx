import Header from "../common/Header/Header"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            
        </>
    )
}

export default Layout