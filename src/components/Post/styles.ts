import styled from "styled-components";

export const PostWrapper = styled.div`
  overflow: hidden;
`;

export const PostBanner = styled.img`
  border: 1px solid rgb(169, 173, 184);
  width: 370px;
  height: 221px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.4s linear;
`;

export const PostDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 9px;
`;
