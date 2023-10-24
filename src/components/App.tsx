import { useMemo } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Hidden, responsiveFontSizes } from "@mui/material";

import MobileLayout from "./MobileLayout";
import Layout from "./Layout";

const App = () => {
    const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const theme = useMemo(
        () =>
            responsiveFontSizes(
                createTheme({
                    palette: {
                        mode: darkMode ? "dark" : "light",
                        primary: {
                            main: "#FFFFFF"
                        }
                    }
                })
            ),
        [darkMode]
    );

    theme.typography = {
        ...theme.typography,
        h1: {
            [theme.breakpoints.up("lg")]: {
                fontSize: "5rem"
            },
            [theme.breakpoints.up("xl")]: {
                fontSize: "10rem"
            },
            fontSize: "4rem",
            fontWeight: 600
        },
        body1: {
            [theme.breakpoints.up("xl")]: {
                fontSize: "1.6rem"
            },
            fontSize: "1rem",
            fontWeight: 500
        },
        body2: {
            [theme.breakpoints.up("xl")]: {
                fontSize: "1.2rem"
            },
            fontSize: "1rem",
            fontWeight: 600
        }
    };

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Hidden mdUp>
                    <MobileLayout />
                </Hidden>
                <Hidden mdDown>
                    <Layout />
                </Hidden>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
