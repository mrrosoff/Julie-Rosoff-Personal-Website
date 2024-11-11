import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const About = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            id={"about"}
            height={isSmall ? undefined : "95vh"}
            p={isSmall ? 2 : 4}
            pt={8}
            display={"flex"}
            alignItems={isMedium ? "center" : "inherit"}
        >
            <Box ml={isSmall ? 0 : 5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"} align={isSmall ? "center" : "inherit"}>
                    About
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 5, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I'm a dedicated and compassionate clinical psychologist committed to guiding you
                    on a journey toward mental well-being. With over 30 years of experience and a
                    genuine passion for helping individuals navigate life's challenges, I offer a
                    safe and nurturing space for exploring thoughts, feelings, and behaviors. My
                    approach is rooted in empathy and evidence-based therapies, ensuring that you
                    receive the highest level of care tailored to your unique needs.
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 4, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Whether you're seeking support for anxiety, depression, relationship issues, or
                    personal self-development, I am here to collaborate with you, providing the
                    guidance and tools necessary for positive growth and healing. Raising 3 young
                    children after the sudden loss of my husband enables me to uniquely understand
                    grief, loss and resilience, trauma, single motherhood, and finding fulfillment
                    and joy. In these difficult times, I am here to help!
                </Typography>
            </Box>
        </Box>
    );
};

export default About;
