import { NavigationInterface } from "@interfaces/naviagation.interface";
import { Layout } from "@layouts";
import React from "react";
import { Banner } from "./Banner";
import { AboutMe } from "./AboutMe";
import { Services } from "./Services";
import { MySkills } from "./MySkills";
import { Resume } from "./Resume";
import { Portfolios } from "./Portfolios";
import { Reviews } from "./Reviews";
import { Blog } from "./Blog";
import { ContactMe } from "./ContactMe";

const HomeScreen: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <AboutMe />
      <Services />
      <MySkills />
      <Resume />
      <Portfolios />
      <Reviews />
      <Blog />
      <ContactMe />
    </Layout>
  );
};

export default HomeScreen;
