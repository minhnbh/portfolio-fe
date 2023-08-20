import { DIMENTION } from "@constants/dimention";
import styled from "styled-components";

export const SectionContainer = styled.section<{ backgroundColor?: string }>`
  padding-top: 100px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
`;
