import React from "react";
import {
  ItemDescription,
  ItemPlace,
  ItemTime,
  ItemTitle,
  MilestoneHeading,
  MilestoneItem,
  MilestonesContainer,
  ResumeContainer,
  ResumeWrapper,
} from "./styles";
import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import { Container, Grid } from "@mui/material";
import { BusinessCenter, School } from "@mui/icons-material";
import { COLORS } from "@constants/colors";

const experience = [
  {
    id: 1,
    title: "Senior Fullstack Developer",
    time: "Nov 2022 - Present",
    place: "Positive Thinking Company APAC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
  {
    id: 2,
    title: "Senior Front-end Developer",
    time: "Jun 2021 - Oct 2022",
    place: "Aperia Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
  {
    id: 3,
    title: "Front-end Developer",
    time: "July 2020 - May 2021",
    place: "Brickmate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
];

const education = [
  {
    id: 1,
    title: "Bachelor of Software Engineer",
    time: "Sep 2014 - Sep 2018",
    place: "FPT University",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
  },
];

const Resume: React.FC = () => {
  return (
    <ResumeContainer>
      <Section>
        <Container>
          <SectionTitle>Resume</SectionTitle>
          <ResumeWrapper>
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <MilestoneHeading>
                  <BusinessCenter
                    fontSize="large"
                    htmlColor={COLORS.contentColor}
                  />
                  <h2 className="title">Experience</h2>
                </MilestoneHeading>
                <MilestonesContainer>
                  {experience.map((item) => (
                    <MilestoneItem key={item.id}>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemTime>{item.time}</ItemTime>
                      <ItemPlace>{item.place}</ItemPlace>
                      <ItemDescription>{item.description}</ItemDescription>
                    </MilestoneItem>
                  ))}
                </MilestonesContainer>
              </Grid>
              <Grid item sm={6}>
                <MilestoneHeading>
                  <School fontSize="large" htmlColor={COLORS.contentColor} />
                  <h2 className="title">Education</h2>
                </MilestoneHeading>
                <MilestonesContainer>
                  {education.map((item) => (
                    <MilestoneItem key={item.id}>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemTime>{item.time}</ItemTime>
                      <ItemPlace>{item.place}</ItemPlace>
                      <ItemDescription>{item.description}</ItemDescription>
                    </MilestoneItem>
                  ))}
                </MilestonesContainer>
              </Grid>
            </Grid>
          </ResumeWrapper>
        </Container>
      </Section>
    </ResumeContainer>
  );
};

export default Resume;
