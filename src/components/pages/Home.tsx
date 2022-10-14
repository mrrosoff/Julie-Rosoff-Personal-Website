import { Box, Typography } from "@mui/material";

import Socials from "../Socials";

const Home = () => {
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
            <Box ml={20} display={"flex"} flexDirection={"column"} alignItems={"end"}>
                <Typography variant={"h1"} color={"white"}>
                    Julie Rosoff
                </Typography>
                <Typography variant={"body1"}  color={"white"}>
                    Family Concierge, Personal Assistant, and Lifestyle Coach
                </Typography>
                <Box mt={2}>
                    <Socials />
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
