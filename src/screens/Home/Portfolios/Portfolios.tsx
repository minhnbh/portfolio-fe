import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import React from "react";
import { Container } from "@mui/material";

const Portfolios: React.FC = () => {
  return (
    <Section>
      <Container sx={{ paddingBottom: 12.5 }}>
        <SectionTitle>Portfolios</SectionTitle>
        <h1>Updating...</h1>
      </Container>
    </Section>
  );
};

export default Portfolios;
