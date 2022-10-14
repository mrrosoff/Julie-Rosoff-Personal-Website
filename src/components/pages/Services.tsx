import { Box, Button, Typography } from "@mui/material";

const Services = () => {
    return (
        <Box
            position={"absolute"}
            top={0}
            left={0}
            width={"100%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            p={8}
        >
            <Box ml={5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"}>
                    Services
                </Typography>
                <Typography variant={"body1"} color={"white"}>
                    Blah blah blah blah
                </Typography>
            </Box>
        </Box>
    );
};

export default Services;
