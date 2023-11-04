import { useState } from "react";

import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";

import { DateTime } from "luxon";

import Socials from "../Socials";

const Schedule = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("xl"));
    const width = isSmall ? 80 : 100;

    return (
        <Box id={"contact"} height={"95vh"} p={4} pt={8} display={"flex"} flexDirection={"column"}>
            <Box ml={5} display={"flex"} flexDirection={"column"}>
                <Typography variant={"h1"} color={"white"}>
                    Contact Me
                </Typography>
                <Typography color={"white"} mt={5} variant={"h6"} fontWeight={600}>
                    Billing
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 1, maxWidth: theme.spacing(width) }}
                >
                    Initial Individual Session, our first 50 minutes: $200.00
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    Individual 50 minute session: $150.00
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    *If cost is a concern, please inquire for a reduced sliding scale fee.
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ maxWidth: theme.spacing(width) }}
                >
                    I do not accept insurance. I do accept cash or credit card. I can provide a
                    superbill for you to submit to your insurance for reimbursement of
                    out-of-network psychotherapy.
                </Typography>
                <Typography
                    variant={"subtitle1"}
                    color={"white"}
                    sx={{ mt: 5, maxWidth: theme.spacing(width) }}
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

const ContactForm = (props: { submitForm: Function }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState<DateTime | null>(null);
    const [reasonForContact, setReasonForContact] = useState("");

    return (
        <Box mt={8} width={800} display={"flex"} flexDirection={"column"}>
            <TextField
                fullWidth
                required
                label={"Name"}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <Box mt={3}>
                <TextField
                    fullWidth
                    required
                    label={"Email"}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Box>
            <Box mt={3}>
                <TextField
                    fullWidth
                    label={"Phone Number"}
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
            </Box>
            <Box mt={3}>
                <TextField
                    fullWidth
                    multiline
                    rows={6}
                    required
                    label={"Reason For Contact"}
                    value={reasonForContact}
                    onChange={(event) => setReasonForContact(event.target.value)}
                />
            </Box>

            <Box mt={3} alignSelf={"end"}>
                <Button
                    variant={"outlined"}
                    size={"large"}
                    sx={{ p: 5, pt: 1.2, pb: 1.2 }}
                    disabled={!name || !email || !reasonForContact || !date}
                    onClick={() => props.submitForm(name, email, date, reasonForContact)}
                >
                    Submit Message
                </Button>
            </Box>
        </Box>
    );
};

const ContactFormSubmitted = (props: { googleCalendarLink: string | undefined }) => {
    return (
        <Box mt={8} display={"flex"} flexDirection={"column"}>
            <Typography variant={"body1"} color={"white"}>
                Thank you for contacting me! I will get back to you as soon as possible. Use the
                links below to add this to your calendar.
            </Typography>
            {props.googleCalendarLink && (
                <Button
                    variant={"outlined"}
                    size={"large"}
                    sx={{ p: 5, pt: 1.2, pb: 1.2, mt: 4 }}
                    href={props.googleCalendarLink}
                    target={"_blank"}
                    rel={"noopener"}
                >
                    Add To Google Calendar
                </Button>
            )}
        </Box>
    );
};

export default Schedule;
