import { createBrowserRouter } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Booking from "./Components/Booking";
import Payment from "./Components/Payment";
const router=createBrowserRouter([


    {path:"/",element:<Navbar />},
    {path:"/login",element:<Login />},
    {path: "/signup", element: <Signup />},
    {path: "/Booking", element: <Booking />},
    {path: "/Payment", element: <Payment />},
]);
export default router;