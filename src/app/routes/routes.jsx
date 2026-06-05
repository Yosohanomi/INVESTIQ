import Homepage from "../../pages/Homepage/Homepage";
import MainLayout from "../layouts/MainLayout";
import Report from "../../pages/Report/Report";
import { frontRoutes } from "./frontRoutes/frontRoutes";
import MobileExpenses from "../../pages/MobileExpenses/MobileExpenses";
import MobileIncome from "../../pages/MobileIncome/MobileIncome";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../../features/Login/ui/Login";
import Register from "../../features/Register/ui/Register";

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
                path: frontRoutes.report,
                meta: {
                    name: "Report",
                    inMenu:true
                }
            },
            {
                element: <MobileExpenses/>,
                path: frontRoutes.expensesMobile,
                meta: {
                    name: "MobileExpenses",
                    inMenu:true
                }
            },
            {
                element: <MobileIncome/>,
                path: frontRoutes.incomeMobile,
                meta: {
                    name: "MobileIncome",
                    inMenu:true
                }
            },
            {
                path: "/login",
                element: <LoginLayout/>,
                children: [
                    {
                        index: true,
                        element: <Login/>,
                        meta: {
                            isInMenu: false,
                        }
                    }
                ]
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