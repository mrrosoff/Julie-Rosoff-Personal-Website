import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

import BookIcon from "@mui/icons-material/Book";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Socials = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const socialList = [
        { url: "tel:858-330-4149", icon: LocalPhoneIcon },
        { url: "mailto:drjulierosoff@gmail.com", icon: EmailIcon },
        {
            url: "https://www.psychologytoday.com/us/therapists/julie-d-rosoff-san-diego-ca/1218038",
            icon: BookIcon
        },
        { url: "https://www.linkedin.com/in/julie-rosoff", icon: LinkedInIcon }
    ];

    return (
        <Box
            mr={isSmall ? 0 : -2.5}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={isSmall ? "center" : "inherit"}
        >
            {socialList.map((socialDetails, index) => (
                <Box key={index}>
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
