import { useEffect } from "react";

import { BrowserRouter, Routes, Route, Outlet, useNavigate, useLocation } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NotFound from "./NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Router404Inject />}>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path={"about"} element={<AboutMe />} />
                        <Route path={"contact"} element={<Contact />} />
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
