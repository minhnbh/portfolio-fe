import { COLORS } from "@constants/colors";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  height: 72px;
`;

export const Title = styled.h4`
  text-transform: uppercase;
  color: ${COLORS.main};
  font-size: 24px;
  font-weight: 500;
  position: relative;
  width: 100%;
  margin-top: 17px;
  z-index: 10;
  letter-spacing: 1px;
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    background-color: rgb(63, 69, 81);
    width: 170px;
    left: 50%;
    bottom: -16px;
    transform: translateX(-50%);
  }
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    background-color: rgb(254, 197, 68);
    width: 70px;
    left: 50%;
    bottom: -16px;
    transform: translateX(-50%);
  }
`;

export const TitleShadow = styled.h2`
  text-transform: uppercase;
  position: absolute;
  top: -17px;
  color: rgba(21, 27, 41, 0.5);
  font-size: 90px;
  font-weight: 700;
  width: 100%;
  margin: 0;
  letter-spacing: 1px;
`;
