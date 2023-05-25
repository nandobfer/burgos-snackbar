import { AlertColor } from "@mui/material";
interface OpenSnackbar {
    text: string;
    severity: AlertColor;
}
export declare const useSnackbar: () => {
    open: boolean;
    setOpen: (open: boolean) => void;
    text: string;
    setText: (text: string) => void;
    severity: AlertColor;
    setSeverity: (severity: AlertColor) => void;
    snackbar: (options: OpenSnackbar) => void;
};
export {};
