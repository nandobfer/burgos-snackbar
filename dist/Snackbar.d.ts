import React from "react";
import { SxProps, SnackbarContentProps } from "@mui/material";
interface SnackbarProps {
    sx?: SxProps;
    contentProps?: Partial<SnackbarContentProps>;
    alertSx?: SxProps;
}
export declare const Snackbar: React.FC<SnackbarProps>;
export {};
