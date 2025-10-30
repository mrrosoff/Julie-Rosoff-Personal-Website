import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Socials from "../Socials";

const Contact = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            component="section"
            id={"contact"}
            minHeight={isSmall ? undefined : "95vh"}
            p={isSmall ? 2 : 4}
            pt={8}
            pb={8}
            mb={isSmall ? 2 : 0}
            display={"flex"}
            alignItems={isMedium ? "center" : "inherit"}
            aria-label="Contact information section"
        >
            <Box ml={isSmall ? 0 : 5} display={"flex"} flexDirection={"column"}>
                <Typography
                    component="h2"
                    variant={"h1"}
                    color={"white"}
                    align={isSmall ? "center" : "inherit"}
                >
                    Contact Me
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    mt={5}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80), letterSpacing: "0.02em" }}
                    fontWeight={600}
                    align={isSmall ? "center" : "inherit"}
                >
                    Telehealth Services Provided
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{
                        mt: 2,
                        maxWidth: theme.spacing(isMedium ? 60 : 80),
                        lineHeight: 1.8,
                        letterSpacing: "0.01em"
                    }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Initial Individual Session, our first 50 minutes: <b>$200.00</b>
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{
                        maxWidth: theme.spacing(isMedium ? 60 : 80),
                        lineHeight: 1.8,
                        letterSpacing: "0.01em"
                    }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Individual 50 minute session: <b>$150.00</b>
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{
                        mt: 3,
                        mb: 4,
                        maxWidth: theme.spacing(isMedium ? 60 : 80),
                        lineHeight: 1.8,
                        letterSpacing: "0.01em"
                    }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I accept Venmo, Zelle, or credit card. If cost is a concern, please inquire for
                    a reduced fee.
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{
                        mb: 2,
                        maxWidth: theme.spacing(isMedium ? 60 : 80),
                        lineHeight: 1.8,
                        letterSpacing: "0.01em"
                    }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I accept the following insurance:
                </Typography>
                {isSmall ? (
                    <ul
                        style={{
                            listStyleType: "none",
                            paddingLeft: 0,
                            lineHeight: 2.2
                        }}
                    >
                        {[
                            "Aetna",
                            "Cigna",
                            "Anthem Blue Cross California",
                            "Oscar Health",
                            "Blue Shield of California",
                            "Oxford",
                            "Blue Cross Blue Shield of Massachusetts",
                            "United Healthcare",
                            "Carelon Behavioral Health"
                        ].map((insurance, index) => (
                            <li key={index}>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align="center"
                                    sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                >
                                    {insurance}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <table
                        style={{
                            borderCollapse: "collapse",
                            marginLeft: 0,
                            marginRight: 0
                        }}
                    >
                        <tbody>
                            <tr>
                                <td style={{ paddingRight: 24, paddingBottom: 4 }}>
                                    <Typography
                                        variant={"body2"}
                                        color={"white"}
                                        align="left"
                                        sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                    >
                                        Aetna
                                    </Typography>
                                </td>
                                <td style={{ paddingBottom: 4 }}>
                                    <Typography
                                        variant={"body2"}
                                        color={"white"}
                                        align="left"
                                        sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                    >
                                        Cigna
                                    </Typography>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingRight: 24, paddingBottom: 4 }}>
                                    <Typography
                                        variant={"body2"}
                                        color={"white"}
                                        align="left"
                                        sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                    >
                                        Anthem Blue Cross California
                                    </Typography>
                                </td>
                                <td style={{ paddingBottom: 4 }}>
                                    <Typography
                                        variant={"body2"}
                                        color={"white"}
                                        align="left"
                                        sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                    >
                                        Oscar Health
                                    </Typography>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingRight: 24, paddingBottom: 4 }}>
                                    <Typography
                                        variant={"body2"}
                                        color={"white"}
                                        align="left"
                                        sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                    >
                                        Blue Shield of California
                                    </Typography>
                                </td>
                                <td style={{ paddingBottom: 4 }}>
                                    <Typography
                                        variant={"body2"}
                                        color={"white"}
                                        align="left"
                                        sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                    >
                                        Oxford
                                    </Typography>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingRight: 24, paddingBottom: 4 }}>
                                    <Typography
                                        variant={"body2"}
                                        color={"white"}
                                        align="left"
                                        sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                    >
                                        Blue Cross Blue Shield of Massachusetts
                                    </Typography>
                                </td>
                                <td style={{ paddingBottom: 4 }}>
                                    <Typography
                                        variant={"body2"}
                                        color={"white"}
                                        align="left"
                                        sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                    >
                                        United Healthcare
                                    </Typography>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: 4 }}>
                                    <Typography
                                        variant={"body2"}
                                        color={"white"}
                                        align="left"
                                        sx={{ lineHeight: 1.6, letterSpacing: "0.01em" }}
                                    >
                                        Carelon Behavioral Health
                                    </Typography>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{
                        mt: 3,
                        maxWidth: theme.spacing(isMedium ? 60 : 80),
                        lineHeight: 1.8,
                        letterSpacing: "0.01em"
                    }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I can provide a superbill for you to submit to your insurance for reimbursement
                    of out-of-network psychotherapy.
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{
                        mt: 3,
                        maxWidth: theme.spacing(isMedium ? 60 : 80),
                        lineHeight: 1.8,
                        letterSpacing: "0.01em"
                    }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Reach out via phone or email with any questions and to schedule your 15 minute
                    consultation to determine if we are a good fit (complimentary). I look forward
                    to connecting with you soon!
                </Typography>
                <Box mt={3} ml={-2}>
                    <Socials />
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
