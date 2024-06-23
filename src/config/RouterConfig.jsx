import React from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = React.lazy(() => import("../views/layout/MainLayout"));
const ListBeneficiary = React.lazy(() => import("../views/ManageBeneficiary/components/ListBeneficiary"));
const AddBeneficiary = React.lazy(() => import("../views/ManageBeneficiary/components/AddBeneficiary"));
const EditBeneficiary = React.lazy(() => import("../views/ManageBeneficiary/components/EditBeneficiary"));
const ViewBeneficiary = React.lazy(() => import("../views/ManageBeneficiary/components/ViewBeneficiary"));
// const PageNotFound = React.lazy(() => import("../views/ErrorPage/PageNotFound"));


export default function Router() {
    const element = useRoutes(RouterConfig);
    return element;
}

export const RouterConfig = [
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <ListBeneficiary />,
            },
            {
                path: "/add",
                element: <AddBeneficiary />
            },
            {
                path: "/edit/:id",
                element: <EditBeneficiary />
            },
            {
                path: "/view/:id",
                element: <ViewBeneficiary />
            }            
        ],
    },
    
    // {
    //     path: "*",
    //     element: <PageNotFound />,
    // },
];
