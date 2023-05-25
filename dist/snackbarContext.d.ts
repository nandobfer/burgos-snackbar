import React from "react";
import { AlertColor } from "@mui/material";
export interface Snackbar {
    open: boolean;
    setOpen: (open: boolean) => void;
    text: string;
    setText: (text: string) => void;
    severity: AlertColor;
    setSeverity: (severity: AlertColor) => void;
}
interface SnackbarProviderProps {
    children: React.ReactNode;
}
declare const SnackbarContext: React.Context<Snackbar>;
export default SnackbarContext;
export declare const SnackbarProvider: React.FC<SnackbarProviderProps>;
