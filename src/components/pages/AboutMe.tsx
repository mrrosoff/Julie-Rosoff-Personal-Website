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
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
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
                <Box mt={4}>
                    <Typography variant={"h4"} color={"white"}>
                        Specialties
                    </Typography>
                    <Typography
                        variant={"subtitle1"}
                        color={"white"}
                        sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                    >
                        Young Adults Developmental Transitions: to adulthood, college, maximizing
                        achievement and success.
                    </Typography>
                    <Typography
                        variant={"subtitle1"}
                        color={"white"}
                        sx={{ mt: 1, maxWidth: theme.spacing(width) }}
                    >
                        Substance abuse and Addiction, Depression, Anxiety, Grief, Loss,
                        Trauma, Post Traumatic Stress Disorder (PTSD), Stress Management
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutMe;
