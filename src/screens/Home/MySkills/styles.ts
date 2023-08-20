import { COLORS } from "@constants/colors";
import styled from "styled-components";
import { styled as muiStyled, Slider } from "@mui/material";

export const MySkillsContainer = styled.div`
  background-color: ${COLORS.darkBackground};
`;

export const SkillTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: ${COLORS.headingColor};
`;

export const SkillDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.contentColor};
  line-height: 26px;
`;

export const ExpContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const ExpTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 0;
`;

export const ExpValue = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.main};
`;

export const ExpSlider = muiStyled(Slider)({
  "& .MuiSlider-track": {
    backgroundColor: COLORS.main,
    border: "none",
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-rail": {
    backgroundColor: COLORS.borderColor,
  },
});
