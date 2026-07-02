import Homepage from "../../pages/Homepage/Homepage";
import MainLayout from "../../shared/layouts/MainLayout";
import Report from "../../pages/Report/Report";
import { frontRoutes } from "./frontRoutes/frontRoutes";
import MobileExpenses from "../../pages/MobileExpenses/MobileExpenses";
import MobileIncome from "../../pages/MobileIncome/MobileIncome";
import LoginLayout from "../../shared/layouts/LoginLayout";
import Login from "../../features/Login/ui/Login";
import Register from "../../features/Register/ui/Register";
import AppInit from "../AppInit/AppInit";
import { appRoles } from "../roles/appRoles";
import ProtectedRoute from "./routeProtector/ProtectedRoute";
import Forbidden from "../../pages/Forbidden/Forbidden";

export const routes = [
  {
    path: "/",
    element: (
      <AppInit>
        <MainLayout />
      </AppInit>
    ),
    children: [
      {
        element: (
            <ProtectedRoute>
                <Homepage />
            </ProtectedRoute>),
        index: true,
        meta: {
          name: "Homepage",
          inMenu: true,
          role: [appRoles.admin, appRoles.user]
        },
      },
      {
        element: (
            <ProtectedRoute>
                <Report />
            </ProtectedRoute>),
        path: frontRoutes.report,
        meta: {
          name: "Report",
          inMenu: true,
          role: [appRoles.admin, appRoles.user]
        },
      },
      {
        element: (
            <ProtectedRoute>
                <MobileExpenses />
            </ProtectedRoute>),
        path: frontRoutes.expensesMobile,
        meta: {
          name: "MobileExpenses",
          inMenu: true,
          role: [appRoles.admin, appRoles.user]
        },
      },
      {
        element: (
            <ProtectedRoute>
                <MobileIncome />
            </ProtectedRoute>),
        path: frontRoutes.incomeMobile,
        meta: {
          name: "MobileIncome",
          inMenu: true,
          role: [appRoles.admin, appRoles.user]
        },
      },
      {
        path: frontRoutes.login,
        element: <LoginLayout />,
        children: [
          {
            index: true,
            element: <Login />,
            meta: {
              isInMenu: false,
              
            },
          },
        ],
      },
      {
        path: frontRoutes.forbidden,
        element: (
        <ProtectedRoute>
            <Forbidden/>
        </ProtectedRoute>),
        children: [
          {
            index: true,
            element: <Login />,
            meta: {
              isInMenu: false,
              
            },
          },
        ],
      },
      {
        path: frontRoutes.register,
        element: <LoginLayout />,
        children: [
            {
                index: true,
                element: <Register />,
                meta: {
                    isInMenu: false,
                },
            },
        ],
    },
    ],
  },
];
