import { COLORS } from "@constants/colors";
import { styled as muiStyled, TextField as TextFieldBase } from "@mui/material";

export const TextBox = muiStyled(TextFieldBase)`
    width: 100%;
    border-color: ${COLORS.borderColor};
    background-color: ${COLORS.lightBackground};
    fieldset {
        border-color: ${COLORS.darkBorderColor};
        border-radius: 7px;
    }
    input, textarea {
        color: ${COLORS.contentColor};
    }
    label.MuiInputLabel-formControl {
        color: ${COLORS.contentColor};
    }
    label.MuiInputLabel-shrink {
        color: ${COLORS.main};
    }
    && {
        .Mui-focused > fieldset {
            border-color: ${COLORS.main};
        }
    }
`;