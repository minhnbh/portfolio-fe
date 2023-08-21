import { NavigationInterface } from "@interfaces/naviagation.interface";
import React, { useState, useEffect } from "react";
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
  const [y, setY] = useState(0);

  const handleScroll = (e: Event) => {
    setY((e.currentTarget as any)?.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer sticky={y > 80}>
      {NavigationData.map((e) => (
        <HeaderNavigationItem href={`#${e}`} key={e}>
          {e}
        </HeaderNavigationItem>
      ))}
    </HeaderContainer>
  );
};
