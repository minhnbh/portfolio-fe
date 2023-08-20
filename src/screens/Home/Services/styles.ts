import { COLORS } from "@constants/colors";
import styled from "styled-components";

export const ServiceList = styled.div`
  margin-top: 25px;
  padding-bottom: 100px;
`;

export const ServiceItem = styled.div`
  border: 1px solid rgb(35, 41, 53);
  border-radius: 3px;
  padding: 50px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.lightBackground};
  &:hover {
    .icon {
      border-color: ${COLORS.main};
    }
    .title {
      color: ${COLORS.main};
    }
  }
`;

export const ServiceIcon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${COLORS.darkBackground};
  margin-bottom: 28px;
  border: 1px solid ${COLORS.borderColor};
  transition: all 0.2s linear;
`;

export const ServiceTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  color: ${COLORS.headingColor};
  transition: all 0.2s linear;
`;

export const ServiceDescription = styled.div`
  font-size: 16px;
  color: ${COLORS.contentColor};
  line-height: 26px;
  text-align: center;
`;
