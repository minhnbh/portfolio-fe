import { NavigationInterface } from "@interfaces/naviagation.interface";
import React from "react";
import { FooterContainer } from "./styles";

export interface FooterProps {
  footers?: NavigationInterface[];
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      © 2023. Developed by Minh Nguyen. All right reserved.
    </FooterContainer>
  );
};
