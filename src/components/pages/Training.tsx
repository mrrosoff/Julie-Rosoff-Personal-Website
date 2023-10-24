import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Training = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("xl"));
    const width = isSmall ? 80 : 100;

    return (
        <Box id={"training"} height={"140vh"} p={4} pt={6} display={"flex"}>
            <Box ml={5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"}>
                    Training
                </Typography>
                <Typography
                    mt={5}
                    variant={"h6"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Licensure
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    California Board of Psychology License: PSY15894, first licensed 1998
                </Typography>
                <Typography
                    variant={"h6"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                >
                    Education
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Doctor of Philosophy in Clinical Psychology with an emphasis in Child and Family
                    California School of Professional Psychology San Diego 1995 Approved by the
                    American Psychological Association
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Master of Arts in Psychology California School of Professional Psychology San
                    Diego 1991 Approved by the American Psychological Association
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Bachelor of Arts in Psychology and Political Science University of Southern
                    California 1988
                </Typography>
                <Typography
                    variant={"h6"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                >
                    Professional Training
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Post Doctoral Internships: Changes Chemical Dependency Intensive Outpatient
                    Program, Sharp Mesa Vista Behavioral Health Center, San Diego Approved by the
                    American Psychological Association
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Internship: Alvarado Parkway Institute, La Mesa
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Internship: Child Sexual Abuse Treatment Center At Child Protective Services San
                    Diego
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Practicum: Vista San Diego Center, Residential Treatment Center for
                    Adolescents, San Diego
                </Typography>
                <Typography
                    variant={"h6"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                >
                    Professional Affiliations
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    San Diego Psychological Association
                </Typography>
                <Typography
                    variant={"h6"}
                    fontWeight={600}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(width) }}
                >
                    Interests
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Gardening, hiking, traveling the world, learning about and enjoying different
                    cultures, cooking and baking, beach days with my labrador retriever, Link.
                </Typography>
            </Box>
        </Box>
    );
};

export default Training;
