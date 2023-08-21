import React from "react";
import { SectionContainer } from "./styles";

interface ISection {
  id?: string;
  backgroundColor?: string;
}

const Section: React.FC<React.PropsWithChildren<ISection>> = ({
  children,
  backgroundColor,
  id,
}) => {
  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      {children}
    </SectionContainer>
  );
};

export default Section;
