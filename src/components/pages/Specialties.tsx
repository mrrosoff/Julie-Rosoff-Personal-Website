import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Specialties = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            component="section"
            id={"specialties"}
            minHeight={isSmall ? undefined : "95vh"}
            p={isSmall ? 2 : 4}
            pt={8}
            pb={8}
            display={"flex"}
            alignItems={isMedium ? "center" : "inherit"}
            aria-label="Specialties section"
        >
            <Box ml={isSmall ? 0 : 5} display={"flex"} flexDirection={"column"}>
                <Typography
                    component="h2"
                    variant={"h1"}
                    color={"white"}
                    align={isSmall ? "center" : "inherit"}
                >
                    Specialties
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{
                        mt: 5,
                        maxWidth: theme.spacing(isMedium ? 60 : 80),
                        lineHeight: 1.8,
                        letterSpacing: "0.01em",
                        mb: 2
                    }}
                    align={isSmall ? "center" : "justify"}
                >
                    Dr. Rosoff specializes in treating individuals with the following issues:
                </Typography>
                <ul
                    style={{
                        listStyleType: "none",
                        paddingLeft: isSmall ? 0 : 20,
                        lineHeight: 2.2
                    }}
                >
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Developmental transitions throughout the lifespan
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Adjustment to college and adulthood
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Maximizing achievement and success
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Substance abuse and Addiction
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Depression and Anxiety
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Post Traumatic Stress Disorder
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Stress Management
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Grief and Loss
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Trauma Based Processing
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "left"}
                            sx={{ lineHeight: 1.9, letterSpacing: "0.01em" }}
                        >
                            {isSmall ? "" : "• "}Relationship Issues
                        </Typography>
                    </li>
                </ul>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{
                        mt: 3,
                        maxWidth: theme.spacing(isMedium ? 60 : 80),
                        lineHeight: 1.8,
                        letterSpacing: "0.01em"
                    }}
                    align={isSmall ? "center" : "justify"}
                >
                    Dr. Rosoff utilizes an active and involved approach to therapy including the use
                    of: Cognitive Behavioral Therapy, Internal Family Systems, mindfulness based
                    stress reduction techniques, and recovery principles including 12-Step programs.
                    Be it through lived experiences or extensive clinical training, I am here to
                    connect and support health and wellbeing.
                </Typography>
            </Box>
        </Box>
    );
};

export default Specialties;
