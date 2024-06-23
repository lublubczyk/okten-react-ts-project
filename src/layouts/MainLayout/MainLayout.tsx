import { Outlet } from "react-router-dom";

import { Footer, Header, SideBar } from "../../components"
import style from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className={style.MainLayout}>
                <SideBar />
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
};

export { MainLayout };