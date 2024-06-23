import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {    

    return (
        <div className="mainPageWrap">
            <div className="contentWrap">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
