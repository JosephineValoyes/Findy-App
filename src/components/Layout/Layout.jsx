import { Outlet } from "react-router-dom"
import Header from "../../components/common/Header/Header"
const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet />
            
            
        </>
    )
}

export default Layout