import { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

import { DateTime } from "luxon";

import Socials from "../Socials";

const Schedule = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [googleCalendarLink, setGoogleCalendarLink] = useState<string | undefined>();

    const submitForm = (name: string, email: string, date: DateTime, reasonForContact: string) => {
        setHasSubmitted(true);
        const calendarEventTitle = "Consolutation With Julie Rosoff";
        const details = `Hi there, my name is ${name} and I would like to schedule a consultation!%0AMy email is ${email}. Here are some details about what I would like to discuss:%0A%0A${reasonForContact}`;
        const timeFormat = "yyyyMMdd'T'HHmmss";
        const startTime = date.toFormat(timeFormat);
        const endTime = date.plus({ hours: 2 }).toFormat(timeFormat);
        setGoogleCalendarLink(
            `https://calendar.google.com/calendar/u/0/r/eventedit?text=${calendarEventTitle}&dates=${startTime}/${endTime}&details=${details}&add=jdrosoff@gmail.com`
        );
    };

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
                    Contact Me
                </Typography>
                <Socials />
                {hasSubmitted ? (
                    <ContactFormSubmitted googleCalendarLink={googleCalendarLink} />
                ) : (
                    <ContactForm submitForm={submitForm} />
                )}
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
            <Box mt={3}>
                <DateTimePicker
                    label="Date And Time"
                    value={date}
                    onChange={(date) => setDate(date)}
                    renderInput={(params) => <TextField fullWidth required {...params} />}
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
