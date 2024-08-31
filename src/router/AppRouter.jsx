import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
//import PublicRoutes from "./PublicRoutes";
//import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import PostDetails from "../pages/PostDetails/PostDetails"

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/PostDetails" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}


export default AppRouter;


//import useAppContext from "../hooks/useAppContext";

// const AppRouter = () => {
 
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home/>} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />    
//           {/* <Route element={<PublicRoutes isAuthenticated={false} />}>
//             <Route path="login" element={<Login />} />
//             <Route path="register" element={<Register />} />
//           </Route> */}
//           <Route path="Profile" element={<Profile/> } />
//           <Route path="NotFound" element={<NotFound/> } />
//           <Route path="PostDetails" element={<PostDetails />}>
//           <Route path=":DashboardId" element={<Dashboard />} />
//           {/* <Route element={<PrivateRoutes isAuthenticated={false} />}>
//             <Route path="PostDetails" element={<PostDetails />}>
//               <Route path=":DashboardId" element={<Dashboard />} />
//             </Route>
//             <Route path="Profile" element={<Profile/> } />
//             <Route path="NotFound" element={<NotFound/> } />
//           </Route> */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };
