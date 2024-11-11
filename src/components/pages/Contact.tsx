import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Socials from "../Socials";

const Contact = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            id={"contact"}
            height={isSmall ? undefined : "95vh"}
            p={isSmall ? 2 : 4}
            mb={isSmall ? 2 : 0}
            display={"flex"}
            alignItems={isMedium ? "center" : "inherit"}
        >
            <Box ml={isSmall ? 0 : 5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"} align={isSmall ? "center" : "inherit"}>
                    Contact Me
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    mt={5}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    fontWeight={600}
                    align={isSmall ? "center" : "inherit"}
                >
                    Telehealth Services Provided
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 2, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Initial Individual Session, our first 50 minutes: <b>$200.00</b>
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Individual 50 minute session: <b>$150.00</b>
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mb: 2, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I accept Venmo, Zelle, or credit card. If cost is a concern, please inquire for
                    a reduced fee.
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mb: 2, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I accept the following insurance:
                </Typography>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align={isSmall ? "center" : "inherit"}
                                >
                                    Aetna
                                </Typography>
                            </td>
                            <td>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align={isSmall ? "center" : "inherit"}
                                >
                                    Cigna
                                </Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align={isSmall ? "center" : "inherit"}
                                >
                                    Anthem Blue Cross California
                                </Typography>
                            </td>
                            <td>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align={isSmall ? "center" : "inherit"}
                                >
                                    Oscar Health
                                </Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align={isSmall ? "center" : "inherit"}
                                >
                                    Blue Shield of California
                                </Typography>
                            </td>
                            <td>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align={isSmall ? "center" : "inherit"}
                                >
                                    Oxford
                                </Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align={isSmall ? "center" : "inherit"}
                                >
                                    Blue Cross Blue Shield of Massachusetts
                                </Typography>
                            </td>
                            <td>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align={isSmall ? "center" : "inherit"}
                                >
                                    United Healthcare
                                </Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography
                                    variant={"body2"}
                                    color={"white"}
                                    align={isSmall ? "center" : "inherit"}
                                >
                                    Carelon Behavioral Health
                                </Typography>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I can provide a superbill for you to submit to your insurance for reimbursement
                    of out-of-network psychotherapy.
                </Typography>
                <Typography
                    variant={"body1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
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
