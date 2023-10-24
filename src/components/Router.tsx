import { useEffect } from "react";

import { BrowserRouter, Routes, Route, Outlet, useNavigate, useLocation } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Schedule from "./pages/Schedule";
import NotFound from "./NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Router404Inject />}>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path={"aboutme"} element={<AboutMe />} />
                        <Route path={"schedule"} element={<Schedule />} />
                        <Route path={"*"} element={<NotFound />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const Router404Inject = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const splitPath = location.search.split("/");
        if (splitPath[0] === "?") {
            navigate(splitPath[1]);
        }
    }, [location]);

    return <Outlet />;
};

export default Router;
