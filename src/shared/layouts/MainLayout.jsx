import { Outlet } from "react-router";
import Header from "../../widgets/Header/ui/Header";
import Logout from "../../features/logout/ui/Logout";
import UserInfo from "../../entities/user/ui/UserInfo";

export default function MainLayout() {
  return (
    <>
    <Header>
        <UserInfo />
        <Logout/>
    </Header>
    <main>
        <Outlet/>
    </main>
    </>
  )
}