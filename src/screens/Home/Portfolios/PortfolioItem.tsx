import React from "react";
import {
  DetailButton,
  PortfolioContent,
  PortfolioImage,
  PortfolioInner,
  Wrapper,
} from "./styles";
import { Typography } from "@mui/material";
import { COLORS } from "@constants/colors";
import { Search } from "@mui/icons-material";

interface IPortfolioItemProps {
  img: string;
  name: string;
  title: string;
}

const PortfolioItem: React.FC<IPortfolioItemProps> = ({ img, name, title }) => {
  return (
    <Wrapper>
      <PortfolioImage src={img} />
      <PortfolioContent>
        <PortfolioInner className="inner">
          <Typography
            variant="h5"
            fontSize={20}
            fontWeight={500}
            lineHeight={2}
            color={COLORS.headingColor}
          >
            {name}
          </Typography>
          <Typography
            fontSize={16}
            fontWeight={400}
            color={COLORS.contentColor}
          >
            {title}
          </Typography>
          <DetailButton>
            <Search />
          </DetailButton>
        </PortfolioInner>
      </PortfolioContent>
    </Wrapper>
  );
};

export default PortfolioItem;
