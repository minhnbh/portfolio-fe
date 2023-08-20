import { COLORS } from "@constants/colors";
import styled from "styled-components";

export const ResumeContainer = styled.div`
  background-color: ${COLORS.darkBackground};
  padding-bottom: 50px;
`;

export const ResumeWrapper = styled.div`
  margin-top: 25px;
`;

export const MilestonesContainer = styled.div`
  border-left: 1px solid rgb(35, 41, 53);
  padding-left: 40px;
  margin-left: 20px;
`;

export const MilestoneHeading = styled.div`
  margin-bottom: 50px;
  color: ${COLORS.headingColor};
  display: flex;
  align-items: center;
  .title {
    margin: 0;
    margin-left: 30px;
    font-size: 36px;
    font-weight: 400;
    line-height: 43.2px;
  }
`;

export const MilestoneItem = styled.div`
  position: relative;
  margin-bottom: 50px;
  &:before {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid rgb(35, 41, 53);
    content: "";
    position: absolute;
    left: -47px;
    top: 5px;
    background-color: ${COLORS.lightBackground};
    transition: background-color 0.2s linear;
  }
  &:hover {
    &:before {
      background-color: ${COLORS.main};
    }
  }
`;

export const ItemTitle = styled.h3`
  color: ${COLORS.main};
  font-size: 24px;
  font-weight: 400;
  line-height: 28.8px;
  margin: 0;
  margin-bottom: 8px;
`;

export const ItemTime = styled.div`
  color: ${COLORS.contentColor};
  font-size: 18px;
  font-weight: 400;
  line-height: 25.6px;
`;

export const ItemPlace = styled.h4`
  color: ${COLORS.headingColor};
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 19px;
`;

export const ItemDescription = styled.div`
  color: ${COLORS.contentColor};
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
`;
