import styled, { css } from "styled-components";

export const stickyCss = css`
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
`;

export const HeaderContainer = styled.header<{
  stickyActive?: boolean;
  sticky?: boolean;
}>`
  height: 80px;
  background-color: rgba(7, 13, 27, 0.9);
  box-shadow: 0 10px 10px -10px rgba(7, 13, 27, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 80px;
  ${(props) => (props.sticky ? stickyCss : "")}
  transition: bottom 1s linear;
`;

export const HeaderNavigationItem = styled.a<{ active?: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : "white")};
  text-transform: uppercase;
  margin-right: 40px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;
