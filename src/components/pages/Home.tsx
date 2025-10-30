import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Socials from "../Socials";

const Home = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            component="section"
            id={"home"}
            height={"100vh"}
            p={isSmall ? 2 : 4}
            display={"flex"}
            alignItems={"center"}
            aria-label="Home section"
        >
            <Box
                ml={theme.spacing(isSmall ? 0 : 12)}
                pt={isSmall ? "50vh" : "35vh"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={isMedium ? "center" : "end"}
            >
                <Typography
                    component="h1"
                    variant={"h1"}
                    color={"white"}
                    align={isMedium ? "center" : "inherit"}
                >
                    Julie Rosoff Ph.D.
                </Typography>
                <Typography
                    component="p"
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: isMedium ? 1 : -0.8 }}
                >
                    Your Path to Mental Wellness
                </Typography>
                {!isSmall && (
                    <Box mt={2}>
                        <Socials />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Home;
