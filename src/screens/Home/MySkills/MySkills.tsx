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
              <ExpContent>
                <ExpTitle>ReactJS</ExpTitle>
                <ExpValue>90%</ExpValue>
              </ExpContent>
              <ExpSlider contentEditable={false} value={90} max={100} />
              <ExpContent>
                <ExpTitle>React Native</ExpTitle>
                <ExpValue>70%</ExpValue>
              </ExpContent>
              <ExpSlider contentEditable={false} value={70} max={100} />
              <ExpContent>
                <ExpTitle>HTML/CSS</ExpTitle>
                <ExpValue>70%</ExpValue>
              </ExpContent>
              <ExpSlider contentEditable={false} value={70} max={100} />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </MySkillsContainer>
  );
};

export default MySkills;
