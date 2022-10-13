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
                <Typography color={"white"} sx={{ fontSize: 150, fontWeight: 600, mb: -3 }}>
                    Contact Me
                </Typography>
                <Socials />
                <ContactForm />
            </Box>
        </Box>
    );
};

const ContactForm = () => {
    const [value, setValue] = useState<DateTime | null>(null);

    return (
        <Box mt={8} sx={{ width: 800 }}>
            <Box>
                <TextField fullWidth label={"Name"} />
            </Box>
            <Box mt={3}>
                <TextField fullWidth label={"Email"} />
            </Box>
            <Box mt={3}>
                <TextField fullWidth multiline rows={6} label={"Reason For Contact"} />
            </Box>
            <Box mt={3}>
                <DateTimePicker
                    label="Time"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
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
