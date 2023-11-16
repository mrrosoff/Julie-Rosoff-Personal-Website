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
            height={"95vh"}
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
                    color={"white"}
                    mt={5}
                    variant={"h6"}
                    fontWeight={600}
                    align={isSmall ? "center" : "inherit"}
                >
                    Billing
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 1, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
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
                    sx={{ maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    I do not accept insurance. I do accept cash or credit card. I can provide a
                    superbill for you to submit to your insurance for reimbursement of
                    out-of-network psychotherapy.
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 5, maxWidth: theme.spacing(isMedium ? 60 : 80) }}
                    align={isSmall ? "center" : "inherit"}
                >
                    TELEHEALTH services provided. I hope to connect with you soon! Reach out via
                    email with any questions!
                </Typography>
                <Box mt={3} ml={-2}>
                    <Socials />
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
