import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Training = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("xl"));
    const width = isSmall ? 80 : 100;

    return (
        <Box id={"training"} height={"100vh"} p={4} pt={6} display={"flex"}>
            <Box ml={5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"}>
                    Training
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                >
                    abc
                </Typography>
                
            </Box>
        </Box>
    );
};

export default Training;
