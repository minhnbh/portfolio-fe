import { COLORS } from "@constants/colors";
import styled from "styled-components";
import { styled as muiStyled, IconButton } from "@mui/material";

export const BannerContainer = styled.div`
  height: calc(100vh - 80px);
  background-image: url("images/banner.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.h1`
  color: white;
  font-size: 60px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;
  .name {
    color: ${COLORS.main};
  }
`;

export const IntroductText = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: rgb(169, 173, 184);
  margin-bottom: 22px;
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SocialButton = muiStyled(IconButton)`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(250, 250, 251, 0.906);
`;

export const AvatarWrapper = styled.div`
  width: 176px;
  height: 176px;
  border: 6px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-bottom: 25px;
`;
