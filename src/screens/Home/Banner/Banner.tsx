import React from "react";
import {
  AvatarWrapper,
  BannerContainer,
  IntroductText,
  SocialButton,
  SocialLinkContainer,
  WelcomeText,
} from "./styles";
import { FacebookSharp, GitHub } from "@mui/icons-material";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <AvatarWrapper />
      <WelcomeText>
        Hi, I am <span className="name">Minh Nguyen</span>
      </WelcomeText>
      <IntroductText>
        I am a Fullstack Developer. I can provide solution and clean code for
        great product.
      </IntroductText>
      <SocialLinkContainer>
        <SocialButton>
          <FacebookSharp
            fontSize="medium"
            htmlColor="rgba(250, 250, 251, 0.906)"
          />
        </SocialButton>
        <SocialButton>
          <GitHub fontSize="medium" htmlColor="rgba(250, 250, 251, 0.906)" />
        </SocialButton>
      </SocialLinkContainer>
    </BannerContainer>
  );
};

export default Banner;
