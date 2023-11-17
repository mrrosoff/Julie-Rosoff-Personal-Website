import { useCallback } from "react";

import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";

import hero from "../assets/images/hero.jpg";
import portrait from "../assets/images/portrait.jpg";

import Home from "./pages/Home";
import About from "./pages/About";
import Specialties from "./pages/Specialties";
import Training from "./pages/Training";
import Contact from "./pages/Contact";

const Layout = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const image = isSmall ? portrait : hero;

    return (
        <Box width={"100vw"} height={"100vh"}>
            <div
                style={{
                    backgroundImage: `linear-gradient(285deg, transparent, rgba(0,0,0,${
                        isSmall ? "0.5" : "0.75"
                    }) 70%, black), url(${image})`,
                    height: "100vh",
                    minHeight: "100%",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative"
                }}
            />
            {isSmall ? null : <NavBar />}
            <Box
                position={"absolute"}
                top={0}
                left={0}
                height={"100vh"}
                width={"100vw"}
                sx={{
                    overflowY: "scroll",
                    "::-webkit-scrollbar": { display: "none" }
                }}
            >
                <Home />
                <About />
                <Specialties />
                <Training />
                <Contact />
            </Box>
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
            zIndex={1}
        >
            <NavBarButton text={"Home"} path={"home"} />
            <NavBarButton text={"About"} path={"about"} />
            <NavBarButton text={"Specialties"} path={"specialties"} />
            <NavBarButton text={"Training"} path={"training"} />
            <NavBarButton text={"Contact"} path={"contact"} />
        </Box>
    );
};

const NavBarButton = (props: { text: string; path: string }) => {
    const onClick = useCallback(() => {
        const element = document.getElementById(props.path);
        element?.scrollIntoView({ behavior: "smooth" });
    }, [document]);

    return (
        <Button onClick={onClick} sx={{ p: 1, pl: 2, pr: 2, ml: 1 }}>
            <Typography variant={"body2"} color={"white"}>
                {props.text}
            </Typography>
        </Button>
    );
};

export default Layout;
