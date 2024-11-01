import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/app/landing_page/LandingPage";
import ErrorPage from "@/app/util/error_page/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export const RouteComponents = () => {
    return <RouterProvider router={routes} />;
};
