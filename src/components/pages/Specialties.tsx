import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Specialties = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            id={"specialties"}
            height={isSmall ? "150vh" : "95vh"}
            p={4}
            pt={8}
            display={"flex"}
            alignItems={isMedium ? "center" : "inherit"}
        >
            <Box ml={isSmall ? 0 : 5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"} align={isSmall ? "center" : "inherit"}>
                    Specialties
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 5, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Dr. Rosoff specializes in treating adolescents and young adults with the
                    following issues: Developmental transitions to adulthood, college, maximizing
                    achievement and success Substance abuse and Addiction, Depression, Anxiety,
                    Grief, Loss, Trauma, Post Traumatic Stress Disorder (PTSD), Stress Management,
                    Relationship issues. Raising 3 young children after the sudden loss of my
                    husband enables me to deeply understand grief, loss and resilience, the fears
                    and joys of single motherhood and fostering growth.
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 5, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Dr. Rosoff utilizes an active, eclectic and involved approach to therapy
                    including the use of: Cognitive Behavioral Therapy (CBT) Internal Family
                    Systems, Mindfulness Based Stress Reduction techniques, Acceptance and
                    Commitment Therapy, Recovery Principles including 12-Step Programs.
                </Typography>
            </Box>
        </Box>
    );
};

export default Specialties;
