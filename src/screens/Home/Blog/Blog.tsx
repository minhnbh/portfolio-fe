import { Section } from "@components/Section";
import React from "react";
import { Container } from "@mui/material";
import { SectionTitle } from "@components/SectionTitle";

const Blog: React.FC = () => {
  return (
    <Section>
      <Container sx={{ paddingBottom: 12.5 }}>
        <SectionTitle placeholder="latest news">Blog</SectionTitle>
      </Container>
    </Section>
  );
};

export default Blog;
