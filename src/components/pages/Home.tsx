import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Socials from "../Socials";

const Home = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Box
            position={"absolute"}
            top={0}
            left={0}
            width={"100%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            p={8}
        >
            <Box
                ml={theme.spacing(isLarge ? 4 : 8)}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"end"}
            >
                <Typography variant={"h1"} color={"white"}>
                    Julie Rosoff Ph.D.
                </Typography>
                <Typography variant={"body1"} color={"white"}>
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
