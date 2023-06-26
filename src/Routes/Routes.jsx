import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Information from "../Pages/Home/Information/Information";
import Guide from "../Pages/Home/Guide/Guide";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/information',
                element: <Information></Information>
            },
            {
                path: '/guide',
                element: <Guide></Guide>
            }
        ]
    }
])

export default router;