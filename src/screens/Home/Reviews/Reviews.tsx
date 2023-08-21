import { Section } from "@components/Section";
import React from "react";
import { Container, Typography, Grid, Avatar } from "@mui/material";
import { SectionTitle } from "@components/SectionTitle";
import { COLORS } from "@constants/colors";
import { Quote } from "@components/Quote";
import { ReviewUserContainer } from "./styles";

const Reviews: React.FC = () => {
  return (
    <Section backgroundColor={COLORS.darkBackground}>
      <Container sx={{ paddingBottom: 12.5 }}>
        <SectionTitle>Reviews</SectionTitle>
        <Grid container spacing={4} marginTop={3.125}>
          {[1, 2, 3].map((e, i) => (
            <Grid key={`review-${i}`} item sm={4}>
              <Quote>
                <Typography
                  fontSize={16}
                  fontWeight={400}
                  color={COLORS.contentColor}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ligula nulla tincidunt id faucibus sed suscipit feugiat.
                </Typography>
              </Quote>
              <ReviewUserContainer>
                <Avatar
                  alt="reviewer"
                  src="images/user.png"
                  sx={{ width: 90, height: 90 }}
                />
                <Typography
                  variant="h4"
                  marginTop={3.725}
                  marginBottom={0.5}
                  fontSize={20}
                  fontWeight={400}
                  color={COLORS.headingColor}
                >
                  User
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={400}
                  color={COLORS.contentColor}
                >
                  Technical Architecture
                </Typography>
              </ReviewUserContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Reviews;
