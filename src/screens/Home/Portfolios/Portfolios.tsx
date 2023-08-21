import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import PortfolioItem from "./PortfolioItem";
import { Button } from "@components/Button";

const portfolioData = [
  {
    name: "Fiserv CRM",
    title: "Web Application",
    img: "images/project5.jpg",
  },
  {
    name: "Crypto Sloth",
    title: "Web Application",
    img: "images/project6.png",
  },
  {
    name: "Hi Sim",
    title: "Web/Mobile Application",
    img: "images/project4.png",
  },
  {
    name: "ANZBDS - Real Estate Solution",
    title: "Mobile Application",
    img: "images/project3.png",
  },
  {
    name: "Sportive Mall",
    title: "Mobile Application",
    img: "images/project2.png",
  },
  {
    name: "Babaza",
    title: "Web/Mobile Application",
    img: "images/project1.jpg",
  },
];

const Portfolios: React.FC = () => {
  return (
    <Section id="portfolio">
      <Container sx={{ paddingBottom: 12.5 }}>
        <SectionTitle>Portfolios</SectionTitle>
        <Grid container spacing={4} marginTop={3.125}>
          {portfolioData.map((e) => (
            <Grid key={e.name} item sm={4}>
              <PortfolioItem {...e} />
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" marginTop={3.125}>
          <Button>Load More</Button>
        </Box>
      </Container>
    </Section>
  );
};

export default Portfolios;
