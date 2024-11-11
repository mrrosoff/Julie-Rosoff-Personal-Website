import { useMemo } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./Layout";

const App = () => {
    const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? "dark" : "light",
                    primary: {
                        main: "#FFFFFF"
                    }
                }
            }),
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
        subtitle1: {
            [theme.breakpoints.up("lg")]: {
                fontSize: "1.4rem"
            },
            fontSize: "1.2rem"
        },
        subtitle2: {
            fontSize: "1.1rem",
            fontWeight: 600
        },
        body1: {
            [theme.breakpoints.up("lg")]: {
                fontSize: "1.3rem"
            },
            fontSize: "1.2rem"
        },
        body2: {
            [theme.breakpoints.up("lg")]: {
                fontSize: "1.2rem"
            },
            fontSize: "1rem"
        }
    };

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
