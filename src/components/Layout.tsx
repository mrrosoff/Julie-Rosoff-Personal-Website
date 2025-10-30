import { useCallback, useEffect, useState } from "react";

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

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const item = document.getElementById("content");
        if (!item) return;

        const onScroll = () => setOffset(item.scrollTop);
        item.addEventListener("scroll", onScroll);
        return () => item.removeEventListener("scroll", onScroll);
    }, []);

    const item = document.getElementById("content");
    const afterHome = item ? item.offsetHeight < offset : false;

    // Calculate smooth opacity and gradient transition for mobile
    const calculateMobileOpacity = () => {
        if (!isSmall) return "0.75";
        if (!item) return "0.5";

        const viewportHeight = item.offsetHeight;
        // Transition completes quickly (at 0.5 viewport), then stays constant
        const scrollProgress = Math.min(offset / (viewportHeight * 0.5), 1);
        const opacityValue = 0.5 + (scrollProgress * 0.15); // Transition from 0.5 to 0.65, then stays at 0.65
        return opacityValue.toFixed(2);
    };

    const calculateGradientPercent = () => {
        if (!isSmall) return "70";
        if (!item) return "70";

        const viewportHeight = item.offsetHeight;
        // Start transitioning gradient at 0.5 viewport, complete by 1 viewport
        if (offset < viewportHeight * 0.5) {
            return "70";
        } else if (offset < viewportHeight) {
            // Smooth transition from 70 to 0 over the second half of first viewport
            const transitionProgress = (offset - viewportHeight * 0.5) / (viewportHeight * 0.5);
            const percentValue = 70 - (transitionProgress * 70);
            return Math.round(percentValue).toString();
        } else {
            return "0";
        }
    };

    const opacity = calculateMobileOpacity();
    const secondColor = `rgba(0,0,0,${opacity})`;
    const percent = calculateGradientPercent();

    return (
        <Box width={"100vw"} height={"100vh"}>
            <div
                style={{
                    backgroundImage: `linear-gradient(285deg, transparent, ${secondColor} ${percent}%, black), url(${image})`,
                    height: "100vh",
                    minHeight: "100%",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    transition: "background-image 0.3s ease-in-out"
                }}
            />
            {isSmall ? null : <NavBar />}
            <Box
                id={"content"}
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
            component="nav"
            role="navigation"
            aria-label="Main navigation"
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
    }, [props.path]);

    return (
        <Button
            onClick={onClick}
            sx={{ p: 1, pl: 2, pr: 2, ml: 1 }}
            aria-label={`Navigate to ${props.text} section`}
        >
            <Typography variant={"subtitle2"} color={"white"}>
                {props.text}
            </Typography>
        </Button>
    );
};

export default Layout;
