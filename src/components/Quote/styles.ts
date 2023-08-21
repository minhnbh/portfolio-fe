import { COLORS } from "@constants/colors";
import styled from "styled-components";

export const QuoteContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const QuoteWrapper = styled.div`
  background-color: ${COLORS.lightBackground};
  border: 1px solid ${COLORS.darkBorderColor};
  border-radius: 3px;
  padding: 30px 15px;
`;

export const QuoteArrow = styled.div`
  width: 29px;
  height: 29px;
  background-color: ${COLORS.lightBackground};
  border: 1px solid ${COLORS.darkBorderColor};
  transform: rotate(45deg) translateX(-50%);
  position: absolute;
  left: 50%;
  bottom: -26px;
  border-top-color: ${COLORS.lightBackground};
  border-left-color: ${COLORS.lightBackground};
`;
