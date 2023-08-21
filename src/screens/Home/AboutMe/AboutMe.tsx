import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import { Grid, Container } from "@mui/material";
import React from "react";
import {
  Description,
  DownloadCVButtonWrapper,
  ListItem,
  Title,
  WelcomeText,
} from "./styles";
import { capitalize } from "lodash";
import { Button } from "@components/Button";

const aboutFields = [
  "birthday",
  "phone",
  "email",
  "from",
  "language",
  "freelance",
];

const AboutMe: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <Grid container spacing={2}>
          <Grid item md={6}></Grid>
          <Grid item md={6}>
            <WelcomeText>Hi there, I&apos;m Minh Nguyen</WelcomeText>
            <Title>Senior Fullstack Developer</Title>
            <Description>
              I am a Fullstack Developer, my main skill is React.
            </Description>
            <Grid container spacing={2}>
              {aboutFields.map((field) => (
                <>
                  <Grid item sm={2}>
                    <ListItem>{capitalize(field)}</ListItem>
                  </Grid>
                  <Grid item sm={10}>
                    <ListItem>:</ListItem>
                  </Grid>
                </>
              ))}
            </Grid>
            <DownloadCVButtonWrapper>
              <Button>Download CV</Button>
            </DownloadCVButtonWrapper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default AboutMe;
