import { useMemo } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Hidden, responsiveFontSizes } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

import type {} from "@mui/x-date-pickers/themeAugmentation";

import Router from "./Router";
import MobileLayout from "./MobileLayout";

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
                    },
                    components: {
                        MuiDatePicker: {
                            styleOverrides: {
                                root: {
                                    backgroundColor: "red"
                                }
                            }
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
                fontSize: "1.4rem"
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
        <LocalizationProvider dateAdapter={AdapterLuxon}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Hidden mdUp>
                        <MobileLayout />
                    </Hidden>
                    <Hidden mdDown>
                        <Router />
                    </Hidden>
                </ThemeProvider>
            </StyledEngineProvider>
        </LocalizationProvider>
    );
};

export default App;
