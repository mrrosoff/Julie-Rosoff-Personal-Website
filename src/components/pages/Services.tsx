import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Services = () => {
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
                    Services
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width), fontWeight: 600 }}
                >
                    Home Organization
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                >
                    Implementation of systems to create easily maintained work
                    areas, ie., garage, transition to inside, mail/ deliveries, school needs, sports
                    equipment , closets, kitchens, and more!
                </Typography>
            </Box>
        </Box>
    );
};

export default Services;
