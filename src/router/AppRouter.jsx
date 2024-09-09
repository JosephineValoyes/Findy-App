import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import useAppContext from "../hooks/useAppContext";

const AppRouter = () => {
  const { user } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Login/>} />
          <Route element={<PublicRoutes isAuthenticated={user.isAuth} />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route element={<PrivateRoutes isAuthenticated={user.isAuth}/>}>
            <Route path='dashboard' element={<Dashboard/>}>
                <Route path=':dashboardid' element={<Profile/>} />            
            </Route>          
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}


export default AppRouter;

