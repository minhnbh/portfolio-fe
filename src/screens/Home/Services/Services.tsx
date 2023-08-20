import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import React from "react";
import { Container, Grid } from "@mui/material";
import {
  ServiceDescription,
  ServiceIcon,
  ServiceItem,
  ServiceList,
  ServiceTitle,
} from "./styles";

const data = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
  },
];

const Services: React.FC = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Services</SectionTitle>
        <ServiceList>
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid key={item.id} item md={4}>
                <ServiceItem>
                  <ServiceIcon className="icon"></ServiceIcon>
                  <ServiceTitle className="title">{item.title}</ServiceTitle>
                  <ServiceDescription>{item.description}</ServiceDescription>
                </ServiceItem>
              </Grid>
            ))}
          </Grid>
        </ServiceList>
      </Container>
    </Section>
  );
};

export default Services;
