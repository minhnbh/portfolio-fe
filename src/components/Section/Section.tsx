import React from "react";
import { SectionContainer } from "./styles";

interface ISection {
  backgroundColor?: string;
}

const Section: React.FC<React.PropsWithChildren<ISection>> = ({ children, backgroundColor }) => {
  return <SectionContainer backgroundColor={backgroundColor}>{children}</SectionContainer>;
};

export default Section;
