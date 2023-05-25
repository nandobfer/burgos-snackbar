import React from "react"
import { Snackbar as MuiSnackbar, Alert, SnackbarContentProps, SnackbarOrigin } from "@mui/material"
import { useSnackbar } from "./useSnackbar"
import { SxProps } from "@mui/system"

interface SnackbarProps {
    sx?: SxProps
    contentProps?: Partial<SnackbarContentProps>
    alertSx?: SxProps
    anchorOrigin?: SnackbarOrigin
    autoHideDuration?: number
}

export const Snackbar: React.FC<SnackbarProps> = ({ sx, contentProps, alertSx, anchorOrigin, autoHideDuration }) => {
    const snackbar = useSnackbar()

    return (
        <MuiSnackbar
            open={snackbar.open}
            autoHideDuration={autoHideDuration || 3000}
            onClose={() => snackbar.setOpen(false)}
            anchorOrigin={anchorOrigin || { vertical: "bottom", horizontal: "right" }}
            sx={sx}
            ContentProps={contentProps}
        >
            <Alert onClose={() => snackbar.setOpen(false)} severity={snackbar.severity} sx={alertSx || { width: "100%" }}>
                {snackbar.text}
            </Alert>
        </MuiSnackbar>
    )
}
