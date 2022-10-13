import { Box, Typography } from "@mui/material";

const AboutMe = () => {
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
                <Typography color={"white"} sx={{ fontSize: 150, fontWeight: 600, mb: 4 }}>
                    About Me
                </Typography>
                <Typography color={"white"} sx={{ fontSize: 22, fontWeight: 500 }}>
                    Blah blah blah blah
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutMe;
