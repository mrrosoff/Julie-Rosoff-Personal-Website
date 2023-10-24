import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Specialties = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("xl"));
    const width = isSmall ? 80 : 100;

    return (
        <Box id={"specialties"} height={"100vh"} p={4} pt={6}>
            <Box ml={5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"}>
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
                    Substance abuse and Addiction, Depression, Anxiety, Grief, Loss, Trauma, Post
                    Traumatic Stress Disorder (PTSD), Stress Management
                </Typography>
            </Box>
        </Box>
    );
};

export default Specialties;
