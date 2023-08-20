import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import { COLORS } from "@constants/colors";
import {
  ContactField,
  ContactForm,
  ContactInfoItem,
  InfoIconWrapper,
  InfoValueWrapper,
  SocialProfile,
  SocialProfileIcon,
  SocialProfileName,
  SocialProfilesWrapper,
} from "./styles";
import { Button } from "@components/Button";
import { Email, Phone, Place, LinkedIn } from "@mui/icons-material";

const ContactMe: React.FC = () => {
  return (
    <Section backgroundColor={COLORS.darkBackground}>
      <Container sx={{ paddingBottom: 12.5 }}>
        <SectionTitle>Contact Me</SectionTitle>
        <Grid container spacing={4} marginTop={3}>
          <Grid item sm={6}>
            <Typography variant="h3" fontSize={30} color={COLORS.headingColor}>
              Just say Hello
            </Typography>
            <ContactForm>
              <ContactField label="Your Name" />
              <ContactField label="Your Email" />
              <ContactField label="Your Subject" />
              <ContactField label="Your Message" multiline rows={6} />
              <Button>Send Message</Button>
            </ContactForm>
          </Grid>
          <Grid item sm={6}>
            <Typography
              variant="h3"
              fontSize={30}
              color={COLORS.headingColor}
              marginBottom={2.4}
            >
              Contact Info
            </Typography>
            <Typography
              variant="body1"
              fontSize={16}
              color={COLORS.contentColor}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ligula nulla tincidunt id faucibus sed suscipit feugiat.
            </Typography>
            <ContactInfo
              Icon={Email}
              title="Email"
              value="computer.hoangminh@gmail.com"
              href="mailto:computer.hoangminh@gmail.com"
            />
            <ContactInfo
              Icon={Phone}
              title="Phone"
              value="+84965415105"
              href="callto:+84965415105"
            />
            <ContactInfo
              Icon={Place}
              title="Address"
              value="Tan Binh district, Ho Chi Minh city, Viet Nam"
            />
            <Typography
              fontSize={20}
              fontWeight={500}
              color={COLORS.contentColor}
              marginTop={30 / 8}
            >
              Visite my social profile and get connected
            </Typography>
            <SocialProfilesWrapper>
              <SocialProfile target="_blank" href="https://www.linkedin.com/in/minh-nbh/">
                <SocialProfileIcon>
                  <LinkedIn htmlColor={COLORS.contentColor} />
                </SocialProfileIcon>
                <SocialProfileName>LinkedIn</SocialProfileName>
              </SocialProfile>
            </SocialProfilesWrapper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default ContactMe;

const ContactInfo: React.FC<{
  Icon: any;
  title: string;
  href?: string;
  value: string;
}> = ({ Icon, title, value, href = "#" }) => (
  <ContactInfoItem>
    <InfoIconWrapper className="icon-wrapper">
      <Icon htmlColor={COLORS.contentColor} />
    </InfoIconWrapper>
    <InfoValueWrapper>
      <Typography
        variant="h4"
        marginBottom={0.75}
        fontSize={20}
        color={COLORS.headingColor}
      >
        {title}
      </Typography>
      <Link
        href={href}
        underline="none"
        color={COLORS.contentColor}
        fontSize={16}
      >
        {value}
      </Link>
    </InfoValueWrapper>
  </ContactInfoItem>
);
