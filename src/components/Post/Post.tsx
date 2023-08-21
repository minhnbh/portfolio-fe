import React from "react";
import { PostBanner, PostDateContainer, PostWrapper } from "./styles";
import { Typography, Link } from "@mui/material";
import { COLORS } from "@constants/colors";

export interface IPostProps {
  img: string;
  author: string;
  date: string;
  title: string;
}

const Post: React.FC<IPostProps> = ({ img, author, date, title }) => {
  return (
    <PostWrapper>
      <PostBanner src={img} />
      <PostDateContainer>
        <Typography fontSize={14} color={COLORS.contentColor}>
          By:
        </Typography>
        <Link marginLeft={0.5} fontSize={14} color={COLORS.main}>
          {author}
        </Link>
        <Typography fontSize={14} color={COLORS.contentColor} marginX={1}>
          |
        </Typography>
        <Typography fontSize={14} color={COLORS.main}>
          {date}
        </Typography>
      </PostDateContainer>
      <Typography
        variant="h4"
        fontSize={20}
        fontWeight={400}
        color={COLORS.headingColor}
      >
        {title}
      </Typography>
    </PostWrapper>
  );
};

export default Post;
