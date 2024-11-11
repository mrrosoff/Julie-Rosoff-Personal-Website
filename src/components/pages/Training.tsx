import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Training = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            id={"training"}
            height={isSmall ? undefined : "150vh"}
            p={isSmall ? 2 : 4}
            pt={8}
            display={"flex"}
            alignItems={isMedium ? "center" : "inherit"}
        >
            <Box ml={isSmall ? 0 : 5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"} align={isSmall ? "center" : "inherit"}>
                    Training
                </Typography>
                <Typography
                    mt={5}
                    variant={"subtitle1"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Licensure
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    California Board of Psychology License: PSY15894, first licensed 1998
                </Typography>
                <Typography
                    mt={1}
                    variant={"subtitle1"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Education
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Doctor of Philosophy in Clinical Psychology with an emphasis in Child and Family
                    California School of Professional Psychology San Diego 1995 Approved by the
                    American Psychological Association
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Master of Arts in Psychology California School of Professional Psychology San
                    Diego 1991 Approved by the American Psychological Association
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Bachelor of Arts in Psychology and Political Science University of Southern
                    California 1988
                </Typography>
                <Typography
                    mt={3}
                    variant={"subtitle1"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Professional Training
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Post Doctoral Internships: Changes Chemical Dependency Intensive Outpatient
                    Program, Sharp Mesa Vista Behavioral Health Center, San Diego Approved by the
                    American Psychological Association
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Internship: Alvarado Parkway Institute, La Mesa
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Internship: Child Sexual Abuse Treatment Center At Child Protective Services San
                    Diego
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Practicum: Vista San Diego Center, Residential Treatment Center for Adolescents,
                    San Diego
                </Typography>
                <Typography
                    mt={3}
                    variant={"subtitle1"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Professional Affiliations
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    San Diego Psychological Association
                </Typography>
                <Typography
                    mt={3}
                    variant={"subtitle1"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Adopt a Family Foundation Committee Member
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Fundraising and Consultation for emotional, mental, and physical therapeutic
                    services for victims of terror in Israel
                </Typography>
                <Typography
                    mt={3}
                    variant={"subtitle1"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Interests
                </Typography>
                <Typography
                    mt={1}
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Gardening, hiking, traveling the world, learning about and enjoying different
                    cultures, cooking and baking, beach days with my labrador retriever, Link.
                </Typography>
            </Box>
        </Box>
    );
};

export default Training;
