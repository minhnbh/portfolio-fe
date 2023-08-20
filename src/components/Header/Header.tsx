import { NavigationInterface } from "@interfaces/naviagation.interface";
import React from "react";
import { HeaderContainer, HeaderNavigationItem } from "./styles";

export interface HeaderProps {
  headers?: NavigationInterface[];
}

const NavigationData = [
  "home",
  "about",
  "resume",
  "portfolio",
  "blog",
  "contact",
];

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      {NavigationData.map((e) => (
        <HeaderNavigationItem key={e}>{e}</HeaderNavigationItem>
      ))}
    </HeaderContainer>
  );
};
