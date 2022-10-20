import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const AboutMe = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("xl"));
    const width = isSmall ? 80 : 100;

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
                    About Me
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                >
                    I am a widowed, mother of 3 successful young adults, local to Carmel Valley, San
                    Diego. I have lived in my home for the past 24 years, and 14 of those years have
                    been as a single mom. I have learned so much and want to share it with you!
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                >
                    I’m grateful to have a wonderful home, and have been able to maintain, remodel
                    and make repairs when needed. The raising of my 3 children required a caregiver
                    who was able to operate under stress, in unpredictable, uncharted situations,
                    and create a smoothly run, warm and caring environment, a cozy household, all
                    while able to function well within normal hours! I have a background in
                    psychology and strive to increase efficiency, organization and comfort, to
                    furthermore increase overall happiness , health and well-being in the home. I am
                    available to help right now!
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                >
                    I am available to help right now!
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutMe;
