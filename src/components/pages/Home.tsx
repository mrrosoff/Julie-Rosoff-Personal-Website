import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Socials from "../Socials";

const Home = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Box id={"home"} height={"100vh"} p={4} display={"flex"} alignItems={"center"}>
            <Box
                ml={theme.spacing(isLarge ? 5 : 11)}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"end"}
            >
                <Typography variant={"h1"} color={"white"}>
                    Julie Rosoff Ph.D.
                </Typography>
                <Typography variant={"subtitle1"} color={"white"} sx={{ mt: -0.8 }}>
                    Your Path to Mental Wellness
                </Typography>
                <Box mt={2}>
                    <Socials />
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
