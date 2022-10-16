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
                ml={theme.spacing(isLarge ? 5 : 20)}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"end"}
            >
                <Typography variant={"h1"} color={"white"}>
                    Julie Rosoff
                </Typography>
                <Typography variant={"body1"} color={"white"}>
                    Family Concierge and Lifestyle Manager
                </Typography>
                <Box mt={2}>
                    <Socials />
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
