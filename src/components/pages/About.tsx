import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const About = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("xl"));
    const width = isSmall ? 80 : 100;

    return (
        <Box id={"about"} height={"95vh"} p={4} pt={8}>
            <Box ml={5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"}>
                    About
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 5, maxWidth: theme.spacing(width) }}
                >
                    I'm a dedicated and compassionate clinical psychologist committed to guiding you
                    on a journey toward mental well-being. With over 30 years of experience and a
                    genuine passion for helping individuals navigate life's challenges, I offer a
                    safe and nurturing space for exploring thoughts, feelings, and behaviors. My
                    approach is rooted in empathy and evidence-based therapies, ensuring that you
                    receive the highest level of care tailored to your unique needs. Whether you're
                    seeking support for anxiety, depression, relationship issues, or personal
                    self-development, I am here to collaborate with you, providing the guidance and
                    tools necessary for positive growth and healing. In these difficult times, I am
                    here to help!
                </Typography>
            </Box>
        </Box>
    );
};

export default About;
