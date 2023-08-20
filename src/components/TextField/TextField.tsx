import React from "react";
import { TextBox } from "./styles";
import { TextFieldProps } from "@mui/material";

const TextField: React.FC<TextFieldProps> = (props) => {
  return <TextBox {...props} />;
};

export default TextField;
