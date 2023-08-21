import React from "react";
import { QuoteArrow, QuoteContainer, QuoteWrapper } from "./styles";

const Quote: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QuoteContainer>
      <QuoteArrow />
      <QuoteWrapper>{children}</QuoteWrapper>
    </QuoteContainer>
  );
};

export default Quote;
