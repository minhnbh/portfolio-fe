import { Section } from "@components/Section";
import React from "react";
import { Container, Grid } from "@mui/material";
import { SectionTitle } from "@components/SectionTitle";
import { Post } from "@components/Post";

const Blog: React.FC = () => {
  return (
    <Section id="blog">
      <Container sx={{ paddingBottom: 12.5 }}>
        <SectionTitle placeholder="latest news">Blog</SectionTitle>
        <Grid container spacing={4} marginTop={3.125}>
          <Grid item sm={4}>
            <Post
              img="images/blog.jpg"
              author="Admin"
              date="21-08-2023"
              title="What are the latest trends in Graphic design according to you?"
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Blog;
