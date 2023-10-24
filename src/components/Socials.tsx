import { Box, Button } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Socials = () => {
    const socialList = [
        { url: "tel:858-414-6423", icon: LocalPhoneIcon },
        { url: "mailto:drjulierosoff@gmail.com", icon: EmailIcon },
        { url: "https://www.linkedin.com/in/julie-rosoff", icon: LinkedInIcon }
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
            <Icon sx={{ fontSize: 28 }} />
        </Button>
    );
};

export default Socials;
