import { useState } from "react";

import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";

import { DateTime } from "luxon";

import Socials from "../Socials";

const Contact = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            id={"contact"}
            height={isSmall ? "120vh" : "95vh"}
            p={4}
            pt={8}
            display={"flex"}
            alignItems={isMedium ? "center" : "inherit"}
        >
            <Box ml={isSmall ? 0 : 5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"} align={isSmall ? "center" : "inherit"}>
                    Contact Me
                </Typography>
                <Typography
                    variant={"h6"}
                    color={"white"}
                    mt={5}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    fontWeight={600}
                    align={isSmall ? "center" : "inherit"}
                >
                    Telehealth services provided.
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 2, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Initial Individual Session, our first 50 minutes: $200.00
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Individual 50 minute session: $150.00
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    *If cost is a concern, please inquire for a reduced sliding scale fee.
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mb: 2, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I accept Venmo, Zelle, or credit card.
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mb: 2, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I accept the following insurance:
                </Typography>
                <table>
                    <tr>
                        <td>
                            <Typography
                                variant={"subtitle1"}
                                color={"white"}
                                align={isSmall ? "center" : "inherit"}
                            >
                                Aetna
                            </Typography>
                        </td>
                        <td>
                            <Typography
                                variant={"subtitle1"}
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
                                variant={"subtitle1"}
                                color={"white"}
                                align={isSmall ? "center" : "inherit"}
                            >
                                Anthem Blue Cross California
                            </Typography>
                        </td>
                        <td>
                            <Typography
                                variant={"subtitle1"}
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
                                variant={"subtitle1"}
                                color={"white"}
                                align={isSmall ? "center" : "inherit"}
                            >
                                Blue Shield of California
                            </Typography>
                        </td>
                        <td>
                            <Typography
                                variant={"subtitle1"}
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
                                variant={"subtitle1"}
                                color={"white"}
                                align={isSmall ? "center" : "inherit"}
                            >
                                Blue Cross Blue Shield of Massachusetts
                            </Typography>
                        </td>
                        <td>
                            <Typography
                                variant={"subtitle1"}
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
                                variant={"subtitle1"}
                                color={"white"}
                                align={isSmall ? "center" : "inherit"}
                            >
                                Carelon Behavioral Health
                            </Typography>
                        </td>
                    </tr>
                </table>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I can provide a superbill for you to submit to your insurance for reimbursement
                    of out-of-network psychotherapy.
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 3, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    Reach out via phone or email with any questions and to schedule your 15 minute
                    consultation to determine if we are a good fit. (complimentary) I look forward
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
