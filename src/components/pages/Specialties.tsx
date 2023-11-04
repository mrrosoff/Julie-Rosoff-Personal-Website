import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Specialties = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("xl"));
    const width = isSmall ? 80 : 100;

    return (
        <Box id={"specialties"} height={"95vh"} p={4} pt={8}>
            <Box ml={5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"}>
                    Specialties
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 5, maxWidth: theme.spacing(width) }}
                >
                    Dr. Rosoff specializes in treating young adults with the following issues:
                    Developmental transitions to adulthood, college, maximizing achievement and
                    success Substance abuse and Addiction, Depression, Anxiety, Grief, Loss, Trauma,
                    Post Traumatic Stress Disorder (PTSD), Stress Management, Relationship issues.
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 5, maxWidth: theme.spacing(width) }}
                >
                    Dr. Rosoff utilizes an active, eclectic and involved approach to therapy
                    including the use of: Cognitive Behavioral Therapy (CBT) Internal Family
                    Systems, Mindfulness Based Stress Reduction techniques, Recovery Principles
                    including 12-Step Programs.
                </Typography>
            </Box>
        </Box>
    );
};

export default Specialties;
