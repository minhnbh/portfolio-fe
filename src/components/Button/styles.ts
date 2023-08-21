import { COLORS } from "@constants/colors";
import { styled as muiStyled, Button } from "@mui/material";

export const CustomButton = muiStyled(Button)`
    font-size: 16px;
    font-weight: 500;
    background-color: ${COLORS.main};
    color: ${COLORS.mainButtonText};
    padding: 12px 24px;
    border-radius: 50px;
    &:hover {
        background-color: ${COLORS.main};
        color: ${COLORS.mainButtonText};
        box-shadow: rgba(254, 198, 68, 0.314) 0px 5px 10px 0px;
    }
    transition: all 0.4s linear;
`;
