import React from "react";
import { CustomButton } from "./styles";

const Button: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <CustomButton>{children}</CustomButton>;
};

export default Button;
