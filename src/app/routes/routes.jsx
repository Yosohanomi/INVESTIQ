import Homepage from "../../pages/Homepage/Homepage";
import MainLayout from "../layouts/MainLayout";
import Report from "../../pages/Report/Report";
import { frontRoutes } from "./frontRoutes/frontRoutes";

export const routes = [
    {
        element: <MainLayout/>,
        path: frontRoutes.mainLayout,
        children: [
            {
                element: <Homepage/>,
                index: true,
                meta: {
                    name: "Homepage",
                    inMenu:true
                }
            },
            {
                element: <Report/>,
                path: "report",
                meta: {
                    name: "Report",
                    inMenu:true
                }
            }
        ]
    }
    //         {
    //             element: <Page404/>,
    //             path: frontRoutes.page404,
    //             meta: {
    //                 inMenu:false
    //             }
    //         },
]