import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

import BookIcon from "@mui/icons-material/Book";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Socials = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const socialList = [
        {
            url: "tel:858-330-4149",
            icon: LocalPhoneIcon,
            label: "Call 858-330-4149"
        },
        {
            url: "mailto:drjulierosoff@gmail.com",
            icon: EmailIcon,
            label: "Email drjulierosoff@gmail.com"
        },
        {
            url: "https://www.psychologytoday.com/us/therapists/julie-d-rosoff-san-diego-ca/1218038",
            icon: BookIcon,
            label: "Visit Psychology Today profile"
        },
        {
            url: "https://www.linkedin.com/in/julie-rosoff",
            icon: LinkedInIcon,
            label: "Visit LinkedIn profile"
        }
    ];

    return (
        <Box
            component="nav"
            role="navigation"
            aria-label="Social media and contact links"
            mr={isSmall ? 0 : -2.5}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={isSmall ? "center" : "inherit"}
        >
            {socialList.map((socialDetails, index) => (
                <Box key={index}>
                    <SocialButton
                        href={socialDetails.url}
                        icon={socialDetails.icon}
                        ariaLabel={socialDetails.label}
                    />
                </Box>
            ))}
        </Box>
    );
};

const SocialButton = (props: { href: string; icon: any; ariaLabel: string }) => {
    const Icon = props.icon;
    return (
        <Button
            className={"social-button"}
            href={props.href}
            target={"_blank"}
            rel={"noopener noreferrer"}
            size={"large"}
            aria-label={props.ariaLabel}
        >
            <Icon sx={{ fontSize: 28 }} />
        </Button>
    );
};

export default Socials;
