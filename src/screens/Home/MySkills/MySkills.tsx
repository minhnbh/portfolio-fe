import React from "react";
import {
  ExpContent,
  ExpSlider,
  ExpTitle,
  ExpValue,
  MySkillsContainer,
  SkillDescription,
  SkillTitle,
} from "./styles";
import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import { Container, Grid } from "@mui/material";

const skills = [
  {
    name: "ReactJS",
    value: 85,
  },
  {
    name: "React Native",
    value: 70,
  },
  {
    name: "HTML/CSS",
    value: 70,
  },
  {
    name: "NodeJS",
    value: 55,
  },
  {
    name: "AWS",
    value: 50,
  },
];

const MySkills: React.FC = () => {
  return (
    <MySkillsContainer>
      <Section>
        <Container>
          <SectionTitle>My Skills</SectionTitle>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <SkillTitle>
                All the skills that I have in that field of work are mentioned.
              </SkillTitle>
              <SkillDescription>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores.
                <br />
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
              </SkillDescription>
            </Grid>
            <Grid item md={6}>
              {skills.map((e) => (
                <div key={e.name}>
                  <ExpContent>
                    <ExpTitle>{e.name}</ExpTitle>
                    <ExpValue>{e.value}%</ExpValue>
                  </ExpContent>
                  <ExpSlider
                    contentEditable={false}
                    value={e.value}
                    max={100}
                  />
                </div>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Section>
    </MySkillsContainer>
  );
};

export default MySkills;
