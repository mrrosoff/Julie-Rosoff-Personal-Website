import { useMemo } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

import type {} from "@mui/x-date-pickers/themeAugmentation";

import Router from "./Router";

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
            }),
        [darkMode]
    );

    return (
        <LocalizationProvider dateAdapter={AdapterLuxon}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router />
                </ThemeProvider>
            </StyledEngineProvider>
        </LocalizationProvider>
    );
};

export default App;
