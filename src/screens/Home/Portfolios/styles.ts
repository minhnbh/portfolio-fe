import { COLORS } from "@constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
  &:hover > img {
    transform: scale(1.1);
  }
`;

export const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s ease-out;
`;

export const PortfolioContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(63, 69, 81, 0.85);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s linear, visibility 0.3s linear;
`;

export const PortfolioInner = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid ${COLORS.headingColor};
  padding: 24px;
`;

export const DetailButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.main};
  border-radius: 50%;
  cursor: pointer;
`;
