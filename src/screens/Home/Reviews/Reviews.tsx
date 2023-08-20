import { Section } from "@components/Section";
import React from "react";
import { Container } from "@mui/material";
import { SectionTitle } from "@components/SectionTitle";
import { COLORS } from "@constants/colors";

const Reviews: React.FC = () => {
  return (
    <Section backgroundColor={COLORS.darkBackground}>
      <Container sx={{ paddingBottom: 12.5 }}>
        <SectionTitle>Reviews</SectionTitle>
      </Container>
    </Section>
  );
};

export default Reviews;
