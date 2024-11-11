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
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 5, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Dr. Rosoff specializes in treating individuals with the following issues:
                </Typography>
                <ul style={{ listStyleType: isSmall ? "none" : undefined }}>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Developmental transitions throughout the lifespan
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Adjustment to college and adulthood
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Maximizing achievement and success
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Substance abuse and Addiction
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Depression and Anxiety
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Post Traumatic Stress Disorder
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Stress Management
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Grief and Loss
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Trauma Based Processing
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            variant={"body2"}
                            color={"white"}
                            align={isSmall ? "center" : "inherit"}
                        >
                            Relationship Issues
                        </Typography>
                    </li>
                </ul>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 2, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
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
