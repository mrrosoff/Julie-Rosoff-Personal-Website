import { Box, Button } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Socials = () => {
    const socialList = [
        { url: "https://www.linkedin.com/in/julie-rosoff", icon: LinkedInIcon },
        { url: "https://www.facebook.com/julie.rosoff.9", icon: FacebookIcon },
        { url: "https://www.instagram.com/julierosoff", icon: InstagramIcon }
    ];

    return (
        <Box mr={-2.5} display={"flex"} flexWrap={"wrap"}>
            {socialList.map((socialDetails, index) => (
                <Box key={index} mr={1}>
                    <SocialButton href={socialDetails.url} icon={socialDetails.icon} />
                </Box>
            ))}
        </Box>
    );
};

const SocialButton = (props: any) => {
    const Icon = props.icon;
    return (
        <Button
            className={"social-button"}
            href={props.href}
            target={"_blank"}
            rel={"noopener"}
            size={"large"}
            {...props}
        >
            <Icon sx={{ fontSize: 32 }} />
        </Button>
    );
};

export default Socials;
