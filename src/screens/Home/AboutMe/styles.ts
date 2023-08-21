import { COLORS } from "@constants/colors";
import styled from "styled-components";

export const WelcomeText = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: ${COLORS.headingColor};
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 300;
  color: ${COLORS.main};
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.contentColor};
`;

export const ListItem = styled(Description)`
  margin: 0;
  margin-top: 12px;
`;

export const DownloadCVButtonWrapper = styled.div`
    margin-top: 43px;
`;
