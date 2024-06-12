import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Layout from "../Layout";
import Another from "../components/Another";
import Content from "../components/Content";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "content",
                element: <Content/>,
            },
            {
                path: "another",
                element:<Another/> ,
            },
        ],
    },
]);
export default router