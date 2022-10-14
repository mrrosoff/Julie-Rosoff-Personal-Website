import { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

import { DateTime } from "luxon";

import Socials from "../Socials";

const Schedule = () => {
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
                <ContactForm />
            </Box>
        </Box>
    );
};

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [reasonForContact, setReasonForContact] = useState("");
    const [date, setDate] = useState<DateTime | null>(null);

    return (
        <Box mt={8} sx={{ width: 800 }}>
            <Box>
                <TextField
                    fullWidth
                    required
                    label={"Name"}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </Box>
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
                    renderInput={(params) => <TextField fullWidth {...params} />}
                />
            </Box>
            <Box mt={3}>
                <Button variant={"outlined"} sx={{ p: 3, pt: 1, pb: 1 }}>
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default Schedule;
