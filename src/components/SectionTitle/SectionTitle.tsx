import React from "react";
import { Title, TitleShadow, TitleWrapper } from "./styles";

const SectionTitle: React.FC<{ children: string; placeholder?: string }> = ({
  children,
  placeholder,
}) => {
  return (
    <TitleWrapper>
      <Title>{children}</Title>
      <TitleShadow>{placeholder || children}</TitleShadow>
    </TitleWrapper>
  );
};

export default SectionTitle;
