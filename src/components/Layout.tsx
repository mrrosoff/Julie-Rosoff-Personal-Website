import { Box, Button, Typography } from "@mui/material";

import { Outlet, useNavigate } from "react-router-dom";

import hero from "../assets/images/hero.jpg";

const Layout = () => {
    return (
        <Box width={"100vw"} height={"100vh"}>
            <div
                style={{
                    backgroundImage: `linear-gradient(to left, transparent, 50%, black), url(${hero})`,
                    height: "100vh",
                    minHeight: "100%",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative"
                }}
            />
            <NavBar />
            <Outlet />
        </Box>
    );
};

const NavBar = () => {
    return (
        <Box
            position={"absolute"}
            top={0}
            left={0}
            width={"100%"}
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
            p={4}
            pr={5}
            zIndex={1}
        >
            <NavBarButton text={"About Me"} path={"aboutme"} />
            <NavBarButton text={"Services"} path={"services"} />
            <NavBarButton text={"Schedule A Consultation"} path={"schedule"} />
        </Box>
    );
};

const NavBarButton = (props: { text: string; path: string }) => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(props.path)} sx={{ p: 1, pl: 2, pr: 2, ml: 3 }}>
            <Typography color={"white"} sx={{ fontSize: 20, fontWeight: 600 }}>
                {props.text}
            </Typography>
        </Button>
    );
};

export default Layout;
