import { Outlet } from "react-router";
import Header from "../../widgets/Header/ui/Header";

export default function MainLayout() {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}