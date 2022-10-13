import { Avatar, Box, Grid, Typography } from "@mui/material";

import Profile from "../assets/images/portrait.jpg";
import Socials from "./Socials";

const MobileLayout = () => {
    return (
        <Grid
            container
            direction={"column"}
            style={{ width: "100vw", height: "100vh" }}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
        >
            <Grid
                item
                container
                direction={"column"}
                spacing={6}
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
            >
                <Grid item>
                    <Avatar alt="Max Rosoff" src={Profile} sx={{ width: 450, height: 450 }} />
                </Grid>
                <Grid item>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Typography sx={{ fontSize: 65, fontWeight: 600 }}>Julie Rosoff</Typography>
                        <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
                            Family Concierge, Personal Assistant, and Lifestyle Coach
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Socials />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MobileLayout;
