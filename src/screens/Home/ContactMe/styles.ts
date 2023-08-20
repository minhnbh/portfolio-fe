import { TextField } from "@components/TextField";
import { COLORS } from "@constants/colors";
import { styled as muiStyled } from "@mui/material";
import styled from "styled-components";

export const ContactForm = styled.div`
  margin-top: 22px;
`;

export const ContactField = muiStyled(TextField)`
    margin-bottom: 30px;
`;

export const ContactInfoItem = styled.div`
  display: flex;
  margin-top: 30px;
  &:hover {
    .icon-wrapper {
      border-color: ${COLORS.main};
    }
  }
  a {
    transition: all 0.2s linear;
  }
  a:hover {
    color: ${COLORS.main};
  }
`;

export const InfoIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgb(63, 69, 81);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
`;

export const InfoValueWrapper = styled.div`
  margin-left: 20px;
`;

export const SocialProfilesWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const SocialProfile = styled.a`
  border-radius: 25px;
  border: 1px solid rgb(63, 69, 81);
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  text-decoration: none;
  &:hover {
    width: 130px;
  }
  overflow: hidden;
  transition: all 0.4s ease-out;
`;

export const SocialProfileIcon = styled.div`
  height: 50px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialProfileName = styled.span`
  color: ${COLORS.headingColor};
  font-size: 16px;
  font-weight: 600;
  padding-right: 16px;
`;
